---
layout: documentation
title: Body Mass
resource: BodyMass
version: v7.0
versionhref: v70
permalink: /docs/v70_BodyMass/
---

# {{page.title}}

This resource allows creation and modification of {{page.title}} entries.  {{page.title}} relates to a user's weight, mass, fat percentage, and body mass index.

## Resource URIs

* **Item URI:** `/{{page.version}}/bodymass/{id}/`
* **Collection URI:** `/{{page.version}}/bodymass/`


## Item

### Item Methods

* `PUT` Update a bodymass measurement.


### Item properties

| Name                | Description                                                                                                                      | Type              | Units    | HTTP Support                                            |
| ---                 | ---                                                                                                                              | ---               | ---      | ---                                                     |
| `datetime_utc`      | The instant in time that the body mass measurement was taken by the source system (i.e. the time the user stepped on the scale). | ISO 8601 Datetime | N/A      | **GET**: required, **POST**: required **PUT**: optional |
| `datetime_timezone` | The local timezone where the body mass measurement was recorded (i.e. 'America/Chicago').                                        | String            | N/A      | **GET**: required, **POST**: required **PUT**: optional |
| `created_datetime`  | The instant in time that the workout was recorded.                                                                               | ISO 8601 Datetime | N/A      | **GET**: required, **POST**: ignored **PUT**: ignored   |
| `updated_datetime`  | The instant in time that the workout was last modified.                                                                          | ISO 8601 Datetime | N/A      | **GET**: required, **POST**: ignored **PUT**: required  |
| `external_id`       | Represents a bodymass uniquely in the environment the bodymass was recorded.                                                     | String            | N/A      | **GET**: required, **POST**: required **PUT**: required |
| `bmi`               | The user's body mass index.                                                                                                      | String            | N/A      | **GET**: optional, **POST**: optional **PUT**: optional |
| `mass`              | The user's total mass.  If `lean_mass` and `fat_mass` are present, they should add up to this field.                             | String            | Kilogram | **GET**: optional, **POST**: required **PUT**: optional |
| `fat_percent`       | The user's percent of body mass that consists of fat.                                                                            | String            | N/A      | **GET**: optional, **POST**: optional **PUT**: optional |
| `lean_mass`         | The user's total mass that *is not* fat. A read-only field.                                                                      | String            | Kilogram | **GET**: optional, **POST**: ignored **PUT**: ignored   |
| `fat_mass`          | The user's total mass that *is* fat. A read-only field.                                                                          | String            | Kilogram | **GET**: optional, **POST**: ignored **PUT**: ignored   |


### Item links

* `self` A link to this resource
* `user` A link to the User resource that owns the {{page.title}}
* `data_source` A link to the `DataSource` resource.


## Collection

### Collection methods

* `GET` Get a list of {{page.title}}es within a date range.
* `PUT` Update or insert a {{page.title}} measurement.


### Collection query parameters

| Name                    | Description                                                  | Type              | Required |
| ---                     | ---                                                          | ---               | ---      |
| `target_start_datetime` | Indicates where to start the search.                         | ISO 8601 Datetime | Yes      |
| `target_end_datetime`   | Indicates where to end the search. Defaults to current time. | ISO 8601 Datetime | No       |


### Collection properties

| Name          | Description                                    | Type    | HTTP Support      |
| ---           | ---                                            | ---     | ---               |
| `total_count` | Total count of entities returned in collection | integer | **GET**: required |


### Collection links

* `self` A link to this resource


### Embedded collections

* `bodymasses` A collection of {{page.title}}es with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### PUT {{page.title}} entity

###### Request `PUT: /{{page.version}}/bodymass/{id}/`

```json
{
   "datetime_utc":"2012-12-13T12:00:00Z",
   "datetime_timezone":"US/Central",
   "external_id":"192664933",
   "mass":35.0,
   "fat_percent":55.5,
   "bmi":27.0,
   "_links": {
      "data_source":  [
         {
            "href": "/{{page.version}}/data_source/{data_source_id}/",
            "id": "{data_source_id}"
         }
      ]
   }
}
```

###### Response 200

```json
{
   "datetime_utc":"2012-12-13T12:00:00+00:00",
   "datetime_timezone":"America/Chicago",
   "created_datetime":"2014-03-26T15:02:28+00:00",
   "updated_datetime":"2014-04-22T03:58:27+00:00",
   "external_id":"192664933",
   "mass": 35.0,
   "bmi": 27.0,
   "fat_percent":55.5,
   "lean_mass":61.46070280,
   "fat_mass":11.47929720,
   "_links":{
      "self":[
         {
            "href":"/{{page.version}}/bodymass/{id}/",
            "id":"{id}"
         }
      ],
      "user":[
         {
            "href":"/{{page.version}}/user/{user_id}/",
            "id":"{user_id}"
         }
      ],
      "data_source": [
         {
            "href": "/{{page.version}}/data_source/{data_source_id}/",
            "id": "{data_source_id}"
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
            "external_id":"187726333",
            "mass": 72.940,
            "bmi": 21.000,
            "fat_percent": 15.738,
            "lean_mass": 61.46070280,
            "fat_mass": 11.47929720,
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

### POST {{page.title}} entity

###### Request `POST: /{{page.version}}/bodymass/`

```json
{
   "datetime_utc":"2012-12-13T12:00:00Z",
   "datetime_timezone":"US/Central",
   "external_id":"192664933",
   "mass":35.0,
   "fat_percent":55.5,
   "bmi":27.0,
   "_links": {
      "data_source":  [
         {
            "href": "/{{page.version}}/data_source/{data_source_id}/",
            "id": "{data_source_id}"
         }
      ]
   }
}
```

###### Response 201

```json
{
   "datetime_utc":"2012-12-13T12:00:00+00:00",
   "datetime_timezone":"America/Chicago",
   "created_datetime":"2014-03-26T15:02:28+00:00",
   "updated_datetime":"2014-04-22T03:58:27+00:00",
   "external_id":"192664933",
   "mass": 35.0,
   "bmi": 27.0,
   "fat_percent":55.5,
   "lean_mass":61.46070280,
   "fat_mass":11.47929720,
   "_links":{
      "self":[
         {
            "href":"/{{page.version}}/bodymass/{id}/",
            "id":"{id}"
         }
      ],
      "user":[
         {
            "href":"/{{page.version}}/user/{user_id}/",
            "id":"{user_id}"
         }
      ],
      "data_source": [
         {
            "href": "/{{page.version}}/data_source/{data_source_id}/",
            "id": "{data_source_id}"
         }
      ]
   }
}
```

[BMI]: http://en.wikipedia.org/wiki/Body_mass_index
