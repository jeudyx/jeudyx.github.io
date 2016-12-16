# User Permission

A user permission represents the permission that a user has on a specific resource or resource type.
Results from interrogation of the user permission end point should be used to determine a user's
authorized access. If the user has no permissions for the specified resource user_permission is
an empty list.

NOTE: CREATE permissions apply to a resource type and therefore do not have a resource path that includes an id.

## Resource URIs

**Collection URI:** `/v7.1/user_permission/`

## Collection

### Collection methods

`GET` Get a list of the authenticated user's permissions for all resources or resource types on which the user has assigned permissions. 

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `resource` | Get a list of the authentication user's permissions on a specific resource or resource type | text | No   |

### Collection properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `total_count` | Count of User Permissions returned | number | **GET**: required |

### Item properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `resource` | The resource on which the permission is assigned.  Will either be a resource type (ex. `/v7.1/page`) or a specific resource (ex. `/v7.1/page/2`) | text | **GET**: required |
| `permission` | The assigned permission | text | **GET**: required |

###### Examples

`permission` The following is a table of permissions, their descriptions, and which Roles are allowed to set them

| Permission         | Description                                             | Administrator | Editor | Moderator |
|--------------------|---------------------------------------------------------|---------------|--------|-----------|
| create_resource    | Create a new page | X | | |
| manage_roles       | Assign or remove page roles for other users on the page | X | | |
| edit_resource      | Edit page content fields (ex. title, headline, description etc.)	| X	| X | |	 
| edit_settings      | Edit page settings (ex. qs_graph_enabled etc.) |	X |	X | |	 
| create_post        | Create posts on behalf of the page (status posts) or add posts to the featured gallery | X |	X | |	 
| delete_post        | Remove posts that appear on the page or remove posts from the featured gallery | X |	X | |	 
| create_reply       | Reply to activity on behalf of the page | X | X | X |
| delete_reply       | Remove replies to content content posted by the page | X | X | X |

### Collection links

`self` A link to this resource  

### Embedded collections

`user_permissions` A collection of User Permissions with properties as described under [Item properties][]

## Usage

### GET User Permission collection for a user on a specific resource

###### Request `GET: /v7.1/user_permission/?resource=/v7.1/page/1234`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "\/vx\/user_permission\/?limit=20&resource=%2Fapi%2F0.1%2Fexample%2F1234&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
            }
        ]
    },
    "_embedded": {
        "user_permissions": [
            {
                "resource": "\/v7.1\/page\/1234",
                "permission": "create_post"
            },
            {
                "resource": "\/v7.1\/page\/1234",
                "permission": "delete_post"
            },
            {
                "resource": "\/v7.1\/page\/1234",
                "permission": "create_reply"
            },
            {
                "resource": "\/v7.1\/page\/1234",
                "permission": "delete_reply"
            }
        ]
    },
    "total_count": 4
}
```

### GET User Permission collection for all assigned to a user

###### Request `GET: /v7.1/user_permission/`

###### Response

```json
{
    "_links": {
        "self": [
            {
                "href": "\/vx\/user_permission\/?limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https:\/\/developer.underarmour.com\/docs\/${doc_uri}"
            }
        ]
    },
    "_embedded": {
        "user_permissions": [
            {
                "resource": "\/v7.1\/page\/1234",
                "permission": "create_post"
            },
            {
                "resource": "\/v7.1\/page\/1234",
                "permission": "delete_post"
            },
            ...
            {
                "resource": "\/v7.1\/page\/5678",
                "permission": "create_post"
            },
            {
                "resource": "\/v7.1\/page\/5678",
                "permission": "delete_post"
            },
            ...
        ]
    },
    "total_count":8
}
```

