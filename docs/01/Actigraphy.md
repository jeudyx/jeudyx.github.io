---
layout: documentation
title: Actigraphy
resource: Actigraphy
version: api/0.1
versionhref: 01
permalink: /docs/01_Actigraphy/
---

# Actigraphy

The `Actigraphy` resource represents a summary of all `Activity`, `Sleep`, `BodyMass`, and `Workout` data for a user's day, but
it is not necessarily confined to a 24-hour period. All sleep sessions with end datetimes that fall between an actigraphy-day's
midnight-to-midnight boundary will be included in that day's actigraphy.

The `Actigraphy` resource will de-duplicate overlapping `Workout` data and `Activity` data where applicable. For example, if a
user records a `Workout` with a GPS-tracking app on their phone while also wearing a pedometer that records `Activity` data, the
`Actigraphy` resource will return appropriate aggregate values (i.e. total distance, total steps, etc) during that time frame.
This allows a user to get an accurate picture of their day without having to remove their wearable devices.

The `Actigraphy` resource only supports retrieval of data and is not intended to be written to by clients.

## Resource URIs

**Collection URI:** `/{{page.version}}/actigraphy/`

## Collection

### Collection Methods

`GET` Retrieve `Actigraphy` data for a given time period (required params)

### Collection Query Parameters

| Name         | Description                                                                                                            | Type   | Required |
|--------------|------------------------------------------------------------------------------------------------------------------------|--------|----------|
| `start_date` | Should be for a single date in the format `YYYY-MM-DD`. The result is inclusive of the date.                           | string | Required |
| `end_date`   | Should be for a single date in the format `YYYY-MM-DD`. The result is inclusive of the date. Defaults to current date. | string | Optional |

### Collection Properties

| Name                    | Description | Type      | Units    | HTTP Support      |
|-------------------------|-------------|-----------|----------|-------------------|
| user                    | desc        | `User`    |          | **GET:** Required |
| date                    | desc        | string    | Date     | **GET:** Required |
| start_datetime_utc      | desc        | datetime  |          | **GET:** Required |
| end_datetime_utc        | desc        | datetime  |          | **GET:** Required |
| start_datetime_timezone | desc        | tz string | Timezone | **GET:** Required |
| timezones               | desc        | list      |          | **GET:** Required |
| aggregates              | desc        | dict      |          | **GET:** Required |
| metrics                 | desc        | dict      |          | **GET:** Required |
| workouts                | desc        | list      |          | **GET:** Required |
| period                  | desc        | string    |          | **GET:** Required |

Usages
------

### GET existing Actigraphies

#### Fetching One Actigraphy

> TBD. Until this feature is fully supported, you can issue a `GET` request to the `Actigraphy` resource passing in in the same date for `start_date` and `end_date`.
> For example,`/{{page.version}}/actigraphy/?start_date=2014-05-01&end_date=2014-05-01`.

#### Fetching All Actigraphies

To fetch all actigraphies associated with an OAuth user, make a `GET` request to `/{{page.version}}/actigraphy/`.

###### Request `GET /{{page.version}}/actigraphy/?start_date=2014-04-16&end_date=2014-04-17`

###### Response

```json
{
  "_embedded": {
    "actigraphies": [
      {
        "aggregates": {
            "distance": {
                "sum": 61
            },
            "bodymass": {
                "latest": 80.75
            },
            "active_time": {
                "sum": 180
            },
            "energy_burned": {
                "sum": 13995
            },
            "sleep": {
                "sum": 23424
            },
            "steps": {
                "sum": 78
            }
        },
        "metrics": {
            "distance": [
              {
                "start_datetime_utc": "2014-04-16T07:00:00+00:00",
                "end_datetime_utc": "2014-04-17T07:00:00+00:00"
                "aggregates": {
                    "sum": 61
                }
                "time_series": {
                    "epoch_values": [
                        [
                            1397633400,
                            41
                        ],
                        [
                            1397634300,
                            0
                        ],
                        [
                            1397635200,
                            0
                        ],
                        [...],
                        [
                            1397656800,
                            20
                        ]
                    ],
                    "interval": 900
                }
              }
            ],
            "energy_burned": [
              {
                "start_datetime_utc": "2014-04-16T07:00:00+00:00",
                "end_datetime_utc": "2014-04-17T07:00:00+00:00",
                "aggregates": {
                    "sum": 13995.4801196916
                },
                "time_series": {
                    "epoch_values": [
                        [
                            1397633400,
                            9510.2320079788
                        ],
                        [
                            1397634300,
                            0
                        ],
                        [
                            1397635200,
                            0
                        ],
                        [...],
                        [
                            1397656800,
                            4485.2481117128
                        ]
                    ],
                    "interval": 900
                }
              }
            ],
            "steps": [
              {
                "start_datetime_utc": "2014-04-16T07:00:00+00:00",
                "end_datetime_utc": "2014-04-17T07:00:00+00:00",
                "aggregates": {
                    "sum": 78
                },
                "time_series": {
                    "epoch_values": [
                        [
                            1397633400,
                            54
                        ],
                        [
                            1397634300,
                            0
                        ],
                        [
                            1397635200,
                            0
                        ],
                        [...],
                        [
                            1397656800,
                            24
                        ]
                    ],
                    "interval": 900
                }
              }
            ],
            "sleep": [
                "start_datetime_utc": "2014-04-16T01:09:26+00:00",
                "end_datetime_utc": "2014-04-16T08:08:10+00:00",
                "sum": 23424,
                "details": {
                    "awake": {
                        "sum": 550
                    },
                    "deep_sleep": {
                        "sum": 10105
                    },
                    "light_sleep": {
                        "sum": 13319
                    },
                    "time_to_sleep": {
                        "sum": 273
                    },
                    "times_awakened": {
                        "sum": 1
                    }
                },
                "time_series": {
                    "epoch_values": [
                        [1397610566, 1],
                        [1397610866, 2],
                        [1397611766, 3],
                        [...],
                        [1397645066, 1]
                    ]
                }
            ]
        },
        "_links": {
            "user": [
                {
                    "href": "/{{page.version}}/user/123/",
                    "id": "123"
                }
            ]
        },
        "date": "2014-04-16",
        "start_datetime_utc": "2014-04-16T07:00:00+00:00",
        "end_datetime_utc": "2014-04-17T06:59:59+00:00",
        "start_datetime_timezone": "America/Los_Angeles",
        "workouts": [

        ],
      },
      {
        "aggregates": {
            "distance": {
                "sum": 1498
            },
            "bodymass": {
                "latest": 80.75
            },
            "active_time": {
                "sum": 3060
            },
            "energy_burned": {
                "sum": 365342
            },
            "sleep": {
                "sum": 0
            },
            "steps": {
                "sum": 1799
            }
        },
        "metrics": {
            "distance": [
              {
                "start_datetime_utc": "2014-04-17T07:00:00+00:00",
                "end_datetime_utc": "2014-04-18T07:00:00+00:00"
                "aggregates": {
                    "sum": 1498
                }
                "time_series": {
                    "epoch_values": [
                        [
                            1397749500,
                            113
                        ],
                        [
                            1397750400,
                            0
                        ],
                        [
                            1397751300,
                            0
                        ],
                        [...],
                        [
                            1397798100,
                            33
                        ]
                    ],
                    "interval": 900
                }
              }
            ],
            "energy_burned": [
              {
                "start_datetime_utc": "2014-04-17T07:00:00+00:00",
                "end_datetime_utc": "2014-04-18T07:00:00+00:00",
                "aggregates": {
                    "sum": 365342.6945275458
                },
                "time_series": {
                    "epoch_values": [
                        [
                            1397749500,
                            24551.7116289252
                        ],
                        [
                            1397750400,
                            0
                        ],
                        [
                            1397751300,
                            0
                        ],
                        [...],
                        [
                            1397798100,
                            7581.4079022325
                        ]
                    ],
                    "interval": 900
                }
              }
            ],
            "steps": [
              {
                "start_datetime_utc": "2014-04-17T07:00:00+00:00",
                "end_datetime_utc": "2014-04-18T07:00:00+00:00",
                "aggregates": {
                    "sum": 1799
                },
                "time_series": {
                    "epoch_values": [
                        [
                            1397749500,
                            135
                        ],
                        [
                            1397750400,
                            0
                        ],
                        [
                            1397751300,
                            0
                        ],
                        [...],
                        [
                            1397798100,
                            42
                        ]
                    ],
                    "interval": 900
                }
              }
            ],
            "sleep": [

            ]
        },
        "_links": {
            "user": [
                {
                    "href": "/{{page.version}}/user/123/",
                    "id": "123"
                }
            ]
        },
        "date": "2014-04-17",
        "start_datetime_utc": "2014-04-17T07:00:00+00:00",
        "end_datetime_utc": "2014-04-18T06:59:59+00:00",
        "start_datetime_timezone": "America/Los_Angeles",
        "workouts": [
            {
                "activity_type_id": 16,
                "aggregates": {
                    "details": {
                        "distance": {
                            "sum": 12877.93850112
                        },
                        "energy_burned": {
                            "sum": 5230000
                        },
                        "steps": {
                            "sum": 0
                        }
                    }
                },
                "end_datetime_utc": "2014-04-18T02:24:26+00:00",
                "name": "Last Run",
                "start_datetime_utc": "2014-04-18T01:07:19+00:00",
                "workout_id": 134
            }
        ],
      }
    ]
  },
  "_links": {
    "self": [
      {
        "href": "/{{page.version}}/actigraphy/?start_date=2014-04-16&end_date=2014-04-17&limit=20&offset=0"
      }
    ],
    "documentation": [
      {
        "href": "https://developer.underarmour.com/docs/"
      }
    ]
  },
  "total_count": 2
}
```
