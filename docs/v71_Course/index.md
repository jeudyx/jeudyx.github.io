---
name: Course
doc_uri: Course
versions: api/0.1, v7.0, v7.1
released: 2013-09-30
tags: workouts
---

# ${name}

Returns information about ${name}s, which are user-defined or automatically generated [`Route`][latest Route] segments that users may travel upon during [`Workouts`][latest Workout] and over which they may compete for various performance metrics measured over the ${name}.

## Resource URIs

**Item URI:** `/${version}/course/<pk>/`
**Collection URI:** `/${version}/course/`

## Item

### Item methods

`GET` Retrieve a single `${name}` by `id`

### Item query parameters

| Name               | Description                                                                                                                                                   | Type    | Required |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|----------|
| `thumbnail`        | Specify `True` if you would like the ${name} thumbnail link to be included in the response. Defaults to `False`.                                               | boolean | Optional |
| `thumbnail_width`  | In pixels. Ignored unless `thumbnail` is `True`. Defaults to `60`.                                                                                            | int     | Optional |
| `thumbnail_height` | In pixels. Ignored unless `thumbnail` is `True`. Defaults to `60`.                                                                                            | int     | Optional |
| `field_set`        | Specifies the set of fields to be returned. Valid values are `default` (the default if not specified) or `minimal`. See more details under [Item properties][] | string  | Optional |

### Item properties

##### Properties provided for field_set `minimal`

| Name               | Description                                                                | Type     | Units  | HTTP Support      |
|--------------------|----------------------------------------------------------------------------|----------|--------|-------------------|
| `name`             | The ${name}'s name                                                          | string   |        | **GET:** Required |
| `distance`         | Distance spanned by the ${name}, in meters                                  | number   | meters | **GET:** Required |
| `created_datetime` | Specified in UTC, formatted per RFC-3339.                                  | datetime |        | **GET:** Required |
| `auto_generated`   | False if created manually by a user, True otherwise                        | boolean  |        | **GET:** Required |
| `thumbnail`        | Link to thumbnail image, provided only if parameter `thumbnail` was `True` | string   |        | **GET:** Required |

##### Additional properties provided for the default field_set

| Name             | Description                                                 | Type   | Units | HTTP Support      |
|------------------|-------------------------------------------------------------|--------|-------|-------------------|
| `total_count`    | Number of times the ${name} has been done across all users   | number |       | **GET:** Required |
| `climb_category` | Property relevant to any climbs that are part of the ${name} | ??     |       | **GET:** Required |
| `elevation_diff` | Property relevant to any climbs that are part of the ${name} | ??     |       | **GET:** Required |
| `grade`          | Property relevant to any climbs that are part of the ${name} | ??     |       | **GET:** Required |

##### Additional properties which are populated on collection GETs when searching by workout_id

| Name          | Description                                                                        | Type   | HTTP Support      |
|---------------|------------------------------------------------------------------------------------|--------|-------------------|
| `user_count`  | Number of times the workout's user has completed the ${name}                        | number | **GET:** Required |
| `user_stats`  | Dictionary of summary statistics of the workout user's performance on the ${name}   | dict   | **GET:** Required |
| `start_index` | The indexes of the user's workout route where they crossed the start of the ${name} | number | **GET:** Required |
| `end_index`   | The indexes of the user's workout route where they crossed the end of the ${name}   | number | **GET:** Required |

### Item links

`creator` Link to the user resource of the user that created the ${name}

## Collection

### Collection methods

`GET` Retrieve multiple `${name}`s

### Collection query parameters

| Name              | Description                                                                                                                                                                                                                                                   | Type        | Required                                        |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------------------------------------|
| `workout`         | Searches for courses that were completed during the specified workout. Can be specified as either the workout ID or its resource href. May only specify one.                                                                                                  | `id`/`href` | One of this, `route` or `course` required       |
| `route`           | Searches for ${name}s that are contained within the specified route. Can be specified as either the route ID or its resource href. May only specify one.                                                                                                       | `id`/`href` | One of this, `route`, or `course` are required  |
| `${name}`          | Direct search for the specified ${name}s. Can be specified as either the ${name} ID or its resource href. May specify multiple values by either repeating the parameter in the query or by providing a comma-delimited list within a single `course` parameter. | `id`/`href` | One of this, `workout`, or `route` are required |
| `thumbnail`       | Specify `True` if you would like the ${name} thumbnail link to be included in the response. Defaults to `False`.                                                                                                                                               | boolean     | Optional                                        |
| `thumbnail_width` | In pixels. Ignored unless `thumbnail` is `True`. Defaults to `60`.                                                                                                                                                                                            | int         | Optional                                        |
| `field_set`       | Specifies the set of fields to be returned. Valid values are `default` (the default if not specified) or `minimal`. See more details under [Item properties][]                                                                                                 | string      | Optional                                        |

### Collection properties

| Name          | Description                                                          | Type | Units | HTTP Support      |
|---------------|----------------------------------------------------------------------|------|-------|-------------------|
| `total_count` | the total number of ${name}s matching the search parameters specified | int  |       | **GET:** Required |

### Collection links

None

### Embedded collections

`courses` A collection of ${name} items with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### GET ${name} entity

###### Request `GET: /${version}/course/{pk}/?field_set=default&thumbnail=True&thumbnail_height=60&thumbnail_width=60`

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
            "href": "\/${version}\/course\/{pk}\/?thumbnail_height=60&field_set=default&thumbnail=True&thumbnail_width=60",
            "id": "{pk}"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${name}"
        }],
        "creator": [{
            "href": "\/${version}\/user\/{user ID}\/",
            "id": "{user ID}"
        }]
    },
    "thumbnail": "http:\/\/maps.googleapis.com\/maps\/api\/staticmap?path=color%3A0xff0000ff%7Cweight%3A2%7Cenc....",
    "start_index": null,
    "user_stats": null
}
```

### GET ${name} collection

###### Request `GET: /${version}/course/?course=1423763`

###### Response

```json
{
    "_links": {
        "self": [{
            "href": "\/${version}\/course\/?thumbnail_width=60&course=1%2C2&limit=20&offset=0&thumbnail_height=60&field_set=default&thumbnail=True"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${name}"
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
                    "href": "\/${version}\/course\/1\/",
                    "id": "1"
                }],
                "creator": [{
                    "href": "\/${version}\/user\/{user ID}\/",
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
                    "href": "\/${version}\/course\/2\/",
                    "id": "2"
                }],
                "creator": [{
                    "href": "\/${version}\/user\/{user 2 ID\/",
                    "id": "{user 2 ID}"
                }]
            },
            "auto_generated": false
        }]
    },
    "total_count": 2
}
```
