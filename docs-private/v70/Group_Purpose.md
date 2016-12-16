# Group Purpose

Group Purpose is used to identify what the group's function is, and sometimes also the
type of organization / people that this group represents.

Examples of purpose can include: Friends, Company, Event, and can also include
specialty group types like the Friend Challenge.


## Resource URIs

* **Item URI:** `/v7.0/group_purpose/{pk}/`
* **Collection URI:** `/v7.0/group_purpose/`


## Item

### Item Methods

* `GET` Retrieve a Group Purpose by id


### Item properties

| Name                  | Description                                                               | Type | HTTP Support      |
| ---                   | ---                                                                       | ---  | ---               |
| `purpose`             | The Group's purpose name                                                  | text | **GET**: required |
| `restrict_membership` | Boolean. If `True`, then special criteria are needed to use this Group Purpose. | text | **GET**: required |


### Item links

* `self` A link to this resource


## Collection

### Collection methods

* `GET` Get a list of Group Purposes.


### Collection links

* `self` A link to this resource


### Embedded collections

* `group_purposes` A collection of Group Purposes with properties as described under
  [Item properties][] and links as described under [Item links][].


## Usage

### GET Group Purpose entity

###### Request `GET: /v7.0/group_purpose/{pk}/`

###### Response

```json
{
   "restrict_membership":null,
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/group_purpose\/KQi2T3BX0LGt5MboBBJiJhg7Nyn6Ne\/",
            "id":"KQi2T3BX0LGt5MboBBJiJhg7Nyn6Ne"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group_Purpose"
         }
      ]
   },
   "purpose":"54WV7cb2BOKarnnoPqfFBAkPGcVEJ6",
   "slug":"KQi2T3BX0LGt5MboBBJiJhg7Nyn6Ne"
}
```


### GET Group Purpose collection

###### Request `GET: /v7.0/group_purpose/`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/v7.0\/group_purpose\/?limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/v70_Group_Purpose"
         }
      ]
   },
   "_embedded":{
      "group_purposes":[
         {
            "restrict_membership":false,
            "_links":{
               "self":[
                  {
                     "href":"\/v7.0\/group_purpose\/challenge\/",
                     "id":"challenge"
                  }
               ]
            },
            "purpose":"Challenge",
            "slug":"challenge"
         },
         {
            "restrict_membership":null,
            "_links":{
               "self":[
                  {
                     "href":"\/v7.0\/group_purpose\/wKmzoTG5vStIuBTtnuqkgL0JifPDxo\/",
                     "id":"wKmzoTG5vStIuBTtnuqkgL0JifPDxo"
                  }
               ]
            },
            "purpose":"edwYTUTqtSU79aPBPE8EEdSn4rJ5nE",
            "slug":"wKmzoTG5vStIuBTtnuqkgL0JifPDxo"
         },
         {
            "restrict_membership":null,
            "_links":{
               "self":[
                  {
                     "href":"\/v7.0\/group_purpose\/3NZ8uuReCE5sJlsTgqXhjartx9KPN9\/",
                     "id":"3NZ8uuReCE5sJlsTgqXhjartx9KPN9"
                  }
               ]
            },
            "purpose":"87q2YUPBeZ9DWIHQpYYbOA65e1gjO4",
            "slug":"3NZ8uuReCE5sJlsTgqXhjartx9KPN9"
         }
      ]
   },
   "total_count":3
}
```


### GET all Group Purposes

###### Request `GET: /v7.0/group_purpose/`

###### Response: 200

```json
{
    "_links": {
        "self": [
            {
                "href": "/v7.0/group_purpose/"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/Group_Purpose"
            }
        ],
    },
    "_embedded": {
        "group_purposes": [
            {
                "_links": {
                    "self": [
                        {
                            "href": "/v7.0/group_purpose/1313968/",
                            "id": "1313968"
                        }
                    ]
                }
                "purpose": "Friends",
                "restrict_membership": false
            },
            ...
        ]
    },
    "total_count": 7
}
```
