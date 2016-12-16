# Event

Events.

>To associate a [Route](/docs/v71_Route) to an Event or to assign and Event to a [Group](/docs/v71_Group), see [Event Association](/docs/v71_Event_Association).

## Resource URIs

**Item URI:** `/v7.1/event/{id}/`

**Collection URI:** `/v7.1/event/`

## Item

### Item Methods

`GET` Retrieve an Event by id
`PATCH` Modify a Event by id  
`DELETE` Delete a Event by id  


### Item properties

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `name` | name  of event | String | N/A | **GET**: required, **PATCH**: required, **DELETE**: ignored|
| `description` | description of event | String | N/A | **GET**: required, **PATCH**: required, **DELETE**: ignored|
| `start_datetime` | The instant that the event begins | UTC ISO 8601 Datetime | N/A | **GET**: required, **PATCH**: required, **DELETE**: ignored|
| `end_datetime` | The instant that the event ends | UTC ISO 8601 Datetime | N/A | **GET**: required, **PATCH**: required, **DELETE**: ignored|
| `created_datetime` | The instant that the event was created | UTC ISO 8601 Datetime | N/A | **GET**: required, **PATCH**: required, **DELETE**: ignored|
| `updated_datetime` | The instant that the event was updated | UTC ISO 8601 Datetime | N/A | **GET**: required, **PATCH**: required, **DELETE**: ignored|
| `logo_photo` | The logo image for the event | text | N/A | **GET**: required, **PATCH**: optional, **DELETE**: ignored|

###### Example values

`logo_photo` Example (see [Image](/docs/v71_Image) for more information). The `logo_photo` can be updated via [Image](/docs/v71_Image)

```json
{
    "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
    "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
}
```

### Item links

`self` A link to this resource  
`event_type` A link to the related [Event Type](/docs/v71_Event_Type)
`routes` A list of links to associated [Route](/docs/v71_Route)s
`groups` A list of links to associated [Group](/docs/v71_Group)s

## Collection

Get or create events.  Events greater than 5 years in the future can not be created or retrieved.

### Collection methods

`GET` Get a list of Events. 
`POST` Create an Event.

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `start_datetime_after` | events returned will have a start_datetime on or after this datetime. Defaults to current time.  | ISO 8601 Datetime | No	   |
| `start_datetime_before` | events returned will have a start_datetime before this datetime. | ISO 8601 Datetime | No   |
| `order_by`          | Can be one of ['start_datetime', '-start_datetime']. Defaults to 'start_datetime' (sorted by start_datetime ascending)   | String     | No      |
| `group_id`          | Identifier for associated [Group](/docs/v71_Group)   | Integer     | No      |

### Collection properties

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `total_count` | Total count of entities returned in collection | integer | N/A | **GET**: required |

### Collection links

`self` A link to this resource  

### Embedded collections

`events` A collection of Events with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### GET Event entity

###### Request `GET: /v7.1/event/{id}/`

###### Response

```json
{
    "name": "Texas Capital 10k",
    "description": "Sed sit amet felis ac neque lacinia tincidunt. Aenean elementum bibendum ultricies. Vivamus rhoncus blandit tincidunt.",
    "_links": {
        "self": [
            {
                "href": "/vx/event/1/",
                "id": "1"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/vx_Event"
            }
        ],
        "event_type": [
            {
                "href": "/vx/event_type/5/",
                "id": "5"
            }
        ],
        "groups": [
            {
                "href": "/vx/group/5/",
                "id": "5"
            }
        ],
        "routes": [
            {
                "href": "/vx/route/5/",
                "id": "5"
            }
        ]
    },
    "updated_datetime": "2015-01-23T20:39:46+00:00",
    "start_datetime": "2015-05-01T08:30:00+00:00",
    "created_datetime": "2015-01-23T20:39:46+00:00",
    "end_datetime": null,
    "logo_photo": {
        "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
        "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
    }
}
```

### PATCH Event entity
Only the fields that you pass in the request body will be modified when using PATCH on an event.  

If you include a link to a [Group](/docs/v71_Group) or [Route](/docs/v71_Route), the endpoint will attempt to create an [Event Association](/docs/v71_Event Association) between the event and the linked object.  

>Only 1 route and 1 group are allowed to be associated with an event.  If you would like to de-associate a group or route, you must first call DELETE on [Event Association](/docs/v71_Event_Association) for the original object and event.

###### Request `PATCH: /v7.1/event/{id}/`

```json
{
	"name": "New Event Name or Title",
	"start_datetime": "2015-03-24T18:00:00+00:00",
    "_links": {
        "event_type": [{
            "href": "/vx/event_type/6/",
            "id": "6"
        }],
        "routes": [{
             "href": "/vx/route/3/",
             "id": "3"
        }]
    }
}
```

###### Response

```json
{
    "name": "New Event Name or Title",
    "description": "Existing description is not removed or altered on PATCH.",
    "_links": {
        "self": [{
                "href": "/vx/event/1/",
                "id": "1"
        }],
        "documentation": [{
                "href": "https://developer.underarmour.com/docs/vx_Event"
        }],
        "event_type": [{
                "href": "/vx/event_type/6/",
                "id": "6"
        }],
        "routes": [{
             "href": "/vx/route/3/",
             "id": "3"
        }]
    },
    "updated_datetime": "2015-01-23T20:39:46+00:00",
    "start_datetime": "2015-03-24T18:00:00+00:00",
    "created_datetime": "2015-01-27T10:12:22+00:00",
    "end_datetime": "2015-03-24T20:00:00+00:00",
    "logo_photo": {
        "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
        "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
    }
}
```

### GET Event collection

>Note: start_datetime_after param will default to the current timestamp.  

###### Request `GET: /v7.1/event/?group_id=1`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "/vx/event/?group_id=1&limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/vx_Event"
            }
        ]
    },
    "_embedded": {
        "events": [
            {
            	"name": "Tough Mudder ATX",
                "description": "Tough Mudder ATX.  Long Description of Tough Mudder goes here.",
                "_links": {
                    "self": [
                        {
                            "href": "/vx/event/3/",
                            "id": "3"
                        }
                    ],
                    "event_type": [
                        {
                            "href": "/vx/event_type/5/",
                            "id": "5"
                        }
                    ],
                    "groups": [
                        {
                            "href": "/vx/group/1/",
                            "id": "1"
                        }
                    ]
                },
                "updated_datetime": "2015-01-23T21:27:53+00:00",
                "start_datetime": "2015-02-27T09:00:00+00:00",
                "created_datetime": "2015-01-23T21:27:52+00:00",
                "end_datetime": null,
                "logo_photo": null
            },
            {
                "name": "Awesome Local Basketball",
                "description": "Really great basketball tournament in Austin in the spring.",
                "_links": {
                    "self": [
                        {
                            "href": "/vx/event/2/",
                            "id": "2"
                        }
                    ],
                    "event_type": [
                        {
                            "href": "/vx/event_type/5/",
                            "id": "5"
                        }
                    ],
                    "groups": [
                        {
                            "href": "/vx/group/1/",
                            "id": "1"
                        }
                    ]
                },
                "updated_datetime": "2015-01-23T21:27:07+00:00",
                "start_datetime": "2015-03-10T16:00:00+00:00",
                "created_datetime": "2015-01-23T21:27:07+00:00",
                "end_datetime": null,
                "logo_photo": {
                    "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
                    "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
                }
            },
            {
    			"name": "Texas Capital 10k",
    			"description": "Sed sit amet felis ac neque lacinia tincidunt. Aenean elementum bibendum ultricies. Vivamus rhoncus blandit tincidunt.",
                "_links": {
                    "self": [
                        {
                            "href": "/vx/event/1/",
                            "id": "1"
                        }
                    ],
                    "event_type": [
                        {
                            "href": "/vx/event_type/5/",
                            "id": "5"
                        }
                    ],
                    "routes": [
                        {
                            "href": "/vx/route/5/",
                            "id": "5"
                        }
                    ],
                    "groups": [
                        {
                            "href": "/vx/group/1/",
                            "id": "1"
                        }
                    ]
                },
                "updated_datetime": "2015-01-23T20:39:46+00:00",
                "start_datetime": "2015-05-01T08:30:00+00:00",
                "created_datetime": "2015-01-23T20:39:46+00:00",
                "end_datetime": null,
                "logo_photo": null
            }
        ]
    },
    "total_count": 3
}
```
### POST Event entity

###### Request `POST: /v7.1/event/`

```json
{
	"name": "Event Name or Title Here",
	"description": "Description is more elaborate than name.",
	"start_datetime": "2015-03-24T18:00:00+00:00",
	"end_datetime": "2015-03-24T20:00:00+00:00",
    "_links": {
        "event_type": [{
            "href": "/vx/event_type/5/",
            "id": "5"
        }],
        "groups": [{
            "href": "/vx/group/6/",
            "id": "6"
        }],
        "routes": [{
            "href": "/vx/route/3/",
            "id": "3"
        }]
    }
}
```

###### Response

```json
{
    "name": "Event Name or Title Here",
    "description": "Description is more elaborate than name.",
    "_links": {
        "self": [{
                "href": "/vx/event/1/",
                "id": "1"
        }],
        "documentation": [{
                "href": "https://developer.underarmour.com/docs/vx_Event"
        }],
        "event_type": [{
                "href": "/vx/event_type/5/",
                "id": "5"
        }],
        "groups": [{
             "href": "/vx/group/6/",
             "id": "6"
        }],
        "routes": [{
             "href": "/vx/route/3/",
             "id": "3"
        }]
    },
    "updated_datetime": "2015-01-23T20:39:46+00:00",
    "start_datetime": "2015-03-24T18:00:00+00:00",
    "created_datetime": "2015-01-23T20:39:46+00:00",
    "end_datetime": "2015-03-24T20:00:00+00:00",
    "logo_photo": {
        "uri": "https://res.cloudinary.com/mapmyfitness/image/upload/00c016bc14be4c9d980625592c04f181",
        "template": "https://res.cloudinary.com/mapmyfitness/image/upload/w_{{width_px}},h_{{height_px}},c_fit/00c016bc14be4c9d980625592c04f181"
    }
}
```
