---
layout: documentation
title: Actigraphy
resource: Actigraphy
version: v7.0
versionhref: v70
permalink: /docs/v70_Actigraphy/
---

# {{ page.resource }}

The [Actigraphy](/docs/{{page.versionhref}}_Actigraphy) resource represents a summary of all [Activity](/docs/{{page.versionhref}}_Activity), [Sleep](/docs/{{page.versionhref}}_Sleep), [Body Mass](/docs/{{page.versionhref}}_BodyMass), [Workout](/docs/{{page.versionhref}}_Workout), and Heart Rate data for a user's day, but
it is not necessarily confined to a 24-hour period. All sleep sessions with end datetimes that fall between an actigraphy-day's
midnight-to-midnight boundary will be included in that day's actigraphy. The most recent values for the user's body weight, BMI, fat percent, and resting heart rate are reported.

The [Actigraphy](/docs/{{page.versionhref}}_Actigraphy) resource will de-duplicate overlapping [Workout](/docs/{{page.versionhref}}_Workout) data and [Activity](/docs/{{page.versionhref}}_Activity) data where applicable. For example, if a
user records a [Workout](/docs/{{page.versionhref}}_Workout) with a GPS-tracking app on their phone while also wearing a pedometer that records [Activity](/docs/{{page.versionhref}}_Activity) data, the
[Actigraphy](/docs/{{page.versionhref}}_Actigraphy) resource will return appropriate aggregate values (i.e. total distance, total steps, etc) during that time frame.
This allows a user to get an accurate picture of their day without having to remove their wearable devices.

The [Actigraphy](/docs/{{page.versionhref}}_Actigraphy) resource only supports retrieval of data and is not intended to be written to by clients.

## Resource URIs

**Collection URI:** `/{{page.version}}/actigraphy/`

## Item

### Item properties <a name="itemproperties"></a>

Name                 | Description                                                                                                                                                     | Type              | Units | HTTP Support
---                  | ---                                                                                                                                                             | ---               | ---   | ---
`date`               | The date that the Actigraphy summarizes.                                                                                                                        | ISO 8601 Date     |       | **GET:** Required
`start_datetime_utc` | The start datetime bound of the Actigraphy.                                                                                                                     | ISO 8601 Datetime |       | **GET:** Required
`end_datetime_utc`   | The end datetime bound of the Actigraphy.                                                                                                                       | ISO 8601 Datetime |       | **GET:** Required
`timezones`          | The effective timezones for Actigraphy. &dagger;                                                                                                                | Array             |       | **GET:** Required
`aggregates`         | Aggregated metric values, including the latest value for daily reported metrics (e.g. resting heart rate, fat mass percent).  These values may not always be consistent totals for corresponding metric types due to de-duplication of Workout and Activity data. | dict              |       | **GET:** Required
`metrics`            | Time series and finer-grained aggregates for each metric type that occur within the `start_datetime_utc` and `end_datetime_utc` bounds of the Actigraphy.                    | dict              |       | **GET:** Required
`workouts`           | Workouts that occured within the `start_datetime_utc` and `end_datetime_utc` bounds of the Actigraphy.                                                          | Array             |       | **GET:** Required

&dagger; Each member of the timezones list is a tuple containing an epoch timestamp and a timezone string (IANA Time Zone Database formatted). The timestamp is the time that the timezone change occurred. Timestamps can occur before `start_datetime_utc`.

### Item links <a name="itemlinks"></a>

`workouts.self` A link to the Workout resource
`workouts.activity_type` A link to an ActivityType resource for the workout

## Collection

### Collection methods

`GET` Get [Actigraphy](/docs/{{page.versionhref}}_Actigraphy) data for a given time period (required params)

### Collection query parameters

Name                   | Description                                                                                                          | Type                                        | Required
---                    | ---                                                                                                                  | ---                                         | ---
`start_date`           | Return Actigraphy data after this date, inclusively.                                                                 | ISO 8601 Date                               | Required
`end_date`             | Return Actigraphy data before this date, inclusively. Defaults to current date.                                      | ISO 8601 Date                               | Optional
`user`                 | Return Actigraphy for the specified [User](/docs/{{page.versionhref}}_User]                                                          | [User](/docs/{{page.versionhref}}_User] Resource href or id | Optional
`time_series_interval` | Specify the interval in seconds between points in time series.  Allowed values are 900, 1800, 3600.  Default is 900. | Number (integer)                            | Optional

### Collection properties

Name          | Description                                     | Type          | Units | HTTP Support
---           | ---                                             | ---           | ---   | ---
`total_count` | Total count of entities returned in collection  | integer       | N/A   | **GET**: required
`oldest_date` | The date of the oldest actigraphy for this user | ISO 8601 Date |       | **GET**: optional

### Collection links

`self` A link to this resource
`user` A link to the User resource that owns the {{ page.title }}

### Embedded collections

`actigraphies` A collection of {{ page.title }}s with properties as described under [Item properties](#itemproperties) and links as described under [Item links](#itemlinks)

## Usage

#### Fetching One Actigraphy

To fetch a single actigraphy for a date, issue a GET request to the [Actigraphy](/docs/{{page.versionhref}}_Actigraphy) resource passing in in the same date for `start_date` and `end_date`.

###### Request `GET /{{page.version}}/actigraphy/?start_date=2014-05-01&end_date=2014-05-01`.

### GET {{ page.title }} collection

###### Request `GET /{{page.version}}/actigraphy/?start_date=2014-04-16&end_date=2014-04-17`.

###### Response

```json
{
   "_embedded":{
      "actigraphies":[
         {
            "aggregates":{
               "distance":{
                  "sum":61
               },
               "bodymass":{
                  "latest":80.75
               },
               "bmi":{
                  "latest":23
               },
               "fat_mass_percent":{
                  "latest":29.5
               },
               "heart_rate_resting":{
                  "latest": 54
               },
               "active_time":{
                  "sum":180
               },
               "energy_expended":{
                  "sum":13995
               },
               "sleep":{
                  "sum":23424
               },
               "steps":{
                  "sum":78
               },
               "target_net_energy": {
                        "latest": 6819920
               },
               "energy_consumed": {
                  "sum": 4228517,
                  "details": {
                      "lunch": {
                          "sum": 1589920
                      },
                      "breakfast": {
                          "sum": 836800
                      },
                      "snack": {
                          "sum": 292880
                      },
                      "dinner": {
                          "sum": 1508917
                      }
                  }
              },
              "nutrients_consumed": {
                  "carbohydrates": {
                      "sum": "0.086527",
                      "details": {
                          "lunch": {
                              "sum": "0.042"
                          },
                          "breakfast": {
                              "sum": "0.038"
                          },
                          "snack": {
                              "sum": "0.005"
                          },
                          "dinner": {
                              "sum": "0.001527"
                          }
                      }
                  },
                  "fats": {
                      "sum": "0.056306",
                      "details": {
                          "lunch": {
                              "sum": "0.024"
                          },
                          "breakfast": {
                              "sum": "0.004"
                          },
                          "snack": {
                              "sum": "0.001"
                          },
                          "dinner": {
                              "sum": "0.027306"
                          }
                      }
                  },
                  "protein": {
                      "sum": "0.050042",
                      "details": {
                          "lunch": {
                              "sum": "0.006"
                          },
                          "breakfast": {
                              "sum": "0.008"
                          },
                          "snack": {
                              "sum": "0.011"
                          },
                          "dinner": {
                              "sum": "0.025042"
                          }
                      }
                  }
              }
            },
            "metrics":{
               "distance":[
                  {
                     "start_datetime_utc":"2014-04-16T07:00:00+00:00",
                     "end_datetime_utc":"2014-04-17T07:00:00+00:00",
                     "aggregates":{
                        "sum":61
                     },
                     "time_series":{
                        "epoch_values":[
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
                           [
                              ...
                           ],
                           [
                              1397656800,
                              20
                           ]
                        ],
                        "interval":900
                     }
                  }
               ],
               "energy_expended":[
                  {
                     "start_datetime_utc":"2014-04-16T07:00:00+00:00",
                     "end_datetime_utc":"2014-04-17T07:00:00+00:00",
                     "aggregates":{
                        "sum":13995.4801196916
                     },
                     "time_series":{
                        "epoch_values":[
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
                           [
                              ...
                           ],
                           [
                              1397656800,
                              4485.2481117128
                           ]
                        ],
                        "interval":900
                     }
                  }
               ],
               "steps":[
                  {
                     "start_datetime_utc":"2014-04-16T07:00:00+00:00",
                     "end_datetime_utc":"2014-04-17T07:00:00+00:00",
                     "aggregates":{
                        "sum":78
                     },
                     "time_series":{
                        "epoch_values":[
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
                           [
                              ...
                           ],
                           [
                              1397656800,
                              24
                           ]
                        ],
                        "interval":900
                     }
                  }
               ],
               "sleep":[
                  "start_datetime_utc":"2014-04-16T01:09:26+00:00",
                  "end_datetime_utc":"2014-04-16T08:08:10+00:00",
                  "sum":23424,
                  "details":{
                     "awake":{
                        "sum":550
                     },
                     "deep_sleep":{
                        "sum":10105
                     },
                     "light_sleep":{
                        "sum":13319
                     },
                     "time_to_sleep":{
                        "sum":273
                     },
                     "times_awakened":{
                        "sum":1
                     }
                  },
                  "time_series":{
                     "epoch_values":[
                        [
                           1397610566,
                           1
                        ],
                        [
                           1397610866,
                           2
                        ],
                        [
                           1397611766,
                           3
                        ],
                        [
                           ...
                        ],
                        [
                           1397645066,
                           1
                        ]
                     ]
                  }
               ]
            },
            "_links":{
               "user":[
                  {
                     "href":"/{{page.version}}/user/123/",
                     "id":"123"
                  }
               ]
            },
            "date":"2014-04-16",
            "start_datetime_utc":"2014-04-16T07:00:00+00:00",
            "end_datetime_utc":"2014-04-17T06:59:59+00:00",
            "timezones":[[946684800, "America/Chicago"]],
            "workouts":[

            ],
         },
         {
            "aggregates":{
               "distance":{
                  "sum":1498
               },
               "bodymass":{
                  "latest":80.0
               },
               "bmi":{
                  "latest":22
               },
               "fat_mass_percent":{
                  "latest":29.5
               },
               "heart_rate_resting":{
                  "latest": 50
               },
               "active_time":{
                  "sum":3060
               },
               "energy_expended":{
                  "sum":365342
               },
               "sleep":{
                  "sum":0
               },
               "steps":{
                  "sum":1799
               },
               "target_net_energy": {
                        "latest": 6819920
               },
               "energy_consumed": {
                  "sum": 4228517,
                  "details": {
                      "lunch": {
                          "sum": 1589920
                      },
                      "breakfast": {
                          "sum": 836800
                      },
                      "snack": {
                          "sum": 292880
                      },
                      "dinner": {
                          "sum": 1508917
                      }
                  }
              },
              "nutrients_consumed" : {
                  "carbohydrates_consumed": {
                      "sum": "0.086527",
                      "details": {
                          "lunch": {
                              "sum": "0.042"
                          },
                          "breakfast": {
                              "sum": "0.038"
                          },
                          "snack": {
                              "sum": "0.005"
                          },
                          "dinner": {
                              "sum": "0.001527"
                          }
                      }
                  },
                  "fats_consumed": {
                      "sum": "0.056306",
                      "details": {
                          "lunch": {
                              "sum": "0.024"
                          },
                          "breakfast": {
                              "sum": "0.004"
                          },
                          "snack": {
                              "sum": "0.001"
                          },
                          "dinner": {
                              "sum": "0.027306"
                          }
                      }
                  },
                  "protein_consumed": {
                      "sum": "0.050042",
                      "details": {
                          "lunch": {
                              "sum": "0.006"
                          },
                          "breakfast": {
                              "sum": "0.008"
                          },
                          "snack": {
                              "sum": "0.011"
                          },
                          "dinner": {
                              "sum": "0.025042"
                          }
                      }
                  }
               }
            },
            "metrics":{
               "distance":[
                  {
                     "start_datetime_utc":"2014-04-17T07:00:00+00:00",
                     "end_datetime_utc":"2014-04-18T07:00:00+00:00",
                     "aggregates":{
                        "sum":1498
                     }
                     "time_series":{
                        "epoch_values":[
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
                           [
                              ...
                           ],
                           [
                              1397798100,
                              33
                           ]
                        ],
                        "interval":900
                     }
                  }
               ],
               "energy_expended":[
                  {
                     "start_datetime_utc":"2014-04-17T07:00:00+00:00",
                     "end_datetime_utc":"2014-04-18T07:00:00+00:00",
                     "aggregates":{
                        "sum":365342.6945275458
                     },
                     "time_series":{
                        "epoch_values":[
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
                           [
                              ...
                           ],
                           [
                              1397798100,
                              7581.4079022325
                           ]
                        ],
                        "interval":900
                     }
                  }
               ],
               "steps":[
                  {
                     "start_datetime_utc":"2014-04-17T07:00:00+00:00",
                     "end_datetime_utc":"2014-04-18T07:00:00+00:00",
                     "aggregates":{
                        "sum":1799
                     },
                     "time_series":{
                        "epoch_values":[
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
                           [
                              ...
                           ],
                           [
                              1397798100,
                              42
                           ]
                        ],
                        "interval":900
                     }
                  }
               ],
               "sleep":[

               ]
            },
            "_links":{
               "user":[
                  {
                     "href":"/{{page.version}}/user/123/",
                     "id":"123"
                  }
               ]
            },
            "date":"2014-04-17",
            "start_datetime_utc":"2014-04-17T07:00:00+00:00",
            "end_datetime_utc":"2014-04-18T06:59:59+00:00",
            "timezones":[[946684800, "America/Chicago"]],
            "workouts":[
               {
                  "aggregates":{
                     "details":{
                        "distance":{
                           "sum":12877.93850112
                        },
                        "energy_expended":{
                           "sum":5230000
                        },
                        "steps":{
                           "sum":0
                        }
                     }
                  },
                  "end_datetime_utc":"2014-04-18T02:24:26+00:00",
                  "name":"Last Run",
                  "start_datetime_utc":"2014-04-18T01:07:19+00:00",
                  "_links":{
                     "self":[
                        {
                           "href":"/{{page.version}}/workout/134/",
                           "id":"134"
                        }
                     ],
                     "activity_type":[
                        {
                           "href":"/{{page.version}}/activity_type/16/",
                           "id":"16"
                        }
                     ]
                  }
               }
            ],
         }
      ]
   },
   "_links":{
      "self":[
         {
            "href":"/{{page.version}}/actigraphy/?start_date=2014-04-16&end_date=2014-04-17&limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/"
         }
      ]
   },
   "total_count":2,
   "oldest_date":"2014-01-01"
}
```
