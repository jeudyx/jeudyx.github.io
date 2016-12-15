---
layout: documentation
title: Activity vs Aggregate
permalink: /docs/v71_actigraphy_vs_aggregate/
docs_version: v71
---

# Actigraphy vs. Aggregate

The Under Armour Connected Fitness platform provides two ways to get activity
data over time: [Actigraphy](/docs/{{ page.docs_version }}/Actigraphy) and
[Aggregate](/docs/{{ page.docs_version }}/Aggregate).


## Actigraphy

The Actigraphy resource exposes data for only a single day†. It has aggregate
data for that day, but also includes that data in buckets of 15 minutes, 30
minutes and 1 hour.


## Aggregate

The Aggregate resource exposes data for longer stretches of time. It will roll
the data up by day, month or year, depending on what you ask it for. It does
*not* include smaller buckets of time like Actigraphy does.


## Deciding Which to Use

The basic rule of thumb for choosing between these two resources is this:
* **Use Actigraphy when** you need aggregate and multi-resolution time series data
for a single day.
* **Use Aggregate when** you need aggregate-only data for long periods of time.

They also expose slightly different data. You should check the documentation for
each end point to be sure, but as of this writing, the comparison is as follows:

| Data                                                                               | Actigraphy | Aggregate |
| ---                                                                                | :-:        | :-:       |
| steps sum                                                                          | Y          | Y         |
| distance sum                                                                       | Y          | Y         |
| energy expended sum                                                                | Y          | Y         |
| workout details (steps, distance, energy expended, actvity type)                   | Y          | N         |
| total number of  workouts                                                          | Y          | Y         |
| workout duration sum                                                               | Y‡         | Y         |
| workout distance sum                                                               | Y‡         | Y         |
| sleep details (time awake, deep sleep, light sleep, time to sleep, times awakened) | Y          | N         |
| average sleep time                                                                 | N          | Y         |
| latest body mass on date                                                           | Y          | N         |
| body mass % change                                                                 | N          | Y         |
| body mass change                                                                   | N          | Y         |


† Not necessarily 24 hours. See
[the Actigraphy documentation](/docs/{{ page.docs_version }}/Actigraphy) for more details.

‡ Not explicitly, but can be computed.
