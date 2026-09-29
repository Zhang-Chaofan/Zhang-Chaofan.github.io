---
layout: single
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

- [About]({{ '/' | relative_url }})
- [Research]({{ '/research/' | relative_url }})
- [Publications]({{ '/publications/' | relative_url }})
- [Awards]({{ '/awards/' | relative_url }})

## Publication pages

{% assign papers = site.publications | sort: "date" | reverse %}
{% for paper in papers %}
- [{{ paper.title }}]({{ paper.url | relative_url }})
{% endfor %}
