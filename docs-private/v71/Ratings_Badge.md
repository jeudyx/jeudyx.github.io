# Ratings Badge

Represents a descriptive evaluation for a exercise/workout/activity.

WARNING: this resource is intended for internal use only. Any attempt to use this resource from an unauthorized client will result in a Forbidden (HTTP 403) response.

## Resource URIs

**Item URI:** `/v7.1/rating_badge/{pk}/`

**Collection URI:** `/v7.1/rating_badge/`

## Item

### Item Methods

`GET` Retrieve a Ratings Badge by id  

### Item properties

| Name         | Description          | Type      | HTTP Support                                                                        |
|--------------|----------------------|-----------|-------------------------------------------------------------------------------------|
| `description` | A short description for the experience or evaluation of a exercise. | String | **GET**: required |
| `code` | A short identifier for the badge within the rating campaign. | String | **GET**: required |
| `mobile_image_url` | The template url for the image that is going to be displayed for the badge in mobile apps. | String | **GET**: optional |

### Item links

`self` A link to this resource  
`rating_campaign` A link to the Rating Campaign resource that owns the rating badge

## Collection

### Collection methods

`GET` Get a list of Ratings Badges.  

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `campaign_id` | Get the rating batches associated to a rating campaign. | Integer | No   |

### Collection properties

| Name         | Description          | Type      | Units               | HTTP Support                                 |
|--------------|----------------------|-----------|---------------------|----------------------------------------------|
| `total_count` | Total count of entities returned in collection | integer | N/A | **GET**: required |

### Collection links

`self` A link to this resource  

### Embedded collections

`rating_badges` A collection of Ratings Badges with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### GET Ratings Badge entity

###### Request `GET: /v7.1/rating_badge/{pk}/`

###### Response

```json
{
   "_links":{
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/Rating_Badge"
         }
      ],
      "rating_campaign":[
         {
            "href":"/v7.1/rating_campaign/1/",
            "id":"1"
         }
      ],
      "self":[
         {
            "href":"/v7.1/rating_badge/1/",
            "id":"1"
         }
      ]
   },
   "code":"brooks_run_off",
   "description":"RUN OFF",
   "mobile_image_url":"http://res.cloudinary.com/mapmyfitness/image/upload/c_fit,h_{{height_px}},w_{{width_px}}/v1415643431/sponsorship/dev_be3f63bb76084b6282aea9d6f73f9f88.png"
}
```

### GET Ratings Badge collection

###### Request `GET: /v7.1/rating_badge/`

###### Response

```json
{
   "_embedded":{
      "rating_badges":[
         {
            "_links":{
               "rating_campaign":[
                  {
                     "href":"/v7.1/rating_campaign/1/",
                     "id":"1"
                  }
               ],
               "self":[
                  {
                     "href":"/v7.1/rating_badge/1/",
                     "id":"1"
                  }
               ]
            },
            "code":"brooks_run_off",
            "description":"RUN OFF",
            "mobile_image_url":"http://res.cloudinary.com/mapmyfitness/image/upload/c_fit,h_{{height_px}},w_{{width_px}}/v1415643431/sponsorship/dev_be3f63bb76084b6282aea9d6f73f9f88.png"
         },
         {
            "_links":{
               "rating_campaign":[
                  {
                     "href":"/v7.1/rating_campaign/1/",
                     "id":"1"
                  }
               ],
               "self":[
                  {
                     "href":"/v7.1/rating_badge/2/",
                     "id":"2"
                  }
               ]
            },
            "code":"brooks_goals_off",
            "description":"GOALS OFF",
            "mobile_image_url":"http://res.cloudinary.com/mapmyfitness/image/upload/c_fit,h_{{height_px}},w_{{width_px}}/v1415643430/sponsorship/dev_6d2c48d844684f60a4ece93e78a23f19.png"
         },
         {
            "_links":{
               "rating_campaign":[
                  {
                     "href":"/v7.1/rating_campaign/1/",
                     "id":"1"
                  }
               ],
               "self":[
                  {
                     "href":"/v7.1/rating_badge/3/",
                     "id":"3"
                  }
               ]
            },
            "code":"brooks_kick_off",
            "description":"KICK OFF",
            "mobile_image_url":"http://res.cloudinary.com/mapmyfitness/image/upload/c_fit,h_{{height_px}},w_{{width_px}}/v1415643431/sponsorship/dev_031ce747bb4c4469a752a3c4e5b5fcf8.png"
         },
         {
            "_links":{
               "rating_campaign":[
                  {
                     "href":"/v7.1/rating_campaign/1/",
                     "id":"1"
                  }
               ],
               "self":[
                  {
                     "href":"/v7.1/rating_badge/4/",
                     "id":"4"
                  }
               ]
            },
            "code":"brooks_trail_off",
            "description":"TRAIL OFF",
            "mobile_image_url":"http://res.cloudinary.com/mapmyfitness/image/upload/c_fit,h_{{height_px}},w_{{width_px}}/v1415643432/sponsorship/dev_a235fa2ea5b147f0a8c4072a167fd40a.png"
         },
         {
            "_links":{
               "rating_campaign":[
                  {
                     "href":"/v7.1/rating_campaign/1/",
                     "id":"1"
                  }
               ],
               "self":[
                  {
                     "href":"/v7.1/rating_badge/5/",
                     "id":"5"
                  }
               ]
            },
            "code":"brooks_strong_off",
            "description":"STRONG OFF",
            "mobile_image_url":"http://res.cloudinary.com/mapmyfitness/image/upload/c_fit,h_{{height_px}},w_{{width_px}}/v1415643431/sponsorship/dev_a82e9b35ef15416c8a6ee68ffd2f8be0.png"
         }
      ]
   },
   "_links":{
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/Rating_Badge"
         }
      ],
      "self":[
         {
            "href":"/v7.1/rating_badge/?limit=20&campaign_id=1&offset=0"
         }
      ]
   },
   "total_count":5
}
```

