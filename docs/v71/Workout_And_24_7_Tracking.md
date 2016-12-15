---
layout: documentation
title: Under Armour Developer - Workout &amp; 24/7 Tracking (v7.1)
permalink: /docs/v71_workouts_and_24_7_tracking/
---

# Workout vs. All Day Activity

The Under Armour Connected Fitness platform provides two main ways to store data
about when a user is active: Workout and All Day Activity. They have some key
differences, which are important to understand.


## Workout

A Workout is a deliberate physical activity that the user explicitly starts and
stops.

The user's taking of explicit action with regard to recording a Workout signals
that this stretch of time is important to them, so a Workout records data at a
much higher time granularity and records more types of data (like heart rate,
power, route, etc.).

While a user is doing a Workout, the data is stored locally on the device taking
the measurements, or in your application. The data is stored to the UACF
platform at the end of the session.

Example devices that you might collect data from for a Workout:
* A GPS running watch
* A heart rate monitor
* A cadence sensor


## All Day Activity

An All Day Activity is a continuous activity that lasts all day.

This is data that's collected passively about the user without their explicitly
starting or stopping it. Because this data is likely less important to the user,
the time granularity of the data is lower and the type of data captured is more
limited.

All Day Activity data is stored every 15 minutes throughout the day. A specific
device is used as the source of All Day Activity.

Example devices that you might collect data from for an All Day Activity:
* An activity tracker


## What About "Time Series"?

The phrase "time series" is a bit like the word "data" in that it can easily be
over-used so that it becomes almost meaningless. Strictly speaking, both
Workouts and All Day Activity record time series data (at different
granularity): They contain buckets of data that represent a discrete slice of
time and those slices are ordered. But because of it's generalness as a term, we
try to avoid using it unless it's the name of something and prefer some more
specific term.