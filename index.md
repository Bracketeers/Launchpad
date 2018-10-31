---
layout: home
id: index
title: Launchpad
subtitle: Front end developer and avid <a href="/projects">creator of things</a>
---

{% assign sorted = site.docs | sort: 'position' %}

<div class="row">
  <div class="column">
    <h1 class="statement"><strong>Launchpad</strong> is a flexbox based framework<br>aimed to increase your productivity.</h1>

    <div class="quick-start">
      <code class="npm">npm i @bracketeers/launchpad</code>
    </div>

  </div>
</div>

<div class="row">
  {% for doc in sorted %}
    <div class="column desktop--one-half tablet--one-half mobile--one-whole">
      <div class="category column--{{ doc.title | slugify }}">
        <div>
          <h2><a href="{{ doc.url | relative_url }}"><i class="icon-link"></i> {{ doc.title }}</a></h2>
          <p>{{ doc.details }}</p>
          {% for anchor in doc.anchors %}
            {% assign link = anchor | slugify | prepend: '#' %}
            <span>
              <a href="{{ doc.direct_link | append: link | relative_url }}">
                <i class='icon-hash'></i>{{ anchor }}
              </a>
            </span>
          {% endfor %}
        </div>
      </div>
    </div>
  {% endfor %}
</div>


