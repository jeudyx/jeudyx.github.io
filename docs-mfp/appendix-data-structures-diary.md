---
layout: mfp_documentation
title: MyFitnessPal Developer - Appendix Data Structures Diary
permalink: /docs-mpf/appendix-data-structures-diary/
---

# Appendix Data Structures - Diary

The following types of diary entries are supported:

    ● diary_meal (DM)
    ● exercise (E)
    ● steps (S)
    ● steps_aggregate (SA)

**Name** | **Type** | **Description** | **DM** | **E** | **S** | **SA** 
 --- | --- | --- | :---: | :---: | :---: | :---:
 type | String | type of the entry | x | x | x | x
 id | String | unique identifier | - | x | x | x
 date | Date | The date of this entry, in ISO 8601 format (YYYY­MM­DD) | x | x | x | x
 device_id | String | The identifier of the device used to create this entry | - | x | x | x
 parent_id | String | unique identifier of the parent of this entry, if one exists | - | - | x | -
 tags | List(String) | A set of string tags associated with this entry | - | x | - | -
 nutritional_contents | [Nutritional Contents](appendix-data-structures-nutritional-contents.md) | Calculated nutritional contents of this entry | x | - | - | -
 start_time | Timestamp | The start date/time of the entry | - | x | x | x
 duration | Integer | The duration of the entry, in seconds | - | x | x | x
 energy | [Measured Value](appendix-data-structures-measured-value.md) | Energy expended in this entry | - | x | x | x
 diary_meal | String | The name of the diary meal logged in this entry | x | - | - | -
 exercise | [Exercise](appendix-data-structures-exercise.md) | - | x | - | -
 steps | Integer | The number of steps logged in this entry | - | - | x | x
 quantity [deprecated] | Integer | The number of times this exercise was performed, such as with pushups. | - | x | - | -
 sets | Integer | The number of sets performed | - | x | - | -
 reps_per_set | Integer | The number of repetitions per set | - | x | - | -
 weight_per_set | [Measured Value](appendix-data-structures-measured-value.md) | The amount of weight used on each set | - | x | - | -
 distance | [Measured Value](appendix-data-structures-measured-value.md) | The distance covered by the exercise | - | x | - | -
 max_speed | [Measured Value](appendix-data-structures-measured-value.md) | The maximum speed achieved in the exercise | - | x | - | -
 avg_heart_rate | Integer | The average heart rate measured during the exercise, in beats per minute | - | x | - | -
 max_heart_rate | Integer | The maximum heart rate measured during the exercise, in beats per minute | - | x | - | -
 elevation_change | [Measured Value](appendix-data-structures-measured-value.md) | The elevation change experienced in the exercise. May be negative. | - | x | - | -
 primary | Boolean | Whether this aggregate is from the user's primary step source | - | - | - | x
 
 Property legend, by diary entry type:
 
    x: Applies
    -: Not Applicable
  
 