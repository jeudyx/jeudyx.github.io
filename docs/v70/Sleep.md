---
layout: documentation
title: Sleep
resource: Sleep
version: v7.0
versionhref: v70
permalink: /docs/v70_Sleep/
---

# {{page.title}}

This resource allows creation, modification, and deletion of {{page.title}} data associated with a User. {{page.title}} data consists of
 sleep duration, details, aggregates, and time series data.
 
## Resource URIs

**Item URI:** `/{{page.version}}/sleep/{id}/`

**Collection URI:** `/{{page.version}}/sleep/`

## Item

### Item Methods

`GET` Get a Sleep by id.

`PUT` Update a Sleep by id.

`DELETE` Delete a Sleep by id.

### Item properties <a name="itemproperties"></a>

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
|`start_datetime_utc`| Always present. The UTC datetime that represents when the sleep started.| String (Datetime: ISO 8601 formatted with offset YYYY-MM-DDThh:mm:ssZ)| | **GET**: required **POST**: required **PUT**: optional|
|`end_datetime_utc`| Always present. The UTC datetime that represents when the sleep ended.| String (Datetime: ISO 8601 formatted with offset YYYY-MM-DDThh:mm:ssZ)| | **GET**: required **POST**: required **PUT**: optional|
|`created_datetime`| Always present. The datetime that the Sleep was recorded by Under Armour.| String (Datetime, ISO 8601 formatted YYYY-MM-DDThh:mm:ssZ).| | **GET**: optional **POST**: ignored **PUT**: ignored|
|`updated_datetime`| Always present. The datetime that the Sleep was last modified by Under Armour| String (Datetime, ISO 8601 formatted YYYY-MM-DDThh:mm:ssZ).| | **GET**: optional **POST**: ignored **PUT**: ignored|
|`external_id`| Always present. Represents a sleep uniquely in the environment in which the sleep was recorded.| String| |  **GET**: required **POST**: required **PUT**: required|
|`has_time_series`| Always present. A boolean that represents if the sleep has time_series data.| Boolean| | **GET**: optional **POST**: ignored **PUT**: ignored|
|`time_series`| The individual points of measurement that describe the state changes at discrete times during the sleep session. Each time series item is a 2-item list where the first item is an integer number of seconds since the [Unix epoch](http://en.wikipedia.org/wiki/Unix_time#Encoding_time_as_a_number), and the second item is the integer representing the sleep state.  The 3 valid sleep states are: 1=awake, 2=light sleep, 3=deep sleep.  | {TIME_SERIES} object| | **GET**: optional, field_set='time_series' **POST**: optional **PUT**: optional|
|`timezones`| List of user timezone events that intersect with the time represented by this sleep. The first item of each tuple represents the event's epoch timestamp and the second item is the IANA Time Zone Database formatted string for the event.| Array| | **GET**: optional **POST**: optional **PUT**: optional|
|`aggregates`| The aggregates are a simple key-value dictionary. Some keys are represented discretely, while others are cumulative.| {AGGREGATES} object | | **GET**: optional **POST**: optional **PUT**: optional|
|`aggregates.sum`| The total cumulative sleep recorded; the sum of light sleep and deep sleep.| Number (float)| seconds| **GET**: optional **POST**: optional **PUT**: optional|
|`aggregates.details.deep_sleep`| The total cumulative deep sleep during the sleep.| Number (float)| seconds| **GET**: optional **POST**: optional **PUT**: optional|
|`aggregates.details.light_sleep`| The total cumulative light sleep during the sleep.| Number (float)| seconds| **GET**: optional **POST**: optional **PUT**: optional|
|`aggregates.details.awake`| The total cumulative time awake during the sleep.| Number (float)| seconds| **GET**: optional **POST**: optional **PUT**: optional|
|`aggregates.details.times_awakened`| The total cumulative times awakened during the sleep.| Number (integer)| | **GET**: optional **POST**: optional **PUT**: optional|
|`aggregates.details.time_to_sleep`| The total cumulative time to sleep during the sleep.| Number (float)| seconds| **GET**: optional **POST**: optional **PUT**: optional      |

### Item links <a name="itemlinks"></a>

`self` A link to this resource

`user` A link to the User resource that owns the {{page.title}}

`data_source` A link to the ``DataSource`` resource.

## Collection

### Collection methods

`GET` Get a list of Sleeps.  

`POST` Upsert a Sleep by external_id and data_source.

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `target_start_datetime`| A datetime indicating where to start the search. Sleeps are searched by end time with target_start_datetime inclusive.| String (Datetime, ISO 8601 formatted with offset)| Yes|
|`target_end_datetime`| A datetime indicating where to end the search. Defaults to current time. Sleeps are searched by end time with target_end_datetime exclusive.| String (Datetime, ISO 8601 formatted with offset)| No|
| `field_set`| Options available are: ['time_series'].| String| No |

### Collection properties

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `total_count` | Total count of sleep entities returned in collection. | Number (integer) | | **GET**: required | 

### Collection links

`self` A link to this resource

`user` A link to the User resource that owns the {{page.title}}

### Embedded collections

`sleeps` A collection of Sleeps with properties as described under [Item properties](#itemproperties) and links as described under [Item links](#itemlinks).

## Usage

### GET Sleep entity

###### Request `GET: /{{page.version}}/sleep/{id}/`

###### Response 200:

```json
{
    "external_id": "k-sfvshueMm_hpzsg8PPlq",
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
                "href": "/{{page.version}}/sleep/{id}/",
                "id": "{id}"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ],
        "user": [
            {
                "href": "/{{page.version}}/user/{user_id}/",
                "id": "{user_id}"
            }
        ], 
        "data_source":[
            {
                "href": "/{{page.version}}/data_source/{data_source_id}/",
                "id": "{data_source_id}"
            }
        ]
    },
    "timezones": [[1397109060, "America/Chicago"], [1397143140, "America/New_York"], [1397157900, "America/Toronto"], [1397159160, "America/New_York"]],
    "start_datetime_utc": "2014-03-06T04:46:27+00:00",
    "has_time_series": true,
    "end_datetime_utc": "2014-03-06T11:59:05+00:00"
}
```
### POST Sleep entity

###### Request `POST: /{{page.version}}/sleep/{id}/`

```json
{
    "start_datetime_utc": "2013-09-12T23:30:00+00:00",
    "end_datetime_utc": "2013-09-13T00:30:00+00:00",
    "external_id": "k-sfvshueMm_hpzsg8PPlq",
    "timezones": [[1397109060, "America/Chicago"], [1397143140, "America/New_York"], [1397157900, "America/Toronto"], [1397159160, "America/New_York"]],
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
    "aggregates": {
        "times_awakened": 2,
        "time_to_sleep": 10,
        "total_time_awake": 2,
        "total_deep_sleep": 1,
        "total_light_sleep": 2,
        "total_sleep": 3
    },
    "_links": {
        "data_source":  [
            {
                "href": "/{{page.version}}/data_source/{data_source_id}/",
                "id": "{data_source_id}"
            }
        ]
    }
}
```

###### Response 201:

```json
{
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
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/sleep/{id}/",
                "id": "{id}"
             }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ],
        "user": [
            {
                "href": "/{{page.version}}/user/{user_id}/",
                "id": "{user_id}"
            }
        ],
        "data_source": [
            {
                "href": "/{{page.version}}/data_source/{data_source_id}/",
                "id": "{data_source_id}"
            }
        ]
    },
    "external_id": "k-sfvshueMm_hpzsg8PPlq",
    "start_datetime_utc": "2013-09-12T23:30:00+00:00",
    "has_time_series": true,
    "end_datetime_utc": "2013-09-13T00:30:00+00:00",
    "timezones": [[1397109060, "America/Chicago"], [1397143140, "America/New_York"], [1397157900, "America/Toronto"], [1397159160, "America/New_York"]]
}
```

### PUT Sleep entity

###### Request `PUT: /{{page.version}}/sleep/{id}/`

```json
{
    "start_datetime_utc": "2013-09-12T23:30:00+00:00",
    "end_datetime_utc": "2013-09-13T00:30:00+00:00",
    "external_id": "k-sfvshueMm_hpzsg8PPlq",
    "timezones": [[1397109060, "America/Chicago"], [1397143140, "America/New_York"], [1397157900, "America/Toronto"], [1397159160, "America/New_York"]],
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
    "aggregates": {
        "times_awakened": 2,
        "time_to_sleep": 10,
        "total_time_awake": 2,
        "total_deep_sleep": 1,
        "total_light_sleep": 2,
        "total_sleep": 3
    },
    "_links": {
      "data_source":  [
          {
              "href": "/{{page.version}}/data_source/{data_source_id}/",
              "id": "{data_source_id}"
          }
      ]
  }
}
```

###### Response 200:

```json
{
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
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/sleep/{id}/",
                "id": "{id}"
             }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/"
            }
        ],
        "user": [
            {
                "href": "/{{page.version}}/user/{user_id}/",
                "id": "{user_id}"
            }
        ],
        "data_source": [
            {
                "href": "/{{page.version}}/data_source/{data_source_id}/",
                "id": "{data_source_id}"
            }
        ]
    },
    "external_id": "k-sfvshueMm_hpzsg8PPlq",
    "start_datetime_utc": "2013-09-12T23:30:00+00:00",
    "has_time_series": true,
    "end_datetime_utc": "2013-09-13T00:30:00+00:00"
}
```

### DELETE Sleep entity

###### Request: `DELETE: /{{page.version}}/sleep/{id}/`

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
                "external_id": "k-sfvshueMm_hpzsg8PPlq",
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
                            "href": "/{{page.version}}/sleep/{sleep_id}/",
                            "id": "{sleep_id}"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{page.version}}/user/{user_id}/",
                            "id": "{user_id}"
                        }
                    ],
                    "data_source": [
                        {
                            "href": "/{{page.version}}/data_source/{data_source_id}/",
                            "id": "{data_source_id}"
                        }
                    ]
                },
                "start_datetime_utc": "2014-03-06T04:46:27+00:00",
                "has_time_series": false,
                "end_datetime_utc": "2014-03-06T11:59:05+00:00",
                "timezones": [[1397109060, "America/Chicago"], [1397143140, "America/New_York"], [1397157900, "America/Toronto"], [1397159160, "America/New_York"]]
            }
        ]
    },
    "total_count": 1
}
```
