---
layout: documentation
title: Webhook
resource: Webhook
version: v7.0
versionhref: v70
permalink: /docs/v70_Webhook/
---

# {{page.title}}

[{{page.title}}s] allow API consumers to receive notifications about events involving
their users (e.g. when a workout has been saved). These notifications may be
sent to any secure URL maintained by the consumer, and they are very
lightweight&mdash;typically no more than some identifying information for the
event and a URL to get more information.

Consumers subscribe to these notifications via a simple `POST` request with some
basic information about what kind of event is of interest, the URL to which
notifications should be sent, and a secret value (so you can be confident the
event came from us).

In order to meet our own performance requirements, we require {{page.title}}
subscribers to respond quickly when notified. We expect each notification to be
responded to within **3 seconds**. See our [Tips](http://en.wikipedia.org/wiki/Webhook) section below for some
advice on how to meet this latency requirement.


## Resource URIs

* **Item URI:** `/{{page.version}}/webhook/{id}/`
* **Collection URI:** `/{{page.version}}/webhook/`


## How to use {{page.title}}s

Since the notifications we send are lightweight, API consumers should get the
latest information available by issuing a `GET` to the URL included in the
notification. The diagram below illustrates the process:

![Webhook sequence diagram](/assets/images/webhook_process.png)

In this example, the subscriber is notified some time after the user has saved a
workout. (Generally this is done very quickly.) The notification includes three
main pieces of information:

* the notification type (e.g. `application.workouts`)
* a URI on which a client can request the latest resource data
* enough information about the user for you to determine which access token to
  use when you make subsequent requests


> The subscriber must return a response with status code `202 Accepted`. This
should emphasize that not much work is being done with the notification at the
moment of receipt, as subscribers should respond within *3 seconds* of receiving
a message. This response code and timing is checked on creation and if a timely
`202` isn't received, the webhook creation will fail.


## Webhook payload

Below are some example payloads we might send, by subscription type:

### application.actigraphies

```json
[{
    "type": "application.actigraphies",
    "_links": {
        "user": [{
            "href": "\/{{page.version}}\/user\/1\/",
            "id": "1"
        }],
        "actigraphy": [{
            "href": "\/{{page.version}}\/actigraphy\/?start_date=2015-03-01&end_date=2015-03-01"
        }]
    },
    "ts": "2015-03-01T23:12:20.687025+00:00",
    "object_id": "1_20150301_20150301"
}]
```


### application.allday_activities

```json
[{
    "type": "application.allday_activities",
    "_links": {
        "allday_activity": [{
            "href": "\/{{page.version}}\/allday_activity\/1\/",
            "id": "1"
        }],
        "user": [{
            "href": "\/{{page.version}}\/user\/1\/",
            "id": "1"
        }]},
    "ts": "2015-03-16T21:57:46.642657+00:00",
    "object_id": "23"
}]
```


### application.bodymasses

```json
[{
    "type": "application.bodymasses",
    "_links": {
        "bodymass": [{
            "href": "\/{{page.version}}\/bodymass\/1\/",
            "id": "1"
        }],
        "user": [{
            "href": "\/{{page.version}}\/user\/1\/",
            "id": "1"
        }]},
    "ts": "2015-03-16T22:31:36.744283+00:00",
    "object_id": "1"
}]
```


### application.sleep

```json
[{
    "type": "application.sleep",
    "_links": {
        "sleep": [{
            "href": "\/{{page.version}}\/sleep\/1\/",
            "id": "1"
        }],
        "user": [{
            "href": "\/{{page.version}}\/user\/1\/",
            "id": "1"
        }]},
    "ts": "2015-03-16T22:26:18.710194+00:00",
    "object_id": "1"
}]
```


### application.workouts

```json
[{
    "type": "application.workouts",
    "ts": "2014-05-15T01:51:35.796829+00:00",
    "object_id": "1",
    "_links": {
        "workout": [{
            "href": "\\/{{page.version}}\\/workout\\/1\\/",
            "id": "1"
        }],
        "user": [{
            "href": "\\/{{page.version}}\\/user\\/1\\/",
            "id": "1"
        }]
    }
}]
```

As with other responses in the UACF API, we provide an `href` attribute inside
the `_links` object. This is the URI to call for the latest data on this object.

**Note:** While you certainly *can* construct the object's URI (e.g.
`/{{page.version}}/workout/1/`), we recommend that you use the `href` value instead.
This provides forward compatibility into later (backwards compatible) versions
of the API, changes we might implement such as caching parameters, etc. In other
words, it helps make your application a good citizen.

## Request Headers

Each notification will have 2 headers:

* `content-type` The value will be `application/json`
* `HMAC-Signature` The hash signature calculated from your webhook's `shared_secret` and the notification's payload.
  We use HMAC/SHA-1. You can use this signature to validate the message's integrity by calculating it on your side and comparing
  the received value. This validation process is optional.

### Python Code example on how to calculate the signature for a given notification payload

```python
import hmac
import hashlib
import json

webhook_shared_secret = 'this_is_a_secret'

notification_data = [{
    "type": "application.workouts",
    "ts": "2014-05-15T01:51:35.796829+00:00",
    "object_id": "1",
    "_links": {
        "workout": [{
            "href": "\\/v7.1\\/workout\\/1\\/",
            "id": "1"
        }],
        "user": [{
            "href": "\\/v7.1\\/user\\/1\\/",
            "id": "1"
        }]
    }
}]

notifications_json_str = json.dumps(notification_data)

signature = hmac.new(webhook_shared_secret, notifications_json_str, digestmod=hashlib.sha1).hexdigest()

print signature  # Calculated hash for this payload is b95fbe0fb0e4b9f2cdb88ffbfc4ddcce0331f9f7
```

## Tips

### Responding quickly to a notification

In order to respond as quickly to a notification, subscribers should defer any
processing of the notification until after the response is done. You may do this
in a few ways, but two popular options are to spawn a new thread to handle the
processing, or to place the notification in a queue for later processing. Since
you're likely already using queues for your processing, this is probably your
best option.

Under **no** circumstances should you call the included URL before responding.


### Dynamically handling the notification payload

Notification payloads are sent as JSON arrays. This is deliberately done for
forward compatibility, as we hope to support batch notifications in the future.
As a result, you should loop over the payload and treat each element of it as an
individual notification.

Additionally, the payload's content is determined by the notification type. We
recommend you maintain a mapping from the notification's `type` to the content.
E.g., `application.workouts => workout`.


## Item

### Item Methods

* `GET` Retrieve a {{page.title}} by ID
* `PUT` Update a {{page.title}}s entity


### Item properties

| Name                | Description                                                             | Type     | HTTP Support                         |
| ---                 | ---                                                                     | ---      | ---                                  |
| `id`                | {{page.title}} ID                                                              | number   | **GET**: required, **PUT**: required |
| `subscription_type` | The type of subscription                                                | string   | Required                             |
| `callback_url`      | The HTTPS URL that will consume notifications generated by the {{page.title}}. | string   | Required                             |
| `shared_secret`     | A shared secret used to sign outgoing messages                          | text     | **GET**: required, **PUT**: required |
| `status`            | Tells whether active or not                                             | text     | **GET**: required, **PUT**: required |
| `created`           | When this {{page.title}} was created                                           | DateTime | **GET**: required, **PUT**: required |
| `last_updated`      | When this {{page.title}} was last updated.                                     | DateTime | **GET**: required, **PUT**: required |
| `last_degraded`     | When the {{page.title}} was last degraded.                                     | DateTime | **GET**: required, **PUT**: required |
| `client_id`         | client ID associated with this {{page.title}}                                  | number   | **GET**: required, **PUT**: required |


#### Example Values

##### subscription_type

| Name                            | Description                                |
| ---                             | ---                                        |
| `application.actigraphies`      | Notifies of changes in a user's actigraphy |
| `application.allday_activities` | Notifies of changes in all-day activities  |
| `application.bodymasses`        | Notifies of changes in bodymass logs       |
| `application.sleep`             | Notifies of changes in sleep data          |
| `application.workouts`          | Notifies of changes in workouts            |


## Collection

### Collection methods

* `GET` Get a list of {{page.title}}s. An optional `status` can be provided to filter the results by their status. Allowed values are: `all`, `active`, `degraded`, `disabled`. If no `status` parameter is given, the list of all {{page.title}} resources with a status different than `disabled` is returned.
* `POST` Create a {{page.title}}s resource. If the resource already exists, a [409](http://httpstatus.es/409) will be returned.


### Collection properties

| Name          | Description                                                           | Type | HTTP Support      |
| ---           | ---                                                                   | ---  | ---               |
| `total_count` | The total number of {{page.title}}s matching the search parameters specified | int  | **GET**: required |


### Collection links

* `self` A link to this resource
* `user` A link to the User resource that owns the {{page.title}}


### Embedded collections

* `{{page.title}}s` A collection of {{page.title}}s with properties as described under [Item properties][].


## Usage

### GET {{page.title}} entity

To fetch a single {{page.title}}, make a `GET` request to `/{{page.version}}/webhook/<id>/`
where `<id>` is the id of the {{page.title}} you want to fetch.


###### Request `GET /{{page.version}}/webhook/<id>/`

###### Response

```json
{
    "status": "active",
    "last_updated": "2014-05-08T21:29:14+00:00",
    "subscription_type": "application.workouts",
    "created": "2014-05-08T21:27:49+00:00",
    "last_degraded": "2014-05-08T21:29:04+00:00",
    "client_id": "a_valid_client_id",
    "shared_secret": "this_is_a_shared_secret",
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/webhook/19/",
                "id": "19"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/${doc_uri}"
            }
        ]
    },
    "callback_url": "https://example.com/callback",
    "id": 19
}
```

### GET {{page.title}}s collection

To fetch all {{page.title}}s associated with your OAuth client, make a `GET` request to `/{{page.version}}/webhook/`.

An optional `status` querystring parameter can be provided. Accepted values are: `all`, `active`, `disabled`, `degraded`.

Example: `/{{page.version}}/webhook/?status=all` will return all the {{page.title}} resources, no matter what their status is (even disabled ones).

###### Request `GET /{{page.version}}/webhook/`

###### Response

```json
{
  "_embedded": {
    "webhooks": [
      {
        "status": "active",
        "last_updated": "2014-05-08T21:29:14+00:00",
        "subscription_type": "application.workouts",
        "created": "2014-05-08T21:27:49+00:00",
        "last_degraded": "2014-05-08T21:29:04+00:00",
        "client_id": "a_valid_client_id",
        "shared_secret": "this_is_a_shared_secret",
        "callback_url": "https://example.com/callback",
        "id": 19
      }
    ]
  },
  "_links": {
    "self": [
      {
        "href": "/{{page.version}}/webhook/?limit=20&offset=0"
      }
    ],
    "documentation": [
      {
        "href": "https://developer.underarmour.com/docs/${doc_uri}"
      }
    ]
  },
  "total_count": 1
}
```


### POST {{page.title}}s entity

To create a {{page.title}}, make a `POST` request to `/{{page.version}}/webhook/`.

Note: If an identical webhook subscription already exists (for the same callback
url and subscription type), the response code will be
[409 Conflict](http://httpstatus.es/409). This means notifications should
already be flowing.


###### Request `POST /{{page.version}}/webhook/`

```json
{
    "callback_url": "https://example.com/callback",
    "shared_secret": "this_is_a_shared_secret",
    "subscription_type": "application.workouts"
}
```


###### Response

```json
{
    "status": "disabled",
    "last_updated": "2014-05-14T16:39:33.151526+00:00",
    "subscription_type": "application.workouts",
    "created": "2014-05-14T16:39:33.151069+00:00",
    "last_degraded": null,
    "client_id": "a_valid_client_id",
    "shared_secret": "this_is_a_shared_secret",
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/webhook/20/",
                "id": "20"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/${doc_uri}"
            }
        ]
    },
    "callback_url": "https://example.com/second_callback",
    "id": 20
}
```


### PUT {{page.title}}s entity

Altering existing {{page.title}}s can be done through a `PUT` request to the item URI.
Currently only the `status` is editable -- for other changes disable the
existing {{page.title}} and create a new one with the desired properties. The options
for `status` are `active`, `disabled`, `degraded`.


###### Request `PUT /{{page.version}}/webhook/<id>/`

```json
{
  "status": "disabled"
}
```


###### Response

```json
{
  "status": "disabled",
  "last_updated": "2014-05-14T18:28:43+00:00",
  "subscription_type": "application.workouts",
  "created": "2014-05-08T21:27:49+00:00",
  "last_degraded": "2014-05-08T21:29:04+00:00",
  "client_id": "a_valid_client_id",
  "shared_secret": "this_is_a_shared_secret",
  "_links": {
    "self": [
      {
        "href": "/{{page.version}}/webhook/19/",
        "id": "19"
      }
    ],
    "documentation": [
      {
        "href": "https://developer.underarmour.com/docs/${doc_uri}"
      }
    ]
  },
  "callback_url": "https://example.com/callback",
  "id": 19
}
```
