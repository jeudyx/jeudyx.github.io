---
layout: documentation
title: User Gear
resource: User Gear
version: api/0.1
versionhref: 01
permalink: /docs/01_User_Gear/
---

# {{page.title}}

This resource allows creation and modification of user gear.


## Resource URIs

* **Item URI:** `/{{page.version}}/usergear/{id}/`
* **Collection URI:** `/{{page.version}}/usergear/`


## Item

### Item Methods

* `GET` Retrieve a {{page.title}}
* `PATCH` Update a {{page.title}}
* `DELETE` Delete a {{page.title}}


### Item properties <a name="itemproperties"></a>

| Name                 | Description                                                    | Type                                            | Units | HTTP Support      |
| ---                  | ---                                                            | ---                                             | ---   | ---               |
| `name`               | The name that the user has give this specific piece of gear.   | string                                          |       | **PUT:** Required |
| `purchase_date`      | Date the user purchased the gear.                              | date                                            |       | **PUT:** Required |
| `initial_distance`   | Number of miles the gear was already used for.                 | number                                          | miles | **PUT:** Optional |
| `target_distance`    | A max number of miles that the gear should be used for.        | number                                          | miles | **PUT:** Optional |
| `retired`            | Whether the gear has been retired or not.                      | boolean                                         |       | **PUT:** Required |
| `default_activities` | Setting for the default activities for which the gear is used. | list of [Activity Type](/docs/v70_Activity_Type) ids |       | **PUT:** Optional |
| `brand`              | The over-arching brand of the gear.                            | string                                          |       | **PUT:** Optional |
| `model`              | The specific gear model.                                       | string                                          |       | **PUT:** Optional |
| `gender`             | The gender the gear was designed for.                          | string                                          |       | **PUT:** Optional |


### Item links <a name="itemlinks"></a>

* `self` A link to this resource
* `user` A link to the User resource that owns the usergear
* `gear` An embedded link to the Gear resource that the user has


## Collection

### Collection methods

* `GET` Retrieve {{page.title}} for the authenticated user
* `POST` Create some {{page.title}}


## Usage

### Retrieve a single {{page.title}}

###### Request `GET /{{page.version}}/usergear/{id}/`

###### Response: 200

```json
{
    "_embedded": {
        "_links": {
            "self": [
                {
                    "href": "/{{page.version}}/gear/47053/",
                    "id": 47053
                }
            ]
        },
        "gear": {
            "style_number": "1245952-100",
            "color": "White",
            "product_url": "http://www.zappos.com/product/8248039/color/80263?utm_campaign=mmf_mobile&splash=none&zhlfid=212",
            "keywords": null,
            "age_group": "adult",
            "size": "10,10.5,11,11.5,12,12.5,13,14,15,7,7.5,8,8.5,9,9.5",
            "sku": "8248039",
            "source": "zappos",
            "department": "Footwear: Athletic: General Athletic",
            "brand": "Under Armour",
            "available": true,
            "category": "Shoes",
            "description": "Once again, Under Armour brings new innovation into the field of performance. The Speedform Apollo features a unique construction, taking place entirely in a clothing factory. Every aspect of the Apollo is designed to help you perform at your highest levels. ; Breathable, mesh upper features ultrasonic seams for a smooth look. ; First-ever molded seamless heel cup offers the highest levels of comfort and support. ; Perforations throughout upper promote ventilation and keep you cool. ; Lace up closure for a custom fit. ; High-rebound, Micro G midsole for lightweight support. ; Medial TPU stability bar ensures superior reinforcement. ; High-abrasion rubber outsole features natural flex grooves to create a natural stride. ; Imported. Measurements: ; Weight: 8 oz ; Product measurements were taken using size 12, width D - Medium. Please note that measurements may vary by size.",
            "price": null,
            "purchase_url": "http://www.zappos.com/product/8248039/color/80263?utm_campaign=mmf_mobile&zhlfid=212",
            "mid_level_product_type": "Athletic",
            "photo_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964736/gear/5dc67ae4027e4b52a3836a3a62a879fb.jpg",
            "detail_photo_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964735/gear/1e8c629e83194495bddc9130faa96f09.jpg",
            "product_type": "General Athletic",
            "gender": "Male",
            "upc": 888284356644,
            "thumbnail_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964735/gear/d35532a0269e4c969562dd10f177bfc9.jpg",
            "styleid": "2727065",
            "model": "UA Speedform Apollo Shoes",
            "msrp": "99.99"
        }
    },
    "name": "fancy shoes",
    "initial_distance": 0.0,
    "target_distance": 100,
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/usergear/750998/",
                "id": "750998"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/${doc_uri}"
            }
        ],
        "user": [
            {
                "href": "/{{page.version}}/user/user_id/",
                "id": "user_id"
            }
        ]
    },
    "purchase_date": "2014-10-10",
    "current_distance": 0.0,
    "retired": false
}
```


### Update a {{page.title}}

###### Request: `PATCH /{{page.version}}/usergear/{id}/`

```json
{
    "current_distance": 50.1
}
```

###### Response: 200

```json
{
    "_embedded": {
        "_links": {
            "self": [
                {
                    "href": "/{{page.version}}/gear/47053/",
                    "id": 47053
                }
            ]
        },
        "gear": {
            "style_number": "1245952-100",
            "color": "White",
            "product_url": "http://www.zappos.com/product/8248039/color/80263?utm_campaign=mmf_mobile&splash=none&zhlfid=212",
            "keywords": null,
            "age_group": "adult",
            "size": "10,10.5,11,11.5,12,12.5,13,14,15,7,7.5,8,8.5,9,9.5",
            "sku": "8248039",
            "source": "zappos",
            "department": "Footwear: Athletic: General Athletic",
            "brand": "Under Armour",
            "available": true,
            "category": "Shoes",
            "description": "Once again, Under Armour brings new innovation into the field of performance. The Speedform Apollo features a unique construction, taking place entirely in a clothing factory. Every aspect of the Apollo is designed to help you perform at your highest levels. ; Breathable, mesh upper features ultrasonic seams for a smooth look. ; First-ever molded seamless heel cup offers the highest levels of comfort and support. ; Perforations throughout upper promote ventilation and keep you cool. ; Lace up closure for a custom fit. ; High-rebound, Micro G midsole for lightweight support. ; Medial TPU stability bar ensures superior reinforcement. ; High-abrasion rubber outsole features natural flex grooves to create a natural stride. ; Imported. Measurements: ; Weight: 8 oz ; Product measurements were taken using size 12, width D - Medium. Please note that measurements may vary by size.",
            "price": null,
            "purchase_url": "http://www.zappos.com/product/8248039/color/80263?utm_campaign=mmf_mobile&zhlfid=212",
            "mid_level_product_type": "Athletic",
            "photo_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964736/gear/5dc67ae4027e4b52a3836a3a62a879fb.jpg",
            "detail_photo_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964735/gear/1e8c629e83194495bddc9130faa96f09.jpg",
            "product_type": "General Athletic",
            "gender": "Male",
            "upc": 888284356644,
            "thumbnail_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964735/gear/d35532a0269e4c969562dd10f177bfc9.jpg",
            "styleid": "2727065",
            "model": "UA Speedform Apollo Shoes",
            "msrp": "99.99"
        }
    },
    "name": "fancy shoes",
    "initial_distance": 0.0,
    "target_distance": 100,
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/usergear/750998/",
                "id": "750998"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/${doc_uri}"
            }
        ],
        "user": [
            {
                "href": "/{{page.version}}/user/user_id/",
                "id": "user_id"
            }
        ]
    },
    "purchase_date": "2014-10-10",
    "current_distance": 50.1,
    "retired": false
}
```


### Retrieve several {{page.title}}

###### Request: `GET /{{page.version}}/usergear/`

###### Response: 200

```json
{
    "_embedded": {
        "usergear": [
            {
                "_embedded": {
                    "_links": {
                        "self": [
                            {
                                "href": "/{{page.version}}/gear/47053/",
                                "id": 47053
                            }
                        ]
                    },
                    "gear": {
                        "style_number": "1245952-100",
                        "color": "White",
                        "product_url": "http://www.zappos.com/product/8248039/color/80263?utm_campaign=mmf_mobile&splash=none&zhlfid=212",
                        "keywords": null,
                        "age_group": "adult",
                        "size": "10,10.5,11,11.5,12,12.5,13,14,15,7,7.5,8,8.5,9,9.5",
                        "sku": "8248039",
                        "source": "zappos",
                        "department": "Footwear: Athletic: General Athletic",
                        "brand": "Under Armour",
                        "available": true,
                        "category": "Shoes",
                        "description": "Once again, Under Armour brings new innovation into the field of performance. The Speedform Apollo features a unique construction, taking place entirely in a clothing factory. Every aspect of the Apollo is designed to help you perform at your highest levels. ; Breathable, mesh upper features ultrasonic seams for a smooth look. ; First-ever molded seamless heel cup offers the highest levels of comfort and support. ; Perforations throughout upper promote ventilation and keep you cool. ; Lace up closure for a custom fit. ; High-rebound, Micro G midsole for lightweight support. ; Medial TPU stability bar ensures superior reinforcement. ; High-abrasion rubber outsole features natural flex grooves to create a natural stride. ; Imported. Measurements: ; Weight: 8 oz ; Product measurements were taken using size 12, width D - Medium. Please note that measurements may vary by size.",
                        "price": null,
                        "purchase_url": "http://www.zappos.com/product/8248039/color/80263?utm_campaign=mmf_mobile&zhlfid=212",
                        "mid_level_product_type": "Athletic",
                        "photo_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964736/gear/5dc67ae4027e4b52a3836a3a62a879fb.jpg",
                        "detail_photo_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964735/gear/1e8c629e83194495bddc9130faa96f09.jpg",
                        "product_type": "General Athletic",
                        "gender": "Male",
                        "upc": 888284356644,
                        "thumbnail_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964735/gear/d35532a0269e4c969562dd10f177bfc9.jpg",
                        "styleid": "2727065",
                        "model": "UA Speedform Apollo Shoes",
                        "msrp": "99.99"
                    }
                },
                "name": "fancy shoes",
                "initial_distance": 0.0,
                "target_distance": 100,
                "_links": {
                    "self": [
                        {
                            "href": "/{{page.version}}/usergear/750998/",
                            "id": "750998"
                        }
                    ],
                    "user": [
                        {
                            "href": "/{{page.version}}/user/user_id/",
                            "id": "user_id"
                        }
                    ]
                },
                "purchase_date": "2014-10-10",
                "current_distance": 0.0,
                "retired": false
            }
        ]
    },
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/usergear/?limit=20&offset=0"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/${doc_uri}"
            }
        ]
    },
    "total_count": 1
}
```


### Create a {{page.title}}

###### Request: `POST /{{page.version}}/usergear/`

```json
{
    "model": "fancy",
    "retired": false,
    "name": "fancy shoes",
    "gear": "/{{page.version}}/gear/47053/",
    "initial_distance": 0,
    "target_distance": 100,
    "brand": "off",
    "purchase_date": "2014-10-10"
}
```

###### Response: 201

```json
{
    "_embedded": {
        "_links": {
            "self": [
                {
                    "href": "/{{page.version}}/gear/47053/",
                    "id": 47053
                }
            ]
        },
        "gear": {
            "style_number": "1245952-100",
            "color": "White",
            "product_url": "http://www.zappos.com/product/8248039/color/80263?utm_campaign=mmf_mobile&splash=none&zhlfid=212",
            "keywords": null,
            "age_group": "adult",
            "size": "10,10.5,11,11.5,12,12.5,13,14,15,7,7.5,8,8.5,9,9.5",
            "sku": "8248039",
            "source": "zappos",
            "department": "Footwear: Athletic: General Athletic",
            "brand": "Under Armour",
            "available": true,
            "category": "Shoes",
            "description": "Once again, Under Armour brings new innovation into the field of performance. The Speedform Apollo features a unique construction, taking place entirely in a clothing factory. Every aspect of the Apollo is designed to help you perform at your highest levels. ; Breathable, mesh upper features ultrasonic seams for a smooth look. ; First-ever molded seamless heel cup offers the highest levels of comfort and support. ; Perforations throughout upper promote ventilation and keep you cool. ; Lace up closure for a custom fit. ; High-rebound, Micro G midsole for lightweight support. ; Medial TPU stability bar ensures superior reinforcement. ; High-abrasion rubber outsole features natural flex grooves to create a natural stride. ; Imported. Measurements: ; Weight: 8 oz ; Product measurements were taken using size 12, width D - Medium. Please note that measurements may vary by size.",
            "price": null,
            "purchase_url": "http://www.zappos.com/product/8248039/color/80263?utm_campaign=mmf_mobile&zhlfid=212",
            "mid_level_product_type": "Athletic",
            "photo_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964736/gear/5dc67ae4027e4b52a3836a3a62a879fb.jpg",
            "detail_photo_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964735/gear/1e8c629e83194495bddc9130faa96f09.jpg",
            "product_type": "General Athletic",
            "gender": "Male",
            "upc": 888284356644,
            "thumbnail_url": "https://res.cloudinary.com/mapmyfitness/image/upload/v1407964735/gear/d35532a0269e4c969562dd10f177bfc9.jpg",
            "styleid": "2727065",
            "model": "UA Speedform Apollo Shoes",
            "msrp": "99.99"
        }
    },
    "name": "fancy shoes",
    "initial_distance": 0.0,
    "target_distance": 100,
    "_links": {
        "self": [
            {
                "href": "/{{page.version}}/usergear/750998/",
                "id": "750998"
            }
        ],
        "documentation": [
            {
                "href": "https://developer.underarmour.com/docs/${doc_uri}"
            }
        ],
        "user": [
            {
                "href": "/{{page.version}}/user/user_id/",
                "id": "user_id"
            }
        ]
    },
    "purchase_date": "2014-10-10",
    "current_distance": 0.0,
    "retired": false
}
```


### Delete {{page.title}}

###### Request: `DELETE /{{page.version}}/usergear/{id}/`

###### Response: 204
