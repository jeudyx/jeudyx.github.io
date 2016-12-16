# Image

This provides an API for storing and retrieving images and linking them to
objects such as Pages, Activity Feed items, or User Profiles.

Any ``POST`` to this API is expected to have a ``Content-Type`` header of
"multipart/form-data" and a body containing two files: the image file itself
and a metadata object called "data". This file should be JSON-encoded and
contain the data outlined under `Collection properties`_.

Image uploads are limited to files 4MB or less in size. Attempting to upload a
larger image will return a 413 status.

## Resource URIs

**Collection URI:** `/vx/image/`

**Item URI:** `/vx/image/<pk>/`

## Item

### Item methods

`GET` Retrieve an Image by id

### Item properties

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `uri` | An escaped string containing the URI clients should request this image from (i.e., its CDN URI). | String | | **GET:** Required |
| `template` | An escaped string containing a URI clients may use to request a transformed version of this image. Currently only *width* and *height* are supported transformations. To use this template, replace the portion of the URI surrounded by double braces -- i.e., ``{{`` and ``}}`` -- with the appropriate integer value and remove the braces. | string | | **GET:** Required |

**Note**: the scheme of these URIs will match the scheme of the request made to this endpoint.

## Collection

### Collection methods

`POST` Upload a new Image


### Collection properties

The "data" file should be a JSON-encoded object containing the following values:

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `href` | A string with the URI for the object this image should be associated with. Example: "/vx/user/1234/". | string | | **POST:** Required |
| `rel` | A string representing the relationship this image has to the object referred to by ``href``. Example: "cover_photo". | string | | **POST:** Required |
| `index` | An integer indicating the position of this image in a series to be uploaded. This is zero-indexed. I.e., for only one image (or the first of several), use the value 0. Use the value 1 for the next image, etc. | int | | **POST:** Required |

## Usage

### Upload a new image

###### Request `POST /vx/image/` 

Below is an example request using `curl <http://curl.haxx.se/>`_ to create a new image::

    curl -vv -H "Api-Key: REDACTED" \
    -H "Authorization: Bearer REDACTED" \
    -F "data=@/Users/jeremyboyd/Desktop/page_json.json;type=application/json" \
    -F "image=@/Users/jeremyboyd/Desktop/example.jpg" https://api.ua.com/vx/image/

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

And the following body::

    ------------------------------81f690afcaaa
    Content-Disposition: form-data; name="data"; filename="page_json.json"
    Content-Type: application/json

    {
      "href": "/vx/page/1337/",
      "rel": "cover_photo",
      "index": 0
    }
    ------------------------------81f690afcaaa
    Content-Disposition: form-data; name="image"; filename="example.jpg"
    Content-Type: image/jpeg

    ... insert image binary data here ...

###### Response 201



