---
layout: documentation
title: 24/7 Tracking Tutorial
permalink: /docs/v71_24_7_tracking_tutorial/
version: v7.1
---

# 24/7 Tracking Tutorial

For tracking continuous activity throughout the day, such as the data collected
by an activity tracker, the Under Armour Connected Fitness Platform provides
the 24/7 Tracking resources.


## Writing Data

The most common usage will be that your application is collecting data over time
from a device. For this, you'll want the
[All Day Activity Time Series](/docs/{{ page.version }}_All_Day_Activity Time Series]
endpoint.  This endpoint allows you to write multiple days worth of step,
distance and energy expenditure data in a single request. The data is then
automatically processed into All Day Activity records, bucketed by date. Because
of this, you cannot retrieve the original data once you've sent it.

If you don't have the granular time series data, you can write aggregate data
directly to the [All Day Activity](/docs/{{ page.version }}_All_Day_Activity] endpoint to
store it. If you use this technique, you should bucket the data by date so that
any given aggregate doesn't span more than a single day.


## Reading Data

Data written in this way can be read from a number of endpoints, but mainly
All Day Activity, [Actigraphy](/docs/{{ page.version }}_Actigraphy] and
[Aggregate](/docs/{{ page.version }}_Aggregate]. See the appropriate documentation for more
detail on each of those.


## Data Sources

In order to know what device recorded the data, you will need to set up a
[Data Source](/docs/{{ page.version }}_Data_Source] for the user. A Data Source associates a
[Device](/docs/{{ page.version }}_Device] to a [User](/docs/{{ page.version }}_User].

Once the UACF Platform understands that a user uses a device, it is used as the
source for All Day Activity, All Day Activity Time Series,
[Sleep](/docs/{{ page.version }}_Sleep], and [Body Mass](/docs/{{ page.version }}_Body_Mass] data.


## Data Source Priorities

If a user has more than one Data Source,
[Data Source Priorities](/docs/{{ page.version }}_Data Source Priority] are used to determine
which Data Source will be used. The latest effective Data Source Priority on any
date will be used. Which is to say, if a user has Device A, which is great for
tracking sleep and Device B which they'd rather use to track steps, you can use
Data Source Priorities to communicate that to the UACF Platform.


## Examples

Here's an example of:
* creating a Data Source
* writing data in with All Day Activity Time Series
* writing data in with All Day Activity
* reading data out with Aggregate

Before adding a Data Source, you should determine whether the type of device
already exists by looking for the Device based on manufacturer:

```
GET /${version}/device/?manufacturer=samsung
```

```
Status 200
{
    "_links": {
        "self": [
            {
                "href": "/v7.1/device/?offset=0&limit=20&manufacturer=samsung"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/v71_Device"
            }
        ]
    },
    "_embedded": {
        "devices": [
            {
                "model": "gear3",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.1/device/samsung_gear3/",
                            "id": "samsung_gear3"
                        }
                    ]
                },
                "description": "Samsung Gear 3 Activity Tracker",
                "name": "Samsung Gear 3",
                "manufacturer": "samsung"
            },
            {
                "model": "sm-g900t",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.1/device/samsung_sm-g900t/",
                            "id": "samsung_sm-g900t"
                        }
                    ]
                },
                "description": "Samsung SM-G900T Activity Tracker",
                "name": "Samsung SM-G900T",
                "manufacturer": "samsung"
            },
            {
                "model": "ms-band900t",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.1/device/samsung_ms-band900t/",
                            "id": "samsung_ms-band900t"
                        }
                    ]
                },
                "description": "samsung_ms-band900t",
                "name": "samsung ms-band900t",
                "manufacturer": "samsung"
            },
            {
                "model": "sph-l710",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.1/device/samsung_sph-l710/",
                            "id": "samsung_sph-l710"
                        }
                    ]
                },
                "description": "samsung_sph-l710",
                "name": "samsung sph-l710",
                "manufacturer": "samsung"
            },
            {
                "model": "gt-i8190",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.1/device/samsung_gt-i8190/",
                            "id": "samsung_gt-i8190"
                        }
                    ]
                },
                "description": "samsung_gt-i8190",
                "name": "samsung gt-i8190",
                "manufacturer": "samsung"
            },
            {
                "model": "gt-i9500",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.1/device/samsung_gt-i9500/",
                            "id": "samsung_gt-i9500"
                        }
                    ]
                },
                "description": "samsung_gt-i9500",
                "name": "samsung gt-i9500",
                "manufacturer": "samsung"
            },
            {
                "model": "sm-g900v",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.1/device/samsung_sm-g900v/",
                            "id": "samsung_sm-g900v"
                        }
                    ]
                },
                "description": "samsung_sm-g900v",
                "name": "samsung sm-g900v",
                "manufacturer": "samsung"
            }
        ]
    },
    "total_count": 7
}
```

Within the embedded `devices` key, find the device you're looking for and
associate it with the user. In this case, the user has a Samsung SM-G900T
Activity Tracker.

```
POST /${version}/data_source/
{
    "name": "User's Samsung",
    "_embedded": {
        "device": [
            {
                "model": "sm-g900t",
                "manufacturer": "samsung"
            }
        ]
    }
}
```

```
Status 200
{
    "_links": {
        "self": [
            {
                "href": "/v7.1/data_source/97663217/",
                "id": "97663217"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/v71_DataSource"
            }
        ]
    },
    "_embedded": {
        "device": [
            {
                "description": "Samsung SM-G900T Activity Tracker",
                "name": "Samsung SM-G900T",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.1/device/samsung_sm-g900t/",
                            "id": "samsung_sm-g900t"
                        }
                    ]
                },
                "model": "sm-g900t",
                "id": "samsung_sm-g900t",
                "manufacturer": "samsung"
            }
        ]
    },
    "name": "User's Samsung"
}
```

Now, assuming you have granular time series data, use the All Day Activity Time
Series endpoint to store data from your device. Notice the link to the Data
Source you just created above.

```
POST /${version}/allday_activity_timeseries/
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
                [1400782290, 22]
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
                [1400782290, 14.3]
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
                [1400782290, 16489.143936152199]
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
                "href": "/v7.1/data_source/97663217/",
                "id": "97663217"
            }
        ]
    }
}
```

```
Status 204
```

If all you've got is aggregate data, you could also write data directly to All
Day Activity.

```
POST /${version}/allday_activity/
{
   "aggregates":{
      "total_active_time":15,
      "total_energy_expended":1963,
      "total_steps":15998,
      "total_distance":12.597
   },
   "_links":{
      "data_source":[
         {
            "href": "/v7.1/data_source/97663217/",
            "id": "97663217"
         }
      ]
   },
   "start_datetime_utc":"2015-03-10T00:00:00-05:00",
   "external_id":"asdf1234",
   "end_datetime_utc":"2015-03-11T00:00:00-05:00"
}
```

```
Status 201
{
    "time_series": {},
    "updated_datetime": "2015-03-12T19:56:30+00:00",
    "created_datetime": "2015-03-12T19:56:30+00:00",
    "timezones": [
        [
            1400782290,
            "America/New_York"
        ]
    ],
    "aggregates": {
        "total_active_time": 15,
        "total_energy_expended": 1963,
        "total_steps": 15998,
        "total_distance": 12.597
    },
    "_links": {
        "self": [
            {
                "href": "/v7.1/allday_activity/89420779/",
                "id": "89420779"
            }
        ],
        "data_source": [
            {
                "href": "/v7.1/data_source/97663217/",
                "id": "97663217"
            }
        ],
        "user": [
            {
                "href": "/v7.1/user/{user_id}/",
                "id": "{user_id}"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/v71_All-Day Activity"
            }
        ]
    },
    "start_datetime_utc": "2015-03-10T05:00:00+00:00",
    "has_time_series": false,
    "external_id": "asdf1234",
    "end_datetime_utc": "2015-03-11T05:00:00+00:00"
}
```

There are a number of ways to read data out, but here is just one example using
Aggregate. Refer to documentation for other endpoints for details about how they
work.

```
GET https://api.ua.com/{{version}}/aggregate/?start_datetime=1999-01-01&data_types=steps_summary&user_id={user_id}
```

```
Status 200
{
    "_links": {
        "self": [
            {
                "href": "/v7.1/aggregate/?user_id={user_id}&start_datetime=1999-01-01&data_types=steps_summary&limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/v71_Aggregate"
            }
        ]
    },
    "_embedded": {
        "aggregates": [
            {
                "start_datetime": "1999-01-01T08:00:00+00:00",
                "period": "P1D",
                "summary": {
                    "start_datetime": "1999-01-01T00:00:00-08:00",
                    "value": {
                        "steps_sum": 16121
                    },
                    "datetime": "2015-03-17T08:02:08.253016-08:00"
                },
                "_links": {
                    "user": [
                        {
                            "href": "/v7.1/user/{user_id}/",
                            "id": "{user_id}"
                        }
                    ],
                    "data_type": [
                        {
                            "href": "/v7.1/data_type/steps_summary/",
                            "id": "steps_summary"
                        }
                    ]
                },
                "periods": [
                    {
                        "start_datetime": "2014-02-26T00:00:00-08:00",
                        "value": {
                            "steps_sum": 0
                        },
                        "datetime": "2014-02-27T00:00:00-08:00"
                    },
                    {
                        "start_datetime": "2015-03-10T00:00:00-08:00",
                        "value": {
                            "steps_sum": 15998
                        },
                        "datetime": "2015-03-11T00:00:00-08:00"
                    },
                    {
                        "start_datetime": "2014-05-22T00:00:00-08:00",
                        "value": {
                            "steps_sum": 123
                        },
                        "datetime": "2014-05-23T00:00:00-08:00"
                    }
                ],
                "end_datetime": "2015-03-17T16:02:08+00:00"
            }
        ]
    },
    "total_count": 1
}
```


## See Also

* [Actigraphy](/docs/{{ page.version }}_Actigraphy]
* [Aggregate](/docs/{{ page.version }}_Aggregate]
* [Body Mass](/docs/{{ page.version }}_Body_Mass]
* [Data Source](/docs/{{ page.version }}_Data_Source]
* [Data Source Priorities](/docs/{{ page.version }}_Data_Source_Priority]
* [Device](/docs/{{ page.version }}_Device]
* [Sleep](/docs/{{ page.version }}_Sleep]
* [User](/docs/{{ page.version }}_User]
* [Workout & 24/7 Tracking overview](/docs/v71_workouts_and_24_7_tracking)
* [Actigraphy vs. Aggregate overview](/docs/v71_actigraphy_vs_aggregate)
* [24/7 Tracking: Reading Data](/docs/v71_24_7_tracking_reading_tutorial)
* [FAQ](/faq)
