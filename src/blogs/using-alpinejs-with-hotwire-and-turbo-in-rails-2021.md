---
title: Using AlpineJS with Hotwire and Turbo in Rails [2021]
description: The latest addition to Rails, Hotwire comes with a breaking change to
  AplineJS with the new Turbo (previously Tubolinks). Here's how to fix it.
path: using-alpinejs-with-hotwire-and-turbo-in-rails

---
With the addition of [Hotwire](https://hotwire.dev/ "Hotwire Rails website") in Rails comes the change of Turbolinks to Turbo. The change to [Turbo](https://turbo.hotwire.dev/ "Turbo Rails website") doesn't break much with the exception of [AlpineJS](https://github.com/alpinejs/alpine "AlpineJS GitHub repository").

If you don't know what AlpineJS is then I'd recommend taking a look at the GitHub repository, but in short;

> Alpine.js offers you the reactive and declarative nature of big frameworks like Vue or React at a much lower cost.

If you've been using AlpineJS or are planning on using it and you're about to upgrade to Hotwire then you'll need to install the NPM package `alpine-turbo-drive-adapter` by [SimoTod](https://github.com/SimoTod "SimoTod GitHub user"). 

This package will fix AlpineJS's `x-show`, if it's not included all `x-show` elements will ignore the argument to make them `show`/`hide`.

**AlpineJS with Turbo RailsByte**

To make the installation/upgrade process even easier, I have created a RailsByte; [AlpineJS with Turbo RailsByte](https://railsbytes.com/templates/zPds4M "RailsByte for AlpineJS with Turbo").