# Filemobile Session

A Filemobile Session is required to post videos via the [`Filemobile Upload API`][Filemobile Upload API] or via the
[`Filemobile Upload Widget`][Filemobile Upload Widget].  A Filemobile Session must be created or updated for the authenticated user
prior to each call that is made to upload content to Filemobile Session.

## Resource URIs

**Collection URI:** `/api/0.1/filemobile_session/`

## Item

### Item properties

| Name         | Description          | Type      | HTTP Support                                 |
|--------------|----------------------|-----------|----------------------------------------------|
| `created` | UTC date/time that session was created. | ISO-8601 Datetime | **POST**: required |
| `token` | The Filemobile session token that should be used when uploading video content. | String | **POST**: required |
| `uid` | The Filemobile uid that should be used when uploading video content. | Integer | **POST**: required |
| `vhost` | The Filemobile vhost that should be used when uploading video content. | String | **POST**: required |
| `uploader_uri` | The Filemobile uploader widget URI (to be used if uploading video via the [`Filemobile Upload Widget`][Filemobile Upload Widget]). | String | **POST**: required |

### Item links

`self` A link to this resource  
`user` A link to the User resource that owns the Filemobile Session

## Collection

### Collection methods

`POST` Create a Filemobile Session.  

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `param_name` | description of param name | param_type | Yes/No   |

### Collection properties

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `total_count` | Total count of entities returned in collection | integer | **GET**: required |
| `field_name` | description of field | JSON type | units, should be SI | **GET**: required/optional, **PUT**: required/optional, **POST**: required/optional |

### Collection links

`self` A link to this resource  
`user` A link to the User resource that owns the Filemobile Session

## Usage

### POST Filemobile Session entity

###### Request `POST: /api/0.1/filemobile_session/`

(no body)

###### Response 200

```json
    {
        "_links": {
            "self": [
                {
                    "href": "/api/0.1/filemobile_session/",
                }
            ],
            "documentation": [
                {
                    "href": "https://developer.underarmour.com/docs/Filemobile_Session"
                }
            ]
        },
        "token": "k38fvh329sdhr239fwh04325hkjdfgs8923bt09reh439gh0943huf843g",
        "created": "2014-07-23T08:39:14+00:00",
        "vhost": "1281",
        "uid": "217842376",
        "uploader_uri": "7383-1281.projects.fm"
    }
```

###### Response 202

```json
{
    "_links": {
        "self": [
            {
                "href": "/api/0.1/filemobile_session/",
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/Filemobile_Session"
            }
        ]
    },
    "token": null
}
```

[Filemobile Upload API]: http://developer.filemobile.com/mediadetail/5567299?groupId=11659&top=11699
[Filemobile Upload Widget]: http://developer.filemobile.com/mediadetail/13066313?groupId=89483&top=11749
