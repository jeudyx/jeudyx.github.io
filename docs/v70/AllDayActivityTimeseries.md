---
layout: documentation
title: All Day Activity Time Series
resource: All Day Activity Time Series
version: v7.0
versionhref: v70
permalink: /docs/v70_All_Day_Activity_Time_Series/
---

# {{page.title}}

The `{{page.title}}` resource is intended for clients to persist time series data related to a user's passive activity. Currently supported time series are `energy_expended`, `distance`, and `steps`. See [Units](/docs/{{page.versionhref}}_Units) for information on units.

For proper identification, the client will need to send a [`data_source`](/docs/{{page.versionhref}}_DataSource) as either an embedded object or a link.

Each series can have a maximum of 11,520 points which is equivalent to 8 days of one minute resolution.  There is also
a limit of 8 days difference between the first time series point and the last.  Clients should take care that they send
data within both of these limits.

After adding time series data with this endpoint, clients will typically see it exposed again in aggregate via the [Actigraphy](/docs/{{page.versionhref}}_Actigraphy) resource.

## Resource URIs

**Collection URI:** `/{{page.version}}/allday_activity_timeseries/`

### Collection methods

`POST` Record activities.

### Collection properties

| Name            | Description                                                                                                                    | Type                 | Units | HTTP Support         |
| ---             | ---                                                                                                                            | ---                  | ---   | -------------------- |
| `external_id`   | The unique external reference id for this {{page.title}}. Specifying the same `external_id` on multiple requests will overwrite data. | string               |       | **POST:** Required   |
| `time_series`   | Currently supports `energy_expended`, `distance`, and `steps` all in [SI units](/docs/{{page.versionhref}}_Units)                              | {TIME_SERIES} object |       | **POST:**  Required  |
| `timezones`     | List of user timezone events that intersect with the time represented by this sleep.                                           | array                |       | **POST:**  Optional  |


###### Example values

`time_series` - The time_series object with keys for measurement types (i.e. steps, distance or energy_expended). Each measurement type has data for both interval and values. The interval specifies the time between measurements, in seconds while the values specify [timestamp, value] tuples indicating the instantaneous measurement at each point in time.

```json
{
    "steps": {
        "interval": 100,
        "values": [
            [1400781090, 10],
            [1400781190, 8],
            [1400781290, 15],
            [1400781390, 12],
            [1400781490, 11],
            [1400781590, 0],
            [1400781690, 0],
            [1400781790, 2],
            [1400781890, 8],
            [1400781990, 0],
            [1400782090, 15],
            [1400782190, 20],
            [1400782290, 22],
            ...
        ]
    },
    "distance": {
        "interval": 100,
        "values": [
            [1400781090, 6.5],
            [1400781190, 5.2],
            [1400781290, 9.75],
            [1400781390, 7.8],
            [1400781490, 7.15],
            [1400781590, 0.0],
            [1400781690, 0.0],
            [1400781790, 1.3],
            [1400781890, 5.2],
            [1400781990, 0.0],
            [1400782090, 9.75],
            [1400782190, 13.0],
            [1400782290, 14.3],
            ...
        ]
    },
    "energy_expended": {
        "interval": 100,
        "values": [
            [1400781090, 14363.6723671042],
            [1400781190, 8271.7679920085993],
            [1400781290, 5401.5440358986998],
            [1400781390, 11890.928031923901],
            [1400781490, 6916.1519880338001],
            [1400781590, 4284.4162035097997],
            [1400781690, 7183.9280319238997],
            [1400781790, 1941.3759441394],
            [1400781890, 6363.8641157293996],
            [1400781990, 2297.0161037465],
            [1400782090, 5547.9838962368003],
            [1400782190, 8723.6401596195992],
            [1400782290, 16489.143936152199],
            ...
        ]
    }
}
```

`timezones` - A list of `[epoch, timezone`] tuples representing transitions of the user to a new timezone. The first item of each tuple represents the event's epoch timestamp and the second item is the IANA Time Zone Database formatted string for the event.

```json
[
    [1400781090, "US/Central"],
    [1400781190, "US/Eastern"],
    [1400781290, "US/Central"],
    [1400781390, "US/Mountain"]
]
```


## Usage

### Saving an {{page.title}} dataset with a linked [Data Source](/docs/{{page.versionhref}}_DataSource)

###### Request `POST /{{page.version}}/allday_activity_timeseries/`

```json
{
    "time_series": {
        "steps": {
            "interval": 100,
            "values": [
                [1400781090, 10],
                [1400781190, 8],
                [1400781290, 15],
                [1400781390, 12],
                [1400781490, 11],
                [1400781590, 0],
                [1400781690, 0],
                [1400781790, 2],
                [1400781890, 8],
                [1400781990, 0],
                [1400782090, 15],
                [1400782190, 20],
                [1400782290, 22],
                ...
            ]
        },
        "distance": {
            "interval": 100,
            "values": [
                [1400781090, 6.5],
                [1400781190, 5.2],
                [1400781290, 9.75],
                [1400781390, 7.8],
                [1400781490, 7.15],
                [1400781590, 0.0],
                [1400781690, 0.0],
                [1400781790, 1.3],
                [1400781890, 5.2],
                [1400781990, 0.0],
                [1400782090, 9.75],
                [1400782190, 13.0],
                [1400782290, 14.3],
                ...
            ]
        },
        "energy_expended": {
            "interval": 100,
            "values": [
                [1400781090, 14363.6723671042],
                [1400781190, 8271.7679920085993],
                [1400781290, 5401.5440358986998],
                [1400781390, 11890.928031923901],
                [1400781490, 6916.1519880338001],
                [1400781590, 4284.4162035097997],
                [1400781690, 7183.9280319238997],
                [1400781790, 1941.3759441394],
                [1400781890, 6363.8641157293996],
                [1400781990, 2297.0161037465],
                [1400782090, 5547.9838962368003],
                [1400782190, 8723.6401596195992],
                [1400782290, 16489.143936152199],
                ...
            ]
        }
    },
    "timezones": [
        [1400781090, "America/Chicago"],
        [1400781490, "America/New_York"],
        [1400781890, "America/Toronto"],
        [1400782290, "America/New_York"]
    ],
    "external_id": "user-activity-1400781090",
    "_links": {
        "data_source": [
            {
                "href": "/{{page.version}}/data_source/{data_source_id}/",
                "id": "{data_source_id}"
            }
        ]
    }
}
```

###### Response `204`

### Saving an {{page.title}} dataset with an embedded [Device](/docs/{{page.versionhref}}_Device)

###### Request `POST /{{page.version}}/allday_activity_timeseries/`

```json
{
    "time_series": {
        "steps": {
            "interval": 100,
            "values": [
                [1400781090, 10],
                [1400781190, 8],
                [1400781290, 15],
                [1400781390, 12],
                [1400781490, 11],
                [1400781590, 0],
                [1400781690, 0],
                [1400781790, 2],
                [1400781890, 8],
                [1400781990, 0],
                [1400782090, 15],
                [1400782190, 20],
                [1400782290, 22],
                ...
            ]
        },
        "distance": {
            "interval": 100,
            "values": [
                [1400781090, 6.5],
                [1400781190, 5.2],
                [1400781290, 9.75],
                [1400781390, 7.8],
                [1400781490, 7.15],
                [1400781590, 0.0],
                [1400781690, 0.0],
                [1400781790, 1.3],
                [1400781890, 5.2],
                [1400781990, 0.0],
                [1400782090, 9.75],
                [1400782190, 13.0],
                [1400782290, 14.3],
                ...
            ]
        },
        "energy_expended": {
            "interval": 100,
            "values": [
                [1400781090, 14363.6723671042],
                [1400781190, 8271.7679920085993],
                [1400781290, 5401.5440358986998],
                [1400781390, 11890.928031923901],
                [1400781490, 6916.1519880338001],
                [1400781590, 4284.4162035097997],
                [1400781690, 7183.9280319238997],
                [1400781790, 1941.3759441394],
                [1400781890, 6363.8641157293996],
                [1400781990, 2297.0161037465],
                [1400782090, 5547.9838962368003],
                [1400782190, 8723.6401596195992],
                [1400782290, 16489.143936152199],
                ...
            ]
        }
    },
    "timezones": [
        [1400781090, "America/Chicago"],
        [1400781490, "America/New_York"],
        [1400781890, "America/Toronto"],
        [1400782290, "America/New_York"]
    ],
    "external_id": "user-activity-1400781090",
    "_embedded": {
        "devices": [
            {
                "model": "devicemodel",
                "manufacturer": "devicemanufacturer",
                "name": "devicename"
            }
        ]
    }
}
```

###### Response `204`

