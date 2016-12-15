---
name: User Role
doc_uri: User_Role
versions: vx, api/0.1, v7.0, v7.1
released: 2014-11-17
tags: user
title: User Role
layout: documentation
path_version: api/0.1
docs_version: 01
permalink: /docs/01_User_Role/
doc_uri: 01_User_Role/
---

# {{ page.title }}

A {{ page.title }} represents the role a user has for a specific resource or resource
type.

A role represents a collection of permissions (see [Role](/docs/{{ page.docs_version }}_Role)).


## Resource URIs

* **Item URI:** `/{{ page.path_version }}/user_role/{pk}/`
* **Collection URI:** `/{{ page.path_version }}/user_role/`


## Item

### Item Methods

* `GET` Retrieve a {{ page.title }} by id
* `DELETE` Delete a {{ page.title }} by id


### Item links <a name="itemlinks"></a>

* `self` A link to this resource
* `user` A link to the User resource that owns the {{ page.title }}
* `role` The assigned role.
* `resource` The resource this role applies to.


## Collection

### Collection methods

* `POST` Set or update a role for a user on a resource. Requesting user must
  have the `manage_roles` permission on the specified resource.


### Collection query parameters

| Name       | Description                                                             | Type   | Required                                |
| ---        | ---                                                                     | ---    | ---                                     |
| `resource` | The path of the resource you want to see roles for (e.g. `/page/123/`). | string | Required unless `user_id` is provided.  |
| `user_id`  | The ID of the user whose roles you wish to have returned.               | string | Required unless `resource` is provided. |


## Usage

### GET {{ page.title }} entity

###### Request `GET: /{{ page.path_version }}/user_role/24578713_page_association_16/`

###### Response

```json
{
    "_links": {
        "resource": [
            {
                "href": "/page_association/16/"
            }
        ],
        "self": [
            {
                "href": "/api/{{ page.path_version }}/user_role/24578713_page_association_16/",
                "id": "24578713_page_association_16"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/{{ page.doc_uri }}"
            }
        ],
        "role": [
            {
                "href": "/api/{{ page.path_version }}/role/administrator/",
                "id": "administrator"
            }
        ],
        "user": [
            {
                "href": "/{{ page.path_version }}/user/24578713/",
                "id": "24578713"
            }
        ],
    }
}
```


### POST {{ page.title }} entity

###### Request `POST: /{{ page.path_version }}/user_role/`

```json
{
    "user": "1234",
    "resource": "/api/{{ page.path_version }}/page/1234/",
    "role": "/api/{{ page.path_version }}/role/administrator/"
}
```


###### Response

```json
{
    "user": "1234",
    "resource": "/api/{{ page.path_version }}/page/1234/",
    "role": "/api/{{ page.path_version }}/role/administrator/"
}
```


### DELETE {{ page.title }} entity

###### Request `DELETE: /{{ page.path_version }}/user_role/24578713_page_association_16/`

###### Response

```
204 No Content
```
