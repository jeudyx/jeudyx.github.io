---
name: User
doc_uri: User
versions: api/0.1, api/0.2, v7.0, v7.1
released: 2014-01-01
modified: 2014-01-01
tags: user
title: User
layout: documentation
path_version: api/0.1
docs_version: 01
permalink: /docs/01_User/
doc_uri: 01_User/
---

# {{ page.title }}

Retrieve and update {{ page.title }} information

## Resource URIs

**Collection URI:** `/{{ page.path_version }}/user/`

**Item URI:** `/{{ page.path_version }}/user/<pk>/`

## Item

### Item methods

`GET` Get {{ page.title }} information. The current authenticated {{ page.title }} can be retrieved by accessing `/user/self/`
`PUT` Update {{ page.title }} information

### Item query parameters

### Item properties <a name="itemproperties"></a>

| Name           | Description                                                                                 | Type       | HTTP Support                                           |
|----------------|---------------------------------------------------------------------------------------------|------------|--------------------------------------------------------|
| `date_joined`  | The date/time that the {{ page.title }} joined.                                                         | DateTime   | **GET:**Required, **POST:**Optional, **PUT:**:Optional |
| `first_name`   | The {{ page.title }}'s first name.                                                                      | string     | **GET:**Required, **POST:**Required, **PUT:**:Optional |
| `gender`       | The {{ page.title }}'s gender                                                                           | 'M' or 'F' | **GET:**Required, **POST:**Required, **PUT:**:Optional |
| `last_initial` | The first character of the {{ page.title }}'s last name.                                                | string     | **GET:**Required, **POST:**Optional, **PUT:**:Optional |
| `last_login`   | The date/time that the {{ page.title }} last logged in.                                                 | DateTime   | **GET:**Required, **POST:**Optional, **PUT:**:Optional |
| `location`     | The {{ page.title }}'s location.                                                                        | string     | **GET:**Required, **POST:**Optional, **PUT:**:Optional |
| `locality`     | The {{ page.title }}'s locality (typically represents city).                                            | string     | **GET:**Required, **POST:**Optional, **PUT:**:Optional |
| `region`       | The {{ page.title }}'s region (represents state in US, province in Canada). Refer to [ISO-3166-2](http://en.wikipedia.org/wiki/ISO_3166-2).    | string     | **GET:**Required, **POST:**Optioanl, **PUT:**:Optional |
| `country`      | The {{ page.title }}'s country. Refer to [ISO-3166-1 Alpha 2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)                                         | string     | **GET:**Required, **POST:**Optional, **PUT:**:Optional |
| `time_zone`    | The {{ page.title }}'s time zone (ex. America/Denver or MST). Refer to the [IANA Time Zone Database](http://en.wikipedia.org/wiki/List_of_tz_database_time_zones). | string     | **GET:**Required, **POST:**Optional, **PUT:**:Optional |
| `username`     | The {{ page.title }}'s username.                                                                        | string     | **GET:**Required, **POST:**Required, **PUT:**:Optional |
| `preferred_language`     | The {{ page.title }}'s preferred language. Use the two-letter [ISO-639-1](http://en.wikipedia.org/wiki/ISO_639-1) standard for the language code ([see a list](http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)).<br/> Some language identifiers contain a suffix with an [ISO-3166-1 Alpha 2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) region code.<br/> We currently support `es`, `fr`, `de`, `pt`, `ne`, `it`, `ja-JP`, `zh-CN`, and `en-US`. Defaults to `en-US`.                                                                   | string     | **GET:**Required, **POST:**Optional, **PUT:**:Optional |

##### Additional properties available when requesting the authenticated {{ page.title }}

| Name                         | Description                                                                                                                     | Type | Units | HTTP Support                                                  |
|------------------------------|---------------------------------------------------------------------------------------------------------------------------------|------|-------|---------------------------------------------------------------|
| `birthdate`                  | The {{ page.title }}'s date of birth  | type | | **GET:**authed {{ page.title }} only, **POST:**Required, **PUT:**Optional |
| `email`                      | The {{ page.title }}'s email address  | type | | **GET:**authed {{ page.title }} only, **POST:**Required, **PUT:**Optional |
| `communication`              | The {{ page.title }}'s communication preferences | type | | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `newsletter`                 | Indicates the {{ page.title }}'s desire to receive email newsletters | type | | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `promotions`                 | Indicates the {{ page.title }}'s desire to receive email promotions | type | | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `system_messages`            | Indicates the {{ page.title }}'s desire to receive system message emails | type | | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `display_measurement_system` | The {{ page.title }}'s measurement system preference (for display purposes when using Under Armour sites and apps) Valid values: "imperial" (lb/miles), "metric" (kg/km), "hybrid" (lbs/km) | type | | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `last_name`                  | The {{ page.title }}'s last name | type | | **GET:**authed {{ page.title }} only, **POST:**Required, **PUT:**Optional |
| `location`                   | The {{ page.title }}'s location. | type | | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `address`                    | The {{ page.title }}'s address (includes street address and apt/unit information).| type | | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `sharing`                    | The {{ page.title }}'s default sharing preferences | type | | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `facebook`                   | Indicates the {{ page.title }}'s desire to share workouts on Facebook by default | type | | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `twitter`                    | Indicates the {{ page.title }}'s desire to share workouts on Twitter by default | type | | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `height`                     | The {{ page.title }}'s height | type | meters | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |
| `weight`                     | The {{ page.title }}'s weight | type | kilograms | **GET:**authed {{ page.title }} only, **POST:**Optional, **PUT:**Optional |

> Note: Setting a sharing setting to True will only apply if the {{ page.title }}'s account is connected to the respective social media platform. Otherwise PUT will be ignored.

##### Additional properties available when viewing {{ page.title }}s that are friends with the authenticated {{ page.title }}

| Name             | Description                       | Type   | Units | HTTP Support                    |
|------------------|-----------------------------------|--------|-------|---------------------------------|
| `goal_statement` | The {{ page.title }}'s personal statement     | string |  | **GET:**authed {{ page.title }} and friends |
| `hobbies`        | The {{ page.title }}'s hobbies/interests      | string |  | **GET:**authed {{ page.title }} and friends |
| `introduction`   | The {{ page.title }}'s introduction statement | string |  | **GET:**authed {{ page.title }} and friends |
| `last_name`      | The {{ page.title }}'s last name              | string |  | **GET:**authed {{ page.title }} and friends |

### Item links <a name="itemlinks"></a>

| Link                    | Required | Description                                                                                                                                                                                                                        |
|-------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `deactivation`          | Yes | **Read-Only** Link to {{ page.title }} deactivation                                                                                                                                                                                                          |
| `friendships`           | Yes | **Read-Only** Link to the {{ page.title }}'s friendships                                                                                                                                                                                                     |
| `image`                 | Yes | **Read-Only** Link to the {{ page.title }}'s image (profile photo)                                                                                                                                                                                           |
| `privacy`               | Yes | The {{ page.title }}'s privacy settings                                                                                                                                                                                                        |
| `privacy.profile`       | Yes | The privacy of the {{ page.title }}'s profile                                                                                                                                                                                                  |
| `privacy.route`         | Yes | The default privacy of routes created by the {{ page.title }}                                                                                                                                                                                  |
| `privacy.food_log`      | Yes | The default privacy of the {{ page.title }}'s food log                                                                                                                                                                                         |
| `privacy.workout`       | Yes | The default privacy of workouts logged/recorded by the {{ page.title }}                                                                                                                                                                        |
| `privacy.bodymass`      | Yes | The default privacy of the {{ page.title }}'s [bodymass](/docs/{{ page.docs_version}}_BodyMass)                                                                                                                          |
| `privacy.sleep`      | Yes | The default privacy of the {{ page.title }}'s [sleep](/docs/{{ page.docs_version }}_Sleep)                                                                                                                             |
| `privacy.workout_music`      | Yes | The default privacy of the {{ page.title }}'s [workout_music]()                                                                                                                                                     |
| `privacy.email_search`  | Yes | The privacy of the {{ page.title }}'s email address for allowing their account to be discovered by email address. Limited to public and private. If a value other than public (3) is passed on a POST or PUT, value will be set to private (0) |
| `stats`                 | Yes | **Read-Only** The {{ page.title }}'s aggregated workout statistcs                                                                                                                                                                                            |
| `stats.day`             | Yes | **Read-Only** Link to the {{ page.title }}'s stats aggregated by for `day`                                                                                                                                                                                   |
| `stats.week`            | Yes | **Read-Only** Link to the {{ page.title }}'s stats aggregated by for `week`                                                                                                                                                                                  |
| `stats.month`           | Yes | **Read-Only** Link to the {{ page.title }}'s stats aggregated by for `month`                                                                                                                                                                                 |
| `stats.year`            | Yes | **Read-Only** Link to the {{ page.title }}'s stats aggregated by for `year`                                                                                                                                                                                  |
| `stats.lifetime`        | Yes | **Read-Only** Link to the {{ page.title }}'s stats aggregated by for `lifetime`                                                                                                                                                                              |
| `user_achievements`     | Yes | **Read-Only** Link to the {{ page.title }}'s achievements                                                                                                                                                                                                    |
| `workouts`              | Yes | **Read-Only** Link to the {{ page.title }}'s workouts sorted by most recent                                                                                                                                                                                  |

## Collection

### Collection methods

`GET` Retrieve a collection of {{ page.title }}s. Must be used with one of friends_with or suggested_friends_for.

### Collection query parameters

| Name                        | Description                                                                                                                                                                                                                                                                                                                          | Type            | Required |
|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|----------|
| `friends_with`              | Retrieve the {{ page.title }}s that the specified {{ page.title }} is friends with. If the {{ page.title }} requested is the authenticated {{ page.title }}, all friends will be returned. If the {{ page.title }} requested is not the authenticated {{ page.title }}, the {{ page.title }}'s friends privacy setting and the friendship list of the current {{ page.title }} will be used to determine which friends are returned. | `User` id/href  | No       |
| `mutual_friends_for`        | A comma-delimited set of {{ page.title }} ids to retrieve mutual friend relationships for.                                                                                                                                                                                                                                                       | `User` id/href  | No       |
| `requested_friendship_with` | Provides a collection of the {{ page.title }}s requesting friendship with a {{ page.title }}.                                                                                                                                                                                                                                                                | `User` id/href  | No       |
| `suggested_friends_emails`  | To be used with `suggested_friends_for`. Provides a collection of suggested Under Armour {{ page.title }}s based on a list of email addresses. Email address should be provided as a comma-delimited list.                                                                                                                                       | `list`          | No       |
| `suggested_friends_for`     | A filter for retrieving suggested friends for the authenticated {{ page.title }}. Must be used with one of `suggested_friends_source` or `suggested_friends_emails`.                                                                                                                                                                             | `User` id/href  | No       |
| `suggested_friends_source`  | To be used with `suggested_friends_for`. Provides a collection of suggested Under Armour {{ page.title }}s for the authenticated {{ page.title }} from an external friendship source. Valid sources: `facebook`, `mmf`                                                                                                                                       | facebook or mmf | No       |
| `q`                         | Search for {{ page.title }}s by query. If the query looks like an email, an email search will be performed                                                                                                                                                                                                                                       | string          | No       |
| `email`                     | Search for {{ page.title }}s by email address.                                                                                                                                                                                                                                                                                                   | string          | No       |
| `name`                      | Search for {{ page.title }}s by name.                                                                                                                                                                                                                                                                                                            | string          | No       |
| `username`                  | Search for {{ page.title }}s by username.                                                                                                                                                                                                                                                                                                        | string          | No       |

### Collection properties

| Name          | Type | Units   | Description                                                       | HTTP Support |
|---------------|------|---------|-------------------------------------------------------------------|--------------|
| `total_count` | int  |  | The total number of {{ page.title }}s matching the query parameters specified | Required     |

## Usage

### Retrieve a {{ page.title }} by username

### GET *User* entity by ID

###### Request `GET: /{{ page.path_version }}/user/{pk}/`

###### Response

```json
{
    "last_name": "Last",
    "weight": null,
    "communication": {
        "promotions": true,
        "newsletter": true,
        "system_messages": true
    },
    "height": null,
    "hobbies": "",
    "id": {User ID},
    "date_joined": "2014-08-28T00:33:20+00:00",
    "first_name": "First",
    "display_name": "First Last",
    "introduction": "",
    "display_measurement_system": "imperial",
    "last_login": "2014-08-28T00:33:20+00:00",
    "goal_statement": null,
    "_links": {
        "stats": [{
            "href": "\/{{ page.path_version }}\/user_stats\/{User ID}\/?aggregate_by_period=month",
            "id": "{User ID}",
            "name": "month"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{User ID}\/?aggregate_by_period=year",
            "id": "{User ID}",
            "name": "year"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{User ID}\/?aggregate_by_period=day",
            "id": "{User ID}",
            "name": "day"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{User ID}\/?aggregate_by_period=week",
            "id": "{User ID}",
            "name": "week"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{User ID}\/?aggregate_by_period=lifetime",
            "id": "{User ID}",
            "name": "lifetime"
        }],
        "privacy": [{
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "profile"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "workout"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/0\/",
            "id": "0",
            "name": "bodymass"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "food_log"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/3\/",
            "id": "3",
            "name": "email_search"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "route"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/0\/",
            "id": "0",
            "name": "sleep"
        }],
        "image": [{
            "href": "\/{{ page.path_version }}\/user_profile_photo\/{User ID}\/",
            "id": "{User ID}",
            "name": "user_profile_photo"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.doc_uri }}"
        }],
        "deactivation": [{
            "href": "\/{{ page.path_version }}\/user_deactivation\/"
        }],
        "user_achievements": [{
            "href": "\/{{ page.path_version }}\/user_achievement\/?user={User ID}"
        }],
        "friendships": [{
            "href": "\/{{ page.path_version }}\/friendship\/?from_user={User ID}"
        }],
        "workouts": [{
            "href": "\/{{ page.path_version }}\/workout\/?user={User ID}&order_by=-start_datetime"
        }],
        "self": [{
            "href": "\/{{ page.path_version }}\/user\/{User ID}\/",
            "id": "{User ID}"
        }]
    },
    "email": "the@email.com",
    "location": {
        "country": "US",
        "region": "CO",
        "locality": "Austin",
        "address": ""
    },
    "username": "First{User ID}",
    "sharing": {
        "twitter": false,
        "facebook": false
    },
    "last_initial": "A",
    "gender": "M",
    "time_zone": "America\/Austin",
    "birthdate": "1983-05-05",
    "profile_statement": "",
    "preferred_language": "en-US"
}
```

### GET *User* entity of current authenticated {{ page.title }}

###### Request `GET: /{{ page.path_version }}/user/self/`

###### Response

```json
{
    "last_name": "Last",
    "weight": null,
    "communication": {
        "promotions": true,
        "newsletter": true,
        "system_messages": true
    },
    "height": null,
    "hobbies": "",
    "id": {user ID},
    "date_joined": "2014-08-28T00:33:20+00:00",
    "first_name": "First",
    "display_name": "First Last",
    "introduction": "",
    "display_measurement_system": "imperial",
    "last_login": "2014-08-28T00:33:20+00:00",
    "goal_statement": null,
    "_links": {
        "stats": [{
            "href": "\/{{ page.path_version }}\/user_stats\/{user ID}\/?aggregate_by_period=month",
            "id": "{user ID}",
            "name": "month"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{user ID}\/?aggregate_by_period=year",
            "id": "{user ID}",
            "name": "year"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{user ID}\/?aggregate_by_period=day",
            "id": "{user ID}",
            "name": "day"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{user ID}\/?aggregate_by_period=week",
            "id": "{user ID}",
            "name": "week"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{user ID}\/?aggregate_by_period=lifetime",
            "id": "{user ID}",
            "name": "lifetime"
        }],
        "privacy": [{
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "profile"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "workout"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/0\/",
            "id": "0",
            "name": "bodymass"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "food_log"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/3\/",
            "id": "3",
            "name": "email_search"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "route"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/0\/",
            "id": "0",
            "name": "sleep"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/0\/",
            "id": "0",
            "name": "workout_music"
        }],
        "image": [{
            "href": "\/{{ page.path_version }}\/user_profile_photo\/{user ID}\/",
            "id": "{user ID}",
            "name": "user_profile_photo"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.doc_uri }}"
        }],
        "deactivation": [{
            "href": "\/{{ page.path_version }}\/user_deactivation\/"
        }],
        "user_achievements": [{
            "href": "\/{{ page.path_version }}\/user_achievement\/?user={user ID}"
        }],
        "friendships": [{
            "href": "\/{{ page.path_version }}\/friendship\/?from_user={user ID}"
        }],
        "workouts": [{
            "href": "\/{{ page.path_version }}\/workout\/?user={user ID}&order_by=-start_datetime"
        }],
        "self": [{
            "href": "\/{{ page.path_version }}\/user\/`{user ID}\/",
            "id": "{user ID}"
        }]
    },
    "email": "email@emaildomain.com",
    "location": {
        "country": "US",
        "region": "CO",
        "locality": "Austin",
        "address": ""
    },
    "username": "First{user ID}",
    "sharing": {
        "twitter": false,
        "facebook": false
    },
    "last_initial": "A.",
    "gender": "M",
    "time_zone": "America\/Austin",
    "birthdate": "1983-05-05",
    "profile_statement": "",
    "preferred_language": "en-US"
}
```

### PUT *User* entity

###### Request `PUT: /{{ page.path_version }}/user/{pk}/`

```json
{
    "weight": 200,
}
```

###### Response

```json
{
    "last_name": "Last",
    "weight": 200.03423517,
    "communication": {
        "promotions": true,
        "newsletter": true,
        "system_messages": true
    },
    "height": null,
    "hobbies": "",
    "id": {User ID},
    "date_joined": "2014-08-28T00:33:20+00:00",
    "first_name": "First",
    "display_name": "First Last",
    "introduction": "",
    "display_measurement_system": "imperial",
    "last_login": "2014-08-28T00:33:20+00:00",
    "goal_statement": null,
    "_links": {
        "stats": [{
            "href": "\/{{ page.path_version }}\/user_stats\/{User ID}\/?aggregate_by_period=month",
            "id": "{User ID}",
            "name": "month"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{User ID}\/?aggregate_by_period=year",
            "id": "{User ID}",
            "name": "year"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{User ID}\/?aggregate_by_period=day",
            "id": "{User ID}",
            "name": "day"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{User ID}\/?aggregate_by_period=week",
            "id": "{User ID}",
            "name": "week"
        }, {
            "href": "\/{{ page.path_version }}\/user_stats\/{User ID}\/?aggregate_by_period=lifetime",
            "id": "{User ID}",
            "name": "lifetime"
        }],
        "privacy": [{
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "profile"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "workout"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/0\/",
            "id": "0",
            "name": "bodymass"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "food_log"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/3\/",
            "id": "3",
            "name": "email_search"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/1\/",
            "id": "1",
            "name": "route"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/0\/",
            "id": "0",
            "name": "sleep"
        }, {
            "href": "\/{{ page.path_version }}\/privacy_option\/0\/",
            "id": "0",
            "name": "workout_music"
        }],
        "image": [{
            "href": "\/{{ page.path_version }}\/user_profile_photo\/{User ID}\/",
            "id": "{User ID}",
            "name": "user_profile_photo"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.doc_uri }}"
        }],
        "deactivation": [{
            "href": "\/{{ page.path_version }}\/user_deactivation\/"
        }],
        "user_achievements": [{
            "href": "\/{{ page.path_version }}\/user_achievement\/?user={User ID}"
        }],
        "friendships": [{
            "href": "\/{{ page.path_version }}\/friendship\/?from_user={User ID}"
        }],
        "workouts": [{
            "href": "\/{{ page.path_version }}\/workout\/?user={User ID}&order_by=-start_datetime"
        }],
        "self": [{
            "href": "\/{{ page.path_version }}\/user\/{User ID}\/",
            "id": "{User ID}"
        }]
    },
    "email": "the@email.com",
    "location": {
        "country": "US",
        "region": "CO",
        "locality": "Denver",
        "address": ""
    },
    "username": "First{User ID}",
    "sharing": {
        "twitter": false,
        "facebook": false
    },
    "last_initial": "M.",
    "gender": "M",
    "time_zone": "America\/Denver",
    "birthdate": "1983-05-05",
    "profile_statement": "",
    "preferred_language": "en-US"
}
```

### GET {{ page.title }} collection

###### Request `GET: /{{ page.path_version }}/user/`

###### Response

```json
{
    "_links": {
        "self": [{
            "href": "\/{{ page.path_version }}\/user\/?name=first_name"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.doc_uri }}"
        }]
    },
    "_embedded": {
        "routes": [{
         ...
        }],
    "total_count": 1000
}
```


<!-- Links -->
[ISO-3166-2]: http://en.wikipedia.org/wiki/ISO_3166-2
[ISO-3166-1 Alpha 2]: http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
[IANA Time Zone Database]: http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
[ISO-639-1]: http://en.wikipedia.org/wiki/ISO_639-1
[ISO-639-1-Codes]: http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
