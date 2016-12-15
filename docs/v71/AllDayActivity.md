---
layout: documentation
title: All Day Activity
resource: All Day Activity
version: v7.1
versionhref: v71
permalink: /docs/v71_All_Day_Activity/
---

# {{page.title}} resource

This resource allows retrieval of activities bucketed by user's day. Also see [`Actigraphy`](/docs/{{page.versionhref}}_Actigraphy) and 
[`Activity Time Series`](/docs/{{page.versionhref}}_Activity_Time_Series).

## Resource URIs

**Collection URI:** `/{{page.version}}/allday_activity/`

**Item URI:** `/{{page.version}}/allday_activity/<id>/`

## Item

### Item methods

`GET` Get an {{page.title}} by id
`PUT` Replace an existing {{page.title}} by id

### Item properties

| Name                 | Description                                                              | Type     | Units        | HTTP Support      |
|----------------------|--------------------------------------------------------------------------|----------|--------------|-------------------|
| `start_datetime_utc` | The instant in time that the activity began.                             | datetime | UTC datetime | **GET:** required, **PUT**: optional, **POST**: required |
| `end_datetime_utc`   | The instant in time that the activity ended.                             | datetime | UTC datetime | **GET:** required, **PUT**: optional, **POST**: required |
| `created_datetime`   | The instant in time that the activity was recorded.                      | datetime | UTC datetime | **GET:** required, **PUT**: required, **POST**: required |
| `updated_datetime`   | The instant in time that the activity was last modified.                 | datetime | UTC datetime | **GET:** required, **PUT**: required, **POST**: required |
| `user` | The user associated with this activity                                                 | string | N/A | **GET**: required, **PUT**: required, **POST**: required |
| `has_time_series` | Whether or not a time series is associated with this activity               | boolean | N/A | **GET**: required, **PUT**: required, **POST**: required |
| `external_id` | The external ID                                                                 | string | N/A | **GET**: required, **PUT**: required, **POST**: required |
| `time_series` | The time series associated with this Activity                                   | dictionary | N/A | **GET**: optional, field_set='time_series' |
| `aggregates` | Data data associated with this Activity                                          | dictionary | N/A | **GET**: required, **PUT**: optional, **POST**: required |
| `aggregates.total_steps`| Total steps recorded in this Activity                                 | integer | N/A | **GET**: optional **POST**: optional **PUT**: optional|
| `aggregates.total_energy_expended`| Total energy expended during this Activity                  | integer | joules | **GET**: optional **POST**: optional **PUT**: optional|
| `aggregates.total_distance`| Total distance in this Activity                                    | integer | N/A | **GET**: optional **POST**: optional **PUT**: optional|
| `aggregates.total_active_time`| Total time of the Activity                                      | integer | N/A | **GET**: optional **POST**: optional **PUT**: optional|
| `timezones` |  List of user timezone events that intersect with the time represented by this Activity. The first item of each tuple represents the event's epoch timestamp and the second item is the IANA Time Zone Database formatted string for the event.| Array | N/A | **GET**: required, **PUT**: optional, **POST**: required |

### Item links

`self` A link to this resource  
`user` A link to the User resource that owns the activity
`data_source` A link to the data source for this activity

## Collection

### Collection methods

`GET` Retrieve a list of Activities.
`POST` Create or Update {{page.title}}.  Update is based on the contents of the POST body.

### Collection query parameters

| Name                | Description                                                                      | Type       | Required |
|---------------------|----------------------------------------------------------------------------------|------------|----------|
| `target_start_datetime` | Start time of the query interval                                             | ISO-8601 Datetime | No |
| `target_end_datetime` | End time of the query interval                                                 | ISO-8601 Datetime | No |
| `user`              | The user associated with this Activity                                           | href or id | Yes      |
| `offset`            | Currently, only accepts value of 0.                                              | int        | Yes      |
| `limit`             | Currently, only accepts value of 1.                                              | int        | Yes      |
| `order_by`          | Can be one of ['date', '-date']. Defaults to 'date' (sorted by date ascending)   | string     | Yes      |
| `data_source`       | The Data Source associated with this Activity                                    | href or id | Yes      |
| `field_set`   | Options available are: ['time_series'].   | String | No

### Collection properties

| Name         | Description          | Type      | Units               | HTTP Support                                 |
|--------------|----------------------|-----------|---------------------|----------------------------------------------|
| `total_count` | Total count of entities returned in collection | integer | N/A | **GET**: required |

### Collection links

`self` A link to this resource
`next` A link to the next page

### Embedded collections

`allday_activities` A collection of {{page.title}}s with properties as described under [Item properties] and links as described under [Item links].

## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/allday_activity/{pk}/?field_set=time_series`

###### Response

```json
{
   "time_series":{
   },
   "updated_datetime":"2015-02-09T04:23:17+00:00",
   "created_datetime":"2015-02-09T04:23:17+00:00",
   "timezones":[[946684800, "US\/Central"]],
   "aggregates":{
      "total_active_time":15,
      "total_energy_expended":null,
      "total_steps":15998,
      "total_distance":12.6
   },
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/allday_activity\/31\/",
            "id":"31"
         }
      ],
      "data_source":[
         {
            "href":"\/v7.0\/data_source\/101\/",
            "id":"101"
         }
      ],
      "user":[
         {
            "href":"\/vx\/user\/2\/",
            "id":"2"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_All-Day Activity"
         }
      ]
   },
   "start_datetime_utc":"2014-09-12T23:30:00+00:00",
   "has_time_series":false,
   "external_id":"asdf1234",
   "end_datetime_utc":"2014-09-12T23:30:00+00:00"
}
```

### PUT {{page.title}} entity

###### Request `PUT: /{{page.version}}/allday_activity/{pk}/`

```json
{
   "timezones":["US/Central"],
   "aggregates":{
      "total_active_time":15,
      "total_energy_expended":1963,
      "total_steps":15998,
      "total_distance":12.597
   },
   "_links":{
      "data_source":[
         {
            "href":"/v7.0/data_source/101/",
            "id":101
         }
      ]
   },
   "start_datetime_utc":"2014-09-12T23:30:00+00:00",
   "external_id":"asdf1234",
   "end_datetime_utc":"2014-09-12T23:30:00+00:00"
}
```

###### Response

```json
{
   "time_series":{
   },
   "updated_datetime":"2015-02-09T04:25:37+00:00",
   "created_datetime":"2015-02-09T04:25:37+00:00",
   "timezones":[[946684800, "US\/Central"]],
   "aggregates":{
      "total_active_time":15,
      "total_energy_expended":1963,
      "total_steps":15998,
      "total_distance":12.597
   },
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/allday_activity\/31\/",
            "id":"31"
         }
      ],
      "data_source":[
         {
            "href":"\/v7.0\/data_source\/101\/",
            "id":"101"
         }
      ],
      "user":[
         {
            "href":"\/vx\/user\/6\/",
            "id":"6"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_All-Day Activity"
         }
      ]
   },
   "start_datetime_utc":"2014-09-12T23:30:00+00:00",
   "has_time_series":false,
   "external_id":"asdf1234",
   "end_datetime_utc":"2014-09-12T23:30:00+00:00"
}
```

### GET {{page.title}} collection

###### Request `GET: /{{page.version}}/allday_activity/?data_source=101&order_by=-date&target_start_datetime=2010-09-12T23%3A30%3A00%2B00%3A00&limit=1&user=2&offset=0&field_set=time_series`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/allday_activity\/?data_source=101&order_by=-date&target_start_datetime=2010-09-12T23%3A30%3A00%2B00%3A00&limit=1&user=2&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_All-Day Activity"
         }
      ],
      "next":[
         {
            "href":"\/v7.0\/allday_activity\/?data_source=101&order_by=-date&target_start_datetime=2010-09-12T23%3A30%3A00%2B00%3A00&limit=1&user=2&offset=1"
         }
      ]
   },
   "_embedded":{
      "allday_activities":[
         {
            "time_series":{
            },
            "updated_datetime":"2015-02-09T05:28:55+00:00",
            "created_datetime":"2015-02-09T05:28:55+00:00",
            "timezones":[[946684800, "US\/Central"]],
            "aggregates":{
               "total_active_time":15,
               "total_energy_expended":null,
               "total_steps":15998,
               "total_distance":12.6
            },
            "_links":{
               "self":[
                  {
                     "href":"\/v7.0\/allday_activity\/31\/",
                     "id":"31"
                  }
               ],
               "data_source":[
                  {
                     "href":"\/v7.0\/data_source\/101\/",
                     "id":"101"
                  }
               ],
               "user":[
                  {
                     "href":"\/vx\/user\/2\/",
                     "id":"2"
                  }
               ]
            },
            "start_datetime_utc":"2014-09-12T30:00+00:00",
            "has_time_series":false,
            "external_id":"asdf1234",
            "end_datetime_utc":"2014-09-12T23:30:00+00:00"
         }
      ]
   },
   "total_count":2
}
```

### POST {{page.title}} entity

###### Request `POST: /{{page.version}}/allday_activity/`

```json
{
   "timezones":["US/Central"],
   "aggregates":{
      "total_active_time":15,
      "total_energy_expended":1963,
      "total_steps":15998,
      "total_distance":12.597
   },
   "_links":{
      "data_source":[
         {
            "href":"/v7.0/data_source/101/",
            "id":101
         }
      ]
   },
   "start_datetime_utc":"2014-09-12T23:30:00+00:00",
   "external_id":"asdf1234",
   "end_datetime_utc":"2014-09-12T23:30:00+00:00"
}
```

###### Response

```json
{
   "time_series":{
   },
   "updated_datetime":"2015-02-08T22:24:44+00:00",
   "created_datetime":"2015-02-08T22:24:44+00:00",
   "timezones":["US\/Central"],
   "aggregates":{
      "total_active_time":15,
      "total_energy_expended":1963,
      "total_steps":15998,
      "total_distance":12.597
   },
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/allday_activity\/None\/",
            "id":"None"
         }
      ],
      "data_source":[
         {
            "href":"\/v7.0\/data_source\/101\/",
            "id":"101"
         }
      ],
      "user":[
         {
            "href":"\/vx\/user\/4\/",
            "id":"4"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_All-Day Activity"
         }
      ]
   },
   "start_datetime_utc":"2014-09-12T23:30:00+00:00",
   "has_time_series":false,
   "external_id":"asdf1234",
   "end_datetime_utc":"2014-09-12T23:30:00+00:00"
}
```

