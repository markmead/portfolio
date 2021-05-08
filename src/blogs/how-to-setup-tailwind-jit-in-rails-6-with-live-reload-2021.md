---
title: How to Setup Tailwind JIT in Rails 6 with Live Reload [2021]
description: Use the new Tailwind JIT mode in your Rails 6 project with live reload
  for a faster and better development experience
path: how-to-setup-tailwind-jit-in-rails-6-with-live-reload

---
[**Love Ruby on Rails? Check out my collection of Ruby on Rails products on Gumroad**](https://gumroad.com/markmead "My personal Gumroad page")

[**I have created a GitHub repo following this guide**](https://github.com/markmead/tailwind-jit-rails-livereload "Tailwind JIT in Rails 6 with live reload GitHub repository")

As of Tailwind 2.1 there's a new mode called "JIT" or "Just-in-Time" which features on demand compiling of your Tailwind CSS. This has a range of benefits, including;

* Faster build times
* All variants enabled
* Less custom CSS
* Development and production CSS matching
* Better performance in development

As this is a setup guide, I won't talk about the benefits of Tailwind JIT mode but feel free to check it out on the [Tailwind Just-in-Time mode docs](https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode "Tailwind JIT mode docs").

## Setting up Tailwind JIT in Rails 6 with Live Reload

_I'm not saying this is the best way, but it's the way the only way I've found out how to do it so far._

I'm going to assume you have Tailwind version 2.1 installed and you've updated your `tailwind.config.js` to include `mode: 'jit'`.

### Step 1; Upgrading Webpacker

You need to be using Webpacker 6, thankfully Andrew Mason has already written up a collection of guides to help you do this;

[Webpacker 6: Upgrade Guide](https://dev.to/andrewmcodes/webpacker-6-upgrade-guide-3p6d "Webpacker 6: Upgrade Guide blog")

You don't need to go through the whole process but make sure you do steps;

* 2; Upgrade Guide
* 3; CSS Loaders
* 4; PostCSS Loaders

By the end of it your `package.json` should have the following in it's `dev-dependencies`;

    "devDependencies": {
        "@webpack-cli/serve": "^1.3.1",
        "autoprefixer": "^10.2.5",
        "css-loader": "^5.2.1",
        "mini-css-extract-plugin": "^1.4.1",
        "postcss": "^8.2.9",
        "postcss-flexbugs-fixes": "^5.0.2",
        "postcss-import": "^14.0.0",
        "postcss-loader": "^5.2.0",
        "postcss-preset-env": "^6.7.0",
        "style-loader": "^2.0.0",
        "tailwindcss": "^2.1.1",
        "webpack-dev-server": "^3.11.2"
      },

**IMPORTANT: You need to remove the `.browserlistrc`** file if you have `browserslist` in your `package.json`

**IMPORTANT: You need to add the following to your `bin/webpack-dev-server` file otherwise Tailwind JIT won't work.**

    ENV["WEBPACK_DEV_SERVER"] = "true"

### Step 2; Install Gems

You need 3 Ruby gems to get this working; `guard`, `guard-livereload` and `rack-livereload`. Each of these come with installation documentation but at the moment you only need to follow `guard` and `guard-livereload`.

[Installation guide for guard](https://github.com/guard/guard#installation "guard installation guide")

[Installation guide for guard-livereload](https://github.com/guard/guard-livereload#install "guard-livereload installation guide")

Here is what I added to my Gemfile;

    group :development do
      gem "guard", "~> 2.16", ">= 2.16.2"
      gem "guard-livereload", "~> 2.5", require: false
      gem "rack-livereload", "~> 0.3.17"
    end

As for `rack-livereload` you need to add this line to your `development.rb` file;

    config.middleware.insert_after ActionDispatch::Static, Rack::LiveReload

### Step 3; Updated Webpacker Config

You need to update your `webpacker.yml` file to tell Webpacker to use HMR (hot module reloading)

    dev_server:
        hmr: true

_This was on line 29 for me._

### Step 4; Install Packages

I did some research and found that people kept talking about `chokidar` for enabling HMR with Rails 6 `(erb|haml|slim)` files.

    yarn add -D chokidar

This will install `chokidar` to your `dev-dependencies`.

### Step 5; Update Webpacker Development Setup

Lastly, you will need to replace the `development.js` file with the following;

    process.env.NODE_ENV = process.env.NODE_ENV || 'development'
    
    const { merge } = require('@rails/webpacker')
    
    const webpackConfig = require('./base')
    
    const chokidar = require('chokidar')
    
    const customConfig = (server) => {
      chokidar
        .watch(['config/locales/**/*.yml', 'app/views/**/*.html.erb', 'app/javascripts/**/*.scss'])
        .on('change', () => server.sockWrite(server.sockets, 'content-changed'))
    }
    
    module.exports = merge(webpackConfig, customConfig)

What this is doing is telling `chokidar` to watch for changes in a collection of file types in set directories, the most important one here is `app/views/**/*.html.erb`.

Now fire up a `rails server`, `./bin/webpack-dev-server` and a `bundle exec guard` and you'll have **Tailwind JIT in Rails 6 with Live Reload**

### Bonus Step;

Install `foreman` and create a `Procfile` that will handle the start-up process in one command;

    server: bin/rails s
    assets: bin/webpack-dev-server
    reload: bundle exec guard

You can then call `foreman start` and head over to `localhost:5000`

Much easier!