---
additional_template: docs
position: 2
title: Grid
layout: default
details: Learn how to grid system works.
direct_link: docs/grid
icon: icon-sidebar
anchors:
  - Basics
  - Responsive classes
  - Device classes
---

# Grid

{% include glossary.html %}

## Basics
Launchpad uses Flexbox in order to create a super flexible grid system.

Building a grid is done in just two steps.
1. Create a `row` container
2. Add as many `column` elements as you want.
Launchpad and the power of flexbox will handle the rest and ensure all of your columns have equal widths

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
    <div class="column"><p>Auto</p></div>
    <div class="column"><p>Auto</p></div>
    <div class="column"><p>Auto</p></div>
    <div class="column"><p>Auto</p></div>
  </div>
</div>
```

## Responsive classes

In some scenarios you will want more than just equal-width columns. Launchpad allows you to specify certain column widths as well as control on what devices these widths change.

### Basic modifiers

You can modify a column with a responsive class adding one of the following class modifiers:
* one-whole (100% width)
* one-half (50% width)
* one-third (33% width)
* two-thirds (66% width)
* one-quarter (25% width)
* two-quarters (50% width)
* three-quarters (75% width)
* one-fifth (20% width)
* two-fifths (40% width)
* three-fifths (60% width)
* one-tenth (10% width)
* two-tenths (20% width)
* three-tenths (30% width)
* four-tenths (40% width)
* five-tenths (50% width)
* six-tenths (60% width)
* seven-tenths (70% width)
* eight-tenths (80% width)
* nine-tenths (90% width)

Here is a small example of how you can use basic responsive classes

<div class="example">
  <div class="row">
    <div class="column one-whole"><p>1/1</p></div>
  </div>
  <div class="row">
    <div class="column one-half"><p>1/2</p></div>
    <div class="column"><p>Auto</p></div>
    <div class="column"><p>Auto</p></div>
  </div>
  <div class="row">
    <div class="column one-third"><p>1/3</p></div>
    <div class="column two-thirds"><p>2/3</p></div>
  </div>
  <div class="row">
    <div class="column one-quarter"><p>1/4</p></div>
    <div class="column two-quarters"><p>2/4</p></div>
    <div class="column"><p>Auto</p></div>
  </div>
  <div class="row">
    <div class="column three-quarters"><p>3/4</p></div>
    <div class="column"><p>Auto</p></div>
    <div class="column"><p>Auto</p></div>
  </div>
  <div class="row">
    <div class="column one-fifth"><p>1/5</p></div>
    <div class="column four-fifths"><p>4/5</p></div>
  </div>
  <div class="row">
    <div class="column one-tenth"><p>1/10</p></div>
    <div class="column two-tenths"><p>2/10</p></div>
    <div class="column seven-tenths"><p>7/10</p></div>
  </div>
</div>

the code will look as such:

```html
<div class="example">
  <div class="row">
    <div class="column one-whole"><p>1/1</p></div>
  </div>
  <div class="row">
    <div class="column one-half"><p>1/2</p></div>
    <div class="column"><p>Auto</p></div>
    <div class="column"><p>Auto</p></div>
  </div>
  <div class="row">
    <div class="column one-third"><p>1/3</p></div>
    <div class="column two-thirds"><p>2/3</p></div>
  </div>
  <div class="row">
    <div class="column one-quarter"><p>1/4</p></div>
    <div class="column two-quarters"><p>2/4</p></div>
    <div class="column"><p>Auto</p></div>
  </div>
  <div class="row">
    <div class="column three-quarters"><p>3/4</p></div>
    <div class="column"><p>Auto</p></div>
    <div class="column"><p>Auto</p></div>
  </div>
  <div class="row">
    <div class="column one-fifth"><p>1/5</p></div>
    <div class="column four-fifths"><p>4/5</p></div>
  </div>
  <div class="row">
    <div class="column one-tenth"><p>1/10</p></div>
    <div class="column two-tenths"><p>2/10</p></div>
    <div class="column seven-tenths"><p>7/10</p></div>
  </div>
</div>
```

## Device classes

Beyond responsive classes you may also want to change column sizes based off of the device you are using. Launchpad provides 3 device classes that can used to control your column sizes.

1. Mobile
  * mobile (767px and lower)
  * mobile-down (480px and lower)
  * mobile-up (481px and higher)
2. Tablet
  * tablet (768px to 1024px)
  * tablet-down (768px and lower)
  * tablet-up (769px and higher)
3. Desktop
  * desktop-up (1025px and higher)
  * desktop-down (1024px and lower)

Here is a small example of how you can utilize device classes. You will want to resize your browser to see the changes.

<div class="example">
  <div class="row">
    <div class="column mobile--one-whole tablet--one-half">
      <p>mobile--one-whole<br>tablet--one-half<br>auto</p>
    </div>
    <div class="column mobile--one-whole tablet--one-half">
      <p>mobile--one-whole<br>tablet--one-half<br>auto</p>
    </div>
    <div class="column mobile--one-whole tablet--one-whole">
      <p>mobile--one-whole<br>tablet--one-whole<br>auto</p>
    </div>
  </div>
</div>

the code will look as such:

```html
<div class="example">
  <div class="row">
    <div class="column mobile--one-whole tablet--one-half">
      <p>mobile--one-whole<br>tablet--one-half<br>auto</p>
    </div>
    <div class="column mobile--one-whole tablet--one-half">
      <p>mobile--one-whole<br>tablet--one-half<br>auto</p>
    </div>
    <div class="column mobile--one-whole tablet--one-whole">
      <p>mobile--one-whole<br>tablet--one-whole<br>auto</p>
    </div>
  </div>
</div>
```
<br>

