---
additional_template: docs
position: 3
title: Helpers
layout: default
details: Utilize handy helper classes to speed up your development process.
direct_link: docs/helpers
icon: icon-gift
anchors:
  - Basics
  - Text
  - Floats
  - Lists
  - Flexbox
  - Includes
---

# Helpers

{% include glossary.html %}

## Basics
Helpers are handy classes or SASS includes which allow you to build and modify elements fast. It is worth noting that if you are planning to only use the [CDN]('/overview/#getting-started') version of Launchpad you will not be able to utilize includes.

## Text
For those looking to modify text elements, you can use the following helper classes.

### Font weight

`.text-weight--lighter`<br>
`.text-weight--bolder`

### Font size

`.text-size-smaller`<br>
`.text-size-small`<br>
`.text-size-normal`<br>
`.text-size-large`<br>
`.text-size-larger`

### Text alignment

`.text-align--center`<br>
`.text-align--left`<br>
`.text-align--right`

## Floats
Sometimes you may need to set a float on an element. Don't worry we've got that too!

`.float--left`<br>
`.float--right`

## Lists
Lists can often come in different shapes and sizes. Launchpad has a couple classes you can add to your lists in order to quickly modify them to your needs.

### Horizontal lists

<ul class="horizontal-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
`.horizontal-list`

### No bullets

<ul class="no-bullets">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
`.no-bullets`

## Flexbox
As Launchpad is built with flexbox we decide to add a couple helper classes so you can build some of your own elements using flexbox.

### Display as flexbox
`.flex`

### Justify contents
`.justify-content--center`<br>
`.justify-content--left`<br>
`.justify-content--right`

### Align items
`.align-items--center`<br>
`.align-items--start`<br>
`.align-items--end`

## Includes
For those build a site using the SASS version of Launchpad, here are some handy includes you can use to build faster.

### Display as flexbox
`@include flexbox()`

### Justify content
`@include justify-content(VALUEHERE)`

### Align items
`@include align-items(VALUEHERE)`

It's also worth noting more helpers will be adding as time goes on. Since we are an open source project feel free to [contribute]('https://github.com/Bracketeers/Launchpad/issues') if you'd like to add new helpers.

<br>