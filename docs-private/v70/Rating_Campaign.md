# Rating Campaign

Represents the intention of a brand to sponsor particular activity types.

WARNING: this resource is intended for internal use only. Any attempt to use this resource from an unauthorized client will result in a Forbidden (HTTP 403) response.

## Resource URIs

**Item URI:** `/v7.0/rating_campaign/{pk}/`

**Collection URI:** `/v7.0/rating_campaign/`

## Item

### Item Methods

`GET` Retrieve a Rating Campaign by id  

### Item properties

| Name         | Description          | Type      | HTTP Support                                                       |
|--------------|----------------------|-----------|--------------------------------------------------------------------|
| `title` | The displayed name of the rating campaign | String | **GET**: required |
| `short_name` | A short name for the rating campaign | String | **GET**: required |
| `pre_logo_text` | A text to display before the brand logo (options are `sponsored by` or `powered by`) | String | **GET**: required |
| `note_autofill_text` | The text used with which to fill the recorded exercise/workout/activity notes. | String | **GET**: required |
| `no_badge_selected_text` | The message displayed when no rating badge has been selected by the user. | String | **GET**: required |
| `mobile_sponsor_logo_url` | The template url for the image that is corresponds to the sponsor's logo in mobile apps. | String | **GET**: required |
| `web_sprite_url` | The url for the sprite image that is going to be used in the website to display the rating campaign box. | String | **GET**: required |
| `start_datetime_utc` | The start of the rating campaign. | ISO-8601 datetime | **GET**: required |
| `end_datetime_utc` | The start of the rating campaign. | ISO-8601 datetime | **GET**: required |

### Item links

`self` A link to this resource  

`activity_types` A list of links to the Activity Type resources that are sponsored by the brand in the rating campaign.

`badges` A list of links to the Activity Type resources that are sponsored by the brand in the rating campaign.

## Collection

### Collection methods

`GET` Get a list of Rating Campaigns.  

### Collection query parameters

| Name         | Description               | Type       | Required |
|--------------|---------------------------|------------|----------|
| `target_start_datetime_utc` | The start of the period to filter rating campaigns | ISO-8601 Datetime | Yes - If target_end_datetime_utc is provided |
| `target_end_datetime_utc` | The end of the period to filter rating campaigns | ISO-8601 Datetime | No |
| `activity_types` | A list of activity type identifiers to match with the ones associated to rating campaigns | list | No |

### Collection properties

| Name         | Description          | Type      | Units               | HTTP Support                                                                        |
|--------------|----------------------|-----------|---------------------|-------------------------------------------------------------------------------------|
| `total_count` | Total count of entities returned in collection | integer | N/A | **GET**: required |

### Collection links

`self` A link to this resource  

### Embedded collections

`rating_campaigns` A collection of Rating Campaigns with properties as described under [Item properties][] and links as described under [Item links][]

## Usage

### GET Rating Campaign entity

###### Request `GET: /v7.0/rating_campaign/{pk}/`

###### Response

```json
{
   "_links":{
      "activity_types":[
         {
            "href":"/v7.0/activity_type/16/",
            "id":"16"
         }
      ],
      "badges":[
         {
            "href":"/v7.0/rating_badge/?campaign_id=1"
         }
      ],
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/Rating_Campaign"
         }
      ],
      "self":[
         {
            "href":"/v7.0/rating_campaign/1/",
            "id":"1"
         }
      ]
   },
   "end_datetime_utc":"2015-01-01T00:00:00+00:00",
   "mobile_sponsor_logo_url":"http://res.cloudinary.com/mapmyfitness/image/upload/c_fit,h_{{height_px}},w_{{width_px}}/v1415658132/sponsorship/dev_b81b4d70f7824c19a903e8bb657e0b75.png",
   "no_badge_selected_text":"Pick up a badge",
   "note_autofill_text":"#runhappy",
   "pre_logo_text":"sponsored_by",
   "short_name":"runhappy_brooks",
   "start_datetime_utc":"2014-10-01T00:00:00+00:00",
   "title":"Rate your workout!",
   "web_sprite_url":"http://res.cloudinary.com/mapmyfitness/image/upload/v1415889299/sponsorship/683677c9f08d46c0ac74bddfd3db35ea.png"
}
```


### GET Rating Campaign collection

###### Request `GET: /v7.0/rating_campaign/`

###### Response

```json
{
   "_embedded":{
      "rating_campaigns":[
         {
            "_links":{
               "activity_types":[
                  {
                     "href":"/v7.0/activity_type/16/",
                     "id":"16"
                  }
               ],
               "badges":[
                  {
                     "href":"/v7.0/rating_badge/?campaign_id=1"
                  }
               ],
               "self":[
                  {
                     "href":"/v7.0/rating_campaign/1/",
                     "id":"1"
                  }
               ]
            },
            "end_datetime_utc":"2015-01-01T00:00:00+00:00",
            "mobile_sponsor_logo_url":"http://res.cloudinary.com/mapmyfitness/image/upload/c_fit,h_{{height_px}},w_{{width_px}}/v1415658132/sponsorship/dev_b81b4d70f7824c19a903e8bb657e0b75.png",
            "no_badge_selected_text":"Pick up a badge",
            "note_autofill_text":"#runhappy",
            "pre_logo_text":"sponsored_by",
            "short_name":"runhappy_brooks",
            "start_datetime_utc":"2014-10-01T00:00:00+00:00",
            "title":"Rate your workout!",
            "web_sprite_url":"http://res.cloudinary.com/mapmyfitness/image/upload/v1415889299/sponsorship/683677c9f08d46c0ac74bddfd3db35ea.png"
         }
      ]
   },
   "_links":{
      "documentation":[
         {
            "href":"https://developer.underarmour.com/docs/Rating_Campaign"
         }
      ],
      "self":[
         {
            "href":"/v7.0/rating_campaign/?limit=20&target_end_datetime_utc=2015-01-01T00%3A00%3A00&target_start_datetime_utc=2014-01-01T00%3A00%3A00&offset=0"
         }
      ]
   },
   "total_count":1
}
```
