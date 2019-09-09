---
layout: mfp_documentation
title: MyFitnessPal Developer - Appendix Data Structures Exercise
permalink: /docs-mpf/appendix-data-structures-exercise/
---

# Appendix Data Structures - Exercise

**Name** | **Description** | **Type** | **Sample Values** 
 --- | --- | --- | ---
 id | The obfuscated ID of the exercise | String | abc123qwerty
 version | The version of this exercise. Every time an exercise is updated, a new version of the exercise is created. | String | abc123qwerty
 type | The kind of exercise | String | cardio, strength
 description | Text description of the exercise | String | "Stationary bike, moderate effort (bicycling, cycling, biking)"
 mets | The metabolic equivalent of task (MET) for this exercise | Float | 6.5
 public | Whether the exercise is included in the public database | Boolean | true, false

Supported values for ​**exercise_type**​ are: 

    ● cardio
    ● strength