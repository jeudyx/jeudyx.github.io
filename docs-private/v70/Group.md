# Group

A Group represents a collection of users and provides the ability to organize social communities around common goals.
Groups can be created by any user and can be created as either public or private (i.e. invite only).  The Group creator
is automatically assigned the Group administrator role and can manage all aspects of the Group.

Groups with a [`Group Purpose`](/docs/v71_Group_Purpose) of `challenge` are required to have a `group_objective`.

[`Group Invites`](/docs/v71_Group_Invite) are added via the [`Group User`](/docs/v71_Group_User) endpoint.

## Resource URIs

**Item URI:** `/v7.0/group/{id}/`

**Collection URI:** `/v7.0/group/`

## Item

### Item Methods

* `GET` Gets a Group.  If the Group is private the Group will only be returned if the current user is a member or has been invited.  
* `PUT` Replaces a Group with a new Group definition.  Only a user that is an administrator of the Group can update a Group.  
* `DELETE` Remove a Group.  Only a user that is an administrator of the Group can delete a Group. WARNING: Group deletion
  is permanent and all data elements associated the Group will also be removed (ex. Group activity feed, Group leaderboards etc.)

### Item query parameters

| Name                  | Description                                                                                                                                                                                   | Type      | Required  |
|---                    |---                                                                                                                                                                                            |---        |---        |
| `invitation_code`     | If provided, this is the group invitation code we got from our invite. This is only needed when trying to request a private group as an anonymous user, such as if we got an invitation email | number    | No        |

### Item properties

| Name                  | Description                                                                                                                                                                                                                                                                              | Type       | HTTP Support                                             |
|---                    |---                                                                                                                                                                                                                                                                                       |---         |----------------------------------------------------------|
| `name`                | A short (100 character) name for the group                                                                                                                                                                                                                                               | text       | **GET**: required, **PUT**: required, **POST**: required |
| `description`         | A description of the group                                                                                                                                                                                                                                                               | text       | **GET**: required, **PUT**: required, **POST**: required |
| `invitation_required` | 'Invitation required' Groups must be sent direct invitations by the group administrator (see [`Group Invite`](/docs/v71_Group_Invite)).  Only members that have been invited by the group administrator may join the group.  'Invitation required' Groups require an invitation code. | boolean    | **GET**: required, **PUT**: required, **POST**: required |
| `invitation_code`     | The code required to accept a group invitation if the user has not been sent a direct invitation                                                                                                                                                                                         | number     | **GET**: required, **PUT**: required, **POST**: required |
| `is_public`           | Public Groups are listed publicly and any user can find the group or view the membership of the group.                                                                                                                                                                                | boolean    | **GET**: required, **PUT**: required, **POST**: required |
| `group_objective`     | A dictionary containing information about the challenge that this group is currently competing on. It contains properties                                                                                                                                                                | text       | **GET**: required, **PUT**: required, **POST**: required |
| `max_users`           | Read-only. If set, the maximum number of users allowed to be in this group. Otherwise, there is no limit.                                                                                                                                                                                | number     | **GET**: required, **PUT**: required, **POST**: required |
| `location`            | A dictionary containing information about the location of this group. It contains properties. Property values can be null.                                                                                                                                                              | text       | **GET**: required, **PUT**: required, **POST**: required |

###### Example values

`group_objective`

* `start_datetime`: When the challenge begins, inclusive, as an [`ISO 8601 Datetime`][ISO 8601 Datetime].

* `end_datetime`: Optional. If specified, this is when the challenge ends or stops recurring, exclusive, as an [`ISO 8601 Datetime`][ISO 8601 Datetime]. If unset, then this challenge will keep recurring indefinitely,
 until the challenge is either removed or the group is updated with the end_datetime set. Because the end interval is an open interval, if you have a month challenge for July, if the `start_datetime` is midnight on
 July 1 then the ``end_datetime`` should be specified as midnight on August 1, NOT 23:59 or the like on July 31.

* `period`: The duration of each recurrence of a recurring challenge in the format of an [`ISO 8601 Duration`][ISO 8601 Duration].
**NOTE** not every possible time duration from ISO 8601 is currently supported. Presently, at minimum these periods work:

    * `P1M` - recur every month
    * `P1W` - recur every week (a week is 7 days from the start date, which means if your start_datetime is on a Tuesday, then each new week starts on a Tuesday)

* `data_type`: A link to the [`Data Type`][${version} Data Type] upon which this challenge is being measured.

* `data_type_field`: The name of the field within the data type upon which this challenge is being measured.

* `criteria`: Optional. A specific query to apply to the group objective, an example would be filtering a workout challenge by a particular activity_type_id, or sorting the results in ascending or descending order.
  e.g.:
    ``{"activity_type_id": <activity_type_id>}``,
    ``{"sort": "asc"}`` or ``{"sort": "desc"}``

* `name`: Optional. A string which provides a short (100 character) descriptive name of this Group Objective.

* `iteration`: Read-only. On read, the group objective contains a 0-based iteration counter that specifies which iteration of a recurring challenge we are currently in. 
Can be ``null`` if the current time is outside the bounds of a valid iteration. For example, take a recurring monthly "shape up for summer" challenge which starts on 
February 1 through the end of June.  If querying the objective in January, the iteration will be ``null``. Starting on Feb 1, you're in iteration ``0``, March will be iteration ``1``
and so on. If querying in July, after the challenge ends, the iteration will be ``null`` again.

* `iteration_start_datetime`, `iteration_end_datetime`: Read-only. On read, the group objective will contain these if we're currently in a valid iteration.

`location`
> Location attributes will return `null` if a value is not present.

* `address`: Optional. A string containing the house or building number, street name, quadrant, etc describing a specific location. 

* `locality`: Optional. A string containing the name of a locality (city, town, village, etc.).

* `region`: Optional. A string containig a [`ISO-3166-2`][ISO-3166-2] region code (state, province, canton, governorate, etc).

* `postal_code`: Optional. A string containing the postal code for a location.

* `country`: Optional. A string containing an [`ISO-3166-1 Alpha-2 (two-letter)`][ISO-3166-1 Country Code] country code.

* `longitude`: Read-only. A floating point number expressing degrees with positive numbers being E and negative being W.
Will never output more than 6 digits of precision after the decimal point. Acceptable value range: [-180.0, 180.0] 

* `latitude`: Read-only. A floating point number expressing degrees with positive numbers being N and negative being S.
Will never output more than 6 digits of precision after the decimal point. Acceptable value range: [-90.0, 90.0]

### Item links

`self` A link to this resource  
`users` Get a listing of users in this group.  
`activity_feed` A link to this group's activity feed.  
`purpose` The purpose of this group. See [`Group Purpose`](/docs/v71_Group_Purpose) for all possible group purposes.  
        
## Collection

### Collection methods

`GET` Get a list of Groups.  
`POST` Create a Group.  

### Collection query parameters

| Name              | Description                                                                                                                                                                                                                                   | Type                  | Required  |
|---                |---                                                                                                                                                                                                                                            |---                    |---        |
| `view`            | Retrieve a specified subset of Groups (one of `member`, `invited`, `all`, `in_progress`, `completed`, `search`).  If `view` is not specified the `member` view is returned by default.                                                     | number                | No        |
| `user_id`         | Get a list of all Groups that a user is a member of or has been invited to.  All users can see the public Groups that another user is a member of but only the authorized user can view private Groups or group invites.             | number                | No        |
| `group_purpose`   | If provided, a group purpose slug to filter the retrieved Groups by. For example, `group_purpose=company`.                                                                                                                                 | number                | No        |
| `keyword`         | Only applicable in the context of the `search` view. Retrieve a specified subset of Groups whose `name` or `description` properties contain this term. Can be used in combination with other search parameter `location_coords`.           | string                | No        |
| `location_coords` | Only applicable in the context of the `search` view. Retrieve a specified subset of Groups whose location is nearby the supplied WGS84 coordinate. Can be used in combination with other search parameters `keyword` or `search_radius`.   | latitude,longitude    | No        |
| `search_radius`   | Only applicable in combination with the `location_coords` param. Retrieve a specified subset of Groups whose location is nearby the supplied WGS84 coordinate and within search radius in meters.                                          | number                | No        |


###### Example values

`view`

* `member` The default view.  If specified, the Groups returned will only include those that the user is a member of.

* `invited` If specified, the Groups returned will only include those that the user has been invited to.

* `all` If specific, the Groups returned will include Groups that the user is a member of and the Groups that the user has been invited to.

* `in_progress` Only applicable for Groups with an objective set (challenges).  If specified, only retrieve Groups where the objective has not yet completed (end_datetime is unset or is in the future)

* `completed` Only applicable for Groups with an objective set (challenges).  If specified, only retrieve Groups where the objective has been completed (end_datetime is set and has past)

* `admin` If specified, the Groups returned will only include those that the user is an administrator of. 

* `search` Only applicable for Groups that are public.  If specified, only retrieve public Groups that satisfy the search criteria. One or both of `keyword` or `location_coords` parameters are required in order to use the `search` view.

`location_coords`

* `37.7833,-122.4167`  If specified, the Groups returned will only include those nearby this WGS84 coordinate, San Francisco, CA in this case.

`search_radius`

* `500000` The default radius.  If specified, the Groups returned will only include those within 500 kilometers of the provided `location_coords`.

### Result Order for Keyword and Location searches

The order of results when using the `search` view is member count descending. Groups with higher member counts are returned first. This is not adjustable.

### Collection links

`self` A link to this resource  
`user` A link to the User resource that owns the Group

### Embedded collections

`Groups` A collection of Groups with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### GET Group entity

###### Request `GET: /v7.0/group/{id}/`

###### Response

```json
{
   "group_objective":null,
   "name":"T8s66hvQyjYKQZhZDFwEtubeqpikvOZkgYzCLJVwzl0vU7iVhuVmEu3WxF5xXQ2fQwum60OV2U6AolmGQN9xWpCfYVfqvZ52D8kv",
   "invitation_required":false,
   "max_users":null,
   "invitation_code":"",
   "_links":{
      "users":[
         {
            "count":1,
            "href":"\/v7.0\/group_user\/?group_id=24"
         }
      ],
      "group_user":[
         {
            "href":"\/v7.0\/group_user\/25\/",
            "id":"25"
         }
      ],
      "self":[
         {
            "href":"\/v7.0\/group\/24\/",
            "id":"24"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group"
         }
      ],
      "group_purpose":[
         {
            "href":"\/v7.0\/group_purpose\/lPmecsSo9XyEaqDr68TlI4W7M7AcaI\/",
            "id":"lPmecsSo9XyEaqDr68TlI4W7M7AcaI"
         }
      ],
      "activity_feed":[
         {
            "href":"\/v7.0\/activity_story\/?feed_type=group&feed_id=24"
         }
      ],
      "group_owner":[
         {
            "href":"\/v7.0\/user\/33\/",
            "id":"33"
         }
      ]
   },
   "location": {
       "locality": "Sebring",
       "country": "US",
       "region": "FL",
       "longitude": -81.454179,
       "postal_code": "33870",
       "address": "123 Main St.",
       "latitude": 27.471376
   },
   "is_public":true,
   "description":""
}
```

### PUT Group entity

###### Request `PUT: /v7.0/group/{id}/`

```json
{
   "description":"test group desc.",
   "invitation_required":true,
   "name":"group name",
   "group_purpose":"/v7.0/group_purpose/challenge/",
   "group_objective":{
      "data_type":"/v7.0/data_type/steps_summary/",
      "data_type_field":"steps_sum",
      "start_datetime":"2014-11-20",
      "period":"P1D"
   },
   "location": {
       "country": "US",
   },
}
```

###### Response

```json
{
   "group_objective":null,
   "name":"group name",
   "invitation_required":true,
   "max_users":null,
   "invitation_code":null,
   "_links":{
      "users":[
         {
            "count":1,
            "href":"\/v7.0\/group_user\/?group_id=45"
         }
      ],
      "group_owner":[
         {
            "href":"\/v7.0\/user\/82\/",
            "id":"82"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group"
         }
      ],
      "group_purpose":[
         {
            "href":"\/v7.0\/group_purpose\/FZ0DbLhcYCDHiZx02Y980JRQwH0RsV\/",
            "id":"FZ0DbLhcYCDHiZx02Y980JRQwH0RsV"
         }
      ],
      "activity_feed":[
         {
            "href":"\/v7.0\/activity_story\/?feed_type=group&feed_id=45"
         }
      ],
      "self":[
         {
            "href":"\/v7.0\/group\/45\/",
            "id":"45"
         }
      ]
   },
   "location": {
       "locality": null,
       "country": "US",
       "region": null,
       "longitude": null,
       "postal_code": null,
       "address": null,
       "latitude": null
   },
   "is_public":false,
   "description":"group description"
}
```

### DELETE Group entity

###### Request `DELETE: /v7.0/group/{id}/`

###### Response 204


### GET Group collection by purpose

###### Request `GET: /v7.0/group/?user_id=58&group_purpose=challenge`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/group\/?limit=20&group_purpose=challenge&user_id=58&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group"
         }
      ]
   },
   "_embedded":{
      "groups":[
         {
            "group_objective":null,
            "name":"EApo5SKP2dol5JsFRDGTyybAmqKJ7tuXKjJR6mkcRRrkTAmQnYZ4Dmz1DH2o0eWfu7UdY9CIapBwnEe6XkjzED6CSErinEdAQbny",
            "invitation_required":false,
            "max_users":20,
            "invitation_code":"",
            "_links":{
               "group_invite":[
                  {
                     "href":"\/v7.0\/group_invite\/3\/",
                     "id":"3"
                  }
               ],
               "users":[
                  {
                     "count":0,
                     "href":"\/v7.0\/group_user\/?group_id=36"
                  }
               ],
               "self":[
                  {
                     "href":"\/v7.0\/group\/36\/",
                     "id":"36"
                  }
               ],
               "group_purpose":[
                  {
                     "href":"\/v7.0\/group_purpose\/challenge\/",
                     "id":"challenge"
                  }
               ],
               "activity_feed":[
                  {
                     "href":"\/v7.0\/activity_story\/?feed_type=group&feed_id=36"
                  }
               ],
               "group_owner":[
                  {
                     "href":"\/v7.0\/user\/63\/",
                     "id":"63"
                  }
               ]
            },
		    "location": {
		        "locality": "Sebring",
		        "country": "US",
		        "region": "FL",
		        "longitude": -81.454179,
		        "postal_code": "33870",
		        "address": "123 Main St.",
		        "latitude": 27.471376
		    },
            "is_public":true,
            "description":""
         },
         {
            "group_objective":null,
            "name":"K9FvwFYtPces1fLMG0qdSyHRtuAgCuf6Fti2TQaNwerKoqSKx3fufAVCkT346EwxIDvXmOPjW4r4UoZRY8FNWFL44d0WjO6Kq29v",
            "invitation_required":false,
            "max_users":20,
            "invitation_code":"",
            "_links":{
               "group_invite":[
                  {
                     "href":"\/v7.0\/group_invite\/2\/",
                     "id":"2"
                  }
               ],
               "users":[
                  {
                     "count":0,
                     "href":"\/v7.0\/group_user\/?group_id=35"
                  }
               ],
               "self":[
                  {
                     "href":"\/v7.0\/group\/35\/",
                     "id":"35"
                  }
               ],
               "group_purpose":[
                  {
                     "href":"\/v7.0\/group_purpose\/challenge\/",
                     "id":"challenge"
                  }
               ],
               "activity_feed":[
                  {
                     "href":"\/v7.0\/activity_story\/?feed_type=group&feed_id=35"
                  }
               ],
               "group_owner":[
                  {
                     "href":"\/v7.0\/user\/61\/",
                     "id":"61"
                  }
               ]
            },
		    "location": {
		        "locality": null,
		        "country": null,
		        "region": null,
		        "longitude": null,
		        "postal_code": null,
		        "address": null,
		        "latitude": null
		    },
            "is_public":true,
            "description":""
         }
      ]
   },
   "total_count":2
}
```

### GET Group collection by invites and members

###### Request `GET: /v7.0/group/?user_id=70`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/group\/?limit=20&user_id=70&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group"
         }
      ]
   },
   "_embedded":{
      "groups":[
         {
            "group_objective":null,
            "name":"0U5uNq9VJQ54zsaRqnxdvZbcJ5q9hJ2Z1zQx5CVGVC9dklnfBo72eQFxa8ON23UD0yGTsXjyCwmGLqd6ME1hwn2zdBqnjEm1R9SQ",
            "invitation_required":false,
            "max_users":null,
            "invitation_code":"",
            "_links":{
               "group_invite":[
                  {
                     "href":"\/v7.0\/group_invite\/4\/",
                     "id":"4"
                  }
               ],
               "users":[
                  {
                     "count":0,
                     "href":"\/v7.0\/group_user\/?group_id=41"
                  }
               ],
               "self":[
                  {
                     "href":"\/v7.0\/group\/41\/",
                     "id":"41"
                  }
               ],
               "group_purpose":[
                  {
                     "href":"\/v7.0\/group_purpose\/3akrP2pgujnutD8YZoAab7fRDMuYPO\/",
                     "id":"3akrP2pgujnutD8YZoAab7fRDMuYPO"
                  }
               ],
               "activity_feed":[
                  {
                     "href":"\/v7.0\/activity_story\/?feed_type=group&feed_id=41"
                  }
               ],
               "group_owner":[
                  {
                     "href":"\/v7.0\/user\/73\/",
                     "id":"73"
                  }
               ]
            },
		    "location": {
		        "locality": "Sebring",
		        "country": "US",
		        "region": "FL",
		        "longitude": -81.454179,
		        "postal_code": "33870",
		        "address": "123 Main St.",
		        "latitude": 27.471376
		    },
            "is_public":true,
            "description":""
         },
         {
            "group_objective":null,
            "name":"Ay2y3ljIVCVsjHRxarkD2wuJAJ1gIqYmwmpSSXEOzAERWcPM7CMb50n7OiGOH0c79kQOWcsnLKJWMutisGwMyuXKePavN0m0X8x6",
            "invitation_required":false,
            "max_users":null,
            "invitation_code":"",
            "_links":{
               "users":[
                  {
                     "count":1,
                     "href":"\/v7.0\/group_user\/?group_id=40"
                  }
               ],
               "group_user":[
                  {
                     "href":"\/v7.0\/group_user\/35\/",
                     "id":"35"
                  }
               ],
               "self":[
                  {
                     "href":"\/v7.0\/group\/40\/",
                     "id":"40"
                  }
               ],
               "group_purpose":[
                  {
                     "href":"\/v7.0\/group_purpose\/An9xr9SmWqfdqxR6ErllHAo6S8xrF7\/",
                     "id":"An9xr9SmWqfdqxR6ErllHAo6S8xrF7"
                  }
               ],
               "activity_feed":[
                  {
                     "href":"\/v7.0\/activity_story\/?feed_type=group&feed_id=40"
                  }
               ],
               "group_owner":[
                  {
                     "href":"\/v7.0\/user\/70\/",
                     "id":"70"
                  }
               ]
            },
		    "location": {
		        "locality": null,
		        "country": null,
		        "region": null,
		        "longitude": null,
		        "postal_code": null,
		        "address": "2227 US 27 South",
		        "latitude": null
		    },
            "is_public":true,
            "description":""
         }
      ]
   },
   "total_count":2
}
```

### GET Group collection by search by keyword

###### Request `GET: /v7.0/group/?view=search&keyword=run&location_coords=37.7833,-122.4167&search_radius=5000`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/group\/?limit=20&view=search&keyword=test&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group"
         }
      ]
   },
   "_embedded":{
      "groups":[
         {
            "group_objective":null,
            "name":"San Francisco Runners",
            "invitation_required":false,
            "max_users":20,
            "invitation_code":"",
            "_links":{
               "users":[
                  {
                     "count":0,
                     "href":"\/v7.0\/group_user\/?group_id=36"
                  }
               ],
               "self":[
                  {
                     "href":"\/v7.0\/group\/36\/",
                     "id":"36"
                  }
               ],
               "activity_feed":[
                  {
                     "href":"\/v7.0\/activity_story\/?feed_type=group&feed_id=36"
                  }
               ],
               "group_owner":[
                  {
                     "href":"\/v7.0\/user\/63\/",
                     "id":"63"
                  }
               ]
            },
		    "location": {
		        "locality": "San Francisco",
		        "country": "US",
		        "region": "CA",
		        "longitude": -122.442131,
		        "postal_code": "94114",
		        "address": "987 A St.",
		        "latitude": 37.761673
		    },
            "is_public":true,
            "description":""
         },
         {
            "group_objective":null,
            "name":"San Francisco Running Group",
            "invitation_required":false,
            "max_users":20,
            "invitation_code":"",
            "_links":{
               "users":[
                  {
                     "count":0,
                     "href":"\/v7.0\/group_user\/?group_id=35"
                  }
               ],
               "self":[
                  {
                     "href":"\/v7.0\/group\/35\/",
                     "id":"35"
                  }
               ],
               "activity_feed":[
                  {
                     "href":"\/v7.0\/activity_story\/?feed_type=group&feed_id=35"
                  }
               ],
               "group_owner":[
                  {
                     "href":"\/v7.0\/user\/61\/",
                     "id":"61"
                  }
               ]
            },
		    "location": {
		        "locality": "Sebring",
		        "country": "US",
		        "region": "FL",
		        "longitude": -81.454179,
		        "postal_code": "33870",
		        "address": null,
		        "latitude": 27.471376
		    },
		    "location": {
		        "locality": "San Francisco",
		        "country": "US",
		        "region": "CA",
		        "longitude": -122.442131,
		        "postal_code": "94104",
		        "address": null,
		        "latitude": 37.761673
		    },
            "is_public":true,
            "description":""
         }
      ]
   },
   "total_count":2
}
```

### POST Group entity

###### Request `POST: /v7.0/group/`

```json
{
   "description":"test group desc.",
   "invitation_required":true,
   "name":"group name",
   "group_purpose":"/v7.0/group_purpose/challenge/",
   "group_objective":{
      "data_type":"/v7.0/data_type/steps_summary/",
      "data_type_field":"steps_sum",
      "start_datetime":"2014-11-20",
      "period":"P1D"
   }
}
```

###### Response

```json
{
   "group_objective":{
      "start_datetime":"2014-11-20T00:00:00+00:00",
      "iteration_start_datetime":"2014-12-19T00:00:00+00:00",
      "name":null,
      "iteration":29,
      "period":"P1D",
      "_links":{
         "group_leaderboard":[
            {
               "href":"\/v7.0\/group_leaderboard\/?group_id=15&iteration=29",
               "value":{
                  "sessions_sum":0
               }
            }
         ],
         "data_type":[
            {
               "href":"\/v7.0\/data_type\/sessions_summary\/",
               "id":"sessions_summary"
            }
         ]
      },
      "end_datetime":null,
      "criteria":{
         "activity_type_id":12
      },
      "data_type_field":"sessions_sum",
      "iteration_active":true,
      "iteration_end_datetime":"2014-12-20T00:00:00+00:00"
   },
   "name":"group name",
   "invitation_required":true,
   "max_users":20,
   "invitation_code":"TP50RFF8V",
   "_links":{
      "users":[
         {
            "count":1,
            "href":"\/v7.0\/group_user\/?group_id=15"
         }
      ],
      "group_user":[
         {
            "href":"\/v7.0\/group_user\/16\/",
            "id":"16"
         }
      ],
      "self":[
         {
            "href":"\/v7.0\/group\/15\/",
            "id":"15"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group"
         }
      ],
      "group_purpose":[
         {
            "href":"\/v7.0\/group_purpose\/challenge\/",
            "id":"challenge"
         }
      ],
      "activity_feed":[
         {
            "href":"\/v7.0\/activity_story\/?feed_type=group&feed_id=15"
         }
      ],
      "group_owner":[
         {
            "href":"\/v7.0\/user\/12\/",
            "id":"12"
         }
      ]
   },
   "location": {
       "locality": null,
       "country": null,
       "region": null,
       "longitude": null,
       "postal_code": null,
       "address": null,
       "latitude": null
   },
   "is_public":false,
   "description":"test group desc."
}
```

[ISO 8601 Duration]: http://en.wikipedia.org/wiki/ISO_8601#Durations
[ISO 8601 Datetime]: http://en.wikipedia.org/wiki/ISO_8601
[ISO-3166-1 Country Code]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[ISO-3166-2]: http://en.wikipedia.org/wiki/ISO_3166-2
