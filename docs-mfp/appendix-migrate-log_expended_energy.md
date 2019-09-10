---
layout: mfp_documentation
title: MyFitnessPal Developer - Appendix
permalink: /docs-mpf/appendix-migrate-log_expended_energy/
---

# v1 action: log_expended_energy

Logging expended energy is most commonly used for step tracking. To accomplish this with the v2 API, make a ​[POST request to ​/diary](diary-post.md)​ with type = **​steps**​, with a parent entry of type **steps_aggregate**​.

Clients creating the first ​**steps**​ entry of a day may create the corresponding **s​teps_aggregate** entry in the same request, provided the ​**steps_aggregate**​ entry has an acceptable **i​d**​ property, and the chosen **​id**​ value is set as the **​steps**​ entry's ​**parent_id**​ property. (If the chosen ​**id**​ property is not acceptable, the entire request will fail.)

The ​**steps_aggregate​** entry may be created separately, of course.
