---
layout: documentation
title: Heart Rate Zone Calculation
resource: Heart Rate Zone Calculation
version: vx
versionhref: vx
permalink: /docs/vx_Heart_Rate_Zone_Calculation/
---

# {{page.title}}

Calculates Heart Rate Zones given an age or a maximum heart rate.

## Resource URIs

**Collection URI:** `/{{page.version}}/heart_rate_zone_calculation/`

## Item

### Item properties <a name="itemproperties"></a>

| Name         | Description          | Type      | HTTP Support                                                       |
|--------------|----------------------|-----------|--------------------------------------------------------------------|
| `zones` | A list of the Heart Rate Zones in this setting | list of JSON | **GET**: required |

###### Example values

`zones`

```json
[

    {"name": "zone1", "start": <integer>, "end": <integer>},

    {"name": "zone2", "start": <integer>, "end": <integer>},

    ...

    {"name": "zone5", "start": <integer>, "end": <integer>},

]
```

### Item links <a name="itemlinks"></a>

`self` A link to this resource  

## Collection

### Collection methods

`GET` Get a list of {{page.title}}s.  

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `age` | An integer indicating an age to calculate Heart Rate Zones for. One and only one of age and max_hr is required | number | Yes   |
| `max_hr` | An integer indicating a maximum heart rate to calculate Heart Rate Zones for. One and only one of age and max_hr is required | number | Yes |

* Note: `age` and `max_hr` cannot be provided simultaneously in a request.

### Collection links

`self` A link to this resource  
`user` A link to the User resource that owns the {{page.title}}

### Embedded collections

`heart_rate_zone_calculations` A collection of {{page.title}}s with properties as described under [Item properties](#itemproperties) and links as described under [Item links](#itemlinks)

## Usage

### GET {{page.title}} collection by age

###### Request `GET: /{{page.version}}/heart_rate_zone_calculation/?age=34`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/heart_rate_zone_calculation\/?age=34&limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/Heart_Rate_Zone_Calculation"
         }
      ]
   },
   "_embedded":{
      "heart_rate_zone_calculations":[
         {
            "zones":[
               {
                  "start":0,
                  "end":110,
                  "name":"zone1"
               },
               {
                  "start":111,
                  "end":128,
                  "name":"zone2"
               },
               {
                  "start":129,
                  "end":147,
                  "name":"zone3"
               },
               {
                  "start":148,
                  "end":165,
                  "name":"zone4"
               },
               {
                  "start":166,
                  "end":184,
                  "name":"zone5"
               }
            ]
         }
      ]
   },
   "total_count":1
}
```

### GET {{page.title}} collection by max_hr

###### Request `GET: /{{page.version}}/heart_rate_zone_calculation/?max_hr=184`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/heart_rate_zone_calculation\/?limit=20&max_hr=184&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/Heart_Rate_Zone_Calculation"
         }
      ]
   },
   "_embedded":{
      "heart_rate_zone_calculations":[
         {
            "zones":[
               {
                  "start":0,
                  "end":110,
                  "name":"zone1"
               },
               {
                  "start":111,
                  "end":128,
                  "name":"zone2"
               },
               {
                  "start":129,
                  "end":147,
                  "name":"zone3"
               },
               {
                  "start":148,
                  "end":165,
                  "name":"zone4"
               },
               {
                  "start":166,
                  "end":184,
                  "name":"zone5"
               }
            ]
         }
      ]
   },
   "total_count":1
}
```
