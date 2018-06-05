---
additional_template: docs
position: 4
title: Components
layout: default
details: Launchpad comes with some built-in components so you don't have to reinvent the wheel.
direct_link: docs/components
icon: icon-box
anchors:
  - Buttons
  - Alerts
---

# Components

{% include glossary.html %}

## Buttons
Buttons are very useful, whether you are building a form or linking you'll likely end up wanting to create a button. Launchpad has some handy and flexible buttons built right into the framework.

Here is the list of available buttons:

<a href="#" class="btn">Standard</a>
<a href="#" class="btn btn--positive">Positive</a>
<a href="#" class="btn btn--negative">Negative</a>
<a href="#" class="btn btn--warning">Warning</a>

the code will look as such:

```html
<a href="#" class="btn">Standard</a>
<a href="#" class="btn btn--positive">Positive</a>
<a href="#" class="btn btn--negative">Negative</a>
<a href="#" class="btn btn--warning">Warning</a>
```

## Alerts
Alerts are banners that can be used to convey important messages to your users.

Here is the list of availables alerts:

<div class="alert">
  <h3>Standard alert</h3>
  <p>A standard alert</p>
</div>
<div class="alert alert--positive">
  <h3>Positive alert</h3>
  <p>A positive alert</p>
</div>
<div class="alert alert--negative">
  <h3>Negative alert</h3>
  <p>A negative alert</p>
</div>
<div class="alert alert--warning">
  <h3>Warning alert</h3>
  <p>A warning alert</p>
</div>

The code will look as such:

```html
<div class="alert">
  <h3>Standard alert</h3>
  <p>A standard alert</p>
</div>
<div class="alert alert--positive">
  <h3>Positive alert</h3>
  <p>A positive alert</p>
</div>
<div class="alert alert--negative">
  <h3>Negative alert</h3>
  <p>A negative alert</p>
</div>
<div class="alert alert--warning">
  <h3>Warning alert</h3>
  <p>A warning alert</p>
</div>
```
It's also worth noting more components will be adding as time goes on. Since we are an open source project feel free to [contribute]('https://github.com/Bracketeers/Launchpad/issues') if you'd like to add new components.

<br>