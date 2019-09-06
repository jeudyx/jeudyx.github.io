---
layout: mfp_documentation
title: MyFitnessPal Developer - Appendix Data Structures User Profile
permalink: /docs-mpf/appendix-data-structures-user-profile/
---

# Appendix Data Structures - User Profile

**Name** | **Description** | **Type** | **Sample Values** 
 --- | --- | --- | ---
 type | The type of profile | String | user
 birthdate | The user’s date of birth, in ISO 8601 format (YYYY­MM­DD) | Date | 1985-05-31
 sex | The sex of the user | String | M, F
 activity_factor | The user’s activity level | String | sedentary, lightly_active, active, very_active
 height | The user’s height, measured in the unit specified in their “height” unit preferences property | [Measured Value](appendix-data-structures-measured-value.md)
 headline | The user’s profile headline | String | “I’m doing it for my health, and for my family!”
 
 Available activity factors (more may be added as features evolve):
 
     ● sedentary
     ● lightly_active 
     ● active
     ● very_active