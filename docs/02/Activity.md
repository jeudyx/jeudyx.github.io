---
layout: documentation
title: Activity
resource: Activity
version: api/0.2
versionhref: 02
permalink: /docs/02_Activity/
---

# Activity resource
=================

This resource allows retrieval of activities bucketed by user's day.  Also see `Actigraphy` and `Activity Time Series`.

## Resource URIs

**Collection URI:** `{{page.version}}/activity/`


## Collection

### Collection methods

`GET` Retrieve a list of activities.

### Collection query parameters

| Name                    | Description                                                                                           | Type       | Required |
|-------------------------|-------------------------------------------------------------------------------------------------------|------------|----------|
| `user`                  | User id owner of the data. Must match the credentials in the request.                                 | id         |    Yes   |
| `offset`                | The zero-based index of the first item to include in the response                                     | int        |    No    |
| `limit`                 | The maximum number of items to include in the response                                                | int        |    No    |
| `recorder_type_key`     | Type key of a device used to record the activity. Examples: 'fitbit', 'jawboneupmoves'                | string     |    No    |
| `order_by`              | Can be one of ['date', '-date']. Defaults to 'date' (sorted by date ascending)                        | string     |    No    |
| `target_start_datetime` | An ISO8601 formatted string with offset indicating where to start the search                          | string     |    Yes   |
| `target_end_datetime`   | An ISO8601 formatted string with offset indicating where to end the search. Defaults to current time. | string     |    No    |


### Collection properties

| Name                    | Description                                             | Type |
|-------------------------|---------------------------------------------------------|------|
| `total_count`           | Total count of activity entities returned in collection | int  |


### Collection links

`self` A link to this resource


### Embedded collections

`activities` A collection of activities with properties as described under `Item properties`


### Item properties

| Name                                | Description                                                                                                          | Type                 | Units        |
|-------------------------------------|----------------------------------------------------------------------------------------------------------------------|----------------------|--------------|
| `start_datetime_utc`                | The instant in time that the activity began.                                                                         | datetime             | UTC datetime |
| `end_datetime_utc`                  | The instant in time that the activity ended.                                                                         | datetime             | UTC datetime |
| `created_datetime`                  | The instant in time that the activity was recorded by MapMyFitness.                                                  | datetime             | UTC datetime |
| `updated_datetime`                  | The instant in time that the activity was last modified by MapMyFitness.                                             | datetime             | UTC datetime |
| `recorder_type_key`                 | The key for the recorder type that recorded the data.                                                                | string               |              |
| `start_locale_timezone`             | The local timezone that the activity began in (IANA Time Zone Database formatted).                                   | string               |              |
| `reference_key`                     | Represents an activity uniquely in the environment in which the activity was recorded.                               | string               |              |
| `recorder_identifier`               | The unique identifier of the specific recorder or source of the activity data (i.e. serial no.)                      | string               |              |
| `aggregates`                        | The aggregates are a simple key-value dictionary. Some keys are represented discretely, while others are cumulative. | {AGGREGATES} object. |              |
| `aggregates.total_distance`         | The total cumulative distance moved during the activity.                                                                                                                                                                                                                                                                            | Number (float)                                            | meters                                       | **GET:** required **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.total_active_time`      | The total cumulative time moving or active during the activity.                                                                                                                                                                                                                                                                     | Number (integer)                                          | seconds                                      | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.total_steps`            | The total cumulative steps taken during the activity                                                                                                                                                                                                                                                                                | Number (integer)                                          |                                              | **GET:** required **POST:** optional **PUT:** optional                                                                                                           |
| `aggregates.total_calories`         | The total cumulative metabolic energy burned during the activity.                                                                                                                                                                                                                                                                   | Number (integer)                                          | joules                                       | **GET:** optional **POST:** optional **PUT:** optional                                                                                                           |


### Item links

`user` A link to the User resource that owns the activity

## Usage

### Retrieve a list of activities

###### Request `GET: /{{page.version}}/activity/?user={user_id}&target_start_datetime={time_stamp}`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "{{page.version}}/activity\/?target_start_datetime=2014-06-01T00%3A00%3A00-06%3A00&limit=20&user={User Id}&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https:\/\/www.mapmyapi.com\/docs\/"
            }
        ]
    },
    "_embedded": {
        "activities": [
            {
                "recorder_type_key": "jawboneupmoves",
                "reference_key": "20141124",
                "recorder_identifier": null,
                "updated_datetime": "2014-11-25T20:20:40+00:00",
                "created_datetime": "2014-11-24T06:00:03+00:00",
                "aggregates": {
                    "total_active_time": null,
                    "total_steps": 22751,
                    "total_distance": 19248,
                    "total_calories": 4780140
                },
                "time_series": {
                },
                "_links": {
                    "user": [
                        {
                            "href": "\/v7.0\/user\/{User Id}\/",
                            "id": "{User Id}"
                        }
                    ]
                },
                "start_datetime_utc": "2014-11-24T05:38:00+00:00",
                "has_time_series": false,
                "start_datetime_timezone": "America\/New_York",
                "end_datetime_utc": "2014-11-25T04:09:00+00:00"
            },
            {
                "recorder_type_key": "fitbug",
                "reference_key": "{User Id}_2014_06_11",
                "recorder_identifier": null,
                "updated_datetime": "2014-06-30T19:40:11+00:00",
                "created_datetime": "2014-06-30T19:40:11+00:00",
                "aggregates": {
                    "total_active_time": 3660,
                    "total_steps": 457,
                    "total_distance": 440,
                    "total_calories": 66944
                },
                "time_series": {
                },
                "_links": {
                    "user": [
                        {
                            "href": "\/v7.0\/user\/{User Id}\/",
                            "id": "{User Id}"
                        }
                    ]
                },
                "start_datetime_utc": "2014-06-11T05:00:00+00:00",
                "has_time_series": false,
                "start_datetime_timezone": "America\/Chicago",
                "end_datetime_utc": "2014-06-12T05:00:00+00:00"
            },
            {
                "recorder_type_key": "fitbug",
                "reference_key": "{User Id}_2014_06_10",
                "recorder_identifier": null,
                "updated_datetime": "2014-06-30T19:40:11+00:00",
                "created_datetime": "2014-06-30T19:40:11+00:00",
                "aggregates": {
                    "total_active_time": 4920,
                    "total_steps": 1646,
                    "total_distance": 1590,
                    "total_calories": 217568
                },
                "time_series": {
                },
                "_links": {
                    "user": [
                        {
                            "href": "\/v7.0\/user\/{User Id}\/",
                            "id": "{User Id}"
                        }
                    ]
                },
                "start_datetime_utc": "2014-06-10T05:00:00+00:00",
                "has_time_series": false,
                "start_datetime_timezone": "America\/Chicago",
                "end_datetime_utc": "2014-06-11T05:00:00+00:00"
            },
            {
                "recorder_type_key": "fitbug",
                "reference_key": "{User Id}_2014_06_09",
                "recorder_identifier": null,
                "updated_datetime": "2014-06-30T19:40:11+00:00",
                "created_datetime": "2014-06-30T19:40:11+00:00",
                "aggregates": {
                    "total_active_time": 2640,
                    "total_steps": 779,
                    "total_distance": 740,
                    "total_calories": 104600
                },
                "time_series": {
                },
                "_links": {
                    "user": [
                        {
                            "href": "\/v7.0\/user\/{User Id}\/",
                            "id": "{User Id}"
                        }
                    ]
                },
                "start_datetime_utc": "2014-06-09T05:00:00+00:00",
                "has_time_series": false,
                "start_datetime_timezone": "America\/Chicago",
                "end_datetime_utc": "2014-06-10T05:00:00+00:00"
            }
        ]
    },
    "total_count": 4
}
```