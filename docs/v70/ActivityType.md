---
layout: documentation
title: Activity Type
resource: Activity Type
version: v7.0
versionhref: v70
permalink: /docs/v70_Activity_Type/
---

# {{page.title}}

This resource provides access to {{page.title}}s. {{page.title}}s are commonly linked to other objects such as [Routes](/docs/{{page.versionhref}}_Route) and [Workouts](/docs/{{page.versionhref}}_Workout), 
and describe the activity.

## Resource URIs

**Item URI:** `/{{page.version}}/activity_type/{id}/`  
**Collection URI:** `/{{page.version}}/activity_type/`

## Item

### Item methods

`GET` Retrieve a single `{{page.title}}` by `id`

### Item query parameters

None

### Item properties

| Name           | Description                                                                    | Type    | Units | HTTP Support |
|----------------|--------------------------------------------------------------------------------|---------|-------|--------------|
| `import_only`  | Indicates whether or not the {{page.title}} is only valid for imported workouts | Boolean |       |  **GET:** Required             |
| `location_aware`   | Indicates whether or not the {{page.title}} is valid for location or GPS-based activities                 | Boolean |       |   **GET:** Required            |
| `name`         | Name of the {{page.title}}                                                      | string  |       |    **GET:** Required           |
| `mets`         | Standard METs for the {{page.title}}                                            | string  |       |    **GET:** Required           |
| `mets_speed`   | A mapping from speed to corresponding standard METs                            | number  |       |   **GET:** Required            |
| `short_name`   | Short name of the {{page.title}}                                                | string  |       |   **GET:** Required            |
| `has_children` | Indicates whether or not the {{page.title}} has children                        | Boolean |       |   **GET:** Required            |
| `template`       | A root-level attribute that holds parametrized template attributes specific to the activity type.                                                                               | [`template`][Template]              |       | **GET:** Required |

#### Template

Template attributes include terminology used in communication around an {{page.title}}(s).

| Name   | Description                                                   | Type   |
|--------|---------------------------------------------------------------|--------|
| `user_action_past` | Singular user performed {{page.title}} in the past | string |
| `user_action_present`   | Singular user presently performing {{page.title}}  | string |
| `activities_are`   | Plural {{page.title}} as the subject with appropriate conjugated form of the verb, 'to be' | string |

###### Example values

`user_action_past`

Valid values are `<user.name> did a gym workout`, `<user.name> played tennis`

`user_action_present`

Valid values are `<user.name> is doing a gym workout`, `<user.name> is playing tennis`

`activities_are`

Valid values are `snow skiing is`, `treadmill runs are`

> Note: values will be returned for `user_action_past` and `user_action_present`, but `activites_are` may be null.

### Item links

`parent` The direct parent of the {{page.title}}  
`root` The root of the tree in which the {{page.title}} resides  
`icon_url` URL for the {{page.title}} icon

## Collection

### Collection methods

`GET` Retrieve multiple `{{page.title}}s`

### Collection query parameters

None

### Collection properties

| Name          | Description                        | Type | Units | HTTP Support      |
|---------------|------------------------------------|------|-------|-------------------|
| `total_count` | the total number of {{page.title}}s | int  |       | **GET**: required |

### Collection links

None

### Embedded collections

`activity_types` A collection of {{page.title}} items with properties as described under `Item properties` and links as described under `Item links`

## Usage

### GET an `{{page.title}}` by `id`

###### Request `GET: /{{page.version}}/activity_type/<id>/`

###### Response `200`

```json
{
    "mets": 8.0,
    "mets_speed": [
        {
            "mets": "4",
            "speed": 4.4704
        },
        {
            "mets": "6",
            "speed": 4.91744
        },
        {
            "mets": "8",
            "speed": 5.81152
        },
        {
            "mets": "10",
            "speed": 6.7056
        },
        {
            "mets": "12",
            "speed": 7.8232
        },
        {
            "mets": "16",
            "speed": 8.9408
        }
    ],
    "name": "Bike Ride",
    "short_name": "ride",
    "has_children": true,
    "location_aware": true,
    "template": {
          "user_action_past": "{user.name} rode", 
          "user_action_present": "{user.name} is riding", 
          "plural_activity_is": "Bike Rides are"
    },
    "_links": {
        "icon_url": [
            {
                "href": "http://static.mapmyfitness.com/d/website/activity_icons/bike.png"
            }
        ],
        "self": [
            {
                "href": "/{{page.version}}/activity_type/11/",
                "id": "11"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/Activity_Type"
            }
        ],
        "root": [
            {
                "href": "/{{page.version}}/activity_type/11/",
                "id": "11"
            }
        ]
    }
}
```

### GET {{page.title}} collection

###### Request `GET: /{{page.version}}/activity_type/`

###### Response `200`

```json
{
    "_embedded": {
        "activity_types": [
            Many instances of the `Item` response structure
        ]
    },
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/activity_type/?"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/Activity_Type"
            }
        ]
    },
    "total_count": 771
}

```


