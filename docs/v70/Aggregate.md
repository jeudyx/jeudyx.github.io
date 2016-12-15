---
layout: documentation
title: Aggregate
resource: Aggregate
version: v7.0
versionhref: v70
permalink: /docs/v70_Aggregate/
---

# {{page.title}}

Returns aggregate data for a user for specific data type over a set date range
and grouped at a specified period.

## Resource URIs

* **Collection URI:** `/{{page.version}}/aggregate/`

## Item

### Item properties <a name="itemproperties"></a>

| Name             | Description                                                                                                                                                                                                                                                                                              | Type              | HTTP Support      |
| ---              | ---                                                                                                                                                                                                                                                                                                      | ---               | ---               |
| `period`         | Duration of each date grouping in the aggregation result. Valid periods are `P1D`, `P1M` and `P1Y`.                                                                                                                                                                                                      | ISO-8601 Duration | **GET**: required |
| `start_datetime` | Start of the aggregation window, taken from the querystring                                                                                                                                                                                                                                              | ISO-8601 Datetime | **GET**: required |
| `end_datetime`   | End of the aggregation window, taken from the querystring                                                                                                                                                                                                                                                | ISO-8601 Datetime | **GET**: required |
| `summary`        | A dictionary of summary data for the aggregate window. Contains "start_datetime", "end_datetime", and "values" which is a list of dictionaries containing each data_type's values for the array of items in the summary.                                                                                 | json              | **GET**: required |
| `periods`        | A list of aggregate data over the aggregate window grouped by the provided period. Similarly to the summary field each item in the list contains "start_datetime", "end_datetime", and "values" which is a list of dictionaries containing each data_type's values for the array of items in the period. | list              | **GET**: required |

### Item links <a name="itemlinks"></a>

* `self` A link to this resource
* `user` A link to the User resource that owns the {{page.title}}
* `data_type` A link to the data_type resource

## Collection

### Collection methods

* `GET` Get a list of {{page.title}}s.

### Collection query parameters

| Name             | Description                                                                              | Type                     | Required |
| ---              | ---                                                                                      | ---                      | ---      |
| `data_types`     | A list of data types to return aggregate values for. Current list of allowed data_types are: body_mass_summary, steps_summary, distance_summary, energy_expended_summary, sessions_summary, sleep_summary, heart_rate_resting_summary, energy_consumed_summary                                      | list                     | Yes      |
| `user_id`        | The user_id of interest. Users are only authorized to see their user data.               | integer                  | Yes      |
| `start_datetime` | The start of the aggregation window.                                                     | ISO-8601 Datetime        | Yes      |
| `end_datetime`   | The end of the aggregation window.                                                       | ISO-8601 Datetime        | Yes      |
| `period`         | The periodic grouping of aggregate values, specified in ISO-8601 duration values: "P1D". | ISO-8601 duration values | No       |

### Collection properties

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
| ---          | ---                  | ---       | ---                 | ---                                                                                 |
| `field_name` | description of field | JSON type | units, should be SI | **GET**: required/optional, **PUT**: required/optional, **POST**: required/optional |

### Collection links

* `self` A link to this resource

### Embedded collections

* `aggregates` A collection of {{page.title}}s with properties as described under [Item properties](#itemproperties) and links as described under [Item links](#itemlinks)

## Usage

### GET {{page.title}} collection

###### Request `GET: /{{page.version}}/aggregate/?start_datetime=2014-03-09&user_id=134&period=P1D&data_types=steps_summary%2Cenergy_expended_summary&end_datetime=2014-03-22`

###### Response

```json
{
   "_embedded":{
      "aggregates":[
         {
            "start_datetime":"2014-03-09T00:00:00+00:00",
            "period":"P1D",
            "summary":{
               "start_datetime":"2014-03-09T00:00:00+00:00",
               "value":{
                  "steps_sum":20000
               },
               "datetime":"2014-03-22T23:59:59.999999+00:00"
            },
            "_links":{
               "user":[
                  {
                     "href":"/{{page.version}}/user/134/",
                     "id":"134"
                  }
               ],
               "data_type":[
                  {
                     "href":"/{{page.version}}/data_type/steps_summary/",
                     "id":"steps_summary"
                  }
               ]
            },
            "periods":[
               {
                  "start_datetime":"2014-03-09T00:00:00+00:00",
                  "value":{
                     "steps_sum":10000
                  },
                  "datetime":"2014-03-22T23:59:59.999999+00:00"
               },
               {
                  "start_datetime":"2014-03-09T00:00:00+00:00",
                  "value":{
                     "steps_sum":10000
                  },
                  "datetime":"2014-03-22T23:59:59.999999+00:00"
               }
            ],
            "end_datetime":"2014-03-22T00:00:00+00:00"
         },
         {
            "start_datetime":"2014-03-09T00:00:00+00:00",
            "period":"P1D",
            "summary":{
               "start_datetime":"2014-03-09T00:00:00+00:00",
               "value":{
                  "energy_expended_sum":280000
               },
               "datetime":"2014-03-22T23:59:59.999999+00:00"
            },
            "_links":{
               "user":[
                  {
                     "href":"/{{page.version}}/user/134/",
                     "id":"134"
                  }
               ],
               "data_type":[
                  {
                     "href":"/{{page.version}}/data_type/energy_expended_summary/",
                     "id":"energy_expended_summary"
                  }
               ]
            },
            "periods":[
               {
                  "start_datetime":"2014-03-09T00:00:00+00:00",
                  "value":{
                     "energy_expended_sum":140000
                  },
                  "datetime":"2014-03-22T23:59:59.999999+00:00"
               },
               {
                  "start_datetime":"2014-03-09T00:00:00+00:00",
                  "value":{
                     "energy_expended_sum":140000
                  },
                  "datetime":"2014-03-22T23:59:59.999999+00:00"
               }
            ],
            "end_datetime":"2014-03-22T00:00:00+00:00"
         }
      ]
   },
   "_links":{
      "self":[
         {
            "href":"/{{page.version}}/aggregate/?start_datetime=2014-03-09&user_id=134&period=P1D&data_types=steps_summary%2Cenergy_expended&end_datetime=2014-03-22"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/Aggregate"
         }
      ]
   },
   "total_count":2
}
```
