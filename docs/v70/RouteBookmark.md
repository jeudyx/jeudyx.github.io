---
layout: documentation
title: Route
resource: Route
version: v7.0
versionhref: v70
permalink: /docs/v70_Route_Bookmark/
---

# {{page.title}}

This resource provides {{page.title}}s created by users as a list of links to Routes.

## Resource URIs

**Item URI:** `/{{page.version}}/route_bookmark/{pk}/`

**Collection URI:** `/{{page.version}}/route_bookmark/`

## Item

### Item methods

`GET` Retrieve a {{page.title}} by id  
`DELETE` Delete a {{page.title}} by id

### Item links

`route` The route being bookmarked  
`user` The user that created the bookmark

## Collection

### Collection methods

`GET` Retrieve several {{page.title}}s  
`POST` Create a {{page.title}}

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
|`user` | Specifies user to retrieve {{page.title}}s for. | string | Yes |

### Collection properties

| Name         | Description          | Type      | Units               | HTTP Support      |
|--------------|----------------------|-----------|---------------------|-------------------|
| `total_count` | the total number of bookmarks that apply to the query. | int | | **GET:** Required |

### Embedded collections

`route_bookmarks` A collection of bookmarks with links as described under `Item links`

### Collection links

[Pagination](/docs/{{page.versionhref}}_Paging) links available.

## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/route_bookmark/{pk}/`

###### Response: 200

```json
{
  "_links": {
    "route": [
      {
        "href": "/{{page.version}}/route/351989943/",
        "id": "351989943"
      }
    ], 
    "documentation": [
      {
        "href": "https://developer.underarmour.com/docs/"
      }
    ], 
    "self": [
      {
        "href": "/{{page.version}}/route_bookmark/9911829/",
        "id": "9911829"
      }
    ], 
    "user": [
      {
        "href": "/{{page.version}}/user/123456/",
        "id": "123456"
      }
    ]
  }, 
  "from_user": "/{{page.version}}/user/123456/"
}
```
### DELETE {{page.title}} entity

###### Request `DELETE: /{{page.version}}/route_bookmark/{pk}/`

###### Response: 204

### GET {{page.title}} collection

###### Request `GET: /{{page.version}}/route_bookmark/?user={user_id}`

###### Response: 200

```json
{
  "_embedded": {
    "route_bookmarks": [
      {
        "_links": {
          "route": [
            {
              "href": "/{{page.version}}/route/351989943/",
              "id": "351989943"
            }
          ], 
          "self": [
            {
              "href": "/{{page.version}}/route_bookmark/9911829/",
              "id": "9911829"
            }
          ], 
          "user": [
            {
              "href": "/{{page.version}}/user/43334387/",
              "id": "43334387"
            }
          ]
        }, 
        "from_user": "/{{page.version}}/user/{user_id}/"
      }
    ]
  }, 
  "total_count": 1
}
```

### POST {{page.title}} entity

###### Request `POST: /{{page.version}}/route_bookmark/`

```json
{
    "_links": {
        "route": [
            {
                "href": "/{{page.version}}/route/86373519/",
                "id": "86373519"
            }
        ], 
        "user": [
            {
                "href": "/{{page.version}}/user/123456/",
                "id": "123456"
            }
        ]
    }
}
```

###### Response: 201

```json
{
  "_links": {
    "route": [
      {
        "href": "/{{page.version}}/route/86373519/",
        "id": "86373519"
      }
    ], 
    "documentation": [
      {
        "href": "https://developer.underarmour.com/docs/"
      }
    ], 
    "self": [
      {
        "href": "/{{page.version}}/route_bookmark/12713128/",
        "id": "12713128"
      }
    ], 
    "user": [
      {
        "href": "/{{page.version}}/user/123456/",
        "id": "123456"
      }
    ]
  }, 
  "from_user": "/{{page.version}}/user/123456/"
}
```
