---
layout: mfp_documentation
title: MyFitnessPal Developer - Example Response with fields elements
permalink: /docs-mpf/example-response-with-fields-parameter/
---

## Example Response with ​fields​ elements: profiles, account, location_preferences, goal_preferences, diary_preferences

    {
        "item": {
           "id": "fs34o4ifseijo4n9",
           "username": "an_mfp_username",
           "profiles": [
               {
                 "type": "user",
                 "birthdate": "1980-12-28",
                 "sex": "M",
                 "activity_factor": "active",
                 "height": { "value": 70, "unit": "inches" },
                 "headline": "The arrival of winter is imminent"
               }
           ],
           "account": {
             "created_at": "2008-06-01T13:45:04Z"
           },
           "location_preferences": {
             "time_zone": "America/Los_Angeles"
           },
           "goal_preferences": {
             "daily_step_goal": 15000,
             "daily_energy_goal": {
               "value": 2100,
               "unit": "calories"
             }
           },
           "diary_preferences": {
             "meal_names": ["Breakfast", "Lunch", "Dinner", "Snacks"]
           }
        } 
    }