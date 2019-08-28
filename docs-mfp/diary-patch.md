---
layout: mfp_documentation
title: MyFitnessPal Developer - Diary Patch
permalink: /docs-mpf/diary-patch/
---

# Diary PATCH

    PATCH ​/diary/​:entryId

Required permission scope: ​diary

Updates the diary entry matching the given identifier. The user identified by the id in the **mfp­user-id​** header must be authorized to update the entry.

## Request body

The request body is a representation of a diary entry, with the properties that are changing. (Immutable or calculated properties,such as i​d​ and n​utritional_contents,​ must not be present.)

**Example request body, updating a duration on an ​exercise​ entry:**

    {
        "item": {
          "duration": 2700
        } 
    }