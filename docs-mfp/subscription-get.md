---
layout: mfp_documentation
title: MyFitnessPal Developer - Subscription GET
permalink: /docs-mpf/subscription-get/
---

# Subscriptions GET

    GET ​/subscriptions
    
Required permission scope: ​**subscriptions**

Retrieves all active subscriptions the client has for the user identified by the **m​fp-user-id** header.

##Example Response

    {
        "items": [
        {
            "id": "94gu95483u4g9gn20gf98j",
            "user_id": "z9d8fh49vh34fki4h8",
            "content_type": "diary_meal",
            "client_id": "ldifjo23ifn493897",
            "created_at": "2014-08-31T14:03:17Z"
        }, {
            "id": "ol4ignmj4lvi4jg94jt",
            "user_id": "z9d8fh49vh34fki4h8",
            "content_type": "diary_exercise",
            "client_id": "ldifjo23ifn493897",
            "created_at": "2014-08-31T14:03:17Z"
        } 
      ]
    }
    

## Subscriptions GET by Id

    GET ​/subscriptions/​:subscriptionId

Required permission scope: ​**subscriptions**

Retrieves the subscription with the given identifier.

##Example Response
    
    {
        "item": {
          "id": "94gu95483u4g9gn20gf98j",
          "user_id": "z9d8fh49vh34fki4h8",
          "content_type": "diary_meal",
          "client_id": "ldifjo23ifn493897",
          "created_at": "2014-08-31T14:03:17Z"
        } 
    }