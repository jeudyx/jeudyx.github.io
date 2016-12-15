---
layout: documentation
title: 24/7 Tracking - Reading Data
permalink: /docs/v71_24_7_tracking_reading_tutorial/
version: v7.1
---

# 24/7 Tracking: Reading Data

After [using the 24/7 Tracking endpoints to store data](/docs/v71_24_7_tracking_tutorial),
you can use either the [Actigraphy](/docs/{{ page.version }}_Actigraphy) or the
[Aggregate](/docs/{{ page.version }}_Aggregate) resources to read the data out. To know when
to use which resource, see [the Actigraphy vs. Aggregate overview](/docs/v71_actigraphy_vs_aggregate).


## Getting Daily Data from Actigraphy

The Actigraphy resource represents daily data at various levels of granularity.
Within each day returned, it will bucket the data into 15-, 30- and 60-minute
durations. For example, to request data for a week in 30-minute buckets:

```
GET https://api.ua.com/v7.1/actigraphy/?start_date=2015-04-14&end_date=2015-04-21&time_series_interval=1800
```

This will return an embedded list of Actigraphy resources, one for each day,
that contains the information, divided by type. For instance, each Actigraphy
resource will have a structure like this:

```
{
    "timezones": [
        [ 1429034046, "America/Chicago" ]
    ],
    "aggregates": {
        "distance": { "sum": 0 },
        "bodymass": { "latest": null },
        "active_time": { "sum": 24000 },
        "sleep": {
            "sum": 0,
            "details": {
                "deep_sleep": { "sum": 0 },
                "awake": { "sum": 0 },
                "time_to_sleep": { "sum": 0 },
                "times_awakened": { "sum": 0 },
                "light_sleep": { "sum": 0 }
            }
        },
        "steps": { "sum": 38695 },
        "workouts": { "count": 0 },
        "energy_expended": { "sum": 0 }
    },
    "metrics": { ... },
    "_links": {
        "user": [
            {
                "href": "/v7.1/user/{user_id}/",
                "id": "{user_id}"
            }
        ]
    },
    "date": "2015-04-14",
    "start_datetime_utc": "2015-04-14T05:00:00+00:00",
    "workouts": [],
    "end_datetime_utc": "2015-04-15T04:59:59+00:00"
}
```

Within the `"metrics"` key, will be several keys like `"sleep"`,
`"energy_expended"`, `"steps"`, etc. Here's an example of what a `"steps"`
metric looks like:

```
"steps": [
    {
        "start_datetime_utc": "2015-04-15T05:00:00+00:00",
        "aggregates": { "sum": 87638 },
        "has_time_series": true,
        "time_series": {
            "epoch_values": [
                [ 1429074000, 1548 ],
                [ 1429075800, 2291 ],
                [ 1429077600, 1950 ],
                [ 1429079400, 1677 ],
                [ 1429081200, 2226 ],
                [ 1429083000, 2164 ],
                [ 1429084800, 2043 ],
                [ 1429086600, 1859 ],
                [ 1429088400, 1737 ],
                [ 1429090200, 1281 ],
                [ 1429092000, 1570 ],
                [ 1429093800, 1969 ],
                [ 1429095600, 2239 ],
                [ 1429097400, 1467 ],
                [ 1429099200, 1763 ],
                [ 1429101000, 1633 ],
                [ 1429102800, 1955 ],
                [ 1429104600, 1531 ],
                [ 1429106400, 1867 ],
                [ 1429108200, 1513 ],
                [ 1429110000, 1846 ],
                [ 1429111800, 1576 ],
                [ 1429113600, 1834 ],
                [ 1429115400, 1866 ],
                [ 1429117200, 2020 ],
                [ 1429119000, 1597 ],
                [ 1429120800, 1746 ],
                [ 1429122600, 1977 ],
                [ 1429124400, 1907 ],
                [ 1429126200, 2040 ],
                [ 1429128000, 1779 ],
                [ 1429129800, 1705 ],
                [ 1429131600, 1917 ],
                [ 1429133400, 1640 ],
                [ 1429135200, 1544 ],
                [ 1429137000, 1661 ],
                [ 1429138800, 2022 ],
                [ 1429140600, 1950 ],
                [ 1429142400, 1939 ],
                [ 1429144200, 1273 ],
                [ 1429146000, 2303 ],
                [ 1429147800, 2148 ],
                [ 1429149600, 1946 ],
                [ 1429151400, 2083 ],
                [ 1429153200, 1999 ],
                [ 1429155000, 1682 ],
                [ 1429156800, 1565 ],
                [ 1429158600, 1790 ]
            ],
            "interval": 1800
        },
        "end_datetime_utc": "2015-04-16T04:59:00+00:00"
    }
]
```

Notice that each data point in the time series is a tuple of an epoch time stamp
and the number of steps taken in that chunk of time. See the full
[Actigraphy documentation][/docs/{{ page.version }}_Actigraphy] for more details.


## Getting Weekly Data from Aggregate

The Aggregate resource represents data at longer intervals than a day. The
`period` parameter is an [ISO 8601 Duration](http://en.wikipedia.org/wiki/ISO_8601#Durations),
so you can specify a month with `period=P1M` or a day with `period=P1D`. For
example, to get the same week's step data aggregated at the daily level.

```
GET https://api.ua.com/v7.1/aggregate/?start_datetime=2015-04-14&end_datetime=2015-04-21&data_types=steps_summary&user_id={user_id}&period=P1D
```

```
Status 200
{
    "_links": {
        "self": [
            {
                "href": "/v7.1/aggregate/?start_datetime=2015-04-14&user_id={user_id}&period=P1D&limit=20&end_datetime=2015-04-21&offset=0&data_types=steps_summary"
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
                "start_datetime": "2015-04-14T08:00:00+00:00",
                "period": "P1D",
                "summary": {
                    "start_datetime": "2015-04-14T00:00:00-08:00",
                    "value": { "steps_sum": 562382 },
                    "datetime": "2015-04-21T00:00:00-08:00"
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
                        "start_datetime": "2015-04-14T00:00:00-08:00",
                        "value": { "steps_sum": 38695 },
                        "datetime": "2015-04-15T00:00:00-08:00"
                    },
                    {
                        "start_datetime": "2015-04-15T00:00:00-08:00",
                        "value": { "steps_sum": 87638 },
                        "datetime": "2015-04-16T00:00:00-08:00"
                    },
                    {
                        "start_datetime": "2015-04-16T00:00:00-08:00",
                        "value": { "steps_sum": 86891 },
                        "datetime": "2015-04-17T00:00:00-08:00"
                    },
                    {
                        "start_datetime": "2015-04-17T00:00:00-08:00",
                        "value": { "steps_sum": 89395 },
                        "datetime": "2015-04-18T00:00:00-08:00"
                    },
                    {
                        "start_datetime": "2015-04-18T00:00:00-08:00",
                        "value": { "steps_sum": 86756 },
                        "datetime": "2015-04-19T00:00:00-08:00"
                    },
                    {
                        "start_datetime": "2015-04-19T00:00:00-08:00",
                        "value": { "steps_sum": 86336 },
                        "datetime": "2015-04-20T00:00:00-08:00"
                    },
                    {
                        "start_datetime": "2015-04-20T00:00:00-08:00",
                        "value": { "steps_sum": 86671 },
                        "datetime": "2015-04-21T00:00:00-08:00"
                    }
                ],
                "end_datetime": "2015-04-21T08:00:00+00:00"
            }
        ]
    },
    "total_count": 1
}
```


## See Also

* [Actigraphy][/docs/{{ page.version }}_Actigraphy]
* [Aggregate][/docs/{{ page.version }}_Aggregate]
* [Workout & 24/7 Tracking overview](/docs/v71_workouts_and_24_7_tracking)
* [Actigraphy vs. Aggregate overview](/docs/v71_actigraphy_vs_aggregate)
* [24/7 Tracking: Reading Data](/docs/v71_24_7_tracking_reading_tutorial)
