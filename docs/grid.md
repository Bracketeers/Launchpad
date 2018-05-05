---
title: Grid
layout: default
---

# Grid

GUIcci uses Flexbox in order to create a super flexible grid system.

## Basics
Building a grid is done in just two steps.
1. Create a `row` container
2. Add as many `column` elements as you want.
GUIcci and the power of flexbox will handle the rest and ensure all of your columns have equal widths

<div class="example">
  <div class="row">
    <div class="column"><p>Auto</p></div>
    <div class="column"><p>Auto</p></div>
    <div class="column"><p>Auto</p></div>
    <div class="column"><p>Auto</p></div>
  </div>
</div>

The code will look as such:

```html
<div class="example">
  <div class="row">
    <div class="column">Auto</div>
    <div class="column">Auto</div>
    <div class="column">Auto</div>
    <div class="column">Auto</div>
  </div>
</div>
```

## Responsive classes

In some scenarios you will want more than just equal-width columns. GUIcci allows you to specify certain column widths as well as control on what devices these widths change.

TODO