---
layout: mfp_documentation
title: MyFitnessPal Developer - Appendix Data Structures User
permalink: /docs-mpf/appendix-data-structures-user/
---

# Appendix Data Structures - User

**Name** | **Description** | **Type** | **Sample Values** 
 --- | --- | --- | ---
 id | The user’s unique string identifier (not username) | String | abc123foobar
 username | The user's username | String | jsnow
 profiles | A set of profiles applied to the user | List ([User Profile](appendix-data-structures-user-profile.md)) | [{“type”: ”user”, “name”: ”Jane Autumn”, “birthdate”: ”1985­01­28”, ...}, {“type”: ”coach”, ... }]
 account | A set of account­related data | [Account](appendix-data-structures-account.md) | {“created_at”:”2010­05­31T14:30:20­07 :00”, “valid­email”:true, ... }
 privacy_preferences | A set of user privacy preferences | [Privacy Preferences](appendix-data-structures-privacy-preferences.md) 
 goal_preferences | A set of user goal preferences | [Goal Preferences](appendix-data-structures-goal-preferences.md)
 location_preferences | A set of user location preferences | [Location Preferences](appendix-data-structures-location-preferences.md)
 diary_preferences | A set of user diary preferences | [Diary Preferences](appendix-data-structures-diary-preferences.md)