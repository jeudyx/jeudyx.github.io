---
layout: documentation
title: Image
resource: Image
version: v7.1
versionhref: v71
permalink: /docs/v71_Image/
---

# {{page.title}}

This provides an API for storing and retrieving images and linking them to objects such as Pages, or Activity Feed items.

Any `POST` to this API is expected to have a `Content-Type` header of "multipart/form-data" and a body containing two files: the image file itself and a metadata object called "data". This file should be JSON-encoded and contain the data outlined under `Form data`.

Image uploads are limited to files 4MB or less in size. Attempting to upload a larger image will return a 413 status.

## Resource URIs

**Collection URI:** `/{{page.version}}/image/`

**Item URI:** `/{{page.version}}/image/{id}/`

## Item

### Item methods

* `GET` Retrieve an {{page.title}} by id

### Item properties <a name="itemproperties"></a>

| Name         | Description                                                                                                                                                           | Type      | Units  | HTTP Support      |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|--------|-------------------|
| `uri`        | An escaped string containing the URI clients should request this image from (i.e., its CDN URI).                                                                      | string    |        | **GET:** Required |
| `template`   | An escaped string containing a URI clients may use to request a transformed version of this image. Currently only *width* and *height* are supported transformations. | string    |        | **GET:** Required |

**Note**: the scheme of these URIs will match the scheme of the request made to this endpoint.

##### Example values

 `template` The following is a URI containing **width** and **height**.  Simply replace `{{width_px}}` `{{height_px}}` with the desired integer value.

```
https:\/\/res.cloudinary.com\/mapmyfitness\/image\/upload\/w_{{width_px}},h_{{height_px}},c_fit\/testid
```


## Collection

### Collection methods

* `POST` Upload a new {{page.title}}

### Form data

The following is expected in the "files" part of the Image request

| Name         | Description                             | HTTP Support                                                                        |
|--------------|-----------------------------------------|-------------------------------------------------------------------------------------|
| `data`       | A file containing a JSON encoded object | **POST:** Required                                                                  |
| `image`      | The binary data of an image             | **POST:** Required                                                                  |

#### data
 
| Name         | Description                                                                                        | Type      | Units  | HTTP Support       |
|--------------|----------------------------------------------------------------------------------------------------|-----------|--------|--------------------|
| `href`       | A string with the URI for the object this image should be associated with.                         | string    |        | **POST:** Required |
| `rel`        | A string representing the relationship this image has to the object referred to by `href`.         | string    |        | **POST:** Required |
| `index`      | An integer indicating the position of this image in a series to be uploaded. This is zero-indexed. | int       |        | **POST:** Required |

##### Example values

 `href`
 
| Association                                 | URI                              |
|---------------------------------------------|----------------------------------|
| [`Activity Story`](/docs/{{page.versionhref}}_Activity_Story)   | /{{page.version}}/activity_story/{id}  |
| [`Page`](/docs/{{page.versionhref}}_Page]                       | /{{page.version}}/page/{id}            |
| [`Rating Badge`](/docs/{{page.versionhref}}_Rating_Badge)       | /{{page.version}}/rating_badge/{id}    |
| [`Route`](/docs/{{page.versionhref}}_Route)                     | /{{page.version}}/route/{id}           |
| [`Workout`](/docs/{{page.versionhref}}_Workout)                 | /{{page.version}}/workout/{id}         |

 `rel`
 
| Relationship              | Resource                                    | Description                                                |
|---------------------------|---------------------------------------------|------------------------------------------------------------|
| `attachments`             | [`Activity Story`](/docs/{{page.versionhref}}_Activity_Story)   | For Adding an image as an attachment to an Activity Story. |
| `cover_photo`             | [`Page`](/docs/{{page.versionhref}}_Page)                       | For updating the cover photo of a Page.                    |
| `mobile_image_url`        | [`Rating Badge`](/docs/{{page.versionhref}}_Rating_Badge)       | For updating the mobile image of a Rating Badge.           |
| `attachments`             | [`Route`](/docs/{{page.versionhref}}_Route)                     | For attaching an image to a Route.                         |
| `attachments`             | [`Workout`](/docs/{{page.versionhref}}_Workout)                 | For attaching an image to a Workout.                       |
 

## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/image/{pk}/`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/{{page.version}}\/image\/1_testid\/",
            "id":"1_testid"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v71_Image"
         }
      ]
   },
   "uri":"https:\/\/res.cloudinary.com\/mapmyfitness\/image\/upload\/testid",
   "template":"https:\/\/res.cloudinary.com\/mapmyfitness\/image\/upload\/w_{{width_px}},h_{{height_px}},c_fit\/testid"
}
```

### POST {{page.title}} entity

Below is an example request using `curl <http://curl.haxx.se/>`_ to create a new image::

    curl -vv -H "Api-Key: REDACTED" \
    -H "Authorization: Bearer REDACTED" \
    -F "data=@page_json.json;type=application/json" \
    -F "image=@example.jpg" https://api.ua.com/{{page.version}}/image/
    
Notice that the -F argument is used, here, to attach "files" to the multi-part request.  A request requires all items described in [Form data].

This command will generate a request with the following headers::

    Content-Length: 67414
    Host: requestb.in
    Connection: close
    User-Agent: curl/7.30.0
    Api-Key: REDACTED
    Content-Type: multipart/form-data; boundary=----------------------------81f690afcaaa
    X-Request-Id: 33397d78-9168-4846-9610-1c8a9dfb749d
    Accept: */*
    Authorization: Bearer REDACTED

And the following body:

    ----------------------------81f690afcaaa
    Content-Disposition: form-data; name="data"; filename="page_json.json"
    Content-Type: application/json

    {
      "href": "/{{page.version}}/page/1337/",
      "rel": "cover_photo",
      "index": 0
    }
    ----------------------------81f690afcaaa
    Content-Disposition: form-data; name="image"; filename="example.jpg"
    Content-Type: image/jpeg

    ... binary data here ...

###### Request `POST /{{page.version}}/image/` 

Files:

`data`

```json
{
  "href": "/{{page.version}}/page/1337/",
  "rel": "cover_photo",
  "index": 0
}
```

`image`

```< binary image data >```
   
###### Response 201  
