---
name: User Stats
versions: api/0.1, api/0.2, api/0.3, api/0.4, v7.0, v7.1
released: 2014-01-01
modified: 2014-01-01
tags: user
title: User Stats
layout: documentation
path_version: v7.1
docs_version: v71
permalink: /docs/v71_User_Stats/
doc_uri: v71_User_Stats/
---

# {{ page.title }}

Returns aggregated statistics across activities the user has completed. By default, statistics are broken down by the type of activity and grouped into various date ranges depending on the query parameters.

## Resource URIs

**Item URI:** `/{{ page.path_version }}/user_stats/<pk>/`

## Item

### Item methods

`GET` Only method supported at this time (this resource is currently read-only).

### Item query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `aggregate_by_period` | Valid values: `day`, `week`, `month`, `year`, `lifetime`. Defaults to `lifetime`. Defines the spans over which aggregates are generated. Values `month` and `year` are calendar-based. `week` is based on a Sunday start. | text | No   |
| `end_date` | Format as YYYY-MM-DD. The end-bounding date to consider when generating aggregates. Workouts on this date are NOT counted, but any workouts earlier than this date (back to and including the start_date) are. Defaults to today + 1 day. | date | No   |
| `start_date` | Format as YYYY-MM-DD. The start-bounding date to consider when generating aggregates. Workouts on or after this date are counted (up to but not including the end_date). Defaults to end_date minus a variable number of days depending on the value of aggregate_by_period. | date | No   |
| `include_summary_stats` | The values normally returned in the `stats` array are broken down by activity_type. If this parameter is included and set to `true`, an additional `summary_stats` property will be included which rolls together all activity types for each aggregation period. Defaults to `false`. | boolean | No   |

### Embedded collections

`stats` A collection of stats items broken down by both aggregation period and activity_type, with properties as described below. For each parent activity type for which the user has at least one activity, and for each time period by which to aggregate, the resource includes the following fields:

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `activity_count` | number of activities | int |  | **GET**: required, **PUT**: required, **POST**: required |
| `distance` | meters traveled | int | meters | **GET**: required, **PUT**: required, **POST**: required |
| `duration` | seconds spent | int | seconds | **GET**: required, **PUT**: required, **POST**: required |
| `energy` | joules expended | int | joules | **GET**: required, **PUT**: required, **POST**: required |
| `avg_pace` | avg pace in seconds per meter | int | sec/m | **GET**: required, **PUT**: required, **POST**: required |
| `avg_speed` | avg speed in meters per second | int | m/sec | **GET**: required, **PUT**: required, **POST**: required |
| `aggregate_period` | object showing the start and end dates of the range included |  | m/sec | **GET**: required, **PUT**: required, **POST**: required |
| `time_in_heart_rate_zones` | object showing the start and end dates of the range included | int | sec | **GET**: required, **PUT**: required, **POST**: required |

`summary_stats` Present only if requested via the `include_summary_stats` query parameter documented above. Similar to `stats`, but rolls up all activity types for each aggregation period.

### Item links

`user` Link to the user resource for the user whose stats you're viewing.

## Usage

### GET {{ page.title }}

###### Request `GET: /{{ page.path_version }}/user_stats/{pk}

###### Response

```json
    [
        {
            "_links": { "activity_type": [ {...} ] },
            "aggregate_period": { "start": ..., "end": ... }
            "activity_count": ...,
            "distance": ...,
            "duration": ...,
            "energy": ...,
            "avg_pace": ...,
            "avg_speed": ...,
            "time_in_heart_rate_zones": {
                "zone_1": ...,
                ...
            }
        },
        ...
    ]
```
###### Status Code 403

Status code `403 FORBIDDEN` signifies that the requestor does not have the correct permissions to view the requested stats. The user that the stats belong to must either have privacy options set to `public` or `friends only` (in the case the requestor has been added as a friend).
