---
layout: mfp_documentation
title: MyFitnessPal Developer - Example 1 - Requesting the diary scope
permalink: /docs-mpf/auth-example-1/
---

# Example 1: Requesting the diary scope

    http://api.myfitnesspal.com/v2/oauth2/auth
    ?client_id=​your_client_id
    &response_type=code
    &scope=diary &redirect_uri=http://your.domain.com/path/to/auth/complete/flow