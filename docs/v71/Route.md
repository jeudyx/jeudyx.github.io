---
layout: documentation
title: Route
resource: Route
version: v7.1
versionhref: v71
permalink: /docs/v71_Route/
---

# {{page.title}}

Returns information about routes, which are user-defined or automatically generated paths a user may have or will travel 
 upon during workouts.  {{page.title}}s contain the position data necessary to follow that path again later as well as meta data
 that can be used to more easily find and decide if it something they would like to complete as a workout.

## Resource URIs

**Item URI:** `/{{page.version}}/route/{pk}/`  
**Collection URI:** `/{{page.version}}/route/`

## Item

### Item methods

`GET` Allows for retrieval of a single route.  
`PUT` Allows for the update of a single route.  
`DELETE` Allows for the deletion of a single route.  {{page.title}}s are not deleted if it was publicly available, but are rather unassociated to the user.  

### Item query parameters

| Name          | Description               | Type       | Required |
|-------------- |---------------------------|------------|----------|
| `field_set`   | Specifies the set of fields to be returned or saved. Valid values are ``default`` (the default if not specified) or ``detailed``. See more details under [Item properties][] | text | No   |

### Item properties

##### `default` field_set

| Name                  | Description          | Type      | Units               | HTTP Support                                                                        |
|-----------            |----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `city`                | Read-Only and present after calculations. The starting location city | text |  | **GET**: required, **PUT**: required |
| `country`             | Read-Only and present after calculations. The starting location country (2-character code) | text |  | **GET**: required, **PUT**: required |
| `state`               | Read-Only and present after calculations. The starting location state (2-character code) | text |  | **GET**: required, **PUT**: required |
| `starting_location`   | Read-Only and based on ``points``. The starting location of the route. | text |  | **GET**: required, **PUT**: required |
| `start_point_type`    | Valid choices include: bicycle store, church, gym, home, hotel, mall, office, park, running store, school, or other | text |  | **GET**: optional, **PUT**: optional |
| `postal_code`         | The starting city postal code | text |  | **GET**: optional, **PUT**: optional |
| `distance`            | The distance of the route in meters, calculated from points data. May not exceed 1609344 meters. | text | Meters | **GET**: required, **PUT**: required |
| `name`                | The route name | text |  | **GET**: optional, **PUT**: optional |
| `description`         | The route description | text |  | **GET**: optional, **PUT**: optional |
| `data_source`         | How the route was created | text |  | **GET**: required, **PUT**: required |
| `images`              | A list of links to images associated with the route, including the latitude and longitude at which the image was captured if they were provided at the time of image upload (route images are added via the Image endpoint) | text |  | **GET**: required, **PUT**: ignored |
| `created_datetime`    | The time the route was created | text |  | **GET**: required, **PUT**: required |
| `updated_datetime`    | The last time the route was updated | text |  | **GET**: required, **PUT**: required |

###### Example values

`starting_location`

```
    {
        "coordinates": [longitude, latitude],
        "type": "Point"
    }
```
            
##### `detailed` field_set

| Name              | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------     |----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `points`          | Point data.  See [Example values][] | text | Meters | **GET**: required, **PUT**: required |
| `climbs`          | Read-Only and present after calculations.  See [Example values][] | text | Meters | **GET**: required, **PUT**: required |
| `total_ascent`    | Read-Only and present after calculations. Total descent calculated in the route in meters | text | Meters | **GET**: required, **PUT**: required |
| `total_descent`   | Read-Only and present after calculations. Total descent calculated in the route | text | Meters | **GET**: required, **PUT**: required |
| `min_elevation`   | Read-Only and present after calculations. Minimum elevation found in the route | text | Meters | **GET**: required, **PUT**: required |
| `max_elevation`   | Read-Only and present after calculations. Maximum elevation found in the route | text | Meters | **GET**: required, **PUT**: required |

###### Example values

`points`

```
    [
        {
            lat: latitude (Required. In degrees),
            lng: longitude (Required. In degrees),
            dis: distance (Read-Only and present after calculations. In meters),
            ele: elevation (Read-Only and present after calculations. In meters),
        },
        {...}
    ]
```

`climbs`
   
```
    [
        {
            cat: categorization (Category of the climb options: hc, 1, 2, 3, 4, 5),
            change: meters climbed (In meters),
            dis: distance (In meters),
            elevation_max: maximum elevation (In meters),
            end: distance at the end of the climb (In meters),
            end_index: index to the point of the end of the climb,
            eq2: algorithm used to calculate,
            grade: grade of the climb,
            start: distance at the start of the climb (In meters),
            start_index: index to the point of the start of the climb,
        },
        {...}
    ]
```

### Item links

`privacy` Optional. Link to the desired privacy level for the route.  
`user` Optional. Link to the user resource of the route creator.  
`activity_types` Optional. Link(s) to the activity type resource for which this route is valid.  
`thumbnail` Read-Only. Link to a thumbnail that can be used for previewing the route.  
`alternate` Read-Only. Link to the alternative views of a route.  

### Alternative Views

`kml` The kml link may be followed to get a detailed kml file of a route.  Optional
parameters include line_color in aabbggrr, marker_unit as (mile or kilometer),
and show_marker_every as int.

To get mile markers every 5 miles in blue you could provide the parameters:

    &line_color=7fff0000&marker_unit=mile&show_marker_every=5

`gpx` The gpx link provides a detailed gpx file of a route.  The specification for which can be found here:

http://en.wikipedia.org/wiki/GPS_eXchange_Format

## Collection

### Collection methods

 `GET` Allows for retrieval of a collection of routes based on filters provided.

 `POST` Allows for creation of a single route.  See more details under [Item properties] and under [Item query parameters]

### Collection query parameters

The following query parameters only apply to GET

| Name                  | Description                                                                                                                                                       | Type          | Required |
|--------------         |---------------------------                                                                                                                                        |------------   |----------|
| `user`                | Searches for routes that were created by given user(s). May specify one or more comma delimited.                                                                  | ID or href    | Yes if `close_to_location` is not specified   |
| `close_to_location`   | Searches for routes that were created with close proximity to a location.  Must be specified as lat,lng.                                                          | Location      | Yes if `user` is not provided   |
| `search_radius`       | Specify the maximum distance from `close_to_location` for routes in meters. Valid range 0-50,000m, default radius of 5000m.                                       | number        | No   |
| `minimum_distance`    | Specify the minimum distance desired for the route in meters.                                                                                                     | number        | No   |
| `maximum_distance`    | Specify the maximum distance desired for the route in meters.                                                                                                     | number        | No   |
| `privacy`             | Specify the privacy ID or its resource href to search for only routes with that level of privacy. May specify one or more comma delimited.                        | privacy ID    | No   |
| `city`                | Specify the city to only search for routes in a given city.                                                                                                       | text          | No   |
| `state`               | Specify the state to only search for routes in a given state.                                                                                                     | text          | No   |
| `country`             | Specify the country to only search for routes in a given country.                                                                                                 | number        | No   |
| `field_set`           | Specifies the set of fields to be returned. Valid values are `default` (the default if not specified) or `detailed`. See more details under [Item properties][]   | text          | No   |
| `text_search`         | Searches for routes where the name or the description attribute contains the value provided.                                                                      | text          | No   |
| `order_by`            | Specify the order of the returned results. Valid values are `distance`, `distance_from_point`, `date_created`, `date_updated`, `text_match`. The value may be prepended with a `-/+` modifier indicating descending or ascending, respectively.  | text          | No   |

###### Example `order_by` values

* `-created_date`: The default when no `close_to_location` parameter is specified, orders the results by the created date attribute in descending order. 

* `+distance_from_point`: Only applicable when `close_to_location` parameter is specified, orders the results by the distance from the `close_to_location` point in ascending order. 

* `-text_match`: Ony applicable when no `text_search` parameter is specified, orders the results by the score of the text search in descending order.  


### Collection properties

| Name          | Description          | Type      | Units               | HTTP Support                                                                        |
|-------------- |----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `total_count` | The total number of routes matching the search parameters specified | int |  | **GET**: required |

### Collection links

[Pagination] link relations

### Embedded collections

 `routes` A collection of route items with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/route/{pk}/`

###### Response

```json
{
    "total_descent": null,
    "city": "Castlewood",
    "data_source": null,
    "description": "",
    "updated_datetime": "2014-11-07T18:57:29+00:00",
    "created_datetime": "2014-06-03T03:23:33+00:00",
    "country": "us",
    "start_point_type": "",
    "starting_location": {
        "type": "Point",
        "coordinates": [-50.5, 50.5]
    },
    "distance": 1544.59,
    "name": "Route Name",
    "climbs": null,
    "state": "CO",
    "max_elevation": null,
    "images": [{
        "lat": -50.5,
        "lng": 50.5,
        "link": "https://res.cloudinary.com/mapmyfitness/image/upload/{image ID}"
    }],
    "postal_code": "",
    "min_elevation": null,
    "_links": {
        "activity_types": [{
            "href": "\/{{page.version}}\/activity_type\/11\/",
            "id": "11"
        }],
        "privacy": [{
            "href": "\/{{page.version}}\/privacy_option\/3\/",
            "id": "3"
        }],
        "self": [{
            "href": "\/{{page.version}}\/route\/{route ID}\/?format=json",
            "id": "{route ID}"
        }],
        "alternate": [{
            "href": "\/{{page.version}}\/route\/{route ID}\/?format=kml&field_set=detailed",
            "id": "{route ID}",
            "name": "kml"
        }, {
            "href": "\/{{page.version}}\/route\/{route ID}\/?format=gpx&field_set=detailed",
            "id": "{route ID}",
            "name": "gpx"
        }],
        "user": [{
            "href": "\/{{page.version}}\/user\/{User ID}\/",
            "id": "{User ID}"
        }],
        "thumbnail": [{
            "href": "\/\/drzetlglcbfx.cloudfront.net\/routes\/thumbnail\/{route ID}\/1234567890?size=100x100"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
        }]
    },
    "points": null,
    "total_ascent": null
}
```

### PUT {{page.title}} entity

###### Request `PUT: /{{page.version}}/route/{pk}/`

```json
{
    "data_source": "run:re", 
    "description": "test route description could be all latin", 
    "starting_location": {
        "type": "Point", 
        "coordinates": [
            -97.74342, 
            30.26771
        ]
    }, 
    "start_point_type": "office", 
    "points": [
        {
            "lat": 39.658071973610284, 
            "lng": -104.9789946852112, 
            "_links": {
                "marker_icon": [
                    {
                        "href": "http://static.mapmyfitness.com/d/mapping_api/stable/img/markers/police.png", 
                        "id": "2017", 
                        "desc": "Police"
                    }
                ]
            }, 
            "notes": "Police", 
            "order": "0"
        }, 
        {
            "lat": 39.65739466877819, 
            "lng": -104.97556145767214, 
            "_links": {
                "marker_icon": [
                    {
                        "href": "http://static.mapmyfitness.com/d/mapping_api/stable/img/markers/aid.png", 
                        "id": "2002", 
                        "desc": "Aid"
                    }
                ]
            }, 
            "notes": "Aid", 
            "order": "0"
        }
    ], 
    "postal_code": "78703", 
    "name": "test route"
}
```

###### Response

```json
{
    "total_descent": null,
    "city": "Denver",
    "data_source": null,
    "description": "test route description could be all latin",
    "updated_datetime": "2014-11-07T19:24:54.598547+00:00",
    "created_datetime": "2014-11-07T19:03:30+00:00",
    "country": "us",
    "start_point_type": "office",
    "starting_location": {
        "type": "Point",
        "coordinates": [-104.9789946852, 39.6580719736]
    },
    "distance": 303.739174001,
    "total_ascent": null,
    "climbs": null,
    "state": "CO",
    "points": null,
    "postal_code": "78703",
    "min_elevation": null,
    "images": [],  
    "_links": {
        "alternate": [{
            "href": "\/{{page.version}}\/route\/577191656\/?format=kml&field_set=detailed",
            "id": "577191656",
            "name": "kml"
        }, {
            "href": "\/{{page.version}}\/route\/577191656\/?format=gpx&field_set=detailed",
            "id": "577191656",
            "name": "gpx"
        }],
        "privacy": [{
            "href": "\/{{page.version}}\/privacy_option\/3\/",
            "id": "3"
        }],
        "self": [{
            "href": "\/{{page.version}}\/route\/577191656\/",
            "id": "577191656"
        }],
        "activity_types": [{
            "href": "\/{{page.version}}\/activity_type\/9\/",
            "id": "9"
        }],
        "user": [{
            "href": "\/{{page.version}}\/user\/57438946\/",
            "id": "57438946"
        }],
        "thumbnail": [{
            "href": "\/\/drzetlglcbfx.cloudfront.net\/routes\/thumbnail\/577191656\/1415388294?size=100x100"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
        }]
    },
    "pk": "577191656",
    "max_elevation": null,
    "name": "test route"
}
```

### DELETE {{page.title}} entity

###### Request `DELETE: /{{page.version}}/route/{pk}/`

###### Response

```
204 No Content
```

### GET {{page.title}} collection

###### Request `GET: /{{page.version}}/route/?close_to_location=30.2688%2C-97.7489&maximum_distance=1.10&minimum_distance=1`

###### Response

```json
{
    "_links": {
        "self": [{
            "href": "\/{{page.version}}\/route\/?limit=20&minimum_distance=1&close_to_location=30.2688%2C-97.7489&maximum_distance=1.10&offset=0"
        }],
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
        }]
    },
    "_embedded": {
        "routes": [{
            "total_descent": null,
            "city": "Austin",
            "data_source": null,
            "description": "",
            "updated_datetime": "2013-12-09T20:53:20+00:00",
            "created_datetime": "2013-12-09T20:53:20+00:00",
            "country": "us",
            "start_point_type": "",
            "starting_location": {
                "type": "Point",
                "coordinates": [-97.749414, 30.269101]
            },
            "distance": 1.04,
            "name": "0.00mi walk on 12\/9\/13",
            "climbs": null,
            "state": "TX",
            "max_elevation": null,
            "images": [{
                "lat": -97.749414,
                "lng": 30.269101,
                "link": "https://res.cloudinary.com/mapmyfitness/image/upload/{image ID}"
            }],
            "postal_code": "78701",
            "min_elevation": null,
            "_links": {
                "activity_types": [{
                    "href": "\/{{page.version}}\/activity_type\/9\/",
                    "id": "9"
                }],
                "privacy": [{
                    "href": "\/{{page.version}}\/privacy_option\/3\/",
                    "id": "3"
                }],
                "self": [{
                    "href": "\/{{page.version}}\/route\/333655989\/",
                    "id": "333655989"
                }],
                "alternate": [{
                    "href": "\/{{page.version}}\/route\/333655989\/?format=kml&field_set=detailed",
                    "id": "333655989",
                    "name": "kml"
                }, {
                    "href": "\/{{page.version}}\/route\/333655989\/?format=gpx&field_set=detailed",
                    "id": "333655989",
                    "name": "gpx"
                }],
                "user": [{
                    "href": "\/{{page.version}}\/user\/41441501\/",
                    "id": "41441501"
                }],
                "thumbnail": [{
                    "href": "\/\/drzetlglcbfx.cloudfront.net\/routes\/thumbnail\/333655989\/1386622400?size=100x100"
                }]
            },
            "points": null,
            "total_ascent": null
        }, {
            "total_descent": null,
            "city": "Austin",
            "data_source": "api3:",
            "description": "",
            "updated_datetime": "2014-06-23T15:36:29+00:00",
            "created_datetime": "2014-06-23T15:36:28+00:00",
            "country": "us",
            "start_point_type": "",
            "starting_location": {
                "type": "Point",
                "coordinates": [-97.771351, 30.274899]
            },
            "distance": 1.09,
            "name": "4.09mi run on 6\/20\/14",
            "climbs": null,
            "state": "TX",
            "max_elevation": null,
            "images": [],
            "postal_code": "",
            "min_elevation": null,
            "_links": {
                "activity_types": [{
                    "href": "\/{{page.version}}\/activity_type\/16\/",
                    "id": "16"
                }],
                "privacy": [{
                    "href": "\/{{page.version}}\/privacy_option\/3\/",
                    "id": "3"
                }],
                "self": [{
                    "href": "\/{{page.version}}\/route\/452194834\/",
                    "id": "452194834"
                }],
                "alternate": [{
                    "href": "\/{{page.version}}\/route\/452194834\/?format=kml&field_set=detailed",
                    "id": "452194834",
                    "name": "kml"
                }, {
                    "href": "\/{{page.version}}\/route\/452194834\/?format=gpx&field_set=detailed",
                    "id": "452194834",
                    "name": "gpx"
                }],
                "user": [{
                    "href": "\/{{page.version}}\/user\/8951712\/",
                    "id": "8951712"
                }],
                "thumbnail": [{
                    "href": "\/\/drzetlglcbfx.cloudfront.net\/routes\/thumbnail\/452194834\/1403537789?size=100x100"
                }]
            },
            "points": null,
            "total_ascent": null
        }, {
            "total_descent": null,
            "city": "Austin",
            "data_source": "api3:",
            "description": "",
            "updated_datetime": "2014-06-30T22:27:19+00:00",
            "created_datetime": "2014-06-30T22:27:18+00:00",
            "country": "us",
            "start_point_type": "",
            "starting_location": {
                "type": "Point",
                "coordinates": [-97.771592, 30.275725]
            },
            "distance": 1.06,
            "name": "4.47mi run on 6\/30\/14",
            "climbs": null,
            "state": "TX",
            "max_elevation": null,
            "images": [],
            "postal_code": "",
            "min_elevation": null,
            "_links": {
                "activity_types": [{
                    "href": "\/{{page.version}}\/activity_type\/16\/",
                    "id": "16"
                }],
                "privacy": [{
                    "href": "\/{{page.version}}\/privacy_option\/3\/",
                    "id": "3"
                }],
                "self": [{
                    "href": "\/{{page.version}}\/route\/459170152\/",
                    "id": "459170152"
                }],
                "alternate": [{
                    "href": "\/{{page.version}}\/route\/459170152\/?format=kml&field_set=detailed",
                    "id": "459170152",
                    "name": "kml"
                }, {
                    "href": "\/{{page.version}}\/route\/459170152\/?format=gpx&field_set=detailed",
                    "id": "459170152",
                    "name": "gpx"
                }],
                "user": [{
                    "href": "\/{{page.version}}\/user\/25694592\/",
                    "id": "25694592"
                }],
                "thumbnail": [{
                    "href": "\/\/drzetlglcbfx.cloudfront.net\/routes\/thumbnail\/459170152\/1404167239?size=100x100"
                }]
            },
            "points": null,
            "total_ascent": null
        }]
    },
    "total_count": 3
}
```

### POST {{page.title}} entity

###### Request `POST: /{{page.version}}/route/`

```json
{
    "data_source": "run:re", 
    "description": "test route description could be all latin", 
    "starting_location": {
        "type": "Point", 
        "coordinates": [
            -97.74342, 
            30.26771
        ]
    }, 
    "start_point_type": "office", 
    "points": [
        {
            "lat": 39.658071973610284, 
            "lng": -104.9789946852112, 
            "_links": {
                "marker_icon": [
                    {
                        "href": "http://static.mapmyfitness.com/d/mapping_api/stable/img/markers/police.png", 
                        "id": "2017", 
                        "desc": "Police"
                    }
                ]
            }, 
            "notes": "Police", 
            "order": "0"
        }, 
        {
            "lat": 39.65739466877819, 
            "lng": -104.97556145767214, 
            "_links": {
                "marker_icon": [
                    {
                        "href": "http://static.mapmyfitness.com/d/mapping_api/stable/img/markers/aid.png", 
                        "id": "2002", 
                        "desc": "Aid"
                    }
                ]
            }, 
            "notes": "Aid", 
            "order": "0"
        }
    ], 
    "postal_code": "78703", 
    "name": "test route"
}
```

###### Response

```json
{
    "total_descent": null,
    "city": null,
    "data_source": null,
    "description": "test route description could be all latin",
    "updated_datetime": "2014-11-07T19:14:31.628969+00:00",
    "created_datetime": "2014-11-07T19:14:31.580971+00:00",
    "country": null,
    "start_point_type": "office",
    "starting_location": {
        "type": "Point",
        "coordinates": [-104.9789946852, 39.6580719736]
    },
    "distance": 303.739174001,
    "name": "test route",
    "climbs": null,
    "images": [],
    "state": "",
    "points": null,
    "postal_code": "78703",
    "total_ascent": null,
    "_links": {
        "documentation": [{
            "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
        }],
        "privacy": [{
            "href": "\/{{page.version}}\/privacy_option\/1\/",
            "id": "1"
        }],
        "self": [{
            "href": "\/{{page.version}}\/route\/577197688\/",
            "id": "577197688"
        }],
        "alternate": [{
            "href": "\/{{page.version}}\/route\/577197688\/?format=kml&field_set=detailed",
            "id": "577197688",
            "name": "kml"
        }, {
            "href": "\/{{page.version}}\/route\/577197688\/?format=gpx&field_set=detailed",
            "id": "577197688",
            "name": "gpx"
        }],
        "user": [{
            "href": "\/{{page.version}}\/user\/57438946\/",
            "id": "57438946"
        }],
        "thumbnail": [{
            "href": "\/\/drzetlglcbfx.cloudfront.net\/routes\/thumbnail\/577197688\/1415387671?size=100x100"
        }]
    },
    "max_elevation": null,
    "min_elevation": null
}
```
