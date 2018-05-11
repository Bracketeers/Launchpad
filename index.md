---
layout: home
id: index
title: Launchpad
subtitle: Front end developer and avid <a href="/projects">creator of things</a>
---

<h1>Welcome to Launchpad!</h1>

<div class="row">
  {% for doc in site.docs %}
    <div class="column one-half">
      <div class="category column--{{ doc.title | slugify }}">
        <h2>{{ doc.title }}</h2>
        <p>{{ doc.details }}</p>
      </div>
    </div>
  {% endfor %}
</div>