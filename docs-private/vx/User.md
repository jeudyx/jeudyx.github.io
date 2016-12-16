# User

Provides data about users.  Users have a number of privacy options such as Private, Public, and All-Friends, to which all
responses adhere in accordance with the UACF privacy policy.

## Resource URIs

**Item URI:** `/vx/user/{pk}/`

**Collection URI:** `/vx/user/`

## Item

### Item Methods

 * `GET` Retrieve a User by id

### Item properties

### vx

 * User is PRIVATE

| Name         | Description          | Type      | Units               | HTTP Support                                          |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------|
| `id`         | The user's ID        | integer   |                     | **GET:**Required, **POST:**Required, **PUT:**Required |

##### Public

 * User is PUBLIC or a FRIEND of requester.  The following is in addition to the elements in `Private`. 

| Name                | Description                                                                                 | Type              | Units | HTTP Support                                           |
|---------------------|---------------------------------------------------------------------------------------------|-------------------|-------|--------------------------------------------------------|
| `username`          | The user's username.                                                                        | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `first_name`        | The user's first name.                                                                      | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `last_initial`      | The first character of the user's last name.                                                | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `last_name`         | The user's last name.                                                                       | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `date_joined`       | The date/time that the user joined.                                                         | ISO-8601 Datetime |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `display_name`      | The user's name is they want it displayed                                                   | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `gender`            | The user's gender                                                                           | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `goal_statement`    | The user's personal statement                                                               | string            |       | **GET:**Required                                       |
| `hobbies`           | The user's hobbies/interests                                                                | string            |       | **GET:**Required                                       |
| `introduction`      | The user's introduction statement                                                           | string            |       | **GET:**Required                                       |
| `profile_statement` | The user's profile statement                                                                | string            |       | **GET:**Required                                       |
| `time_zone`         | The user's time zone (ex. America/Denver or MST). Refer to the [IANA Time Zone Database][]. | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `location`          | The user's location.                                                                        | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `location.locality` | The user's locality (typically represents city).                                            | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `location.region`   | The user's region (represents state in US, province in Canada). Refer to [ISO-3166-2][].    | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `location.country`  | The user's country. Refer to [ISO-3166-1 Alpha 2][]                                         | string            |       | **GET:**Required, **POST:**Required, **PUT:**:Required |

##### Self

 * User is requester.  The following is in addition to the elements in `Private` and `Public`. 

| Name                            | Description                                                            | Type              | Units     | HTTP Support                                           |
|---------------------------------|------------------------------------------------------------------------|-------------------|-----------|--------------------------------------------------------|
| `birthdate`                     | The user's date of birth                                               | ISO-8601 Datetime |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `communication`                 | The user's communication preferences                                   | dict              |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `communication.newsletter`      | Indicates the user's desire to receive email newsletters               | boolean           |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `communication.promotions`      | Indicates the user's desire to receive email promotions                | boolean           |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `communication.system_messages` | Indicates the user's desire to receive system message emails           | boolean           |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `display_measurement_system`    | The user's measurement system preference (for display purposes)        | string            |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `email`                         | The user's email address                                               | string            |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `height`                        | The user's height                                                      | integer           | meters    | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `weight`                        | The user's weight                                                      | integer           | kilograms | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `last_login`                    | The date/time that the user last logged in.                            | ISO-8601 Datetime |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `location.address`              | The user's address (includes street address and apt/unit information). | string            |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `preferred_language`            | The user's preferred language.                                         | string            |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `sharing`                       | The user's default sharing preferences                                 | dict              |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `sharing.facebook`              | Indicates the user's desire to share workouts on Facebook by default.  | boolean           |           | **GET:**Required, **POST:**Required, **PUT:**:Required |
| `sharing.twitter`               | Indicates the user's desire to share workouts on Twitter by default.   | boolean           |           | **GET:**Required, **POST:**Required, **PUT:**:Required |

##### Example Values

`display_measurement_system`

| Value      | Example    |
|------------|------------|
| "imperial" | (lb/miles) |
| "metric"   | (kg/km)    |
| "hybrid"   | (lbs/km)   |

`preferred_language`

Use the two-letter [ISO-639-1][] standard for the language code ([see a list][ISO-639-1-Codes]).  Some language identifiers contain a suffix with an [ISO-3166-1 Alpha 2][] region code.

We currently support:

 * `es`
 * `fr`
 * `de`
 * `pt`
 * `ne`
 * `it`
 * `ja-JP`
 * `zh-CN`
 * `en-US` - Default

### Item links

##### Private

 * `self`               A link to this resource
 * `privacy`            The user's privacy settings
 * `privacy.profile`    The privacy of the user's profile
 * `documentation`      The link to the documentation for this endpoint
 
##### Public

 Includes all links listed under `Private`

 * `image`                 Link to the user's image (profile photo)
 * `stats`                 The user's aggregated workout statistcs
 * `stats.day`             Link to the user's stats aggregated by for `day`
 * `stats.week`            Link to the user's stats aggregated by for `week`
 * `stats.month`           Link to the user's stats aggregated by for `month`
 * `stats.year`            Link to the user's stats aggregated by for `year`
 * `stats.lifetime`        Link to the user's stats aggregated by for `lifetime`
 * `user_achievements`     Link to the user's achievements
 * `workouts`              Link to the user's workouts sorted by most recent

##### Self

 Includes all links listed under `Private` and `Public`
 
 * `deactivation`          Link to user deactivation
 * `friendships`           Link to the user's friendships
 * `privacy.route`         The default privacy of routes created by the user
 * `privacy.food_log`      The default privacy of the user's food log
 * `privacy.workout`       The default privacy of workouts logged/recorded by the user
 * `privacy.bodymass`      The default privacy of the user's [bodymass](/docs/vx_Body_Mass)
 * `privacy.sleep`         The default privacy of the user's [sleep](/docs/vx_Sleep)
 * `privacy.workout_music` The default privacy of the user's [workout_music](/docs/vx_Workout_Music)
 * `privacy.activity_feed` The privacy of the user's activities on activity feeds Limited to public and private. If a value other than public (3) is passed on a POST or PUT, value will be set to private (0)
 * `privacy.email_search`  The privacy of the user's email address for allowing their account to be discovered by email address. Limited to public and private. If a value other than public (3) is passed on a POST or PUT, value will be set to private (0)

## Collection

### Collection methods

 * `GET` Get a list of Users.

### Collection query parameters

| vx Description                                                                                                                                                                                                                                                                                                                          | Type            | Required |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------|
| `friends_with`              | Retrieve the users that the specified user is friends with. If the user requested is the authenticated user, all friends will be returned. If the user requested is not the authenticated user, the user's friends privacy setting and the friendship list of the current user will be used to determine which friends are returned. | `User` id/href  | No       |
| `mutual_friends_for`        | A comma-delimited set of User ids to retrieve mutual friend relationships for.                                                                                                                                                                                                                                                    | `User` id/href  | No       |
| `requested_friendship_with` | Provides a collection of the users requesting friendship with a user.                                                                                                                                                                                                                                                                | `User` id/href  | No       |
| `suggested_friends_emails`  | To be used with `suggested_friends_for`. Provides a collection of suggested Under Armour users based on a list of email addresses. Email address should be provided as a comma-delimited list.                                                                                                                                       | `list`          | No       |
| `suggested_friends_for`     | A filter for retrieving suggested friends for the authenticated user. Must be used with one of `suggested_friends_source` or `suggested_friends_emails`.                                                                                                                                                                             | `User` id/href  | No       |
| `suggested_friends_source`  | To be used with `suggested_friends_for`. Provides a collection of suggested Under Armour users for the authenticated user from an external friendship source. Valid sources: `facebook`, `mmf`                                                                                                                                       | facebook or mmf | No       |
| `q`                         | Search for users by query. If the query looks like an email, an email search will be performed                                                                                                                                                                                                                                       | string          | No       |
| `email`                     | Search for users by email address.                                                                                                                                                                                                                                                                                                   | string          | No       |
| `name`                      | Search for users by name.                                                                                                                                                                                                                                                                                                            | string          | No       |
| `username`                  | Search for users by username.  

### Collection properties

| Name          | Description                                    | Type      | Units | HTTP Support      |
|---------------|------------------------------------------------|-----------|-------|-------------------|
| `total_count` | Total count of entities returned in collection | integer   | N/A   | **GET**: required |

### Collection links

 * `self` A link to this resource
 * `documentation` The link to the documentation for this endpoint

### Embedded collections

 * `users` A collection of Users with properties as described under [Item properties][] and links as described under [Item links][]

## User
### GET User entity PRIVATE or FRIENDS and not a friend 

###### Request `GET: /vx/user/12345/`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"/{version}/user/12345/",
            "id":"12345"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/v70_User"
         }
      ],
      "privacy":[
         {
            "href":"/{version}/privacy_option/0/",
            "id":"0",
            "name":"profile"
         }
      ]
   },
   "id":12345
}
```

### GET User entity PUBLIC or FRIENDS and is a friend

###### Request `GET: /vx/user/{pk}/`

###### Response

```json
{
   "username":"HFBdkgqfYdyd",
   "last_name":"b86DV",
   "hobbies":"",
   "id":6,
   "date_joined":"2015-01-31T16:13:03+00:00",
   "first_name":"PDvaV",
   "display_name":"PDvaV b86DV",
   "last_initial":"b.",
   "introduction":"",
   "gender":"",
   "time_zone":"US/Central",
   "_links":{
      "stats":[
         {
            "href":"/{version}/user_stats/6/?aggregate_by_period=month",
            "id":"6",
            "name":"month"
         },
         {
            "href":"/{version}/user_stats/6/?aggregate_by_period=year",
            "id":"6",
            "name":"year"
         },
         {
            "href":"/{version}/user_stats/6/?aggregate_by_period=day",
            "id":"6",
            "name":"day"
         },
         {
            "href":"/{version}/user_stats/6/?aggregate_by_period=week",
            "id":"6",
            "name":"week"
         },
         {
            "href":"/{version}/user_stats/6/?aggregate_by_period=lifetime",
            "id":"6",
            "name":"lifetime"
         }
      ],
      "privacy":[
         {
            "href":"/{version}/privacy_option/0/",
            "id":"0",
            "name":"profile"
         }
      ],
      "self":[
         {
            "href":"/{version}/user/6/",
            "id":"6"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/v70_User"
         }
      ],
      "user_achievements":[
         {
            "href":"/{version}/user_achievement/?user=6"
         }
      ],
      "workouts":[
         {
            "href":"/{version}/workout/?user=6&order_by=-start_datetime"
         }
      ],
      "image":[
         {
            "href":"/{version}/user_profile_photo/6/",
            "id":"6",
            "name":"user_profile_photo"
         }
      ]
   },
   "goal_statement":null,
   "profile_statement":"",
   "location":{
      "country":"",
      "region":"",
      "locality":""
   }
}
```

### GET User entity SELF, a user requesting their own data

###### Request `GET: /vx/user/self/`

###### Response

```json
{
   "last_name":"b86DV",
   "weight":null,
   "height":null,
   "hobbies":"",
   "id":12345,
   "date_joined":"2015-01-31T16:13:03+00:00",
   "first_name":"PDvaV",
   "display_name":"PDvaV b86DV",
   "introduction":"",
   "display_measurement_system":"imperial",
   "last_login":"2015-02-25T16:13:03+00:00",
   "email":"HFBdkgqfYdyd@example.com",
   "goal_statement":null,
   "username":"HFBdkgqfYdyd",
   "last_initial":"b.",
   "preferred_language":"en-US",
   "gender":"",
   "time_zone":"US/Central",
   "birthdate":null,
   "profile_statement":"",
   "sharing":{
      "twitter":false,
      "facebook":false
   },
   "location":{
      "country":"",
      "region":"",
      "locality":"",
      "address":""
   },
   "communication":{
      "promotions":true,
      "newsletter":true,
      "system_messages":true
   },
   "_links":{
      "user_achievements":[
         {
            "href":"/{version}/user_achievement/?user=12345"
         }
      ],
      "stats":[
         {
            "href":"/{version}/user_stats/12345/?aggregate_by_period=month",
            "id":"12345",
            "name":"month"
         },
         {
            "href":"/{version}/user_stats/12345/?aggregate_by_period=year",
            "id":"12345",
            "name":"year"
         },
         {
            "href":"/{version}/user_stats/12345/?aggregate_by_period=day",
            "id":"12345",
            "name":"day"
         },
         {
            "href":"/{version}/user_stats/12345/?aggregate_by_period=week",
            "id":"12345",
            "name":"week"
         },
         {
            "href":"/{version}/user_stats/12345/?aggregate_by_period=lifetime",
            "id":"12345",
            "name":"lifetime"
         }
      ],
      "image":[
         {
            "href":"/{version}/user_profile_photo/12345/",
            "id":"12345",
            "name":"user_profile_photo"
         }
      ],
      "privacy":[
         {
            "href":"/{version}/privacy_option/0/",
            "id":"0",
            "name":"workout_music"
         },
         {
            "href":"/{version}/privacy_option/1/",
            "id":"1",
            "name":"workout"
         },
         {
            "href":"/{version}/privacy_option/0/",
            "id":"0",
            "name":"profile"
         },
         {
            "href":"/{version}/privacy_option/3/",
            "id":"3",
            "name":"activity_feed"
         },
         {
            "href":"/{version}/privacy_option/0/",
            "id":"0",
            "name":"bodymass"
         },
         {
            "href":"/{version}/privacy_option/1/",
            "id":"1",
            "name":"food_log"
         },
         {
            "href":"/{version}/privacy_option/3/",
            "id":"3",
            "name":"email_search"
         },
         {
            "href":"/{version}/privacy_option/1/",
            "id":"1",
            "name":"route"
         },
         {
            "href":"/{version}/privacy_option/0/",
            "id":"0",
            "name":"sleep"
         }
      ],
      "friendships":[
         {
            "href":"/{version}/friendship/?from_user=12345"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/v70_User"
         }
      ],
      "workouts":[
         {
            "href":"/{version}/workout/?user=12345&order_by=-start_datetime"
         }
      ],
      "deactivation":[
         {
            "href":"/{version}/user_deactivation/"
         }
      ],
      "self":[
         {
            "href":"/{version}/user/12345/",
            "id":"12345"
         }
      ]
   }
}
```

### GET User collection containing self, a friend, and a non-friend who is private

###### Request `GET: /vx/user/`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"/{version}/user/?limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/v71_User"
         }
      ]
   },
   "_embedded":{
      "user":[
         {
            "_links":{
               "self":[
                  {
                     "href":"/{version}/user/12345/",
                     "id":"12345"
                  }
               ],
               "documentation":[
                  {
                     "href":"https://developer.underarmour.com/docs/v70_User"
                  }
               ],
               "privacy":[
                  {
                     "href":"/{version}/privacy_option/0/",
                     "id":"0",
                     "name":"profile"
                  }
               ]
            },
            "id":12345
         },
         {
            "username":"HFBdkgqfYdyd",
            "last_name":"b86DV",
            "hobbies":"",
            "id":6,
            "date_joined":"2015-01-31T16:13:03+00:00",
            "first_name":"PDvaV",
            "display_name":"PDvaV b86DV",
            "last_initial":"b.",
            "introduction":"",
            "gender":"",
            "time_zone":"US/Central",
            "_links":{
               "stats":[
                  {
                     "href":"/{version}/user_stats/6/?aggregate_by_period=month",
                     "id":"6",
                     "name":"month"
                  },
                  {
                     "href":"/{version}/user_stats/6/?aggregate_by_period=year",
                     "id":"6",
                     "name":"year"
                  },
                  {
                     "href":"/{version}/user_stats/6/?aggregate_by_period=day",
                     "id":"6",
                     "name":"day"
                  },
                  {
                     "href":"/{version}/user_stats/6/?aggregate_by_period=week",
                     "id":"6",
                     "name":"week"
                  },
                  {
                     "href":"/{version}/user_stats/6/?aggregate_by_period=lifetime",
                     "id":"6",
                     "name":"lifetime"
                  }
               ],
               "privacy":[
                  {
                     "href":"/{version}/privacy_option/0/",
                     "id":"0",
                     "name":"profile"
                  }
               ],
               "self":[
                  {
                     "href":"/{version}/user/6/",
                     "id":"6"
                  }
               ],
               "documentation":[
                  {
                     "href":"https://developer.underarmour.com/docs/v70_User"
                  }
               ],
               "user_achievements":[
                  {
                     "href":"/{version}/user_achievement/?user=6"
                  }
               ],
               "workouts":[
                  {
                     "href":"/{version}/workout/?user=6&order_by=-start_datetime"
                  }
               ],
               "image":[
                  {
                     "href":"/{version}/user_profile_photo/6/",
                     "id":"6",
                     "name":"user_profile_photo"
                  }
               ]
            },
            "goal_statement":null,
            "profile_statement":"",
            "location":{
               "country":"",
               "region":"",
               "locality":""
            }
         },
         {
            "last_name":"b86DV",
            "weight":null,
            "height":null,
            "hobbies":"",
            "id":12345,
            "date_joined":"2015-01-31T16:13:03+00:00",
            "first_name":"PDvaV",
            "display_name":"PDvaV b86DV",
            "introduction":"",
            "display_measurement_system":"imperial",
            "last_login":"2015-02-25T16:13:03+00:00",
            "email":"HFBdkgqfYdyd@example.com",
            "goal_statement":null,
            "username":"HFBdkgqfYdyd",
            "last_initial":"b.",
            "preferred_language":"en-US",
            "gender":"",
            "time_zone":"US/Central",
            "birthdate":null,
            "profile_statement":"",
            "sharing":{
               "twitter":false,
               "facebook":false
            },
            "location":{
               "country":"",
               "region":"",
               "locality":"",
               "address":""
            },
            "communication":{
               "promotions":true,
               "newsletter":true,
               "system_messages":true
            },
            "_links":{
               "user_achievements":[
                  {
                     "href":"/{version}/user_achievement/?user=12345"
                  }
               ],
               "stats":[
                  {
                     "href":"/{version}/user_stats/12345/?aggregate_by_period=month",
                     "id":"12345",
                     "name":"month"
                  },
                  {
                     "href":"/{version}/user_stats/12345/?aggregate_by_period=year",
                     "id":"12345",
                     "name":"year"
                  },
                  {
                     "href":"/{version}/user_stats/12345/?aggregate_by_period=day",
                     "id":"12345",
                     "name":"day"
                  },
                  {
                     "href":"/{version}/user_stats/12345/?aggregate_by_period=week",
                     "id":"12345",
                     "name":"week"
                  },
                  {
                     "href":"/{version}/user_stats/12345/?aggregate_by_period=lifetime",
                     "id":"12345",
                     "name":"lifetime"
                  }
               ],
               "image":[
                  {
                     "href":"/{version}/user_profile_photo/12345/",
                     "id":"12345",
                     "name":"user_profile_photo"
                  }
               ],
               "privacy":[
                  {
                     "href":"/{version}/privacy_option/0/",
                     "id":"0",
                     "name":"workout_music"
                  },
                  {
                     "href":"/{version}/privacy_option/1/",
                     "id":"1",
                     "name":"workout"
                  },
                  {
                     "href":"/{version}/privacy_option/0/",
                     "id":"0",
                     "name":"profile"
                  },
                  {
                     "href":"/{version}/privacy_option/3/",
                     "id":"3",
                     "name":"activity_feed"
                  },
                  {
                     "href":"/{version}/privacy_option/0/",
                     "id":"0",
                     "name":"bodymass"
                  },
                  {
                     "href":"/{version}/privacy_option/1/",
                     "id":"1",
                     "name":"food_log"
                  },
                  {
                     "href":"/{version}/privacy_option/3/",
                     "id":"3",
                     "name":"email_search"
                  },
                  {
                     "href":"/{version}/privacy_option/1/",
                     "id":"1",
                     "name":"route"
                  },
                  {
                     "href":"/{version}/privacy_option/0/",
                     "id":"0",
                     "name":"sleep"
                  }
               ],
               "friendships":[
                  {
                     "href":"/{version}/friendship/?from_user=12345"
                  }
               ],
               "documentation":[
                  {
                     "href":"https://developer.underarmour.com/docs/v70_User"
                  }
               ],
               "workouts":[
                  {
                     "href":"/{version}/workout/?user=12345&order_by=-start_datetime"
                  }
               ],
               "deactivation":[
                  {
                     "href":"/{version}/user_deactivation/"
                  }
               ],
               "self":[
                  {
                     "href":"/{version}/user/12345/",
                     "id":"12345"
                  }
               ]
            }
         }
      ]
   },
   "total_count":3
}
```
