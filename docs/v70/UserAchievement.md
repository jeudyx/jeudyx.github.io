---
layout: documentation
title: User Achievement
resource: User Achievement
version: v7.0
versionhref: v70
permalink: /docs/v70_User_Achievement/
---

# {{page.title}}

Returns {{page.title}}s that a given user has earned on courses.

## Resource URIs

**Item URI:** `/{{page.version}}/user_achievement/<pk>/`  
**Collection URI:** `/{{page.version}}/user_achievement/`

## Item

### Item methods

`GET` Allows for retrieval of a single {{page.title}}.

### Collection properties

`total_count` the total number of {{page.title}}s matching the search parameters specified

### Embedded collections

`user_achievement` A collection of `UserAchievement` items.

### Item properties

| Parameter          | Description                                      | Type                                 |
|--------------------|--------------------------------------------------|--------------------------------------|
| `created_datetime` | The time the {{page.title}} was earned. | **Read-Only** DateTime string                    | 
| `achievement`      | The {{page.title}} earned by the user.  |  **Read-Only** string                            |
| `course`           | The course for which the {{page.title}} was earned. | **Read-Only** `Course`               |

## Collection

### Collection methods

`GET` Allows for retrieval of a collection of {{page.title}}s for a specifc user.

### Collection query parameters

The following query parameters only apply to GET

| Parameter | Description                                                    | Type        | Required? |
|-----------|----------------------------------------------------------------|-------------|-----------|
| `user`    | Searches for {{page.title}}s that have been earned by given user. | `id`/`href` | Required  |

## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/user_achievement/{pk}/`

###### Response

```json
{
    "created_datetime": "2013-05-30T01:02:26+00:00",
    "workoutroutecourse": {
        "duration": 300
    },
    "_links": {
        "self": [{
            "href": "\/{{page.version}}\/user_achievement\/{Achievement ID}\/",
            "id": "{Achievement ID}"
        }]
    },
    "achievement": {
        "image_uuid": "000x0x0x-00xx-0x0x-x000-00x0000x000x",
        "title": "Achievement Title",
        "short_name": "at1",
        "resource_uri": "\/{{page.version}}\/achievement\/1\/"
    },
    "course": {
        "distance": 892.9403767183,
        "href": "\/{{page.version}}\/course\/{Course ID}\/",
        "id": {Course ID},
        "name": "Course Name"
    }
}
```

### GET {{page.title}} collection

###### Request `GET: /{{page.version}}/user_achievement/?user={User ID}`

###### Response

```json
{
    "_links": {
        "self": [{
            "href": "\/{{page.version}}\/user_achievement\/?limit=20&user={User ID}&offset=0"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
        }]
    },
    "_embedded": {
        "user_achievement": [{
            "created_datetime": "2013-05-30T01:02:26+00:00",
            "workoutroutecourse": {
                "duration": 300
            },
            "_links": {
                "self": [{
                    "href": "\/{{page.version}}\/user_achievement\/{Achievement ID}\/",
                    "id": "{Achievement ID}"
                }]
            },
            "achievement": {
                "image_uuid": "000x0x0x-00xx-0x0x-x000-00x0000x000x",
                "title": "Achievement Title",
                "short_name": "at1",
                "resource_uri": "\/{{page.version}}\/achievement\/1\/"
            },
            "course": {
                "distance": 892.9403767183,
                "href": "\/{{page.version}}\/course\/{Course ID}\/",
                "id": {Course ID},
                "name": "Course Name"
            }
        }]
    },
    "total_count": 20
}
```
