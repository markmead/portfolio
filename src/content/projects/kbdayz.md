---
title: A date and time formatter that's smaller than 1kb
brand: Open Source
website: https://github.com/markmead/kbdayz
description: Format dates and times with the minimal amount of JavaScript required
path: kbdayz
tech: ['JavaScript', 'Babel', 'NPM']
---

## Reason

`moment.js` is huge and now deprecated, and other solutions had too many options for what most of the time is a simple date formatter.

## Solution

Use the new `Int.DateTimeFormat` added to JavaScript.

In fact, the code is so small I can show it here!

```js
export default function DateFormat(date, options) {
  this.lang = options.lang
  this.country = options.country
  this.date = date
  this.dateStyle = options.dateStyle
  this.timeStyle = options.timeStyle
}

DateFormat.prototype.format = function() {
  const formatter = new Intl.DateTimeFormat(`${this.lang}-${this.country}`, {
    timeStyle: this.timeStyle,
    dateStyle: this.dateStyle,
  })

  return formatter.format(new Date(this.date))
}
```
