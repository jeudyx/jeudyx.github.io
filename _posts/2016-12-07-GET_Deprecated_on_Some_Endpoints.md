---
layout: post
permalink: /blog/read/GET_Deprecated_on_Some_Endpoints
title: GET Method Deprecated on Some Endpoints
---

## Summary

Some API behavior will be changing soon. The following endpoints are affected on the provided dates:

| Endpoint | Date |
| -------- | ---- |
| /sleep | January 4, 2017 |
| /bodymass | January 18, 2017 |
| /activity | February 8, 2017 |
| /activity_timeseries |  |
| /allday_activity |  |
| /allday_activity_timeseries |  |

Your app may need to change in order to continue reading data from our API.

## Deprecated Capabilities

In the endpoints enumerated above, we are deprecating the broad functionality of the collection GET method i.e. {{ site.github.url }}/docs/v71_Sleep#collection.
Past functionality has allowed fetching any of a user’s data via the CRUD endpoints, but moving forward the only data that we can guarantee is the data created by your application.

This means that only partners who are expecting to read data from sources OTHER than their own will be affected. Partners who are using the UACF platform to store data from their own app and retrieve that data back will not be affected. Any partners who are expecting to read data that was not written by ONLY their app will need to update their code as described below.

## Recommended Changes

If your app is using the UACF Platform simply store and retrieve data, do nothing. Otherwise, if your app reads data that needs to include other providers: update your app’s code to use the /actigraphy endpoint to retrieve the data that is being written with the /sleep, /bodymass, and /activity endpoints. See the documentation for the Actigraphy endpoint here:

[{{ site.github.url }}/docs/v71_Actigraphy]({{ site.github.url }}/docs/v71_Actigraphy)

The data that is returned for sleep and activity are governed by the user’s Data Source Priority (bodymass does not currently have a source priority):

[{{ site.github.url }}/docs/v71_Data_Source_Priority]({{ site.github.url }}/docs/v71_Actigraphy).

The Actigraphy endpoint supports GET requests on the collection, returning a document with both aggregates and metrics (time series) data for which the CRUD endpoints, and workouts are data providers.

**NOTE:** when data comes in from a priority device, it’s data will be added to the response of Actigraphy. From the example shown in the /actigraphy docs, notice the overall totals for a user’s day as well as the time-series data that makes up those totals. You’ll note that the differences between this and the CRUD endpoint output is very minor, so the changes should be easy to implement.

Please reach out to Partner-Support@underarmour.com with any questions or concerns about this change.
