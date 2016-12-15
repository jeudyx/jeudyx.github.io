---
layout: documentation
title: Gear
resource: Gear
version: v7.1
versionhref: v71
permalink: /docs/v71_Gear/
---

# {{page.title}}

This resource provides access to a User's {{page.title}}, which are devices, wearables,
and apparel used for fitness.

## Resource URIs

* **Item URI:** `/{{page.version}}/gear/{pk}/`
* **Collection URI:** `/{{page.version}}/gear/`


## Item

### Item Methods

* `GET` Retrieve a {{page.title}} by id
* `DELETE` Delete a {{page.title}} by id


### Item properties

| Name                     | Description                                                        | Type     | Units   | HTTP Support                         |
| ---                      | ---                                                                | ---      | ---     | ---                                  |
| `name`                   | The name that the user has give this specific piece of gear.       | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `purchase_date`          | Date the user purchased the gear.                                  | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `initial_distance`       | Number of miles the gear was already used for.                     | ISO-8601 | Miles   | **GET**: required, **PUT**: required |
| `target_distance`        | A max number of miles that the gear should be used for.            | ISO-8601 | Miles   | **GET**: required, **PUT**: required |
| `retired`                | Whether the gear has been retired or not.                          | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `default_activities`     | Setting for the default activities for which the gear is used.     | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `upc`                    | The UPC of the gear.                                               | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `brand`                  | The over-arching brand of the gear.                                | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `model`                  | The specific gear model.                                           | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `category`               | The category under which the gear is classified.                   | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `gender`                 | The gender the gear was designed for.                              | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `department`             | The department                                                     | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `photo_url`              | The url for the photo of the gear.                                 | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `detail_photo_url`       | The url for the photo of the gear. Now with more detail!           | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `thumbnail_url`          | The url for the thumbnail photo of the gear.                       | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `keywords`               | Keywords about the gear.                                           | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `msrp`                   | The MSRP of the gear.                                              | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `price`                  | The price of the gear from the source it was acquired from.        | ISO-8601 | Dollars | **GET**: required, **PUT**: required |
| `description`            | The description of the gear.                                       | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `sku`                    | The sku of the gear.                                               | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `available`              | The availability of the gear from the source it was acquired from. | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `styleid`                | The style id                                                       | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `style_number`           | The style number                                                   | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `product_type`           | The type of product the gear is.                                   | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `age_group`              | The age group the gear is made for.                                | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `mid_level_product_type` | The more general type of product the geqr is.                      | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `color`                  | The color of the gear.                                             | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `size`                   | The size of the gear.                                              | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `purchase_url`           | The url the gear can be purchased at.                              | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `product_url`            | The product url.                                                   | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `release_date`           | The date the gear became available on the market.                  | ISO-8601 | N/A     | **GET**: required, **PUT**: required |
| `field_name`             | description of field                                               | String   | N/A     | **GET**: required, **PUT**: required |


### Item links

* `self` A link to this resource
* `user` A link to the User resource that owns the {{page.title}}


## Collection

### Collection methods

* `GET` Get a list of {{page.title}}s.


### Collection query parameters

| Name    | Description  | Type       | Required                          |
| ---     | ---          | ---        | ---                               |
| `query` | query string | String     | Yes - if `brand` is not specified |
| `brand` | brand string | param_type | Yes - if `query` is not specified |


### Collection properties

| Name          | Description                                    | Type    | Units             | HTTP Support |
| ---           | ---                                            | ---     | ---               | ---          |
| `total_count` | Total count of entities returned in collection | integer | **GET**: required |


### Collection links

* `self` A link to this resource
* `user` A link to the User resource that owns the {{page.title}}


### Embedded collections

* `gears` A collection of {{page.title}}s with properties as described under [Item properties][] and links as described under [Item links][]


## Usage

### GET {{page.title}} entity

###### Request `GET: /{{page.version}}/_resource_name_/{pk}/`

###### Response

```json
{
   "style_number":null,
   "color":null,
   "product_url":"http:\/\/www.zappos.com\/n\/p\/p\/105990\/c\/209849.html?utm_campaign=mmf_mobile",
   "keywords":null,
   "age_group":null,
   "size":null,
   "sku":null,
   "source":"nEwKmzoTG5vStIuBTtnuqkgL0JifPDxo87q2YUPBeZ9DWIHQpYYbOA65e1gjO43NZ8uuReCE5sJlsTgqXhjartx9KPN9kDgiV5Kj",
   "_links":{
      "self":[
         {
            "href":"\/api\/0.1\/gear\/1\/",
            "id":"1"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/"
         }
      ]
   },
   "department":null,
   "brand":"VNfpvVsg4zOiFKuNlbqWVSrbxtI8GCErmpVcmX9NFQt8v2RmpAfFHsCOz0HKOkGuXyuSP3GeCAySa1TDuyyGNcy7gfQ7TPFRy1ed",
   "available":true,
   "category":"ryh5XVMf0MGfS4UstBMU",
   "description":null,
   "price":null,
   "purchase_url":"http:\/\/www.zappos.com\/product\/108084\/color\/278?utm_campaign=mmf_mobile&zlfid=212",
   "mid_level_product_type":"YTUTqtSU79aPBPE8EEdSn4rJ5",
   "photo_url":null,
   "detail_photo_url":null,
   "product_type":"92Q7xAmosjo680Dr9M54WV7cb2BOKarnnoPqfFBAkPGcVEJ6KQi2T3BX0LGt5MboBBJiJhg7Nyn6NeY9TdDSysSrTwkZPAsCox9K",
   "gender":"Male",
   "upc":9408,
   "thumbnail_url":null,
   "styleid":null,
   "model":"UA Speedform Appolo",
   "msrp":null
}
```


### DELETE {{page.title}} entity

###### Request `DELETE: /{{page.version}}/gear/{pk}/`

###### Response 204


### GET {{page.title}} collection by query

###### Request `GET: /{{page.version}}/gear/?query=UA+Speedform+Apollo`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/api\/0.1\/gear\/?query=UA+Speedform+Apollo&limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/"
         }
      ]
   },
   "_embedded":{
      "gear":[
         {
            "style_number":null,
            "color":null,
            "product_url":"http:\/\/www.zappos.com\/n\/p\/p\/105990\/c\/209849.html?utm_campaign=mmf_mobile",
            "keywords":null,
            "age_group":null,
            "size":null,
            "sku":null,
            "source":"iph7tpSJW6GV9CoeTSVUk56JuUUEy3uvyovvnI69zmhkWwdY2y6KJg8uLZjDG7QGQd6EEqdKrBWqiRtbrt0f7wnjozPMkl54Zsna",
            "_links":{
               "self":[
                  {
                     "href":"\/api\/0.1\/gear\/2\/",
                     "id":"2"
                  }
               ]
            },
            "department":null,
            "brand":"ChoxcVpHgFY4XKOo29NiUauzCnrTX9uYslJuAJfDXI2quCDqCQHFBdkgqfYdydPDvaVb86DVZMs0fikikPyJuqqDFo3WzC61HYhs",
            "available":true,
            "category":"jbQ6IIiWkOiiSGY4GLDb",
            "description":null,
            "price":null,
            "purchase_url":"http:\/\/www.zappos.com\/product\/108084\/color\/278?utm_campaign=mmf_mobile&zlfid=212",
            "mid_level_product_type":"6FnFCXjTInorS0P8UUmxaGe1z",
            "photo_url":null,
            "detail_photo_url":null,
            "product_type":"Rbsp5z2pZkzSKc6WAY0Zrajtk4kdedZddwmqlobVQhs7Jp42C5k0WeB5wgYgbMMsQEp6W5jKeioQbO8KmrUNxhqBtcT0lmLcKy1u",
            "gender":"Male",
            "upc":247,
            "thumbnail_url":null,
            "styleid":null,
            "model":"UA Speedform Apollo",
            "msrp":null
         }
      ]
   },
   "total_count":1
}
```


### GET {{page.title}} collection by brand

###### Request `GET: /{{page.version}}/gear/?brand=UA`

###### Response

```json
{
   "_links":{
      "self":[
         {
            "href":"\/api\/0.1\/gear\/?brand=UA&limit=20&offset=0"
         }
      ],
      "documentation":[
         {
            "href":"https:\/\/developer.underarmour.com\/docs\/"
         }
      ]
   },
   "_embedded":{
      "gear":[
         {
            "style_number":null,
            "color":null,
            "product_url":"http:\/\/www.zappos.com\/n\/p\/p\/105990\/c\/209849.html?utm_campaign=mmf_mobile",
            "keywords":null,
            "age_group":null,
            "size":null,
            "sku":null,
            "source":"iph7tpSJW6GV9CoeTSVUk56JuUUEy3uvyovvnI69zmhkWwdY2y6KJg8uLZjDG7QGQd6EEqdKrBWqiRtbrt0f7wnjozPMkl54Zsna",
            "_links":{
               "self":[
                  {
                     "href":"\/api\/0.1\/gear\/17\/",
                     "id":"17"
                  }
               ]
            },
            "department":null,
            "brand":"ChoxcVpHgFY4XKOo29NiUauzCnrTX9uYslJuAJfDXI2quCDqCQHFBdkgqfYdydPDvaVb86DVZMs0fikikPyJuqqDFo3WzC61HYhs",
            "available":true,
            "category":"jbQ6IIiWkOiiSGY4GLDb",
            "description":null,
            "price":null,
            "purchase_url":"http:\/\/www.zappos.com\/product\/108084\/color\/278?utm_campaign=mmf_mobile&zlfid=212",
            "mid_level_product_type":"6FnFCXjTInorS0P8UUmxaGe1z",
            "photo_url":null,
            "detail_photo_url":null,
            "product_type":"Rbsp5z2pZkzSKc6WAY0Zrajtk4kdedZddwmqlobVQhs7Jp42C5k0WeB5wgYgbMMsQEp6W5jKeioQbO8KmrUNxhqBtcT0lmLcKy1u",
            "gender":"Male",
            "upc":247,
            "thumbnail_url":null,
            "styleid":null,
            "model":"UA Speedform Apollo",
            "msrp":null
         }
      ]
   },
   "total_count":1
}
```
