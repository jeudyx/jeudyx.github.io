---
name: Friendship
doc_uri: Friendship
versions: v7.0, v7.1
released: 2013-09-30
tags: social
title: Friendship
layout: documentation
path_version: v7.0
docs_version: v70
permalink: /docs/v70_Friendship/
doc_uri: v70_Friendship/
---

# {{ page.title }}

Returns information about {{ page.title }}s between Under Armour [`Users`](/docs/{{ page.docs_version }}_User), and allows creation and approval of {{ page.title }} requests.

## Resource URIs

**Item URI:** `/{{ page.path_version }}/friendship/<friendship_id>/`
**Collection URI:** `/{{ page.path_version }}/friendship/`

## Item

### Item methods

The ID used in the href for item requests takes the form `<from_user ID>_<to_user ID>`.

`GET` See details of a {{ page.title }} between two Under Armour users.

`PUT` Used to modify the status of a pending {{ page.title }} request to change it from `pending` to `active`. The requesting user must be the `to_user` on the pending request or an authorization error will result.

`DELETE` Denies a pending friend request, or deletes an existing active {{ page.title }}.

`PATCH` Used in a manner similar to `PUT` but does not require re-sending the entire resource representation (just the status field).

<a name="item-properties" />
### Item properties

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `status` | `pending` or `active`, denoting whether the {{ page.title }} has been unilaterally requested or bilaterally confirmed, respectively | text | Yes   |
| `created_datetime` | The time the pending {{ page.title }} was created, or the time it was confirmed and changed to `active` status. This property is read-only | DateTime | Yes   |
| `message` | For a `pending`-status request, the message that the requesting user wishes to pass to the requested user. This property should be provided when POSTing a new resource, but is read-only after the initial {{ page.title }} request creation | text | Yes   |

<a name="item-links" />
### Item links

`from_user` Link to the from user of the {{ page.title }}. For `pending` {{ page.title }}s the is the user that initiated the {{ page.title }} request.

`to_user` Link to the to user of the {{ page.title }}. For `pending` {{ page.title }}s this is the user that is receiving the {{ page.title }} request.

## Collection

### Collection methods

`GET` Allows seeing a list of a Under Armour user's friends.
`POST` Used to create a new {{ page.title }} request (i.e., a {{ page.title }} with status `pending`) from the requesting user to another Under Armour user. The requesting user must be the one specified as the `from_user` or an authorization error will result.

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `from_user` | One of this or `to_user` is required. Limits the results to the user's active {{ page.title }}s, or pending {{ page.title }}s initiated by the specified user. May be the user resource href or the user ID | text | Yes   |
| `to_user` | One of this or `from_user` is required. Limits the results to the user's active {{ page.title }}s, or pending {{ page.title }}s requests sent to the specified user. May be the user resource href or the user ID. Useful for finding all pending {{ page.title }} requests that have been sent to the to_user by others | text | Yes   |
| `status` | Limits results to those with the status specified. Valid values are `pending` (indicating a {{ page.title }} request not yet confirmed) or `active` | text | No   |
| `order_by` | Order {{ page.title }}s by specified attributes. Possible values are `status,to_user_first_last_name` and `status,from_user_first_last_name`. The default order is by status and then creation date from newest to oldest. | text | No   |

### Collection properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `total_count` | the total number of {{ page.title }}s matching the `from_user` or `to_user` filter specified | int | units, should be SI | **GET**: required, **POST**: required |

### Collection links

`self` A link to this resource

### Embedded collections

`friendships` A collection of {{ page.title }}s with properties as described under [Item properties](#item-properties) and links as described under [Item links](#item-links)

## Usage

### GET {{ page.title }} entity

###### Request `GET: /{{ page.path_version }}/friendship/{friendship_id}/`

###### Response

```json
{
    "status": "pending",
    "created_datetime": "2014-11-07T22:03:01.437704+00:00",
    "message": "",
    "_links": {
        "to_user": [{
            "href": "\/{{ page.path_version }}\/user\/{to_user ID}\/",
            "id": "{to_user ID}"
        }],
        "self": [{
            "href": "\/{{ page.path_version }}\/friendship\/{from_user ID}_{to_user ID}\/",
            "id": "{from_user ID}_{to_user ID}"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.title }}"
        }],
        "from_user": [{
            "href": "\/{{ page.path_version }}\/user\/{from_user ID}\/",
            "id": "{from_user ID}"
        }]
    }
}
```

### PUT {{ page.title }} entity

###### Request `PUT: /{{ page.path_version }}/friendship/{pk}/`

```json
{
   "status":"active",
   "_links":{
      "from_user":[
         {
            "href":"/{{ page.path_version }}/user/{from_user ID}/",
            "id":"{from_user ID}"
         }
      ],
      "to_user":[
         {
            "href":"/{{ page.path_version }}/user/{to_user ID}/",
            "id":"{to_user ID}"
         }
      ]
   }
}
```

###### Response

```json
{
    "status": "active",
    "created_datetime": "2014-11-07T21:53:36.094201+00:00",
    "message": "",
    "_links": {
        "to_user": [{
            "href": "\/{{ page.path_version }}\/user\/{to_user ID}\/",
            "id": "{to_user ID}"
        }],
        "self": [{
            "href": "\/{{ page.path_version }}\/friendship\/{from_user ID}_{to_user ID}\/",
            "id": "{from_user ID}_{to_user ID}"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.doc_uri }}"
        }],
        "from_user": [{
            "href": "\/{{ page.path_version }}\/user\/{from_user ID}\/",
            "id": "{from_user ID}"
        }]
    }
}
```

### DELETE {{ page.title }} entity

###### Request `DELETE: /{{ page.path_version }}/friendship/{pk}/`

###### Response

```
204 No Content
```

### PATCH {{ page.title }} entity

###### Request `PATCH: /{{ page.path_version }}/friendship/{pk}/`

```json
{
   "status":"pending",
   "_links":{
      "from_user":[
         {
            "href":"/{{ page.path_version }}/user/{from_user ID}/",
            "id":"{from_user ID}"
         }
      ],
      "to_user":[
         {
            "href":"/{{ page.path_version }}/user/{to_user ID}/",
            "id":"{to_user ID}"
         }
      ]
   }
}
```

###### Response

```json
{
    "status": "pending",
    "created_datetime": "2014-11-07T21:53:36.094201+00:00",
    "message": "",
    "_links": {
        "to_user": [{
            "href": "\/{{ page.path_version }}\/user\/{to_user ID}\/",
            "id": "{to_user ID}"
        }],
        "self": [{
            "href": "\/{{ page.path_version }}\/friendship\/{from_user ID}_{to_user ID}\/",
            "id": "{from_user ID}_{to_user ID}"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.title }}"
        }],
        "from_user": [{
            "href": "\/{{ page.path_version }}\/user\/{from_user ID}\/",
            "id": "{from_user ID}"
        }]
    }
}
```

### GET {{ page.title }} pending requests collection

###### Request `GET: /{{ page.path_version }}/friendship/?status=pending&to_user={User ID}`

###### Response

```json
{
    "_links": {
        "self": [{
            "href": "\/{{ page.path_version }}\/friendship\/?status=pending&to_user={User ID}&limit=20&offset=0"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.title }}"
        }]
    },
    "_embedded": {
        "friendships": [{
            "status": "pending",
            "created_datetime": "2014-11-07T21:20:39+00:00",
            "message": "Hi, person-I-want-to-friend. Let's be friends.",
            "_links": {
                "to_user": [{
                    "href": "\/{{ page.path_version }}\/user\/{User ID}\/",
                    "id": "{User ID}"
                }],
                "self": [{
                    "href": "\/{{ page.path_version }}\/friendship\/{Friend ID}_{User ID}\/",
                    "id": "{Friend ID}_{User ID}"
                }],
                "from_user": [{
                    "href": "\/{{ page.path_version }}\/user\/{Friend ID}\/",
                    "id": "{Friend ID}"
                }]
            }
        }]
    },
    "total_count": 1
}
```

### POST {{ page.title }} collection

###### Request `POST: /{{ page.path_version }}/friendship/`

```json
{
    "_links": {
        "to_user": [
            {
                "href": "/{{ page.path_version }}/user/:to_user:/",
                "id": ":to_user:"
            }
        ],
        "from_user": [
            {
                "href": "/{{ page.path_version }}/user/:from_user:/",
                "id": ":from_user:"
            }
        ]
    }
}
```

###### Response

```json
{
    "status": "pending",
    "created_datetime": "2014-11-07T22:03:01.437704+00:00",
    "message": "",
    "_links": {
        "to_user": [{
            "href": "\/{{ page.path_version }}\/user\/{to_user ID}\/",
            "id": "{to_user ID}"
        }],
        "self": [{
            "href": "\/{{ page.path_version }}\/friendship\/{from_user ID}_{to_user ID}\/",
            "id": "{from_user ID}_{to_user ID}"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.title }}"
        }],
        "from_user": [{
            "href": "\/{{ page.path_version }}\/user\/{from_user ID}\/",
            "id": "{from_user ID}"
        }]
    }
}
```

### PATCH to create multiple *{{ page.title }}* entities

###### Request `PATCH: /{{ page.path_version }}/friendship/`

```json
{
  "friendships": [
        {
            "from_user": "/v7.0/user/37698697/",
            "to_user": "/v7.0/user/43288455/"
        },
        {
            "from_user": "/v7.0/user/37698697/",
            "to_user": "/v7.0/user/42976235/"
        }
  ]
}
```

###### Response

```json
{
    "friendships": [
        {
            "status": "pending",
            "created_datetime": "2014-12-12T00:56:53.866393+00:00",
            "from_user": "/v7.0/user/37698697/",
            "to_user": "/v7.0/user/43288455/",
            "message": "",
            "resource_uri": "/{{ page.path_version }}/friendship/37698697_43288455/"
        }
        {
            "status": "pending",
            "created_datetime": "2014-12-12T00:56:53.866393+00:00",
            "from_user": "/v7.0/user/37698697/",
            "to_user": "/v7.0/user/42976235/",
            "message": "",
            "resource_uri": "/{{ page.path_version }}/friendship/37698697_42976235/"
        }
    ]
}
```
