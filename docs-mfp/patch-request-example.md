---
layout: mfp_documentation
title: MyFitnessPal Developer - Request Example
permalink: /docs-mpf/patch-request-example/
---

# Patch Request

Updates a user's properties.

    PATCH ​/users/​:userId

The body is a view of the user containing only the properties that are changing. Properties that are not present will be unchanged.

Properties that are unordered lists should include their entire values; properties that are key-value maps need include only the relevant keys and values, as other extant key­value pairs will be unchanged.


## Example

PATCH /v2/users/user123​ – request body:

    {
        "item": {
          "goal_preferences": {
            "daily_step_goal": 12000
           }
        } 
    }
    
Values that may be updated for a user are:

    ● goal_preferences.daily_step_goal

Properties may be added over time.