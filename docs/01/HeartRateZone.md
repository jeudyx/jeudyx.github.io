---
layout: documentation
title: Heart Rate Zone
resource: Heart Rate Zone
version: api/0.1
versionhref: 01
permalink: /docs/01_Heart_Rate_Zone/
---

# {{page.title}}

This resource provides access to a user's {{page.title}} settings.

## Resource URIs

**Item URI:** `/{{page.version}}/heart_rate_zones/{pk}/`

**Collection URI:** `/{{page.version}}/heart_rate_zones/`

## Item

### Item Methods

`GET` Retrieve a {{page.title}} by id  

### Item properties

| Name         | Description          | Type      | HTTP Support                                                       |
|--------------|----------------------|-----------|--------------------------------------------------------------------|
| `created_date` | Date the setting was created | Date | **GET**: required |
| `zones` | A list of the {{page.title}}s in this setting | json | **GET**: required |

###### Example values

`zones`  

```json
{
    [
    
        {"name": "zone1", "start": integer, "end": integer},
        
        {"name": "zone2", "start": integer, "end": integer},
        
        ...
        
        {"name": "zone5", "start": integer, "end": integer},
    ]
}
```

### Item links

`self` A link to this resource  
`user` A link to the User resource that owns the {{page.title}}

## Collection

### Collection methods

`GET` Get a list of {{page.title}}s.  
`POST` Create a {{page.title}}.

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `user` | Either href or id of user | string or number | Yes   |

### Collection properties

| Name         | Description          | Type      | HTTP Support                                                       |
|--------------|----------------------|-----------|--------------------------------------------------------------------|
| `total_count` | number of {{page.title}} settings | number | **GET**: required |

### Collection links

`self` A link to this resource  
`user` A link to the User resource that owns the {{page.title}}

### Embedded collections

`heart_rate_zones` A collection of {{page.title}} with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/heart_rate_zones/{pk}/`

###### Response

```json
{
   "zones":[
      {
         "start":0,
         "end":80,
         "name":"zone1"
      },
      {
         "start":81,
         "end":100,
         "name":"zone2"
      },
      {
         "start":101,
         "end":120,
         "name":"zone3"
      },
      {
         "start":121,
         "end":140,
         "name":"zone4"
      },
      {
         "start":141,
         "end":160,
         "name":"zone5"
      }
   ],
   "_links":{
      "self":[
         {
            "href":"\/api\/0.1\/heart_rate_zones\/10\/",
            "id":"10"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/"
         }
      ],
      "user":[
         {
            "href":"\/v7.0\/user\/36\/",
            "id":"36"
         }
      ]
   },
   "created_date":"2014-12-05T21:00:12+00:00"
}
```

### GET {{page.title}} collection

###### Request `GET: /{{page.version}}/heart_rate_zones/?user=28`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/api\/0.1\/heart_rate_zones\/?limit=20&user=28&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/"
         }
      ]
   },
   "_embedded":{
      "heart_rate_zones":[
        ...
      ]
   },
   "total_count":0
}
```

### POST {{page.title}} entity

###### Request `POST: /{{page.version}}/heart_rate_zones/`

```json
{
   "zones":[
      {
         "start":0,
         "end":80,
         "name":"zone1"
      },
      {
         "start":81,
         "end":100,
         "name":"zone2"
      },
      {
         "start":101,
         "end":120,
         "name":"zone3"
      },
      {
         "start":121,
         "end":140,
         "name":"zone4"
      },
      {
         "start":141,
         "end":160,
         "name":"zone5"
      }
   ]
}
```

###### Response

```json
{
   "zones":[
      {
         "start":0,
         "end":80,
         "name":"zone1"
      },
      {
         "start":81,
         "end":100,
         "name":"zone2"
      },
      {
         "start":101,
         "end":120,
         "name":"zone3"
      },
      {
         "start":121,
         "end":140,
         "name":"zone4"
      },
      {
         "start":141,
         "end":160,
         "name":"zone5"
      }
   ],
   "_links":{
      "self":[
         {
            "href":"\/api\/0.1\/heart_rate_zones\/12\/",
            "id":"12"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/"
         }
      ],
      "user":[
         {
            "href":"\/v7.0\/user\/38\/",
            "id":"38"
         }
      ]
   },
   "created_date":"2014-12-05T21:00:13.150913+00:00"
}
```
