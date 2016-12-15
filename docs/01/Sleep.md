---
layout: documentation
title: Sleep
resource: Sleep
version: api/0.1
versionhref: 01
permalink: /docs/01_Sleep/
---


# {{page.title}}

This resource allows creation, modification, and deletion of {{page.title}} data associated with a User. {{page.title}} data consists of
 sleep duration, details, aggregates, and time series data.

## Resource URIs

**Item URI:** `/{{page.version}}/sleep/{pk}/`

**Collection URI:** `/{{page.version}}/sleep/`

## Item

### Item Methods

`GET` Get a {{page.title}} by id.

`PUT` Update a {{page.title}} by id.

`DELETE` Delete a {{page.title}} by id.

### Item properties

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
|`start_datetime_utc`| Always present. The UTC datetime that represents when the sleep started.| String (Datetime: ISO8601 formatted with offset YYYY-MM-DDThh:mm:ssZ)| | **GET**: required **PUT**: required|
|`end_datetime_utc`| Always present. The UTC datetime that represents when the sleep ended.| String (Datetime: ISO8601 formatted with offset YYYY-MM-DDThh:mm:ssZ)| | **GET**: required **PUT**: required|
|`start_datetime_timezone`| Always present. The timezone that the represents where the sleep started.| String (IANA Time Zone Database formatted)| | **GET**: required **PUT**: required|
|`created_datetime`| Always present. The datetime that the Sleep was recorded by Under Armour.| String (Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ).| | **GET**: optional **PUT**: optional, but will be automatically generated if not supplied.|
|`updated_datetime`| Always present. The datetime that the Sleep was last modified by Under Armour| String (Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ).| | **GET**: optional **PUT**: optional, but will be automatically generated if not supplied.|
|`has_time_series`| Always present. A boolean that represents if the sleep has time_series data.| Boolean| | **GET**: optional **PUT**: optional|
|`recorder_type_key`| Always present. The key for the recorder type that recorded the data.| String| | **GET**: required **PUT**: optional|
|`client_id`| Always present. Represents a sleep uniquely in the environment in which the sleep was recorded.| String| |  **GET**: required **PUT**: required|
|`time_series`| The individual points of measurement that describe specifically what was happening offset by time. Each time series item is a list of tuples with the first item being the offset in seconds from the sleep start, and the second item being the measurement(s). The seconds offset can be represented as a floating-point number.| {TIME_SERIES} object| | **GET**: optional, field_set='time_series' **PUT**: required|
|`aggregates`| The aggregates are a simple key-value dictionary. Some keys are represented discretely, while others are cumulative.| {AGGREGATES} object | | **GET**: optional **PUT**: optional|
|`aggregates.sum`| The total cumulative sleep recorded; the sum of light sleep and deep sleep.| Number (float)| seconds| **GET**: optional **PUT**: optional|
|`aggregates.details.total_deep_sleep`| The total cumulative deep sleep during the sleep.| Number (float)| seconds| **GET**: optional **PUT**: optional|
|`aggregates.details.total_light_sleep`| The total cumulative light sleep during the sleep.| Number (float)| seconds| **GET**: optional **PUT**: optional|
|`aggregates.details.total_time_awake`| The total cumulative time awake during the sleep.| Number (float)| seconds| **GET**: optional **PUT**: optional|
|`aggregates.details.times_awakened`| The total cumulative times awakened during the sleep.| Number (integer)| | **GET**: optional **PUT**: optional|
|`aggregates.details.time_to_sleep`| The total cumulative time to sleep during the sleep.| Number (float)| seconds| **GET**: optional **PUT**: optional      |

### Item links

`self` A link to this resource

`user` A link to the User resource that owns the <resource_name>

## Collection

### Collection methods

`GET` Get a list of Sleeps.  

`PUT` Upsert a Sleep by client_id and recorder_type_key.

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `target_start_datetime`| A datetime indicating where to start the search. Sleeps are searched by end time with target_start_datetime inclusive.| String (Datetime, ISO8601 formatted with offset)| Yes|
|`target_end_datetime`| A datetime indicating where to end the search. Defaults to current time. Sleeps are searched by end time with target_end_datetime exclusive.| String (Datetime, ISO8601 formatted with offset)| No|
| `field_set`| Options available are: ['time_series'].| String| No |

### Collection properties

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `total_count` | Total count of sleep entities returned in collection. | Number (integer) | | **GET**: required | 

### Collection links

`self` A link to this resource

`user` A link to the User resource that owns the <resource_name>


### Embedded collections

`sleeps` A collection of Sleeps with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### GET Sleep entity

###### Request `GET: /{{page.version}}/sleep/{pk}/`

###### Response 200:

```json
{
    "recorder_type_key": "jawboneupmoves",
    "reference_key": "k-sfvshueMm_hpzsg8PPlq",
    "updated_datetime": "2014-07-31T13:40:43+00:00",
    "created_datetime": "2014-07-31T13:40:43+00:00",
    "aggregates": {
        "sum": 23247,
        "details": {
            "deep_sleep": {
                "sum": 8427
            },
            "awake": {
                "sum": 2466
            },
            "time_to_sleep": {
                "sum": 1113
            },
            "times_awakened": {
                "sum": 2
            },
            "light_sleep": {
                "sum": 14820
            }
        }
    },
    "time_series": {
        "sleep": {
            "interval": null,
            "values": [
                [
                    1394081220,
                    1
                ],
                [
                    1394082000,
                    2
                ],
                [
                    1394082300,
                    3
                ],
                [
                    1394083500,
                    2
                ],
                [
                    1394083800,
                    1
                ],
                [
                    1394084400,
                    2
                ],
                [
                    1394085900,
                    3
                ],
                [
                    1394087700,
                    2
                ],
                [
                    1394088900,
                    3
                ],
                [
                    1394089500,
                    2
                ],
                [
                    1394094900,
                    3
                ],
                [
                    1394097000,
                    2
                ],
                [
                    1394098200,
                    3
                ],
                [
                    1394098800,
                    2
                ],
                [
                    1394100900,
                    1
                ],
                [
                    1394101500,
                    2
                ],
                [
                    1394101800,
                    3
                ],
                [
                    1394102400,
                    2
                ],
                [
                    1394104200,
                    3
                ],
                [
                    1394105400,
                    2
                ],
                [
                    1394106600,
                    1
                ]
            ]
        }
    },
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/sleep/113659/?id=113659",
                "id": "113659"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ],
        "user": [
            {
                "href": "/{{page.version}}/user/20137989/",
                "id": "20137989"
            }
        ]
    },
    "start_datetime_utc": "2014-03-06T04:46:27+00:00",
    "has_time_series": true,
    "start_datetime_timezone": "America/Chicago",
    "end_datetime_utc": "2014-03-06T11:59:05+00:00"
}
```

### PUT Sleep entity

###### Request `PUT: /{{page.version}}/sleep/{pk}/`

```json
{
    "start_datetime_utc": "2013-09-12T23:30:00+00:00",
    "end_datetime_utc": "2013-09-13T00:30:00+00:00",
    "start_datetime_timezone": "US/Central",
    "recorder_type_key": "foo_recording_device",
    "time_series": {
        "sleep": {
            "interval": null,
            "values": [
                [0, 1],
                [10, 1],
                [200, 2],
                [350, 3],
                [500, 2]
            ]
        }
    },
    "aggregates": {
        "times_awakened": 2,
        "time_to_sleep": 10,
        "total_time_awake": 2,
        "total_deep_sleep": 1,
        "total_light_sleep": 2,
        "total_sleep": 3
    }
}
```

###### Response 200:

```json
{
    "recorder_type_key": "foo",
    "time_series": {
        "sleep": {
            "interval": null,
            "values": [
                [ 0, 1 ],
                [ 10, 1 ],
                [ 200, 2 ],
                [ 350, 3 ],
                [ 500, 2 ]
            ]
        }
    },
    "updated_datetime": "2014-11-05T20:53:05+00:00",
    "created_datetime": "2014-11-05T20:53:05+00:00",
    "aggregates": {
        "sum": 3,
        "details": {
            "deep_sleep": {
                "sum": 1
            },
            "time_to_sleep": {
                "sum": 10
            },
            "awake": {
                "sum": 2
            },
            "times_awakened": {
                "sum": 2
            },
            "light_sleep": {
                "sum": 2
            }
        }
    },
    _"links": {
        "self": [
            {
                "href": "/{{page.version}}/sleep/893/",
                "id": "893"
             }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ],
        "user": [
            {
                "href": "/{{page.version}}/user/20137989/",
                "id": "20137989"
            }
        ]
    },
    "client_id": "foo_recording_device",
    "start_datetime_utc": "2013-09-12T23:30:00+00:00",
    "has_time_series": true,
    "start_datetime_timezone": "US/Central",
    "end_datetime_utc": "2013-09-13T00:30:00+00:00"
}
```

### DELETE Sleep entity

###### Request: `DELETE: /{{page.version}}/sleep/{pk}/`

###### Response: 204
```json
{}
```

### GET Sleep collection

###### Request: `GET: /{{page.version}}/sleep/?target_start_datetime=2013-09-12T23:30:00+00:00`

###### Response 200:

```json
{
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/sleep/?target_start_datetime=2013-09-12T23%3A30%3A00%2B00%3A00&limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ],
        "next": [
            {
                "href": "/{{page.version}}/sleep/?target_start_datetime=2013-09-12T23%3A30%3A00%2B00%3A00&limit=20&offset=20"
            }
        ]
    },
    "_embedded": {
        "sleeps": [
            {
                "recorder_type_key": "jawboneupmoves",
                "reference_key": "k-sfvshueMm_hpzsg8PPlq",
                "updated_datetime": "2014-07-31T13:40:43+00:00",
                "created_datetime": "2014-07-31T13:40:43+00:00",
                "aggregates": {
                    "sum": 23247,
                    "details": {
                        "deep_sleep": {
                            "sum": 8427
                        },
                        "awake": {
                            "sum": 2466
                        },
                        "time_to_sleep": {
                            "sum": 1113
                        },
                        "times_awakened": {
                            "sum": 2
                        },
                        "light_sleep": {
                            "sum": 14820
                        }
                    }
                },
                "_links": {
                    "self": [
                        {
                            "href": "/{{page.version}}/sleep/113659/",
                            "id": "113659"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{page.version}}/user/20137989/",
                            "id": "20137989"
                        }
                    ]
                },
                "start_datetime_utc": "2014-03-06T04:46:27+00:00",
                "has_time_series": false,
                "start_datetime_timezone": "America/Chicago",
                "end_datetime_utc": "2014-03-06T11:59:05+00:00"
            }
        ]
    },
    "total_count": 1
}
```
