---
name: Activity Story
doc_uri: Activity_Story
versions: api/0.1, api/0.2, v7.0, v7.1
released: 2014-11-18
tags: social
todo: pinned links to Image, Privacy and Filemobile Session
title: Activity Story
layout: documentation
path_version: v7.0
docs_version: v70
permalink: /docs/v70_Activity_Story/
doc_uri: v70_Activity_Story/
---

# Activity Story

An {{ page.title }} tells the story of an actor performing an action on or with an
object. An {{ page.title }} is comprised of an *actor*, a *verb*, an *object* and
(optionally) a *target*.

An activity feed is a collection of Activity Stories that provides a stream of
the most recent activities that comprise a specified feed.


## Resource URIs

**Item URI:** `/{{ page.path_version }}/activity_story/{pk}/`

**Collection URI:** `/{{ page.path_version }}/activity_story/`


## Collection

### Collection methods

* `GET` Retrieve a feed of Activity Stories.
* `POST` Add a reply to a story, or create a status post story.


### Collection query parameters

| Name        | Description                                                                                                                         | Type   | Required                                                       |
| ---         | ---                                                                                                                                 | ---    | ---                                                            |
| `feed_type` | Represents the type of feed being requested. Must be either *public*, *user*, *group*, or *page*                                    | string | Required                                                       |
| `feed_id`   | Primary key for the requested feed type (ex. user_id, group_id or page_id).                                                         | string | Required for all feed types except for the `public` feed type. |
| `feed_view` | Each `feed_type` may have zero or more feed views. A feed view is a filter that returns a subset of the stories that are in a feed. | string | Optional                                                       |


#### Available `feed_view`s for `feed_type`s

| Feed Type      | Available Views                       |
| ---            | ---                                   |
| `public`       | `status`, `photo`, `video`, `workout` |
| `user`         | `me`                                  |
| `page`         | `self`, `featured`                    |
| `group`        | none yet                              |


#### For retrieving likes or comments

| Name              | Description                                                  | Type   | Required |
| ---               | ---                                                          | ---    | ---      |
| `reply_type`      | can be `comments` or `likes`                                 | string | Required |
| `parent_story_id` | Id of the parent story, the target of the requested replies. | string | Required |


## Item

### Item methods

* `GET` Get a single {{ page.title }}.
* `DELETE` Remove a story or reply from all feeds.
* `PATCH` Update a story - currently only valid for updating the attributes of
  status and repost stories. Other update requests will return a 400 status.


### Item security

#### `POST`

For objects of type 'comment' or 'like', the authenticated user either be the
commenting user (if acting as user) or have 'create_reply' permission on the
page actor (if acting as a page). Users with a public page can also comment or
like as their page.

For an object type of 'status' and an actor type of 'user', the authenticated
user must match the user for which the post is being made. For an object type of
'status' and an actor type of 'page', the authenticated user must either be the
user associated with the page (if a PublicPage) or must have the `create*reply`
permission for the specified page resource (see [User Role](/docs/{{ page.docs_version }}_User_Role)).
Otherwise returns 403 not authorized.

For the RPC methods `add_story_to_feed_view` and `remove_story_from_feed_view`,
the authenticated user must have `create_post` or `delete_post` permission on
the page, respectively. The user associated with the page is also allowed to
feature and unfeature stories. Currently, only page feeds support these methods.

Anonymous users are not allowed to make POST requests.


#### `DELETE`

For objects of type 'comment' or 'like': If the actor type of the target story
is 'user', the authenticated user must either be the comment author, the actor
in the target story, or have `delete_reply` permission on the user's page (if
this is a story that has been fanned out to a user page). If the actor type of
the target story is 'page', the authenticated user must either be the page's
associated user or have `delete_reply` permission on the page.

For all other story types: If the actor type of the story is 'user', the
authenticated user must be the same user. If the actor type of the story is
'page', the authenticated user must have `delete_post` permission on the page.

Anonymous users are not allowed to make DELETE requests.


#### `GET`

If a story does not have an actor type of 'user', then it can be read by all
users. User stories can be read by a) the actor user, for all privacy settings
b) the actor user's friends, for friends-only stories and c) everyone, for
public stories.

Anonymous users may request a user feed, but will only get stories that are
public and for which the feed_id user is the actor (i.e. the target user's "me"
feed). Anonymous users can see all stories belonging to a page feed.


### Pagination Parameters

This endpoint supports pagination by either timestamp or cursor parameters.

* *Timestamp* Use the `since` query parameter to specify a lower boundary, and `until` for an upper boundary. These parameters must both be Unix timestamp values.
* *Cursor* Use the `after` query parameter to specify a lower boundary, and `before` for an upper boundary. These parameters are server-generated values for each story, and are included by default in the `prev` and `next` `_links` fields when requesting a feed.


### Item properties

#### Default properties

| Name          | Description                                                                                                      | Type                                       | Units | HTTP Support      |
| ---           | ---                                                                                                              | ---                                        | ---   | ---               |
| `actor`       | Entity that performed the action                                                                                 | [`actor`](#Actor)                           |       | **GET:** Required |
| `verb`        | Verb identifier that describes the type of the action                                                            | string                                     |       | **GET:** Required |
| `object`      | Entity that the action was performed on (or with)                                                                | [`object`](#Object)                         |       | **GET:** Required |
| `target`      | Entity that the action targeted; contains *id*                                                                   | object                                     |       | **GET:** Required | | `likes`       | Story likes                                                                                                      | [`Likes and Comments`](#Likes-and-Comments) |       | **GET:** Required |
| `comments`    | Story comments                                                                                                   | [`Likes and Comments`](#Likes-and-Comments) |       | **GET:** Required |
| `template`    | Display template for this story; contains *title* for all story types and *icon* for non-generated object types. | object                                     |       | **GET:** Required |
| `published`   | Story publish date                                                                                               | datetime                                   |       | **GET:** Required |
| `attachments` | Attached resources for this story                                                                                | [`Attachments`](#Attachments)               |       | **GET:** Required |
| `reposts`     | Attached reposts for this story                                                                                  | [`Reposts`](#Reposts)                       |       | **GET:** Required |


### Embedded collections

* *Place* The place associated with the [Checkin][${version} Checkin] attached to an activity story.


<a name="Actor" />
#### Actor

All actor entities include a `type` and an `id`. If the actor entity is
associated with an API resource a link will be included.

| Name   | Description                                                                            | Type   |
| ---    | ---                                                                                    | ---    |
| `type` | Identifies the type of the actor: ([`user`](#User), [`brand`](#Brand) or [`site`](#Site)) | string |
| `id`   | Uniquely identifies the actor for a given actor type                                   | string |


##### Types

<a name="User" />
###### User

[`user`](#User) A user actor indicates that a user performed the action described
in the story.

This is the most common actor type.

Additional properties:

| Name         | Description                                                                 | Type                                              |
| ---          | ---                                                                         | ---                                               |
| `first_name` | The user's first name                                                       | string                                            |
| `last_name`  | The user's last name                                                        | string                                            |
| `title`      | The user's display name                                                     | string                                            |
| `gender`     | The user's gender                                                           | string                                            |
| `is_mvp`     | Indicate the user's MVP status                                              | boolean                                           |
| `friendship` | Null if the requesting user is not friends with this user; object otherwise | https://developer.underarmour.com/docs/Friendship |

<a name="Site" />
###### Site

[`site`](#Site) A site actor indicates that a site performed the action that is
described by the story.

A site actor represents the Under Armour site on which the activity was recorded
(ex. MapMyRun, MapMyHike, etc.).

This actor type is used for direct posts from Under Armour sites (for example,
providing friend suggestions).

<a name="Brand" />
###### Brand

[`brand`](#Brand) A brand actor indicates that a brand performed the action that
is described by the story.

This actor type is used for advertisements that appear in activity feeds.

<a name="Page" />
###### Page

`page` A page actor indicates that a page performed the action that is described
by the story.

This actor type is used for text, photo or video status posts.


###### Group

`group` A group actor indicates that a group performed the action that is
described by the story.

This actor type is used for friend challenge (group) updates and completion
stories.


###### Links

For actor type 'user':

* `self` Link to the actor user
* `to_user` Link to the actor user, if a friendship exists with the requesting user
* `from_user` Link to the requesting user, if a friendship exists with the actor user

For actor type 'group':

* `self` Link to the actor group
* `group_invites` Link to the invites for this group, includes count
* `group_users` Link to the members of this group, includes count
* `data_type` Link to the data type associated with this group


<a name="Object" />
#### Object

All object entities include a *type*, and all except touts, ads, and statuses
contain an *id*. If the object entity is associated with an API resource a link
will be included.

| Name   | Description                                                                                                                                                      | Type   |
| ---    | ---                                                                                                                                                              | ---    |
| `type` | Identifies the type of the object: (`workout`, `route`, [`user`](#User), `actigraphy`, `comment`, `like`, `status`, `group`, `group_leaderboard`, `tout` or `ad`) | string |
| `id`   | Uniquely identifies the object for a given object type                                                                                                           | string |


##### Types

###### Workout

`workout` A workout object represents a workout completed by the story actor.
All units are in SI.

Additional properties:

| Name            | Description                                                                          | Type                       |
| ---             | ---                                                                                  | ---                        |
| `distance`      | The workout's distance                                                               | float                      |
| `avg_pace`      | The workout's average pace                                                           | float                      |
| `title`         | The workout activity type name                                                       | string                     |
| `highlights`    | Highlighted stats for the workout                                                    | [`highlights`](#Highlights) |
| `notes`         | Notes associated with the workout                                                    | string                     |
| `privacy`       | Integer value indicating workout privacy: 0 for private, 1 for friends, 3 for public | int                        |
| `steps`         | The workout's total step count                                                       | int                        |
| `avg_speed`     | The workout's average speed                                                          | float                      |
| `duration`      | The workout's duration                                                               | int                        |
| `energy_burned` | The workout's total energy burn, in kj                                               | int                        |
| `activity_type` | The workout's activity type                                                          | object                     |

The `activity_type` object:

```json
{ "id": <pk>, "name": "Run / Jog" }
```


###### Route

`route` A route object represents a route created by the story actor.

Additional properties:

| Name         | Description                                                                        | Type                       |
| ---          | ---                                                                                | ---                        |
| `distance`   | The route's distance                                                               | float                      |
| `title`      | The name of the route                                                              | string                     |
| `highlights` | Highlighted stats for the route                                                    | [`highlights`](#Highlights) |
| `privacy`    | Integer value indicating route privacy: 0 for private, 1 for friends, 3 for public | int                        |
| `location`   | The location of the route                                                          | object                     |

The `location` object:

```json
{
    "country": "US",
    "region": "CA",
    "locality": "Los Angeles"
}
```


###### User (Object)

[`user`](#User) A user object represents a user who was friended by the story
actor.

Additional properties: see [`user`](#User) [`actor`](#Actor)


###### Actigraphy

`actigraphy` An actigraphy object represents actigraphy events logged by the
story actor.

Additional properties:

| Name         | Description                                                                             | Type                       |
| ---          | ---                                                                                     | ---                        |
| `privacy`    | Integer value indicating actigraphy privacy: 0 for private, 1 for friends, 3 for public | int                        |
| `highlights` | Highlighted stats for the actigraphy                                                    | [`highlights`](#Highlights) |
| `start_time` | The start time of the actigraphy period                                                 | datetime                   |
| `end_time`   | The end time of the actigraphy period                                                   | datetime                   |
| `steps`      | Step count for the actigraphy period                                                    | int                        |
| `published`  | The actigraphy's publish date                                                           | datetime                   |


###### Comment

`comment` A comment object represents a single comment on a story.

If there are any mentions in the comment text, the accompanying
[`mentions`](#Mentions) list will contain each mention object with properties
needed to render the mention.

Additional properties:

| Name       | Description                            | Type   |
| ---        | ---                                    | ---    |
| `text`     | The comment text                       | string |
| `mentions` | Mentions contained in the comment text | list   |


###### Like

`like` A like object represents a single like on a story.


###### Tout

`tout` A tout object represents a tout (e.g. Find Friends) generated in the
feed.

Additional properties:

| Name      | Description                                  | Type   |
| ---       | ---                                          | ---    |
| `subtype` | The subtype of the tout, e.g. `find_friends` | string |

Tout subtypes include:

* `find_friends` - show suggested friends for the feed user
* `log_workout` - prompt to log a workout, if the user's feed has no activity


###### Ad

`ad` An ad object represents an ad generated in the feed.

An ad template object has the `subtitle` attribute "Sponsored Post".


###### Status

`status` A status object represents a status post, which can be text, photo or
video content, or a combinations of both.

If a photo or video is included, it will be in the [`attachments`](#Attachments)
object on the story itself. If there are no attached resources then
*attachments* will be null.

If there are any mentions in the status text, the accompanying
[`mentions`](#Mentions) list will contain each mention object with properties
needed to render the mention.

Additional properties:

| Name       | Description                                                                                     | Type   |
| ---        | ---                                                                                             | ---    |
| `text`     | The status update text (optional)                                                               | string |
| `privacy`  | Integer corresponding to the privacy setting of this object - see [Privacy](/docs/{{ page.docs_version }}_Privacy) | int    |
| `mentions` | Mentions contained in the status text                                                           | list   |


###### Repost

`repost` A repost object represents a repost story, which has embedded the
original story.

If there are any mentions in the repost text, the accompanying
[`mentions`](#Mentions) list will contain each mention object with properties
needed to render the mention.

Additional properties:

| Name       | Description                                                                                     | Type    |
| ---        | ---                                                                                             | ---     |
| `text`     | The repost story text (optional)                                                                | string  |
| `story`    | The full original story - contains all story properties except likes and comments.              | {{ page.title }} |
| `privacy`  | Integer corresponding to the privacy setting of this object - see [Privacy](/docs/{{ page.docs_version }}_Privacy) | int     |
| `mentions` | Mentions contained in the repost text                                                           | list    |


##### Group

`group` A group object represents events logged by the group actor.

Additional properties:

| Name         | Description                                                                           | Type     |
| ---          | ---                                                                                   | ---      |
| `period`     | ISO 8601 value for the time period included in this group, if it is a challenge group | string   |
| `data_type`  | Data type included in this group, if it is a challenge group                          | string   |
| `start_time` | The start time of the group period                                                    | datetime |
| `end_time`   | The end time of the group period                                                      | datetime |
| `name`       | Name of this group                                                                    | string   |

Example "user invited to group" story:

```json
{
    "actor": {
        "type": "user",
        "id": 1234,
        "title": "Bill Brasky",
        ...
    },
    "object": {
        "type": "group",
        "start_time": "2014-10-05T01:23:45+00:00",
        "end_time": "2014-10-19T01:23:45+00:00",
        "name": "Step Challenge",
        "data_type": "steps_summary",
        "id": 123,
        "period": "P1W",
        "privacy": 3,
        "invite_accepted": false,
        "_links": {
            self: [
                {
                    href: "/{{ page.path_version }}/group/123/",
                    id: "123"
                }
            ],
            group_invites: [
                {
                    count: 2,
                    href: "/{{ page.path_version }}/group_invite/?group_id=123"
                }
            ],
            purpose: [
                {
                    href: "/{{ page.path_version }}/group_purpose/challenge/",
                    id: "challenge"
                }
            ],
            data_type: [
                {
                    href: "/{{ page.path_version }}/data_type/steps_summary/",
                    id: "steps_summary"
                }
            ],
            group_users: [
                {
                    count: 1,
                    href: "/{{ page.path_version }}/group_user/?group_id=123"
                }
            ],
            privacy: [
                {
                    href: "/{{ page.path_version }}/privacy_option/3/",
                    id: "3"
                }
            ]
        }
    },
    "verb": "invite",
    "target": {
        "type": "user",
        "id": 456
    },
    "published": "2014-11-19T20:10:14+00:00",
    "template": {
        "icon": "http://static.mapmyfitness.com/d/website/feed_story_icons/_friend.png",
        "title": "{{actor.title}} has invited you to a challenge"
    },
    "_links": {
        self: [
            {
                href: "/{{ page.path_version }}/activity_story/1-1234-13-123-456/",
                id: "1-1234-13-123-456"
            }
        ],
        documentation: [
            {
                href: "https://developer.underarmour.com/docs/"
            }
        ]
    }
}
```


#### Group Leaderboard

`group_leaderboard` A group leaderboard object represents the leaderboard for a
challenge group.

Additional properties:

| Name          | Description                                                             | Type     |
| ---           | ---                                                                     | ---      |
| `leaderboard` | A list of all data aggregates included in this leaderboard's date range | list     |
| `start_time`  | The start time of the group period                                      | datetime |
| `end_time`    | The end time of the group period                                        | datetime |
| `result`      | The aggregate values for the current authenticated user                 | object   |

A single aggregate in the *leaderboard* list, and the result object, have the
following properties:

| Name      | Description                                                               | Type |
| ---       | ---                                                                       | ---  |
| `value`   | A dictionary containing a field name as key, and aggregate value as value | dict |
| `user_id` | The id of the specified user                                              | int  |
| `rank`    | The final rank for this user in the leaderboard period                    | int  |

Example "challenge completed" story:

```json
{
    "actor": {
        "type": "group",
        "id": "1234",
        "name": "Step Challenge",
        "data_type": "steps_summary",
        "start_time": "2014-10-05T01:23:45+00:00",
        "end_time": "2015-10-19T01:23:45+00:00",
        "period": "P1W",
        "_links": {
            self: [
                {
                    href: "/{{ page.path_version }}/group/1234/",
                    id: "1234"
                }
            ],
            group_invites: [
                {
                    count: 2,
                    href: "/{{ page.path_version }}/group_invite/?group_id=1234"
                }
            ],
            data_type: [
                {
                    href: "/{{ page.path_version }}/data_type/steps_summary/",
                    id: "steps_summary"
                }
            ],
            group_users: [
                {
                    count: 1,
                    href: "/{{ page.path_version }}/group_user/?group_id=1234"
                }
            ]
        }
    },
    "object": {
        "type": "group_leaderboard",
        "start_time": "2014-10-05T01:23:45+00:00",
        "end_time": "2014-10-19T01:23:45+00:00",
        "leaderboard": [
            {
                "value": { "steps": 328540 },
                "user_id": 123,
                "rank": 1
            },
            {
                "values": { "steps": 26216 },
                "user_id": 456,
                "rank": 2
            }
        ],
        "_links": {
            group_leaderboard: [
                {
                    href: "/{{ page.path_version }}/group_leaderboard/?group_id=1234&start_datetime=2014-10-05T01:23:45+00:00&end_datetime=2014-10-19T01:23:45+00:00"
                }
            ]
        }
    },
    "verb": "complete",
    "published": "2014-11-19T20:10:14+00:00",
    "template": {
        "icon": "http://static.mapmyfitness.com/d/website/feed_story_icons/_friend.png",
        "title": "Challenge completed!"
    },
    "_links": {
        self: [
            {
                href: "/{{ page.path_version }}/activity_story/5-1234-10-14-1417456215/",
                id: "5-1234-10-14-1417456215"
            }
        ],
        documentation: [
            {
                href: "https://developer.underarmour.com/docs/"
            }
        ]
    }
}
```


#### Challenge

`challenge` A challenge object represents a featured challenge to which users
can join. It is used in combination with the user actor, and the join verb, to
represent the event of a user joining a featured challenge.

Additional properties:

| Name             | Description                        | Type   |
| ---              | ---                                | ---    |
| `title`          | Title of the challenge             | String |
| `uri`            | Link to the challenge page         | url    |
| `header_img_uri` | Link to the challenge header image | url    |
| `type`           | challenge                          | String |

Example "user joins challenge" story:

```json
{
    "attachments":null,
    "object":{
       "title":"ACME Challenge",
       "privacy":1,
       "uri":"http://www.mapmyfitness.com/challenges/Brita/",
       "_links":{
          "privacy":[
             {
                "href":"/v7.0/privacy_option/1/",
                "id":"1"
             }
          ]
       },
       "header_img_uri":"http://dc3d9f49ygq03.cloudfront.net/propel/1404256098477/mobile_hero@2x.png",
       "type":"challenge",
       "id":"788"
    },
    "actor":{
       "first_name":"Jeudy",
       "last_name":"MMF",
       "title":"Jeudy MMF",
       "gender":"M",
       "is_mvp":false,
       "preferred_brand":12,
       "_links":{
          "self":[
             {
                "href":"/v7.0/user/18379309/",
                "id":"18379309"
             }
          ]
       },
       "type":"user",
       "friendship":null,
       "id":18379309
    },
    "id":"1-18379309-16-788",
    "source":{
       "site_name":"MapMyFitness",
       "id":11,
       "site_url":"http://www.mapmyfitness.com"
    },
    "verb":"join",
    "target":null,
    "comments":null,
    "template":{
       "title":"{{actor.title}} has joined <a href=\"{{object.uri}}\">{{object.title}}</a>"
    },
    "published":"2015-02-27T18:06:39+00:00",
    "_links":{
       "self":[
          {
             "href":"/v7.0/activity_story/1-18379309-16-788/",
             "id":"1-18379309-16-788"
          }
       ]
    },
    "reposts":null,
    "type":null,
    "feed_views":[
       "me"
    ],
    "likes":null
}
```


#### Award

`award` An award object represents an award or achievement earned by the user
that is participating in a featured challenge. It is used in combination with
the earn verb.

Additional properties:

| Name        | Description                                 | Type   |
| ---         | ---                                         | ---    |
| `name`      | Name of the award earned by the user        | String |
| `detail`    | Description of the award earned by the user | String |
| `challenge` | A Challenge object as described above       | object |
| `image_url` | Link to the award image                     | url    |
| `type`      | award                                       | String |

Example "user earns award" story:

```json
 {
    "attachments":null,
    "object":{
       "name":"Acme Test 1",
       "privacy":1,
       "challenge":{
          "title":"ACME Challenge",
          "uri":"http://www.mapmyfitness.com/challenges/Brita/",
          "id":788
       },
       "detail":"This is the first acme achievement. Hurray!",
       "image_url":"http://dc3d9f49ygq03.cloudfront.net/dev_uacoldweather/wolf-128.png",
       "_links":{
          "privacy":[
             {
                "href":"/v7.0/privacy_option/1/",
                "id":"1"
             }
          ]
       },
       "type":"award",
       "id":"acme_1"
    },
    "actor":{
       "first_name":"Jeudy",
       "last_name":"Blanco",
       "title":"Jeudy Blanco",
       "gender":"M",
       "is_mvp":false,
       "preferred_brand":29,
       "_links":{
          "to_user":[
             {
                "href":"/v7.0/user/61406871/",
                "id":"61406871"
             }
          ],
          "self":[
             {
                "href":"/v7.0/user/61406871/",
                "id":"61406871"
             }
          ],
          "from_user":[
             {
                "href":"/v7.0/user/18379309/",
                "id":"18379309"
             }
          ]
       },
       "type":"user",
       "friendship":{
          "to_user":61406871,
          "status":"active",
          "from_user":18379309
       },
       "id":61406871
    },
    "id":"1-61406871-17-acme_1",
    "source":{
       "site_name":"MapMyFitness",
       "id":11,
       "site_url":"http://www.mapmyfitness.com"
    },
    "verb":"earn",
    "target":null,
    "comments":null,
    "template":{
       "title":"{{actor.title}} earned the {{object.name}} award"
    },
    "published":"2015-02-26T18:19:12+00:00",
    "_links":{
       "self":[
          {
             "href":"/v7.0/activity_story/1-61406871-17-acme_1/",
             "id":"1-61406871-17-acme_1"
          }
       ]
    },
    "reposts":null,
    "type":null,
    "feed_views":null,
    "likes":null
 }
```

<a name="Highlights" />
###### Highlights

Highlights are the top three fields for a workout or route object, chosen from a
pre-determined list by activity type or object type. An object can have between
0 and 3 highlights, and only fields that are present and non-zero will be
highlighted.

Distance, duration and pace/speed highlights have an optional percentile
callout. Percentiles include: Top 10%, Top 25%. Thresholds are dependent on
gender and only activity types with a base type of run, bike, or walk can have
callouts.

Highlights format:

```json
[
    { "key": "distance", "percentile": 10, },
    { "key": "avg_pace", "percentile": 25, },
    { "key": "duration" }
]
```

If a route is associated, there will also be a route highlight:

```json
[
    {
        "key": "route",
        "thumbnail_url": "http://mapmyfitness.com/routes/thumbnail/410375299"
    }
]
```


##### Object Links

For object type 'user':

* `self` Link to the object user
* `to_user` Link to the object user, if a friendship exists with the requesting
  user
* `from_user` Link to the requesting user, if a friendship exists with the
  object user

For object type 'route':

* `self` Link to the route
* `privacy` The route's privacy settings

For object type 'workout':

* `self` Link to the workout
* `route` Link to the route associated with the workout
* `activity_type` Link to the main activity type for the workout
* `sub_activity_type` Link to the sub activity type for the workout
* `privacy` The workout's privacy settings

For object type 'actigraphy':

* `privacy` The actigraphy's privacy settings

For object type 'group':

* `self` Link to the group object
* `group_invites` Link to the invites for this group, includes count
* `group_users` Link to the members of this group, includes count
* `data_type` Link to the data type associated with this group
* `group_purpose` Link to the group purpose for this group

For object type 'group_leaderboard':

* `group_leaderboard` Link to the leaderboard for the specified start and end dates


<a name="Likes-and-Comments" />
#### Likes and Comments

Replies are represented as likes and comments objects attached to the story.
Only the most recent five replies of each type will included in the object.

| Name       | Description                                                                                   | Type    |
| ---        | ---                                                                                           | ---     |
| `count`    | Total number of replies of this type on the story                                             | int     |
| `items`    | List of the most recent 5 reply objects                                                       | list    |
| `replied`  | Indicates whether the requesting user has replied to the story                                | boolean |
| `reply_id` | Only present in stories which the current user has liked. Indicates the id of the like story. | boolean |

An individual reply has the following properties:

| Name        | Description                     | Type               |
| ---         | ---                             | ---                |
| `actor`     | Entity that performed the reply | [`actor`](#Actor)   |
| `object`    | Entity representing the reply   | [`object`](#Object) |
| `published` | Reply publish date              | datetime           |

<a name="Attachments" />
#### Attachments

Resource attachments are represented as a list on the story, in a similar format
to likes and comments.

| Name    | Description                              | Type |
| ---     | ---                                      | ---  |
| `count` | Total number of attachments on the story | int  |
| `items` | List of all attachments                  | list |

An individual attachment has the following properties:

| Name     | Description                        | Type   |
| ---      | ---                                | ---    |
| `object` | Entity representing the attachment | object |

An attachment object entity currently has the following properties:

| Name        | Description                                                                                                                                                                                               | Type     |
| ---         | ---                                                                                                                                                                                                       | ---      |
| `type`      | Type of the attachment resource (ex. photo, video)                                                                                                                                                        | string   |
| `published` | Attachment publish date. Reflects the time of story publish, not attachment completion.                                                                                                                   | datetime |
| `status`    | Indicates the status of the attached media - will be either `pending`, `processing` (images only), or `ready`. A `ready` status indicates the attachment is done with all processing and can be accessed. | string   |

Image attachment objects have the following additional properties (see
[Image](/docs/01_Image) for more information about *image* object properties):

| Name       | Description                                                                                                                   | Type   |
| ---        | ---                                                                                                                           | ---    |
| `template` | Escaped URI for requesting a transformed version of the attachment resource. Not present if the attachment has not published. | string |
| `uri`      | Escaped URI for the attachment resource. Not present if the attachment has not published.                                     | string |

Video attachment objects have the following additional properties, which are not
present if the attachment has not published:

| Name            | Description                                                              | Type   |
| ---             | ---                                                                      | ---    |
| `provider`      | Name of the provider associated with this video, e.g. 'ooyala'           | string |
| `provider_id`   | Identifier for this video, used for playback                             | string |
| `thumbnail_uri` | Escaped URI for the video thumbnail image                                | string |
| `template`      | Escaped URI for requesting a transformed version of the video thumbnail. | string |

Example of attachments with two resources included, one pending and one
completed:

```json
{
    "attachments": {
        "count": 2,
        "items": [
            {
                "object": {
                    "published": "2014-06-04T21:53:16+00:00",
                    "status": "ready",
                    "template": "http://resourceuri_{{params}}",
                    "type": "photo",
                    "uri": "http://resourceuri"
                }
            },
            {
                "object": {
                    "published": "2014-06-04T21:53:16+00:00",
                    "status": "pending",
                    "type": "video"
                }
            }
        ]
    }
}
```

To attach a photo to a story, the image must be uploaded via the
[Image](/docs/01_Image) resource (example:
[Attach a photo to a status post story](#attach-a-photo-to-a-status-post-story)).

To attach a video to a story, the video must be uploaded via FileMobile.
(example: [Attach a video to a status post story](#attach-a-video-to-a-status-post-story)).

<a name="Mentions" />
#### Mentions

If a story has any mentions in its text, a list of mention objects will also be
included as a property on the story object, to allow clients to handle the
rendering of each mention. An object in the list has the following properties:


| Name          | Description                                                | Type   |
| ---           | ---                                                        | ---    |
| `type`        | Type of this mention, e.g. user                            | string |
| `title`       | String representation of this mention, e.g. page title     | string |
| `start_index` | Position in the text of the first character of the mention | int    |
| `end_index`   | Position in the text of the last character of the mention  | int    |


<a name="Reposts" />
#### Reposts

Reposts of a given story are represented as a list on the story, in the same
format as attachments.

| Name    | Description                          | Type |
| ---     | ---                                  | ---  |
| `count` | Total number of reposts on the story | int  |
| `items` | List of repost objects               | list |

An individual repost has the following properties:

| Name        | Description                          | Type     |
| ---         | ---                                  | ---      |
| `object`    | Entity representing the story object | object   |
| `actor`     | Entity representing the story actor  | object   |
| `id`        | Reposted story's id                  | int      |
| `published` | Publish date for the repost story    | datetime |

These properties are the standard {{ page.title }} properties, as if a GET was done for
the repost story. Verb, likes, and comments are not included in embedded
reposts.

A repost object entity has the following properties:

| Name      | Description                                     | Type   |
| ---       | ---                                             | ---    |
| `type`    | Object type, in this case 'repost'              | string |
| `id`      | Original story id                               | string |
| `text`    | Text attached to the repost story (may be null) | string |
| `privacy` | Privacy setting for the reposted story          | int    |

Example of reposts containing 2 repost stories:

```json
{
    "reposts": {
        "count": 2,
        "items": [
            {
                "actor": {
                    "id": "12345",
                    "type": "user"
                },
                "id": "1_12345_12_3-34743595",
                "object": {
                    "id": "3-34743595",
                    "privacy": 3,
                    "text": "Check out this workout!",
                    "type": "repost"
                },
                "published": "2014-09-15T22:26:51+00:00"
            },
            {
                "actor": {
                    "id": "140",
                    "type": "page"
                },
                "id": "4_140_12_3-34743595",
                "object": {
                    "id": "3-34743595",
                    "privacy": 3,
                    "text": "Do work!",
                    "type": "repost"
                },
                "published": "2014-09-15T22:26:51+00:00"
            }
        ]
    }
}
```


#### Checkin

If an activity story has an associated [checkin][${version} Checkin], a
reference to that object will be exposed inside of `_links` under the key
`checkin` as well as an embedded Place object on the activity story.

Example of a GET of a post containing checkin data:

```json
{
    "_embedded": {
        "place": [
            {
                "_links": {
                    "self": [
                        {
                            "href": "/v7.0/place/1/",
                            "id": "1"
                        }
                    ]
                },
                "name": "An example Place"
            }
        ]
    },
    "attachments": null,
    "type": "status",
    "object": {
        "text": "status update",
        "privacy": 3,
        "type": "status",
        "_links": {
            "privacy": [
                {
                    "href": "/v7.0/privacy_option/3/",
                    "id": "3"
                }
            ]
        }
    },
    "actor": {
        "first_name": "Kate",
        "last_name": "Test",
        "title": "Kate Test",
        "gender": "F",
        "is_mvp": false,
        "preferred_brand": 23,
        "_links": {
            "to_user": [
                {
                    "href": "/v7.0/user/37698697/",
                    "id": "37698697"
                }
            ],
            "self": [
                {
                    "href": "/v7.0/user/37698697/",
                    "id": "37698697"
                }
            ],
            "from_user": [
                {
                    "href": "/v7.0/user/37698697/",
                    "id": "37698697"
                }
            ]
        },
        "type": "user",
        "friendship": {
            "to_user": 37698697,
            "status": "active",
            "from_user": 37698697
        },
        "id": 37698697
    },
    "id": "1-37698697-9-1424287233",
    "source": {
        "site_name": "Under Armour",
        "id": 32,
        "site_url": "http://record.underarmour.com"
    },
    "verb": "post",
    "_links": {
        "self": [
            {
                "href": "/v7.0/activity_story/1-37698697-9-1424287233/",
                "id": "1-37698697-9-1424287233"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/v70_Activity_Story"
            }
        ],
        "checkin": [
            {
                "href": "/v7.0/checkin/1/",
                "id": "1"
            }
        ]
    },
    "comments": null,
    "template": {
        "title": "{{object.text}}"
    },
    "published": "2015-02-18T19:20:33+00:00",
    "reposts": null,
    "target": null,
    "feed_views": null,
    "likes": null
}
```


## Usage

### Get a story

###### Request: `GET /{{ page.path_version }}/activity_story/<pk>/`

###### Response:

```json
{
    "_links": {
        "self": [
            {
                "href": "/{{ page.path_version }}/activity_story/5-11196364-1-18078429/",
                "id": "5-11196364-1-18078429"
            }
        ]
    },
    "actor": {
        ...
    },
    "attachments": null,
    "comments": {
        "count": 1,
        "items": [
            {
                "actor": {
                    ...
                },
                "id": "3-595597789_1_538fa5cb0000000000000000",
                "object": {
                    "text": "comment text here",
                    "type": "comment"
                },
                "published": "2014-06-04T23:03:39+00:00"
            }
        ],
        "replied": false
    },
    "id": "5-11196364-1-18078429",
    "likes": {
        "count": 1,
        "items": [
            {
                "actor": {
                    ...
                },
                "id": "3-595597789_2_538f954c27717459f7d4c4c0",
                "object": {
                    "type": "like"
                },
                "published": "2014-06-04T21:53:16+00:00"
            }
        ],
        "replied": true
    },
    "object": {},
    "published": "2014-06-05T03:01:00+00:00",
    "target": null,
    "template": {
        "icon": "http://static.mapmyfitness.com/d/website/feed_story_icons/_friend.png",
        "title": "{{actor.title}} is now friends with {{object.title}}"
    },
    "verb": "friend"
}
```


### Get a story with mentions

###### Request: `GET /v7.0/activity_story/<pk>/`

###### Response:

```json
{
    "attachments": null,
    "object": {
        "mentions": [
            {
                "title": "Your Mom",
                "first_name": "Your",
                "last_name": "Mom",
                "type": "user",
                "start_index": 17,
                "end_index": 25,
                "_links": {
                    "self": [
                        {
                            "href": "/v7.0/user/42976235/",
                            "id": "42976235"
                        }
                    ]
                },
            },
            {
                "title": "Bill Brasky",
                "first_name": "Bill",
                "last_name": "Brasky",
                "type": "user",
                "start_index": 30,
                "end_index": 41,
                "_links": {
                    "self": [
                        {
                            "href": "/v7.0/user/43288455/",
                            "id": "43288455"
                        }
                    ]
                },
            }
        ],
        "text": "Working out with Your Mom and Bill Brasky!",
        "type": "status",
        "_links": {
            "privacy": [
                {
                    "href": "/v7.0/privacy_option/3/",
                    "id": "3"
                }
            ]
        },
        "privacy": 3
    },
    "actor": {
        "first_name": "Kate",
        "last_name": "Test",
        "title": "Kate Test",
        "gender": "F",
        "is_mvp": false,
        "preferred_brand": 23,
        "_links": {
            "to_user": [
                {
                    "href": "/v7.0/user/37698697/",
                    "id": "37698697"
                }
            ],
            "self": [
                {
                    "href": "/v7.0/user/37698697/",
                    "id": "37698697"
                }
            ],
            "from_user": [
                {
                    "href": "/v7.0/user/37698697/",
                    "id": "37698697"
                }
            ]
        },
        "type": "user",
        "friendship": {
            "to_user": 37698697,
            "status": "active",
            "from_user": 37698697
        },
        "id": 37698697
    },
    "feed_views": [
        "me"
    ],
    "source": {
        "site_name": "Under Armour",
        "id": 32,
        "site_url": "http://record.underarmour.com"
    },
    "verb": "post",
    "target": null,
    "comments": null,
    "template": {
        "title": "{{object.text}}"
    },
    "published": "2015-01-20T16:53:59+00:00",
    "_links": {
        "self": [
            {
                "href": "/v7.0/activity_story/1-37698697-9-1421772839/",
                "id": "1-37698697-9-1421772839"
            }
        ]
    },
    "reposts": null,
    "type": "status",
    "id": "1-37698697-9-1421772839",
    "likes": null
}
```


### Add a comment

###### Request: `POST: /{{ page.path_version }}/activity_story/`

```json
{
    "actor": {
        "id": 19357095,
        "type": "user"
    },
    "object": {
        "text": "comment text",
        "type": "comment"
    },
    "target": {
        "id": "5-11196364-1-18078429"
    },
    "verb": "comment"
}
```


###### Response:

```json
{
    "actor": {
        ...
    },
    "id": "5-11196364-1-18078429_1_5395d27426d6b7702c3f5624",
    "object": {
        "text": "comment text",
        "type": "comment"
    },
    "published": "2014-06-09T15:27:48+00:00"
}
```


### Add a comment with mentions

###### Request: `POST: /v7.0/activity_story/`

```json
{
    "actor": {
        "type": "user",
        "id": 37698697
    },
    "object": {
        "type": "comment",
        "text": "wow check this out Bill Brasky!",
        "mentions": [
            {
                "type": "user",
                "id": "/v7.0/user/43288455/",
                "start_index": 19,
                "end_index": 30
            }
        ]
    },
    "verb": "comment",
    "target": {
        "id": "1-37698697-9-1421883442"
    }
}
```


###### Response:

```json
{
    "attachments": null,
    "actor": {
        "first_name": "Kate",
        "last_name": "Test",
        "title": "Kate Test",
        "gender": "F",
        "is_mvp": false,
        "preferred_brand": 23,
        "_links": {
            "self": [
                {
                    "href": "/v7.0/user/37698697/",
                    "id": "37698697"
                }
            ]
        },
        "type": "user",
        "friendship": null
    },
    "object": {
        "text": "wow check this out Bill Brasky!",
        "mentions": [
            {
                "title": "Bill Brasky",
                "first_name": "Bill",
                "last_name": "Brasky",
                "type": "user",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.0/user/43288455/",
                            "id": "43288455"
                        }
                    ]
                }
            }
        ],
        "type": "comment",
        "_links": {}
    },
    "comments": null,
    "id": "1-37698697-9-1421883442_1_54c038c7d72e74201595d56c",
    "source": {
        "site_name": "MapMyFitness",
        "id": 11,
        "site_url": "http://www.mapmyfitness.com"
    },
    "verb": "comment",
    "_links": {
        "self": [
            {
                "href": "/api/0.2/activity_story/1-37698697-9-1421883442_1_54c038c7d72e74201595d56c/",
                "id": "1-37698697-9-1421883442_1_54c038c7d72e74201595d56c"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/v70_Activity_Story"
            }
        ]
    },
    "likes": null,
    "template": null,
    "published": "2015-01-21T23:39:51+00:00",
    "reposts": null,
    "type": null,
    "feed_views": null,
    "target": {
        "type": "activity_story",
        "id": "1-37698697-9-1421883442"
    }
}
```


### Add a like

###### Request: `POST: /{{ page.path_version }}/activity_story/`

```json
{
    "actor": {
        "id": 19357095,
        "type": "user"
    },
    "object": {
        "type": "like"
    },
    "target": {
        "id": "5-11196364-1-18078429"
    },
    "verb": "like"
}
```


###### Response:

```json
{
    "actor": {
        ...
    },
    "id": "5-11196364-1-18078429_2_5395d27426d6b7702c3f5624",
    "object": {
        "type": "like"
    },
    "published": "2014-06-09T15:27:48+00:00"
}
```


### Delete a reply or {{ page.title }}

###### Request: `DELETE: /{{ page.path_version }}/activity_story/<pk>/`

###### Response: HTTP 204 No Content

### Create a status post story

###### Request: `POST /{{ page.path_version }}/activity_story/`

```json
{
    "actor": {
        "id": "2",
        "type": "page"
    },
    "attachments": {
        "items": [
            {
                "object": {
                    "type": "photo"
                }
            }
        ]
    },
    "object": {
        "text": "status update text",
        "type": "status"
    },
    "verb": "post"
}
```


###### Response:

```json
{
    "_links": {
        ...
    },
    "actor": {
        "_links": {},
        "id": "27",
        "type": "page"
    },
    "attachments": {
        "count": 1,
        "items": [
            {
                "object": {
                    "type": "photo"
                }
            }
        ]
    },
    "comments": null,
    "id": "4-2-9-1403712237",
    "likes": null,
    "object": {
        "_links": {},
        "text": "status update text",
        "type": "status"
    },
    "published": null,
    "target": null,
    "template": null,
    "verb": "post"
}
```

*Attachments* is optional in the post data and if present, contains a list of
the expected attachment object entities in the format described under
[`attachments`](#Attachments). Only the *type* attribute is required on creation.

If *attachments* is not present the story will be treated as a text-only status.

Status updates are public by default unless a *privacy* attribute is also passed
in the object entity.


### Create a status post story and share on Twitter/Facebook

To share a status post, add a *sharing* object to the post data in the format:

```json
{ "facebook": True, "twitter": False }
```

with values set to True for all networks the status is to be shared with. The
POST request is otherwise the same:


###### Request: `POST /{{ page.path_version }}/activity_story/`

```json
{
    "actor": {
        "id": 27,
        "type": "page"
    },
    "attachments": {
        "items": [
            {
                "object": {
                    "type": "photo"
                }
            }
        ]
    },
    "object": {
        "text": "status update text",
        "type": "status"
    },
    "sharing": {
        "facebook": true,
        "twitter": false
    },
    "verb": "post"
}
```


###### Response

The format follows the above
[Create a status post story](#mmf-docs-create-a-status-post-story) example.


### Create a status post story with a checkin

###### Request: `POST /{{ page.path_version }}/activity_story/`

```json
{
    "actor": {
        "type": "user",
        "id": 37698697
    },
    "object": {
        "type": "status",
        "text": "status update"
    },
    "verb": "post",
    "checkin": "/v7.0/checkin/1/"
}
```


###### Response:

```json
{
    "attachments": null,
    "object": {
        "text": "status update",
        "type": "status",
        "_links": {}
    },
    "actor": {
        "type": "user",
        "_links": {
            "self": [
                {
                    "href": "/v7.0/user/37698697/",
                    "id": "37698697"
                }
            ]
        },
        "id": 37698697
    },
    "id": "1-37698697-9-1424287779",
    "source": null,
    "verb": "post",
    "target": null,
    "comments": null,
    "template": null,
    "published": "2015-02-18T19:29:39.420200+00:00",
    "_links": {
        "self": [
            {
                "href": "/v7.0/activity_story/1-37698697-9-1424287779/",
                "id": "1-37698697-9-1424287779"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/v70_Activity_Story"
            }
        ],
        "checkin": [
            {
                "href": "/v7.0/checkin/1/",
                "id": "1"
            }
        ]
    },
    "reposts": null,
    "type": null,
    "feed_views": null,
    "likes": null
}
```

<a name="attach-a-photo-to-a-status-post-story" />
### Attach a photo to a status post story

See [Image](/docs/01_Image) for details on the format required for posting an
image. This example only shows the JSON-encoded object that should be provided
as the "data" file in the multipart POST.

In this example, the photo to the first attachments. The attachments to the
story must be posted with attached placeholders when the initial story is
created.

```json
{ "href": "/{{ page.path_version }}/activity_story/4-2-9-1404410289/", "rel": "attachments", "index": 0 }
```


### Create a status post story with mentions

###### Request: `POST /v7.0/activity_story/`

```json
{
    "actor": {
        "type": "user",
        "id": 37698697
    },
    "object": {
        "type": "status",
        "text": "Working out with Your Mom and Bill Brasky!",
        "mentions": [
            {
                "type": "user",
                "id": "/v7.0/user/42976235/",
                "start_index": 17,
                "end_index": 25
            },
            {
                "type": "user",
                "id": "/v7.0/user/43288455/",
                "start_index": 30,
                "end_index": 41
            }
        ],
    },
    "verb": "post"
}
```


###### Response:

```json
{
    "attachments": null,
    "object": {
        "text": "Working out with Your Mom and Bill Brasky!",
        "mentions": [
            {
                "type": "user",
                "title": "Your Mom",
                "first_name": "Your",
                "last_name": "Mom",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.0/user/42976235/",
                            "id": "42976235"
                        }
                    ]
                },
            },
            {
                "type": "user",
                "title": "Bill Brasky",
                "first_name": "Bill",
                "last_name": "Brasky",
                "_links": {
                    "self": [
                        {
                            "href": "/v7.0/user/43288455/",
                            "id": "43288455"
                        }
                    ]
                },

            }
        ],
        "type": "status",
        "_links": {}
    },
    "actor": {
        "type": "user",
        "_links": {
            "self": [
                {
                    "href": "/v7.0/user/37698697/",
                    "id": "37698697"
                }
            ]
        },
        "id": 37698697
    },
    "feed_views": null,
    "source": null,
    "verb": "post",
    "target": null,
    "comments": null,
    "template": null,
    "published": "2015-01-21T23:37:22.847785+00:00",
    "_links": {
        "self": [
            {
                "href": "/v7.0/activity_story/1-37698697-9-1421883442/",
                "id": "1-37698697-9-1421883442"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/v70_Activity_Story"
            }
        ]
    },
    "reposts": null,
    "type": null,
    "id": "1-37698697-9-1421883442",
    "likes": null
}
```

<a name="attach-a-video-to-a-status-post-story" />
### Attach a video to a status post story

To attach a video to a story, the video must be uploaded via FileMobile using a
[Filemobile session](/docs/01_Filemobile_Session). A session must be created or
updated for the authenticated user prior to every video upload.

The sessiontoken, vhost and uid parameters should be populated from the token,
vhost and uid fields returned in the Filemobile session response.

The following additional metadata fields should be sent to Filemobile to attach
the video to the correct story once it is encoded:

* `href`: The story resource to attach the video to (ex.
  `/{{ page.path_version }}/activity_story/4-2-9-1404410289/`).
* `rel`: The property to update (always `attachments` for story attachments).
* `index`: The index of the attachment (zero-based). Must match an existing
  attachment placeholder.

FileMobile API example:

```python
import requests

url = 'http://api.filemobile.com/services/upload2'

payload = {
    'sessiontoken': '<filemobile session token>',
    'vhost': '<filemobile session vhost>',
    'uid': '<filemobile session uid>',
    'meta[user][href]': '/{{ page.path_version }}/activity_story/4-2-9-1405352815/',
    'meta[user][index]': '0',
    'meta[user][rel]': 'attachments'
}

with open('video.mp4', 'rb') as file: response = requests.post(url, data=payload, files={'file': file})
```


### Set a story as "featured" in a page feed

###### Request: `POST /{{ page.path_version }}/activity_story/<story_id>/add_story_to_feed_view` where `story_id` is the id of the story to be featured.

```json
{
    "feed_type": "page",
    "feed_view": "featured",
    "feed_id": 2,
}
```

Where `feed_id` is the id of the page feed in which to feature the story.


###### Response: HTTP 204 No Content

Only users with EDIT permission on the specified page can feature a story.


### Remove a story from being "featured" in a page feed

###### Request: `POST /{{ page.path_version }}/activity_story/<story_id>/remove_story_from_feed_view` where `story_id` is the id of the story to be removed from featured.

```json
{
    "feed_type":"page",
    "feed_view":"featured",
    "feed_id":2
}
```

Where `feed_id` is the id of the page feed from which the story should be
un-featured.


###### Response: HTTP 204 No Content

Only users with EDIT permission on the specified page can un-feature a story.


### Create a repost story

###### `POST /{{ page.path_version }}/activity_story/`

```json
{
    "actor":{
        "type":"user",
        "id":"1234"
    },
    "object":{
        "type":"repost",
        "text":"Check out this cool thing",
        "id":"4-140-9-1410809344"
    },
    "verb":"repost"
}
```

`text` is an optional property.


###### Response:

```json
{
    "_links":{ ... },
    "actor":{
        "_links":{ ... },
        "id":"1234",
        "type":"user"
    },
    "id":"1-1234-12-4_140_9_1410809344",
    "object":{
        "_links":{ ... },
        "text":"Check out this cool thing",
        "type":"repost",
        "id":"4-140-9-1410809344"
    },
    "published":"2014-09-16T15:25:38.286252+00:00",
    "verb":"repost"
}
```

A repost story is created by passing the original story id as the property `id`
in the object entity, however on doing a GET for the repost story after creation
this id is replaced with the full original story as the `story` property.

To repost a story, the original story must have a privacy setting of public.

If the original story does not exist, a 404 status will be returned.


### Update a repost story

###### `PATCH /{{ page.path_version }}/activity_story/<story_id>/`

```json
{
    "object":{
        "text":"Cool beans"
    }
}
```


###### Response:

```json
{
    "_links":{ ... },
    "actor":{
        "id":"1234",
        "type":"user",
        ...
    },
    "id":"1-1234-12-4_140_9_1410809344",
    "object":{
        "_links":{ ... },
        "text":"Cool beans",
        "type":"repost",
        "story":{ ... },
        "privacy":3
    },
    "source":{
        "id":32
    },
    "published":"2014-09-16T15:25:38.286252+00:00",
    "verb":"repost"
}
```
