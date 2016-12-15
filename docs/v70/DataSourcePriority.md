---
layout: documentation
title: Data Source Priority
resource: Data Source
version: v7.0
versionhref: v70
permalink: /docs/v70_Data_Source_Priority/
---

# {{page.title}}

Data Source Priorities are the settings used to determine which data from which
devices are used to calculate a user's aggregate metrics and
[actigraphy](/docs/{{page.versionhref}}_Actigraphy).

For instance, if a user owns multiple devices they may set their sleep priority
to their specific Jawbone [`data_source`](/docs/{{page.versionhref}}_DataSource) with id
`12345` and their activity priority to their specific iOS m7 `data_source` with
id `98765`.


## Resource URIs

* **Item URI:** `/{{page.version}}/data_source_priority/{id}/`
* **Collection URI:** `/{{page.version}}/data_source_priority/`


## Item

### Item Methods

* `GET` Retrieve {{page.title}} by id


### Item properties

| Name            | Description                     | Type   | Units | HTTP Support                         |
| ---             | ---                             | ---    | ---   | ---                                  |
| `priority_type` | category of priority to create. | String | N/A   | **POST**: required, **GET** optional |


###### Example values

`priority_type`

Valid values are `sleep`, `activity`


### Item links

* `self` A link to this resource
* `data_source` A link to the related [Data Source](/docs/{{page.versionhref}}_Data_Source)
* `device` [Device](/docs/{{page.versionhref}}_Device) associated with the Data Source
* `remote_connection` *optional* if Data Source is associated with a
  [Remote Connection](/docs/{{page.versionhref}}_Remote_Connection)

> **WARNING** Some legacy data source priorities may lack valid `data_source`
> and `device` links. All future data source priorities will include these
> links.


## Collection

### Collection methods

* `GET` Get user's {{page.title}}s.
* `POST` Create a {{page.title}}.

Note: You cannot create Data Source Priorities for Data Sources that are
inactive.


### Collection Query Parameters

| Name              | Description                                          | Type   | Required                       |
| ---               | ---                                                  | ---    | ---                            |
| `priority_type`   | type of data for which this data source is preferred | string | optional                       |
| `priority_filter` | subset of priorities                                 | string | optional. defaults to 'unique' |


###### Example values

`priority_type`

Valid values are `sleep`, `activity`

`priority_filter`

Valid values are `unique`, `active`, `history`


### Collection properties

| Name            | Description                     | Type   | Units | HTTP Support                         |
| ---             | ---                             | ---    | ---   | ---                                  | --- |
| `priority_type` | category of priority to create. | String | N/A   | **POST**: required, **GET** optional |


###### Example values

`priority_type`

Valid values are `sleep`, `activity`


### Collection links

* `self` A link to this resource
* `data_source` A link to the related [Data Source](/docs/{{page.versionhref}}_DataSource)
* `device` [Device](/docs/{{page.versionhref}}_Device) associated with the
  [Data Source](/docs/{{page.versionhref}}_Data_Source)
* `remote_connection` *optional.* if [Data Source](/docs/{{page.versionhref}}_DataSource) is
  associated with a [Remote Connection](/docs/{{page.versionhref}}_Remote_Connection)


## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/data_source_priority/{id}/`

###### Response

```json
{
    "effective_datetime_utc": "2015-01-12T19:14:37+00:00",
    "priority_type": "activity",
    "_links": {
        "device": [
            {
                "href": "/{{page.version}}/device/device_id/",
                "id": "device_id"
            }
        ],
        "remote_connection": [
            {
                "href": "/{{page.version}}/remoteconnection/1/",
                "id": "1"
            }
        ],
        "self": [
            {
                "href": "/{{page.version}}/data_source_priority/1/",
                "id": "1"
            }
        ],
        "data_source": [
            {
                "href": "/{{page.version}}/data_source/1/",
                "id": "1"
            }
        ],
        "documentation": [
            {
                "href": "https://www.mapmyapi.com/docs/v70_Data_Source_Priority"
            }
        ]
    }
}
```


### GET *{{page.title}}* collection

Query a {{page.title}} collection for the current user, optionally limited by type with
`priority_type` or filtered by unique [Data Sources](/docs/{{page.versionhref}}_DataSource)
(`priority_filter=unique`, the default), active priorities
(`priority_filter=active`) or historical priorities previously set
(`priority_filter=history`).

Result is sorted descending by effective date.


###### Request `GET: /{{page.version}}/data_source_priority/`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/data_source_priority/?limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://www.mapmyapi.com/docs/v70_Data_Source_Priority"
            }
        ]
    },
    "_embedded": {
        "data_source_priorities": [
            {
                "effective_datetime_utc": "2015-01-15T20:55:26+00:00",
                "priority_type": "activity",
                "_links": {
                    "device": [
                        {
                            "href": "/{{page.version}}/device/device_one/",
                            "id": "device_one"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{page.version}}/data_source_priority/1/",
                            "id": "1"
                        }
                    ],
                    "data_source": [
                        {
                            "href": "/{{page.version}}/data_source/2/",
                            "id": "2"
                        }
                    ]
                }
            },
            {
                "effective_datetime_utc": "2015-01-10T19:14:37+00:00",
                "priority_type": "activity",
                "_links": {
                    "device": [
                        {
                            "href": "/{{page.version}}/device/abc_123/",
                            "id": "abc_123"
                        }
                    ],
                    "remote_connection": [
                        {
                            "href": "/{{page.version}}/remoteconnection/1/",
                            "id": "1"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{page.version}}/data_source_priority/3/",
                            "id": "3"
                        }
                    ],
                    "data_source": [
                        {
                            "href": "/{{page.version}}/data_source/5/",
                            "id": "5"
                        }
                    ]
                }
            },
            {
                "effective_datetime_utc": "2014-10-16T19:22:51+00:00",
                "priority_type": "sleep",
                "_links": {
                    "device": [
                        {
                            "href": "/{{page.version}}/device/321_asdf/",
                            "id": "321_asdf"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{page.version}}/data_source_priority/6/",
                            "id": "6"
                        }
                    ],
                    "data_source": [
                        {
                            "href": "/{{page.version}}/data_source/2/",
                            "id": "2"
                        }
                    ]
                }
            },
            {
                "effective_datetime_utc": "2014-09-11T13:15:55+00:00",
                "priority_type": "activity",
                "_links": {
                    "device": [
                        {
                            "href": "/{{page.version}}/device/device_one/",
                            "id": "device_one"
                        }
                    ],
                    "self": [
                        {
                            "href": "/{{page.version}}/data_source_priority/1/",
                            "id": "1"
                        }
                    ],
                    "data_source": [
                        {
                            "href": "/{{page.version}}/data_source/2/",
                            "id": "2"
                        }
                    ]
                }
            }
        ]
    },
    "total_count": 4
}
```


### POST {{page.title}} entity

A user can change their data source priorities over time. Use this endpoint to
create a new {{page.title}} for a `priority_type` with an `effective_datetime_utc` set
to the time the record is created.


###### Request `POST: /{{page.version}}/data_source_priority/`

```json
{
    "priority_type": "activity",
    "_links": {
        "data_source": [{
            "href": "/{{page.version}}/data_source/2/"
        }]
    }
}
```


###### Response: 201

```json
{
    "effective_datetime_utc": "2015-01-12T19:14:37+00:00",
    "priority_type": "activity",
    "_links": {
        "device": [
            {
                "href": "/{{page.version}}/device/device_id/",
                "id": "device_id"
            }
        ],
        "remote_connection": [
            {
                "href": "/{{page.version}}/remoteconnection/1/",
                "id": "1"
            }
        ],
        "self": [
            {
                "href": "/{{page.version}}/data_source_priority/5/",
                "id": "5"
            }
        ],
        "data_source": [
            {
                "href": "/{{page.version}}/data_source/2/",
                "id": "2"
            }
        ],
        "documentation": [
            {
                "href": "https://www.mapmyapi.com/docs/v70_Data_Source_Priority"
            }
        ]
    }
}
```

> Note: Response code is 200 if user's current priority already matches the
> posted [Data Source](/docs/{{page.versionhref}}_DataSource].
