---
layout: documentation
title: Remote Connection
resource: Remote Connection
version: v7.1
versionhref: v71
permalink: /docs/v71_Remote_Connection/
---

# {{page.title}}

A `{{page.title}}` represents a user's OAuth connection with an external 3rd-party API. For example, a Under Armour user can give a 3rd-party (i.e. Jawbone, Fitbit, Withings, etc) permission to let Under Armour view his/her remote data.

The `{{page.title}}` is a user's list of all current connections with 3rd-parties. See [`RemoteConnectionType`](/docs/{{page.versionhref}}_Remote_Connection_Type) for list of all possible connections supported by Under Armour

## Resource URIs

**Item URI:** `/{{page.version}}/remoteconnection/{pk}/`  
**Collection URI:** `/{{page.version}}/remoteconnection/`  

## Item

### Item Methods

`GET` Get a {{page.title}} by id. The requesting user needs to be the owner of the connection.  
`DELETE` Revoke a {{page.title}} by id. The requesting user needs to be the owner of the connection.

### Item query parameters

None

### Item properties <a name="itemproperties"></a>

| Property           |           | type                                                         | description                                                                               |
|--------------------|-----------|--------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| `remote_id`        | Read only | String                                                       | The id of the {{page.title}}.                                                          |
| `type`             | Read only | String                                                       | The type of {{page.title}}. See `RemoteConnectionTypes` resource for more information. |
| `created_datetime` | Read only | String: ISO8601 formatted with offset (YYYY-MM-DDThh:mm:ssZ) | The time at which the {{page.title}} was made and authorized.                          |
| `last_sync_time`   | Read only | String: ISO8601 formatted with offset (YYYY-MM-DDThh:mm:ssZ) | The last time of a successful sync.                                                       |

### Item links <a name="itemlinks"></a>

`self` A link to this resource  
`user` A link to the user that owns the {{page.title}}

## Collection

### Collection methods

`GET` Get a list of {{page.title}}s owned by the calling user.

### Collection query parameters

None

### Collection properties

| Property      |           | type   | description                                                |
|---------------|-----------|--------|------------------------------------------------------------|
| `total_count` | Read-only | Number | Total count of {{page.title}}s returned in a collection |

### Collection links

`self` A link to this resource

## Usage

### Fetch a single {{page.title}}

###### Request `GET: /{{page.version}}/remoteconnection/<remote_id>/`

###### Response

```json
{
    "created_datetime": "2014-04-20T03:12:00+00:00",
    "last_sync_time": "2014-05-04T17:31:06+00:00",
    "remote_id": "<redacted>",
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/remoteconnection/<id>/",
                "id": "<id>"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ],
        "user": [
            {
                "href": "/{{page.version}}/user/<user_id>/",
                "id": "<user_id>"
            }
        ]
    },
    "type": "withings"
}
```

### Deleting a {{page.title}}

###### Request `DELETE: /{{page.version}}/remoteconnection/<remote_id>/`

###### Response 204

### Fetching All {{page.title}}s (for the calling user)

###### Request `GET /{{page.version}}/remoteconnection/`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/remoteconnection/?limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ],
    },
    "_embedded": {
        "remoteconnection": [
            {
                "created_datetime": "2014-04-20T03:12:00+00:00",
                "last_sync_time": "2014-05-04T17:31:06+00:00",
                "remote_id": "<redacted>",
                "_links": {
                    "self": [
                        {
                            "href": "/{{page.version}}/remoteconnection/555/",
                            "id": "555"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{page.version}}/user/<user_id>/",
                            "id": "<user_id>"
                        }
                    ]
                },
                "type": "withings"
            },
            {
                "created_datetime": "2014-04-22T22:24:00+00:00",
                "last_sync_time": "2014-05-07T14:41:05+00:00",
                "remote_id": "<redacted>",
                "_links": {
                    "self": [
                        {
                            "href": "/{{page.version}}/remoteconnection/666/",
                            "id": "666"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{page.version}}/user/<user_id>/",
                            "id": "<user_id>"
                        }
                    ]
                },
                "type": "jawboneup"
            },
        ]
    },
    "total_count": 2
}
```
