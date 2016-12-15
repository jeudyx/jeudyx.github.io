---
layout: documentation
title: Body Mass
resource: BodyMass
version: api/0.1
versionhref: 01
permalink: /docs/01_BodyMass/
---

# {{page.title}}

This resource allows creation and modification of {{page.title}} entries.  {{page.title}} relates to a user's weight, mass, fat percentage, and body mass index.


## Resource URIs

* **Item URI:** `/{{page.version}}/bodymass/{id}/`
* **Collection URI:** `/{{page.version}}/bodymass/`


## Item

### Item Methods

* `GET` Retrieve a {{page.title}} by id


### Item properties <a name="itemproperties"></a>

| Name                | Description                                                                                                                      | Type             | Units    | HTTP Support                         |
| ---                 | ---                                                                                                                              | ---              | ---      | ---                                  |
| `datetime_utc`      | The instant in time that the body mass measurement was taken by the source system (i.e. the time the user stepped on the scale). | ISO8601 Datetime | N/A      | **GET**: required, **PUT**: required |
| `datetime_timezone` | The local timezone where the body mass measurement was recorded (i.e. 'America/Chicago')                                         | String           | N/A      | **GET**: required, **PUT**: required |
| `created_datetime`  | The instant in time that the workout was recorded.                                                                               | ISO8601 Datetime | N/A      | **GET**: required, **PUT**: required |
| `updated_datetime`  | The instant in time that the workout was last modified.                                                                          | ISO8601 Datetime | N/A      | **GET**: required, **PUT**: required |
| `recorder_type_key` | The recorder model that took the body mass measurement (i.e. 'withings', 'fitbit', etc)                                          | String           | N/A      | **GET**: required, **PUT**: required |
| `reference_key`     | This is the identifier for the resource in it's source system.  Unique per user_id/recorder_type_key.                            | String           | N/A      | **GET**: required, **PUT**: optional |
| `bmi`               | The user's body mass index (BMI).  See [`BMI`](http://en.wikipedia.org/wiki/Body_mass_index)                                                                              | String           | N/A      | **GET**: optional, **PUT**: optional |
| `mass`              | The user's total mass.  If `lean_mass` and `fat_mass` are present, they should add up to this field.                             | String           | Kilogram | **GET**: optional, **PUT**: optional |
| `fat_percent`       | The user's percent of body mass that consists of fat.  For example, "15.738" would mean 15.738% of user's total ``mass`` is fat. | String           | N/A      | **GET**: optional, **PUT**: optional |
| `lean_mass`         | The user's total mass that *is not* fat.                                                                                         | String           | Kilogram | **GET**: optional, **PUT**: optional |
| `fat_mass`          | The user's total mass that *is* fat.                                                                                             | String           | Kilogram | **GET**: optional, **PUT**: optional |

### Item links <a name="itemlinks"></a>

* `self` A link to this resource
* `user` A link to the User resource that owns the {{page.title}}


## Collection

### Collection methods

* `GET` Get a list of {{page.title}}es.
* `PUT` Update or insert a {{page.title}} measurement.


### Collection query parameters

| Name                    | Description                                                  | Type             | Required |
| ---                     | ---                                                          | ---              | ---      |
| `target_start_datetime` | Indicates where to start the search.                         | ISO8601 Datetime | Yes      |
| `target_end_datetime`   | Indicates where to end the search. Defaults to current time. | ISO8601 Datetime | No       |


### Collection properties

| Name          | Description                                    | Type    | HTTP Support      |
| ---           | ---                                            | ---     | ---               |
| `total_count` | Total count of entities returned in collection | integer | **GET**: required |


### Collection links

* `self` A link to this resource


### Embedded collections

* `bodymasses` A collection of {{page.title}}es with properties as described under [Item properties](#itemproperties) and links as described under [Item links](#itemlinks)


## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/bodymass/{id}/`

###### Response

```json
{
   "datetime_utc":"2014-03-01T18:07:02+00:00",
   "datetime_timezone":"America/Chicago",
   "created_datetime":"2014-03-26T15:02:28+00:00",
   "updated_datetime":"2014-04-22T03:58:27+00:00",
   "recorder_type_key":"withings",
   "reference_key":"187726333",
   "mass":"72.940",
   "bmi":"21.000",
   "fat_percent":"15.738",
   "lean_mass":"61.46070280",
   "fat_mass":"11.47929720",
   "_links":{
      "self":[
         {
            "href":"/{{page.version}}/bodymass/{bodymass_id}/",
            "id":"{bodymass_id}"
         }
      ],
      "user":[
         {
            "href":"/{{page.version}}/user/{user_id}/",
            "id":"{user_id}"
         }
      ]
   }
}
```

### PUT {{page.title}} entity

###### Request `PUT: /{{page.version}}/bodymass/{id}/`

```json
{
   "datetime_utc":"2012-12-13T12:00:00Z",
   "datetime_timezone":"US/Central",
   "recorder_type_key":"foo",
   "reference_key":"2012-12-13T12:00:00Z",
   "mass":"35",
   "fat_percent":"55.5",
   "bmi":"27"
}
```

###### Response

```json
{
   "datetime_utc":"2012-12-13T12:00:00+00:00",
   "datetime_timezone":"America/Chicago",
   "created_datetime":"2014-03-26T15:02:28+00:00",
   "updated_datetime":"2014-04-22T03:58:27+00:00",
   "recorder_type_key":"foo",
   "reference_key":"2012-12-13T12:00:00Z",
   "mass":"35",
   "bmi":"27",
   "fat_percent":"55.5",
   "lean_mass":"61.46070280",
   "fat_mass":"11.47929720",
   "_links":{
      "self":[
         {
            "href":"/{{page.version}}/bodymass/{bodymass_id}/",
            "id":"{bodymass_id}"
         }
      ],
      "user":[
         {
            "href":"/{{page.version}}/user/{user_id}/",
            "id":"{user_id}"
         }
      ]
   }
}
```

### GET {{page.title}} collection

###### Request `GET: /{{page.version}}/bodymass/?target_start_datetime=2012-12-12T12%3A12%3A12Z&limit=20&offset=0`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"/{{page.version}}/bodymass/?target_start_datetime=2012-12-12T12%3A12%3A12Z&limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/"
         }
      ]
   },
   "_embedded":{
      "bodymasses":[
         {
            "datetime_utc":"2014-03-01T18:07:02+00:00",
            "datetime_timezone":"America/Chicago",
            "created_datetime":"2014-03-26T15:02:28+00:00",
            "updated_datetime":"2014-04-22T03:58:27+00:00",
            "recorder_type_key":"foo",
            "reference_key":"187726333",
            "mass":"72.940",
            "bmi":"21.000",
            "fat_percent":"15.738",
            "lean_mass":"61.46070280",
            "fat_mass":"11.47929720",
            "_links":{
               "self":[
                  {
                     "href":"/{{page.version}}/bodymass/{bodymass_id}/",
                     "id":"{bodymass_id}"
                  }
               ],
               "user":[
                  {
                     "href":"/{{page.version}}/user/{user_id}/",
                     "id":"{user_id}"
                  }
               ]
            }
         }
      ]
   },
   "total_count":1
}
```
