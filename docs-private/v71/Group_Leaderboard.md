# Group Leaderboard

Returns aggregate data for a user for specific data type over a set date range
and grouped at a specified period.

## Resource URIs

* **Collection URI:** `/v7.1/group_leaderboard/`

## Item

### Item properties

| Name             | Description                                                                                                                                                                                                                                                                                              | Type              | HTTP Support      |
| ---              | ---                                                                                                                                                                                                                                                                                                      | ---               | ---               |
| `period`         | Duration of each date grouping in the aggregation result. This value is specified using the ISO-8601 duration standard, i.e.: "P1D"                                                                                                                                                                      | ISO-8601 Duration | **GET**: required |
| `start_datetime` | Start of the aggregation window, taken from the querystring                                                                                                                                                                                                                                              | ISO-8601 Datetime | **GET**: required |
| `end_datetime`   | End of the aggregation window, taken from the querystring                                                                                                                                                                                                                                                | ISO-8601 Datetime | **GET**: required |
| `summary`        | A dictionary of summary data for the aggregate window. Contains "start_datetime", "end_datetime", and "values" which is a list of dictionaries containing each data_type's values for the array of items in the summary.                                                                                 | dict              | **GET**: required |
| `periods`        | A list of aggregate data over the aggregate window grouped by the provided period. Similarly to the summary field each item in the list contains "start_datetime", "end_datetime", and "values" which is a list of dictionaries containing each data_type's values for the array of items in the period. | list              | **GET**: required |

### Item links

* `self` A link to this resource
* `data_type` A link to the data_type resource
* `user` A link to the User resource that owns the Group Leaderboard

## Collection

### Collection methods

* `GET` Get a list of Group Leaderboards.

### Collection query parameters

| Name        | Description                                                                                                      | Type   | Required |
| ---         | ---                                                                                                              | ---    | ---      |
| `group_id`  | The Group id of interest. Users are only authenticated to see leaderboards of Groups in which they are a member. | number | Yes      |
| `iteration` | The iteration of the leaderboard to present                                                                      | int    | Yes      |

### Collection properties

| Name          | Description                                    | Type   | HTTP Support      |
| ---           | ---                                            | ---    | ---               |
| `total_count` | Total count of entities returned in collection | number | **GET**: required |

### Collection links

* `self` A link to this resource
* `prev_iteration` Read-only. If provided, a link to get the leaderboard for the
  previous iteration of this group. If there is no previous iteration, this link
  will be omitted.
* `next_iteration` Read-only. If provided, a link to get the leaderboard for the
  next iteration. If there is no next iteration (it's in the future, or the
  challenge is ended) then this link will be omitted.

### Embedded collections

* `aggregates` A collection of aggregates with properties as described under
  [Item properties][] and links as described under [Item links][]

## Usage

### GET Group Leaderboard collection

###### Request `GET: /v7.1/group_leaderboard/?group_id=GROUP_ID&iteration=1`

###### Response

```json
{
   "_embedded":{
      "aggregates":[
         {
            "start_datetime":"2014-03-09T00:00:00+00:00",
            "period":null,
            "summary":{
               "start_datetime":"2014-03-09T00:00:00+00:00",
               "value":{
                  "steps":10000
               },
               "datetime":"2014-03-22T23:59:59.999999+00:00"
            },
            "_links":{
               "user":[
                  {
                     "href":"/v7.1/user/260/",
                     "id":"260"
                  }
               ],
               "data_type":[
                  {
                     "href":"/v7.1/data_type/steps/",
                     "id":"steps"
                  }
               ]
            },
            "periods":[
               {
                  "start_datetime":"2014-03-09T00:00:00+00:00",
                  "value":{
                     "steps":10000
                  },
                  "datetime":"2014-03-22T23:59:59.999999+00:00"
               }
            ],
            "end_datetime":"2014-03-22T23:59:59+00:00"
         },
         {
            "start_datetime":"2014-03-09T00:00:00+00:00",
            "period":null,
            "summary":{
               "start_datetime":"2014-03-09T00:00:00+00:00",
               "value":{
                  "steps":10000
               },
               "datetime":"2014-03-22T23:59:59.999999+00:00"
            },
            "_links":{
               "user":[
                  {
                     "href":"/v7.1/user/263/",
                     "id":"263"
                  }
               ],
               "data_type":[
                  {
                     "href":"/v7.1/data_type/steps/",
                     "id":"steps"
                  }
               ]
            },
            "periods":[
               {
                  "start_datetime":"2014-03-09T00:00:00+00:00",
                  "value":{
                     "steps":10000
                  },
                  "datetime":"2014-03-22T23:59:59.999999+00:00"
               }
            ],
            "end_datetime":"2014-03-22T23:59:59+00:00"
         }
      ]
   },
   "_links":{
      "self":[
         {
            "href":"/v7.1/group_leaderboard/?group_id=GROUP_ID&iteration=1"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/GroupLeaderboard"
         }
      ],
      "prev_iteration": [
         {
            "href": "/v7.1/group_leaderboard/?group_id=GROUP_ID&iteration=0"
         }
      ],
      "next_iteration": [
         {
            "href": "/v7.1/group_leaderboard/?group_id=GROUP_ID&iteration=2"
         }
      ]
   },
   "total_count":2
}
```
