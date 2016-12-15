---
layout: documentation
title: Webhook
resource: Webhook
version: api/0.1
versionhref: 01
permalink: /docs/01_Activity_Time_Series/
---

# Activity Time Series resource

The `Activity Time Series` resource is intended for clients to persist time series data related to a user's passive
activity.  Currently supported time series are `calories`, `distance`, and `steps` all in SI units (joules for calories
and meters for distance).

For proper identification, the client will need to send a `recorder_type_key` and `recorder_identifier`.  A
`recorder_type_key` is the name of the recorder or source of the activity data.  The `recorder_identifier` field is
intended to uniquely identify the specific recorder sending the data similar to a serial number for a device.

Each time series item is a list of tuples with the first item being the unix/epoch timestamps when the event occurred,
and the second item being the measurement(s).  The unix/epoch timestamps are represented in seconds as an integer.

Each series can have a maximum of 11,520 points which is equivalent to 8 days of one minute resolution.  There is also
a limit of 8 days difference between the first time series point and the last.  Clients should take care that they send
data within both of these limits.

Once the server receives all of the data, it will get 'bucketed' based on the user's perception of a day.  This is
required so that aggregates for a day can be calculated in a uniform way.  The typical workflow is to persist data
through this resource, then call the [`Actigraphy`](/docs/v71_Actigraphy) resource to see the results.

Currently, HTTP `GET` is not supported on this endpoint.

## Resource URIs

**Collection URI:** `/{{page.version}}/activity_timeseries/`

### Collection methods

`PUT` Record a list of activities.

### Collection properties

| Name                  | Description                                                                                      | Type   | Units       | HTTP Support       |
|-----------------------|--------------------------------------------------------------------------------------------------|--------|-------------|--------------------|
| `recorder_type_key`   |  The name of the recorder or source of the activity data (i.e. make/model)                       |        |             | **PUT:**  Required |
| `recorder_identifier` |  The unique identifier of the specific recorder or source of the activity data (i.e. serial no.) | string |             | **PUT:**  Required |
| `time_series`         |  Currently supports `calories`, `distance`, and `steps` all in SI units                          | dict   | time series | **PUT:**  Required |


## Usage

### Saving an Activity Time Series dataset

Saving an Activity Time Series is demonstrated below:

###### Request `PUT /{{page.version}}/activity_timeseries/`

```json
{
    "recorder_type_key": "test_model",
    "recorder_identifier": "12345",
    "time_series": {
        "steps": {
            "values": [[1400781090, 20], [1400781150, 2]]
        },
        "distance": {
            "values": [[1400781090, 20], [1400781150, 2]]
        },
        "calories": {
            "values": [[1400781090, 20], [1400781150, 2]]
        }
    }
}
```

###### Response `200`

