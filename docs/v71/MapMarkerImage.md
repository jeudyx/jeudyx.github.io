---
layout: documentation
title: Map Marker Image
resource: Map Marker Image
version: v7.1
versionhref: v71
permalink: /docs/v71_Map_Marker_Image/
---

# {{page.title}}

Provides images to be displayed upon maps to mark landmarks and distance, currently in PNG format.

## Resource URIs

**Item URI:** `/{{page.version}}/map_marker_image/<pk>/`  
**Collection URI:** `/{{page.version}}/map_marker_image/`

## Item

### Item methods

`GET` Allows for retrieval of a single {{page.title}}.


### Item query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `format` | Specifies the output format of the image. Valid values are `json` (the default if not specified) or `png`. | text | No   |
| `txt` | Specifies the text that should be composited onto marker ID 0 | text | No   |

### Item properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
|`marker_type_id`| The ID of the marker | int | **GET**: required |
|`txt`| The overlay text specified, or null | text | **GET**: optional |
|`description`| The description of the map marker | text | **GET**: required |
|`image_link`| The link to the png format of the marker | href | **GET**: required |

### Item links

``image`` Link to the image in png format

``documentation`` Link to this documentation

## Collection

### Collection methods

``GET`` Allows for retrieval of a list of all possible markers in json containing useful metadata about each.

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `marker_type_id` | Specifies which marker IDs should be listed in the results.  Valid values are a comma-separated list of IDs, otherwise the default is to list all markers. | int | No |
| `txt` | For when also requesting a Distance marker, text will only be provided where appropriate. | int | No |

### Collection properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `total_count` | The total number of routes matching the search parameters specified | int | **GET**: required |


### Collection links

``self`` Link to the URL that produced the response

``documentation`` Link to this documentation


### Embedded collections

`map_marker_images` A collection of map_marker_image details with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### GET {{page.title}} json entity

###### Request `GET: /{{page.version}}/map_marker_image/84/`

###### Response

```
{
   "marker_type_id":84,
   "_links":{
      "image":[
         {
            "href":"\/{{page.version}}\/map_marker_image\/84\/?format=png",
            "id":"84"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/${doc_uri}s"
         }
      ],
      "self":[
         {
            "href":"\/{{page.version}}\/map_marker_image\/84\/",
            "id":"84"
         }
      ]
   },
   "desc":"Ice Cream"
}
```

### GET {{page.title}} png entity

###### Request `GET: /{{page.version}}/map_marker_image/84/?format=png`

###### Response

```
  PNG <png data>
```
    
### GET {{page.title}} collection

###### Request `GET: /{{page.version}}/map_marker_image/marker_type_id=1,2,3,0`

###### Response

```
{
    "_links":{
       "self":[
          {
             "href":"\/{{page.version}}\/map_marker_image\/?marker_type_id=1%2C2%2C3%2C0&txt=99"
          }
       ],
       "documentation":[
          {
             "href":"https:\/\/developer.underarmour.com\/docs\/${doc_uri}s"
          }
       ]
    },
    "_embedded":{
       "map_marker_images":[
          {
             "marker_type_id":1,
             "_links":{
                "image":[
                   {
                      "href":"\/{{page.version}}\/map_marker_image\/1\/?format=png",
                      "id":"1"
                   }
                ]
             },
             "desc":"No Marker"
          },
          {
             "marker_type_id":2,
             "_links":{
                "image":[
                   {
                      "href":"\/{{page.version}}\/map_marker_image\/2\/?format=png",
                      "id":"2"
                   }
                ]
             },
             "desc":"Aid"
          },
          {
             "marker_type_id":3,
             "_links":{
                "image":[
                   {
                      "href":"\/{{page.version}}\/map_marker_image\/3\/?format=png",
                      "id":"3"
                   }
                ]
             },
             "desc":"Water"
          },
          {
             "marker_type_id":0,
             "txt":"99",
             "_links":{
                "image":[
                   {
                      "href":"\/{{page.version}}\/map_marker_image\/0\/?txt=99&format=png",
                      "id":"0"
                   }
                ]
             },
             "desc":"Distance"
          }
       ]
    },
    "total_count":4
}
```
