---
layout: mfp_documentation
title: MyFitnessPal Developer - Subscription Request Body Example
permalink: /docs-mpf/subscription-request-body/
---

##Subscription Notifications

When a user action triggers a subscription notification, such as the creation of an exercise diary entry, a POST request will be made to the client's configured notification URL. The request will have a ​**Content-Type**​ of ​application/json​, and the body will consist of a JSON array of items, each of which has the following properties:

    ● user_id​ – the unique identifier of the user who owns the item
    ● item_type​ – the type of the item
    ● item_url​ – the URL where the item in question may be retrieved

Additional HTTP headers that will be included:

    ● Date​ – the date and time the request was sent (should be automatically included by server)
    ● Content­Length​ – the size of the body, in bytes (should be automatically included by server)

Servers receiving the request should acknowledge receipt of the request with a response containing a status code in the 200­299 range and an empty body.

## Example Request Body

This example includes notifications about five items, two of which are associated with the same user.

    [
        {
            "user_id": "9w48rhg489hg48h2fw4",
            "item_type": "measurements",
            "item_url": "https://api.myfitnesspal.com/v2/measurements/4398hvg4klvi4nhg"
        }, {
            "user_id": "9w48rhg489hg48h33r",
            "item_type": "diary_exercise",
            "item_url": "https://api.myfitnesspal.com/v2/diary/lkf34inv9rz4hg9e7"
        },
        {
            "user_id": "vnl43i56h49guy4g3r34",
            "item_type": "diary_meal",
            "item_url": "https://api.myfitnesspal.com/v2/diary?types=diary_meal&entry_date&2014-07-30"
        }, {
            "user_id": "jvl4i4vh3ifh3g48fhj",
            "item_type": "diary_steps",
            "item_url": "https://api.myfitnesspal.com/v2/diary/lvio4nso4hg9034tg"
        }, {
            "user_id": "p4934ug984ug837f9fdn",
            "item_type": "user_info",
            "item_url": "https://api.myfitnesspal.com/v2/users/p4934ug984ug837f9fdn"
        } 
    ]