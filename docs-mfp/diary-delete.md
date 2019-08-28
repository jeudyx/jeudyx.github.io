---
layout: mfp_documentation
title: MyFitnessPal Developer - Diary - DELETE
permalink: /docs-mpf/diary-delete/
---

# Diary DELETE

    DELETE ​/diary/​:entryId
    
Required permission scope: ​diary

Deletes the diary entry matching the given identifier. The user identified by the id in the **mfp-user-id**​ header must be authorized to delete the entry.

## Request body

The request body must be empty.
