---
layout: documentation
title: Workout Heart Rate
resource: Workout Heart Rate
version: v7.1
versionhref: v71
permalink: /docs/v71_Workout_Heart_Rate/
---

# {{page.title}}

Provides Heart Rate Zone data associated with a workout.

## Resource URIs

**Item URI:** `/{{page.version}}/workout_heart_rate/{pk}/`

## Item

### Item Methods

`GET` Retrieve a {{page.title}} by id  

### Item properties <a name="itemproperties"></a>

| Name         | Description          | Type      | Units               | HTTP Support                                 |
|--------------|----------------------|-----------|---------------------|----------------------------------------------|
| `time_in_zone1` | Time spent in Heart Rate Zone 1 | number | seconds | **GET**: required |
| `time_in_zone2` | Time spent in Heart Rate Zone 2 | number | seconds | **GET**: required |
| `time_in_zone3` | Time spent in Heart Rate Zone 3 | number | seconds | **GET**: required |
| `time_in_zone4` | Time spent in Heart Rate Zone 4 | number | seconds | **GET**: required |
| `time_in_zone5` | Time spent in Heart Rate Zone 5 | number | seconds | **GET**: required |

### Item links <a name="itemlinks"></a>

`self` A link to this resource  
`user` A link to the User resource that owns the {{page.title}}

## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/workout_heart_rate/{pk}/`

###### Response

```json
{
   "time_in_zone5":630,
   "time_in_zone4":223,
   "time_in_zone1":540,
   "time_in_zone3":339,
   "time_in_zone2":644,
   "_links":{
      "self":[
         {
            "href":"\/api\/0.1\/workout_heart_rate\/20\/",
            "id":"20"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/Workout_Heart_Rate"
         }
      ]
   }
}
```
