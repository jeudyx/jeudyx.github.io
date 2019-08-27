---
layout: mfp_documentation
title: MyFitnessPal Developer - Example 2 - Requesting all available scopes
permalink: /docs-mpf/auth-example-2/
---

# Example 2: Requesting all available scopes

    http://api.myfitnesspal.com/v2/oauth2/auth
    ?client_id=​your_client_id
    &response_type=code &scope=diary+measurements+private-exercises+subscriptions 
    &redirect_uri=http://your.domain.com/path/to/auth/complete/flow