---
title: Learn HAML in 5 Minutes
description: HAML is a template engine for Ruby on Rails that allows you to write
  fast, easy to read, beautiful markup.
path: learn-haml-in-5-minutes

---
HAML is a faster way to write HTML and is very common in Ruby applications.

**Take the following HTML:**

    <section class="banner">
      <h1 class="banner__title">
        Hello World!
      </h1>
      
      <a href="/about" class="button primary">
      	Find out more
      </a>
    </section>

**Now convert it to HAML:**

    %section.banner
      %h1.banner__title Hello World!
      
      %a.button.primary(href="/about") Find out more

As you can see HAML is much slimmer, due to the fact you don't need to closed HTML tags.

## How to Use HAML

It's easy to write HAML in Ruby on Rails, simply change your `.html.erb` files to `.html.haml`.

You can use the [haml-rails](https://rubygems.org/gems/haml-rails) gem to automatically convert your `.html.erb` files to `.html.haml` from the terminal. It will also set the default view file template to HAML, meaning generators will create `.html.haml` files.

You can install [haml-rails](https://rubygems.org/gems/haml-rails) by running `bundle add haml-rails` in your terminal.

## How to Write HAML

### Comments in HAML

    / Single line comment
    
    /
      Multi
      line
      comment
      
    -# Comment that won't show up in the HTML

### HTML Tags in HAML

    / <div>
    %div
    
    / <div class="text">
    .test
    
    / <section class="test" id="test">
    %section.test#test
    
    / <a href="/" target="_blank" data-turbo="false">
    %a(href="/" target="_blank" data-turbo="false")
    
    You can also write it in a hash:
    
    %a{ href: "/", target: "_blank", data: { turbo: false } }
    
    / <h1>Hello World</h1>
    %h1 Hello World
    
    /
      <p>
    	Hello world, how are you today? I'm doing just fine,
        especially when I'm writing HAML
      </p>
    %p
      Hello world, how are you today? I'm doing just fine,
      especially when I'm writing HAML.
      
    /
      <h1>
        Hello
        <br />
        World
      </h1>
    %h1
      Hello
      %br/
      World
      
    / <h1>Hello - World</h1>
    %h1
      Hello
      \-
      World

### Writing Ruby in HAML

    / Variable with default attribute
    - bg_color = local_assigns.fetch(:bg_color, "#000")
    
    / Dynamic content
    %h1= @project.title
    
    / Dynamic content with static content
    %p Written by #{@project.author_name}
    
    / HTML content (usually from a WYSIWYG)
    %div
      != @project.body
    
    / Loop
    - @project.tags.each do |tag|
      %span= tag
      
    / Conditional content (if/else)
    - if @project.author_image?
      = image_tag(@project.author_image)
    - else
      = image_pack_tag("default-author.png")
    
    / Partial
    = render("comments/form", project_id: @project.id)
    
    / Form
    = form_with(model: @project, local: true) do |f|
      = f.text_field(:title)
      = f.button("Save project", class: "button success")
    
    / Link
    = link_to("View project", project_path(project), class: "link")

## The Downsides of HAML

There's a few downsides to HAML, the biggest I've come across are issues with onboarding developers and the following:

**Readability issues with long HTML attributes:**

    / HAML
    %div{ data: { controller: "map", map_initial_lat_value: "123", map_initial_long_value: "456" } }
      %iframe
    
    <!-- HTML !>
    <div
      data-controller="map"
      data-map-initial-lat-value="123"
      data-map-initial-long-value="456"
    >
      <iframe></iframe>
    </div>

As you can see HAML is far less readable than basic HTML

**Readability issues with Tailwind CSS:**

    %section.bg-gray-900
      .max-w-5xl.mx-auto.px-4.py-24(class="sm:px-6 lg:px-8")
        %h1.text-4xl.font-bold.tracking-wide.uppercase.text-center.text-white(class="sm:text-6xl")
          Hello World

This isn't easy to read, and it's only a small example