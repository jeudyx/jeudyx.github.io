---
layout: documentation
title: Remote Connection Type
resource: Remote Connection Type
version: vx
versionhref: vx
permalink: /docs/vx_Remote_Connection_Type/
---

# {{page.title}}

A `{{page.title}}` resource represents all of the possible `RemoteConnection`s supported by Under Armour.

See `RemoteConnection` resource for more background

## Resource URIs

**Collection URI:** `/{{page.version}}/remoteconnectiontype/`

**Item URI:** `/{{page.version}}/remoteconnectiontype/<pk>/`

## Item

### Methods

`GET` Retrieve a `{{page.title}}`

### Query parameters

None

### Properties

| Name                 | Description                                   | Type     | Units | HTTP Support      |
|----------------------|-----------------------------------------------|----------|-------|-------------------|
| `type`               | The type of the remote account                | `string` |       | **GET:** Required |
| `name`               | The readable name of the remote type          | `string` |       | **GET:** Required |
| `recorder_type_key`  | Key for recorders of this remote account type | `string` |       | **GET:** Required |
| `intro_copy_heading` | Heading for introductory email                | `string` |       | **GET:** Required |
| `intro_copy_body`    | Body for introductory email                   | `string` |       | **GET:** Required |
| `disconnect_copy`    | Body for disconnection email                  | `string` |       | **GET:** Required |
| `disconnect_confirm` | Text for disconnection confirmation           | `string` |       | **GET:** Required |
| `disconnect_cancel`  | Text for cancelled disconnection              | `string` |       | **GET:** Required |
| `oauth_connect_link` | Used internally                               | `string` |       | **GET:** Required |
| `logo_link`          | relative URL to logo image asset              | `string` |       | **GET:** Required |

### Item links

`self` A link to this resource

`device` A link to the [Device](/docs/v70_Device) used to record data

## Collection

### Methods

`GET`: Retrieve all `{{page.title}}`

### Query parameters

### Properties

| Property      | type   | description                                                    |
|---------------|--------|----------------------------------------------------------------|
| `_embedded`   | `list` | The `{{page.title}}` objects that match the query        |
| `_links`      | `dict` | [HAL](http://stateless.co/hal_specification.html) style links. |
| `total_count` | `int`  | Total count of objects that match the query                    |

## Usage

### GET a single RemoteConnection

###### Request `GET /{{page.version}}/remoteconnectiontype/<id>/`

###### Response

```json
{
    "recorder_type_key": "jawboneupmoves",
    "name": "Jawbone",
    "logo_link": "<url_to_logo>",
    "type": "jawboneup",
    "_links": {
      "device": [
            {
                "href": "/{{page.version}}/device/jawboneupmoves/",
                "id": "jawboneupmoves"
            }
        ],
        "self": [
            {
                "href": "/{{page.version}}/remoteconnectiontype/<id>/",
                "id": "<id>"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ]
    }
}
```

### GET All RemoteConnections

###### Request `GET /{{page.version}}/remoteconnectiontype/`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/remoteconnectiontype/?limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ],
    },
    "_embedded": {
        "remoteconnectiontypes": [
            {
                "recorder_type_key": "withings",
                "name": "Withings",
                "logo_link": "<url_to_logo>",
                "_links": {
                    "device": [
                        {
                            "href": "/{{page.version}}/device/jawboneupmoves/",
                            "id": "jawboneupmoves"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{page.version}}/remoteconnectiontype/3/",
                            "id": "3"
                        }
                    ]
                },
                "type": "jawboneup"
            },
            {
                "recorder_type_key": "jawboneupmoves",
                "name": "Jawbone",
                "logo_link": "<url_to_logo>",
                "_links": {
                    "device": [
                        {
                            "href": "/{{page.version}}/device/jawboneupmoves/",
                            "id": "jawboneupmoves"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{page.version}}/remoteconnectiontype/2/",
                            "id": "2"
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

<!-- LINKS GO BELOW HERE -->
