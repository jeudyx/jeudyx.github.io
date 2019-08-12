---
layout: documentation
title: Workout
resource: Workout
version: v7.1
versionhref: v71
permalink: /docs/v71_Workout/
---

# {{page.title}}

This resource allows creation, retrieval, modification and deletion of a user's {{page.title}}s.  A {{page.title}} is considered
deliberate physical activity, as opposed to accumulating steps by passively walking over the course of the day.

## Resource URIs

**Item URI:** `/{{page.version}}/workout/{id}/`  
**Collection URI:** `/{{page.version}}/workout/`s

## Item

### Item Methods

`GET` Retrieve a single {{page.title}} entity by id.  The requesting user needs to be owner of the {{page.title}}.  
`DELETE` Delete a {{page.title}} entity.  

### Item query parameters

`field_set` Optional.  Options available are: ['time_series'].

### Item properties <a name="itemproperties"></a>

| Name                                | Description                                                                                                                                                                                                                                                                                                                        | Type                                                      | Units                                        | HTTP Support                                                                                                                                                     |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `name`                              | The name of the {{page.title}}.                                                                                                                                                                                                                                                                      | String.                                                   |                                              | **GET:** required **POST:** required **PUT:** required |
| `start_datetime`                    | The instant in time that the {{page.title}} began.                                                                                                                                                                                                                                                                                        | String. Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ. |                                              | **GET:** required **POST:** required **PUT:** required                                                                                                           |
| `start_locale_timezone`             | The local timezone that the {{page.title}} began in.                                                                                                                                                                                                                                                                                      | String. IANA Time Zone Database formatted.                |                                              | **GET:** required **POST:** required **PUT:** required                                                                                                           |
| `created_datetime`                  | The instant in time that the {{page.title}} was recorded by Under Armour.                                                                                                                                                                                                                                                                 | String. Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ. |                                              | **GET:** required                                                                                                                                                |
| `updated_datetime`                  | The instant in time that the {{page.title}} was last modified by Under Armour.                                                                                                                                                                                                                                                            | String. Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ. |                                              | **GET:** required                                                                                                                                                |
| `reference_key`                     | Represents a {{page.title}} uniquely in environment in which the {{page.title}} was recorded.                                                                                                                                                                                                                                                    | String.                                                   |                                              | **GET:** required **POST:** optional **PUT:** optional                                                                                                           |
| `source`                            | The name of the source that recorded the {{page.title}}.                                                                                                                                                                                                                                                                                  | String.                                                   |                                              | **GET:** required                                                                                                                                                |
| `attachments`                       | For attaching an image to this {{page.title}}. See [`Image`](/docs/{{page.versionhref}}_Image) and [`Activity Story`](/docs/{{page.versionhref}}_Activity_Story).                                                                                                                                                                                                                 | {ATTACHMENTS} object.                                     |                                              | **POST:** optional **PUT:** optional                                                                                                                             |
| `sharing`                           | Dictionary indicating which social networks to share this {{page.title}} with. Valid keys are `facebook` and `twitter`.                                                                                                                                                                                                                   | Dictionary of sharing indicators.                         |                                              | **POST:** optional **PUT:** optional                                                                                                                             |
| `notes`                             | The notes that describe the {{page.title}}.                                                                                                                                                                                                                                                                                               | String.                                                   |                                              | **GET:** required **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates`                        | The aggregates are a simple key-value dictionary. Some keys are represented discretely, while others are cumulative.                                                                                                                                                                                                               | {AGGREGATES} object.                                      |                                              | **GET:** required **POST:** required **PUT:** required                                                                                                           |
| `aggregates.distance_total`         | The total cumulative distance moved during the {{page.title}}.                                                                                                                                                                                                                                                                            | Number (float)                                            | meters                                       | **GET:** required **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.metabolic_energy_total` | The total cumulative metabolic energy burned during the {{page.title}}.                                                                                                                                                                                                                                                                   | Number (integer)                                          | joules                                       | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.active_time_total`      | The total cumulative time moving or active during the {{page.title}}.                                                                                                                                                                                                                                                                     | Number (integer)                                          | seconds                                      | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.elapsed_time_total`     | The total cumulative time active and/or inactive during the {{page.title}}.                                                                                                                                                                                                                                                               | Number (integer)                                          | seconds                                      | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.steps_total`            | The total cumulative steps taken during the {{page.title}}                                                                                                                                                                                                                                                                                | Number (integer)                                          |                                              | **GET:** required **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.heartrate_min`          | The lowest discrete heart rate measurement during the {{page.title}}                                                                                                                                                                                                                                                                      | Number (integer)                                          | beats/minute                                 | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.heartrate_max`          | The highest discrete heart rate measurement during the {{page.title}}                                                                                                                                                                                                                                                                     | Number (integer)                                          | beats/minute                                 | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.heartrate_avg`          | The cumulative average heart rate measured during the {{page.title}}                                                                                                                                                                                                                                                                      | Number (integer)                                          | beats/minute                                 | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.speed_min`              | The lowest discrete speed measurement during the {{page.title}}                                                                                                                                                                                                                                                                           | Number (float)                                            | meters/second                                | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.speed_max`              | The highest discrete speed measurement during the {{page.title}}                                                                                                                                                                                                                                                                          | Number (float)                                            | meters/second                                | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.speed_avg`              | The cumulative average speed measured during the {{page.title}}                                                                                                                                                                                                                                                                           | Number (float)                                            | meters/second                                | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.cadence_min`            | The lowest discrete cadence measurement during the {{page.title}}                                                                                                                                                                                                                                                                         | Number (integer)                                          | revolutions/minute                           | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.cadence_max`            | The highest discrete cadence measurement during the {{page.title}}                                                                                                                                                                                                                                                                        | Number (integer)                                          | revolutions/minute                           | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.cadence_avg`            | The cumulative average cadence measured during the {{page.title}}                                                                                                                                                                                                                                                                         | Number (integer)                                          | revolutions/minute                           | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.power_min`              | The lowest discrete power measurement during the {{page.title}}                                                                                                                                                                                                                                                                           | Number (integer)                                          | watts                                        | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.power_max`              | The highest discrete power measurement during the {{page.title}}                                                                                                                                                                                                                                                                          | Number (integer)                                          | watts                                        | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.power_avg`              | The cumulative average power measured during the {{page.title}}                                                                                                                                                                                                                                                                           | Number (integer)                                          | watts                                        | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `has_time_series`                   | Indicates whether or not the {{page.title}} has time_series data.                                                                                                                                                                                                                                                                         | Boolean.                                                  |                                              | **GET:** required                                                                                                                                                |
| `time_series`                       | The individual points of measurement that describe specifically what was happening offset by time. Each time series item is a list of tuples with the first item being the offset in seconds from the {{page.title}} start, and the second item being the measurement(s). The seconds offset can be represented as floating-point number. | {TIME_SERIES} Object.                                     |                                              | **GET:** optional, field_set=time_series **POST:** optional **PUT:** optional                                                                                    |
| `time_series.position`              | The GPS coordinates and elevation at each individual discrete point during the {{page.title}}. An example would be `[0, {'elevation': 5, "lat": 107.134, "lng": 75.234}]`                                                                                                                                                                 | Array of position tuples                                  | degrees for lat/lng, meters is for elevation | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `time_series.distance`              | The cumulative distance covered by the {{page.title}} at each point. The distance value should be monotonically increasing.                                                                                                                                                                                                               | Array of distance tuples                                  | meters                                       | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `time_series.heartrate`             | The heart rate measurement at each individual discrete point during the {{page.title}}.                                                                                                                                                                                                                                                   | Array of heart rate tuples                                 | beats/minute                                 | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `time_series.speed`                 | The speed measurement at each individual discrete point during the {{page.title}}.                                                                                                                                                                                                                                                        | Array of speed tuples                                     | meters/second                                | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `time_series.cadence`               | The cadence measurement at each individual discrete point during the {{page.title}}.                                                                                                                                                                                                                                                      | Array of cadence tuples                                   | revolutions/minute                           | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `time_series.power`                 | The power measurement at each individual discrete point during the {{page.title}}.                                                                                                                                                                                                                                                        | Array of power tuples                                     | watts                                        | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `time_series.timer_stop`            | A timer_stop tuple indicates the the {{page.title}} was paused for some length of time. The beginning of the pause should be the offset, and the duration of the pause should be the value in seconds. The client is responsible for including timer_stop when writing a {{page.title}}.                                                         | Array of timer_stop tuples                                | seconds                                      | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |

### Item links <a name="itemlinks"></a>

`self` A link to this resource  
`user` A link to the User resource that owns the {{page.title}}  
`activity_type` A link to the ActivityType resource that best describes the {{page.title}}  
`route` A link to a Route resource that is associated with the {{page.title}}  
`privacy` A link to the privacy_option associated with the {{page.title}}  

## Collection

### Collection methods

`GET` Retrieve a list of {{page.title}} entities using valid query parameters.  
`POST` Create a {{page.title}} entity.  
`PUT` Upsert a {{page.title}} entity.  If it already exists, it will be updated; otherwise a new entity will be created.  

### Collection query parameters

| Name                  | Description                                                                                                                                                                  | Type                                              | Required |
|---                    |---                                                                                                                                                                           |---                                                |---       |
| `user`                | Return {{page.title}}s for the specified `User`.                                                                                                                                    | `User` Resource href or id.                       | Yes      |
| `activity_type`       | Filter {{page.title}}s by the `ActivityType` specified. Multiple comma-separated values of this parameter are allowed.                                                              | `ActivityType` Resource href or id.               | No       |
| `updated_before`      | Return {{page.title}}s updated before the specified UTC datetime                                                                                                                    | Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ. | No       |
| `updated_after`       | Return {{page.title}}s updated after the specified UTC datetime                                                                                                                     | Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ. | No       |
| `created_before`      | Return {{page.title}}s created before the specified UTC datetime                                                                                                                    | Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ. | No       |
| `created_after`       | Return {{page.title}}s created after the specified UTC datetime                                                                                                                     | Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ. | No       |
| `started_before`      | Return {{page.title}}s started before the specified UTC datetime                                                                                                                    | Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ. | No       |
| `started_after`       | Return {{page.title}}s started after the specified UTC datetime                                                                                                                     | Datetime, ISO8601 formatted YYYY-MM-DDThh:mm:ssZ. | No       |
| `order_by`            | Order {{page.title}}s by specified field. Possible values are ['start_datetime', '-start_datetime']. Multiple comma-separated values of this parameter are allowed (one per field). | String                                            | No       |
| `workout_attribution` | Filter {{page.title}}s by `workout_attribution`. Accepts one or more comma-separated attributions, which are OR'd together.                                                         | String                                            | No       |
| `user_gear`         | Return {{page.title}}s associated with the referenced `UserGear` object. | `UserGear` href | No |


### Collection properties

| Name          | Description                                            | Type             | Units | HTTP Support      |
|---------------|--------------------------------------------------------|------------------|-------|-------------------|
| `total_count` | Total count of {{page.title}} entities returned in collection | Number (integer) |       | **GET:** required |


### Collection links

`self` A link to this resource

### Embedded collections

`{{page.title}}s` A collection of {{page.title}}s with properties as described under [Item properties](#itemproperties) and links as described under [Item links](#itemlinks)

## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/workout/{id}/`

###### Response

```json
{
    "start_datetime": "2014-08-04T01:36:56+00:00",
    "name": "Hiked 2.22 mi on 08\/04\/2014",
    "updated_datetime": "2014-08-05T01:20:23+00:00",
    "created_datetime": "2014-08-05T01:20:23+00:00",
    "notes": "A great workout!",
    "reference_key": null,
    "start_locale_timezone": "America\/Los_Angeles",
    "source": "Android_Hike",
    "_links": {
        "privacy": [{
            "href": "\/{{page.version}}\/privacy_option\/{privacy_option_id}\/",
            "id": "{privacy_option_id}"
        }],
        "self": [{
            "href": "\/{{page.version}}\/workout\/{id}\/",
            "id": "{id}"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
        }],
        "user": [{
            "href": "\/{{page.version}}\/user\/{user_id}\/",
            "id": "{user_id}"
        }],
        "route": [{
            "href": "\/{{page.version}}\/route\/{route_id}\/",
            "id": "{route_id}"
        }],
        "activity_type": [{
            "href": "\/{{page.version}}\/activity_type\/{activity_type_id}\/",
            "id": "{activity_type_id}"
        }]
    },
    "has_time_series": true,
    "is_verified": true,
    "aggregates": {
        "active_time_total": 2598.0,
        "distance_total": 3579.21324288,
        "steps_total": 0.0,
        "speed_avg": 1.3776789312,
        "elapsed_time_total": 2599.0,
        "metabolic_energy_total": 1958112.0
    }
}
```

### DELETE {{page.title}} entity

###### Request `DELETE: /{{page.version}}/workout/{id}/`

###### Response

```
204 No Response
```

### GET {{page.title}} collection

###### Request `GET: /{{page.version}}/workout/?user={user_id}`

###### Response

```json
{
    "_links": {
        "self": [{
            "href": "\/{{page.version}}\/workout\/?limit=20&user={user_id}&offset=0"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
        }]
    },
    "_embedded": {
        "workouts": [{
            "start_datetime": "2014-06-24T01:44:49+00:00",
            "name": "Hiked 4.41 mi on 06\/23\/2014",
            "updated_datetime": "2014-06-24T02:27:22+00:00",
            "created_datetime": "2014-06-24T02:27:22+00:00",
            "notes": "A great workout!",
            "reference_key": null,
            "start_locale_timezone": "America\/Los_Angeles",
            "source": "Android_Hike",
            "_links": {
                "self": [{
                    "href": "\/{{page.version}}\/workout\/{workout_id}\/",
                    "id": "{workout_id}"
                }],
                "route": [{
                    "href": "\/{{page.version}}\/route\/{route_id}\/",
                    "id": "{route_id}"
                }],
                "activity_type": [{
                    "href": "\/{{page.version}}\/activity_type\/{activity_type_id}\/",
                    "id": "{activity_type_id}"
                }],
                "user": [{
                    "href": "\/{{page.version}}\/user\/{user_id}\/",
                    "id": "{user_id}"
                }],
                "privacy": [{
                    "href": "\/{{page.version}}\/privacy_option\/{privacy_option_id}\/",
                    "id": "{privacy_option_id}"
                }]
            },
            "has_time_series": true,
            "is_verified": true,
            "aggregates": {
                "active_time_total": 5887.0,
                "distance_total": 7099.17043968,
                "steps_total": 0.0,
                "speed_avg": 1.2059038112,
                "elapsed_time_total": 6143.0,
                "metabolic_energy_total": 4439224.0
            }
        }]
    },
    "total_count": 1
}
```

### POST {{page.title}} entity

###### Request `POST: /{{page.version}}/workout/`

```json
{
    "start_datetime": "2014-02-26T20:32:33.768863Z",
    "name": "Sample Workout JSON",
    "privacy": "/{{page.version}}/privacy_option/{privacy_option_id}/",
    "attachments": {
        "items": [ {
            "object": {
                "type": "photo"
                }
        } ]
    },
    "sharing": {
        "facebook": true,
        "twitter": false
    },
    "aggregates": {
        "active_time_total": 10.7,
        "torque_min": 10.7,
        "power_min": 10.7,
        "distance_total": 10.7,
        "cadence_max": 10.7,
        "speed_max": 10.7,
        "speed_min": 10.7,
        "heartrate_min": 100,
        "cadence_min": 10.7,
        "speed_avg": 10.7,
        "torque_max": 10.7,
        "cadence_avg": 10.7,
        "power_avg": 10.7,
        "heartrate_max": 160,
        "power_max": 10.7,
        "elapsed_time_total": 10.7,
        "heartrate_avg": 10.7,
        "metabolic_energy_total": 10.7,
        "torque_avg": 10.7
    },
    "time_series": {
        "distance": [[0, 65], [1, 54], [2, 35]],
        "heartrate": [[0, 100], [1, 120], [2, 110]],
        "power": [[0, 123], [1, 120], [2, 115]],
        "timer_stop": [[1, 1], [3, 4], [8, 20]],
        "torque": [[0, 21], [1, 64], [2, 98]],
        "steps": [[0, 21], [1, 32], [2, 31]],
        "position": [
            [0, {"lat": 107.134, "lng": 75.234, "elevation": 5}],
            [1, {"lat": 107.1356, "lng": 75.123, "elevation": 5.2}],
            [2, {"lat": 107.1365, "lng": 75.012, "elevation": 5.3}]
        ],
        "speed": [[0, 7.5], [1, 8.5], [2, 8.2]],
        "cadence": [[0, 32], [1, 36], [2, 34]]
    },
    "start_locale_timezone": "US/Central",
    "activity_type": "/{{page.version}}/activity_type/{activity_type_id}"
}
```

###### Response

```json
{
   "start_datetime":"2014-02-26T20:32:33.768863Z",
   "name":"Sample Workout JSON",
   "privacy":"/{{page.version}}/privacy_option/{privacy_option_id}/",
   "aggregates":{
      "active_time_total":10.7,
      "torque_min":10.7,
      "power_min":10.7,
      "distance_total":10.7,
      "cadence_max":10.7,
      "speed_max":10.7,
      "speed_min":10.7,
      "heartrate_min":100,
      "cadence_min":10.7,
      "speed_avg":10.7,
      "torque_max":10.7,
      "cadence_avg":10.7,
      "power_avg":10.7,
      "heartrate_max":160,
      "power_max":10.7,
      "elapsed_time_total":10.7,
      "heartrate_avg":10.7,
      "metabolic_energy_total":10.7,
      "torque_avg":10.7
   },
   "time_series":{
      "distance":[
         [
            0,
            65
         ],
         [
            1,
            54
         ],
         [
            2,
            35
         ]
      ],
      "heartrate":[
         [
            0,
            100
         ],
         [
            1,
            120
         ],
         [
            2,
            110
         ]
      ],
      "power":[
         [
            0,
            123
         ],
         [
            1,
            120
         ],
         [
            2,
            115
         ]
      ],
      "timer_stop":[
         [
            1,
            1
         ],
         [
            3,
            4
         ],
         [
            8,
            20
         ]
      ],
      "torque":[
         [
            0,
            21
         ],
         [
            1,
            64
         ],
         [
            2,
            98
         ]
      ],
      "steps":[
         [
            0,
            21
         ],
         [
            1,
            32
         ],
         [
            2,
            31
         ]
      ],
      "position":[
         [
            0,
            {
               "lat":107.134,
               "lng":75.234,
               "elevation":5
            }
         ],
         [
            1,
            {
               "lat":107.1356,
               "lng":75.123,
               "elevation":5.2
            }
         ],
         [
            2,
            {
               "lat":107.1365,
               "lng":75.012,
               "elevation":5.3
            }
         ]
      ],
      "speed":[
         [
            0,
            7.5
         ],
         [
            1,
            8.5
         ],
         [
            2,
            8.2
         ]
      ],
      "cadence":[
         [
            0,
            32
         ],
         [
            1,
            36
         ],
         [
            2,
            34
         ]
      ]
   },
   "start_locale_timezone":"US/Central",
   "activity_type":"/${version}/activity_type/{activity_type_id}/",
   "_links": {
      "self": [{
        "href": "\/${version}\/workout\/{workout_id}\/",
        "id": "{workout_id}"
      }],
      "route": [{
        "href": "\/${version}\/route\/{route_id}\/",
        "id": "{route_id}"
      }],
      "activity_type": [{
        "href": "\/${version}\/activity_type\/{activity_type_id}\/",
        "id": "{activity_type_id}"
      }],
      "user": [{
        "href": "\/${version}\/user\/{user_id}\/",
        "id": "{user_id}"
      }],
      "privacy": [{
        "href": "\/${version}\/privacy_option\/{privacy_option_id}\/",
        "id": "{privacy_option_id}"
      }]
   }
}
```

### PUT {{page.title}} entity

###### Request `PUT: /{{page.version}}/workout/{id}/`

```json
{
    "start_datetime": "2014-02-26T20:32:33.768863Z",
    "name": "Sample Workout JSON",
    "privacy": "/{{page.version}}/privacy_option/{privacy_option_id}/",
    "aggregates": {
        "active_time_total": 10.7,
        "torque_min": 10.7,
        "power_min": 10.7,
        "distance_total": 10.7,
        "cadence_max": 10.7,
        "speed_max": 10.7,
        "speed_min": 10.7,
        "heartrate_min": 100,
        "cadence_min": 10.7,
        "speed_avg": 10.7,
        "torque_max": 10.7,
        "cadence_avg": 10.7,
        "power_avg": 10.7,
        "heartrate_max": 160,
        "power_max": 10.7,
        "elapsed_time_total": 10.7,
        "heartrate_avg": 10.7,
        "metabolic_energy_total": 10.7,
        "torque_avg": 10.7
    },
    "time_series": {
        "distance": [[0, 65], [1, 54], [2, 35]],
        "heartrate": [[0, 100], [1, 120], [2, 110]],
        "power": [[0, 123], [1, 120], [2, 115]],
        "timer_stop": [[1, 1], [3, 4], [8, 20]],
        "torque": [[0, 21], [1, 64], [2, 98]],
        "steps": [[0, 21], [1, 32], [2, 31]],
        "position": [
            [0, {"lat": 107.134, "lng": 75.234, "elevation": 5}],
            [1, {"lat": 107.1356, "lng": 75.123, "elevation": 5.2}],
            [2, {"lat": 107.1365, "lng": 75.012, "elevation": 5.3}]
        ],
        "speed": [[0, 7.5], [1, 8.5], [2, 8.2]],
        "cadence": [[0, 32], [1, 36], [2, 34]]
    },
    "start_locale_timezone": "US/Central",
    "activity_type": "/{{page.version}}/activity_type/{activity_type_id}"
}
```

###### Response

```json
{
   "start_datetime":"2014-02-26T20:32:33.768863Z",
   "name":"Sample Workout JSON",
   "privacy":"/${version}/privacy_option/{privacy_option_id}/",
   "aggregates":{
      "active_time_total":10.7,
      "torque_min":10.7,
      "power_min":10.7,
      "distance_total":10.7,
      "cadence_max":10.7,
      "speed_max":10.7,
      "speed_min":10.7,
      "heartrate_min":100,
      "cadence_min":10.7,
      "speed_avg":10.7,
      "torque_max":10.7,
      "cadence_avg":10.7,
      "power_avg":10.7,
      "heartrate_max":160,
      "power_max":10.7,
      "elapsed_time_total":10.7,
      "heartrate_avg":10.7,
      "metabolic_energy_total":10.7,
      "torque_avg":10.7
   },
   "time_series":{
      "distance":[
         [
            0,
            65
         ],
         [
            1,
            54
         ],
         [
            2,
            35
         ]
      ],
      "heartrate":[
         [
            0,
            100
         ],
         [
            1,
            120
         ],
         [
            2,
            110
         ]
      ],
      "power":[
         [
            0,
            123
         ],
         [
            1,
            120
         ],
         [
            2,
            115
         ]
      ],
      "timer_stop":[
         [
            1,
            1
         ],
         [
            3,
            4
         ],
         [
            8,
            20
         ]
      ],
      "torque":[
         [
            0,
            21
         ],
         [
            1,
            64
         ],
         [
            2,
            98
         ]
      ],
      "steps":[
         [
            0,
            21
         ],
         [
            1,
            32
         ],
         [
            2,
            31
         ]
      ],
      "position":[
         [
            0,
            {
               "lat":107.134,
               "lng":75.234,
               "elevation":5
            }
         ],
         [
            1,
            {
               "lat":107.1356,
               "lng":75.123,
               "elevation":5.2
            }
         ],
         [
            2,
            {
               "lat":107.1365,
               "lng":75.012,
               "elevation":5.3
            }
         ]
      ],
      "speed":[
         [
            0,
            7.5
         ],
         [
            1,
            8.5
         ],
         [
            2,
            8.2
         ]
      ],
      "cadence":[
         [
            0,
            32
         ],
         [
            1,
            36
         ],
         [
            2,
            34
         ]
      ]
   },
   "start_locale_timezone":"US/Central",
   "activity_type":"/${version}/activity_type/{activity_type_id}/",
   "_links": {
      "self": [{
        "href": "\/${version}\/workout\/{workout_id}\/",
        "id": "{workout_id}"
      }],
      "route": [{
        "href": "\/${version}\/route\/{route_id}\/",
        "id": "{route_id}"
      }],
      "activity_type": [{
        "href": "\/${version}\/activity_type\/{activity_type_id}\/",
        "id": "{activity_type_id}"
      }],
      "user": [{
        "href": "\/${version}\/user\/{user_id}\/",
        "id": "{user_id}"
      }],
      "privacy": [{
        "href": "\/${version}\/privacy_option\/{privacy_option_id}\/",
        "id": "{privacy_option_id}"
      }]
   }
}

```
