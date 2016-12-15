---
layout: documentation
title: Course
resource: Course
version: v7.1
permalink: /docs/v71_Course/
---

# {{ page.resource }}

Returns information about {{ page.resource }}s, which are user-defined or automatically generated [Route]({{ site.github.url }}/docs/v71_Route) segments that users may travel upon during [Workouts]({{ site.github.url }}/docs/v71_Workout) and over which they may compete for various performance metrics measured over the {{ page.resource }}.

## Resource URIs

**Item URI:** `/{{ page.version }}/course/<pk>/` <br />
**Collection URI:** `/{{ page.version }}/course/`

## Item

### Item methods

`GET` Retrieve a single `{{ page.resource }}` by `id`

### Item query parameters

| Name               | Description                                                                                                                                                   | Type    | Required |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| `thumbnail`        | Specify `True` if you would like the {{ page.resource }} thumbnail link to be included in the response. Defaults to `False`.                                               | boolean | Optional |
| `thumbnail_width`  | In pixels. Ignored unless `thumbnail` is `True`. Defaults to `60`.                                                                                            | int     | Optional |
| `thumbnail_height` | In pixels. Ignored unless `thumbnail` is `True`. Defaults to `60`.                                                                                            | int     | Optional |
| `field_set`        | Specifies the set of fields to be returned. Valid values are `default` (the default if not specified) or `minimal`. See more details under [Item properties](#itemproperties) | string  | Optional |

### Item properties <a name="itemproperties"></a>

##### Properties provided for field_set `minimal`

| Name               | Description                                                                | Type     | Units  | HTTP Support      |
|--------------------|----------------------------------------------------------------------------|----------|--------|-------------------|
| `name`             | The {{ page.resource }}'s name                                                          | string   |        | **GET:** Required |
| `distance`         | Distance spanned by the {{ page.resource }}, in meters                                  | number   | meters | **GET:** Required |
| `created_datetime` | Specified in UTC, formatted per RFC-3339.                                  | datetime |        | **GET:** Required |
| `auto_generated`   | False if created manually by a user, True otherwise                        | boolean  |        | **GET:** Required |
| `thumbnail`        | Link to thumbnail image, provided only if parameter `thumbnail` was `True` | string   |        | **GET:** Required |

##### Additional properties provided for the default field_set

| Name             | Description                                                 | Type   | Units | HTTP Support      |
|------------------|-------------------------------------------------------------|--------|-------|-------------------|
| `total_count`    | Number of times the {{ page.resource }} has been done across all users   | number |       | **GET:** Required |
| `climb_category` | Property relevant to any climbs that are part of the {{ page.resource }} | ??     |       | **GET:** Required |
| `elevation_diff` | Property relevant to any climbs that are part of the {{ page.resource }} | ??     |       | **GET:** Required |
| `grade`          | Property relevant to any climbs that are part of the {{ page.resource }} | ??     |       | **GET:** Required |

##### Additional properties which are populated on collection GETs when searching by workout_id

| Name          | Description                                                                        | Type   | HTTP Support      |
|---------------|------------------------------------------------------------------------------------|--------|-------------------|
| `user_count`  | Number of times the workout's user has completed the {{ page.resource }}                        | number | **GET:** Required |
| `user_stats`  | Dictionary of summary statistics of the workout user's performance on the {{ page.resource }}   | dict   | **GET:** Required |
| `start_index` | The indexes of the user's workout route where they crossed the start of the {{ page.resource }} | number | **GET:** Required |
| `end_index`   | The indexes of the user's workout route where they crossed the end of the {{ page.resource }}   | number | **GET:** Required |

### Item links <a name="itemlinks"></a>

`creator` Link to the user resource of the user that created the {{ page.resource }}

## Collection

### Collection methods

`GET` Retrieve multiple `{{ page.resource }}`s

### Collection query parameters

| Name              | Description                                                                                                                                                                                                                                                   | Type        | Required                                        |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------------------------------------|
| `workout`         | Searches for courses that were completed during the specified workout. Can be specified as either the workout ID or its resource href. May only specify one.                                                                                                  | `id`/`href` | One of this, `route` or `course` required       |
| `route`           | Searches for {{ page.resource }}s that are contained within the specified route. Can be specified as either the route ID or its resource href. May only specify one.                                                                                                       | `id`/`href` | One of this, `route`, or `course` are required  |
| `{{ page.resource }}`          | Direct search for the specified {{ page.resource }}s. Can be specified as either the {{ page.resource }} ID or its resource href. May specify multiple values by either repeating the parameter in the query or by providing a comma-delimited list within a single `course` parameter. | `id`/`href` | One of this, `workout`, or `route` are required |
| `thumbnail`       | Specify `True` if you would like the {{ page.resource }} thumbnail link to be included in the response. Defaults to `False`.                                                                                                                                               | boolean     | Optional                                        |
| `thumbnail_width` | In pixels. Ignored unless `thumbnail` is `True`. Defaults to `60`.                                                                                                                                                                                            | int         | Optional                                        |
| `field_set`       | Specifies the set of fields to be returned. Valid values are `default` (the default if not specified) or `minimal`. See more details under [Item properties](#itemproperties)                                                                                                 | string      | Optional                                        |

### Collection properties

| Name          | Description                                                          | Type | Units | HTTP Support      |
|---------------|----------------------------------------------------------------------|------|-------|-------------------|
| `total_count` | the total number of {{ page.resource }}s matching the search parameters specified | int  |       | **GET:** Required |

### Collection links

None

### Embedded collections

`courses` A collection of {{ page.resource }} items with properties as described under [Workouts latest][] and links as described under [Item links](#itemlinks)

## Usage

### GET {{ page.resource }} entity

###### Request `GET: /{{ page.version }}/course/{pk}/?field_set=default&thumbnail=True&thumbnail_height=60&thumbnail_width=60`

###### Response

```json
{
    "distance": 6644,
    "auto_generated": false,
    "user_count": null,
    "climb_category": null,
    "name": "name",
    "created_datetime": "2014-05-18T16:18:33.314763+00:00",
    "total_count": 0,
    "elevation_diff": null,
    "end_index": null,
    "grade": null,
    "_links": {
        "self": [{
            "href": "\/{{ page.version }}\/course\/{pk}\/?thumbnail_height=60&field_set=default&thumbnail=True&thumbnail_width=60",
            "id": "{pk}"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.resource }}"
        }],
        "creator": [{
            "href": "\/{{ page.version }}\/user\/{user ID}\/",
            "id": "{user ID}"
        }]
    },
    "thumbnail": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?path=color%3A0xff0000ff%7Cweight%3A2%7Cenc....",
    "start_index": null,
    "user_stats": null
}
```

### GET {{ page.resource }} collection

###### Request `GET: /{{ page.version }}/course/?course=1423763`

###### Response

```json
{
    "_links": {
        "self": [{
            "href": "\/{{ page.version }}\/course\/?thumbnail_width=60&course=1%2C2&limit=20&offset=0&thumbnail_height=60&field_set=default&thumbnail=True"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/{{ page.resource }}"
        }]
    },
    "_embedded": {
        "courses": [{
            "distance": 6644,
            "name": "course 1 name",
            "created_datetime": "2014-05-18T16:18:33.314763+00:00",
            "thumbnail": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?path=color%3A0xff0000ff%7Cweight%3A2%7Cenc...",
            "_links": {
                "self": [{
                    "href": "\/{{ page.version }}\/course\/1\/",
                    "id": "1"
                }],
                "creator": [{
                    "href": "\/{{ page.version }}\/user\/{user ID}\/",
                    "id": "{user ID}"
                }]
            },
            "auto_generated": false
        }, {
            "distance": 1521,
            "name": "course 2 name",
            "created_datetime": "2014-08-04T20:14:01.256431+00:00",
            "thumbnail": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?path=color%3A0xff0000ff%7Cweight%3A2%7Cenc...",
            "_links": {
                "self": [{
                    "href": "\/{{ page.version }}\/course\/2\/",
                    "id": "2"
                }],
                "creator": [{
                    "href": "\/{{ page.version }}\/user\/{user 2 ID\/",
                    "id": "{user 2 ID}"
                }]
            },
            "auto_generated": false
        }]
    },
    "total_count": 2
}
```
