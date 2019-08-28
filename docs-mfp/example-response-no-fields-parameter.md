---
layout: mfp_documentation
title: MyFitnessPal Developer - Example Response with no fields parameter
permalink: /docs-mpf/example-response-no-fields-parameter/
---

# Users
The following resource structure definitions are relevant for this set of endpoints:

● [User](appendix-data-structures-user.md)

● [Measured Value](appendix-data-structures-measured-value.md)

● [User Profile](appendix-data-structures-user-profile.md)

● [Account](appendix-data-structures-account.md)　

● [Privacy Preferences](appendix-data-structures-privacy-preferences.md)

● [Goal Preferences](appendix-data-structures-goal-preferences.md)

● [Location Preferences](appendix-data-structures-location-preferences.md)

● [Diary Preferences](appendix-data-structures-diary-preferences.md)

## Resources

    GET ​/users/​:userId

Returns a representation of the user identified by ​:userId​ (the unique string user identifier), subject to authorization.

## Example Response with no ​fields​ parameter

    {         
        "item": {
           "id": "fs34o4ifseijo4n9",
           "username": "an_mfp_username"
        } 
    }