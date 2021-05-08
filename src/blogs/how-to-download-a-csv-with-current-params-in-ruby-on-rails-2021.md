---
title: How to Download a CSV with Current Params in Ruby on Rails [2021]
description: Exporting a CSV in Ruby on Rails is easy, but exporting a CSV with params
  that filter the data is trickier, but not anymore.
path: download-csv-current-params-ruby-on-rails

---
[**Love Ruby on Rails? Check out my collection of Ruby on Rails products on Gumroad**](https://gumroad.com/markmead "My personal Gumroad page")

Working with a CSV in Ruby on Rails is a problem free experience 99% of the time, but I hit that 1% when a client requested the functionality of exporting a CSV with options.

The application had a concept of `users` and `subscriptions` where a user can be **subscribed**, **canceled,** or **inactive**. This was all powered by the [Pay gem](https://github.com/pay-rails/pay "GitHub repository for the Pay gem") by [Chris Oliver](https://twitter.com/excid3 "Twitter account for Chris Oliver from GoRails").

    class User < ApplicationRecord
      include ::Pay::Billable
    end

In the application, they wanted to be able to filter and export a CSV based on the three statuses; **subscribed**, **canceled,** or **inactive**.

**Here's what I changed to get the functionality to work;**

## Model

**Add scopes to provide an easy way to look up `users` in the controller;**

    scope :subscribed, -> { left_outer_joins(:subscriptions).where("subscriptions.status = ?", "active") }
    scope :canceled, -> { left_outer_joins(:subscriptions).where("subscriptions.status = ?", "canceled") }
    scope :inactive, -> { where(processor: nil) }

**Create a CSV based on records passed from the controller;**

    def self.to_csv(records = [])
      attributes = %w[email full_name status]
    
      CSV.generate(headers: true) do |csv|
        csv << attributes
    
        records.each do |user|
           csv << attributes.map { |attr| user.send(attr) }
        end
      end
    end

**There's a few notes for the model;**

* You need to include `require 'csv'` at the top, above the `class`
* I created a `status` method to display subscription status

  def status
  subscription&.status
  end

_This is very specific to the clients use case_

## View

**I added a simple Rails `form_with` that has a `select` and a `submit` input;**

    = form_with(url: users_path, local: true, method: :get) do |f|
      = f.select :status, [['Subscribed', 'subscribed'], ['Canceled', 'canceled'], ['Inactive', 'inactive']], { include_blank: 'Filter users by', selected: params[:status] }
      = f.submit

_In the application, the form is submitted when the `select` is changed_

**Update the `link_to` that goes to the `index` action with the `csv` format to include the params;**

    = link_to "Download CSV", users_path(request.params.merge(format: :csv))

## Controller

**We were using the `index` action and using `respond_to` to check for `html` and `csv` formats;**

    def index
      @users = User.order(created_at: :desc)
    
      @users = @users.subscribed if params[:status] == 'subscribed'
      @users = @users.canceled if params[:status] == 'canceled'
      @users = @users.inactive if params[:status] == 'inactive'
    
      csv_name = [(params[:status].present? ? params[:status] : 'all'), 'users', Date.today].compact.join('-')
    
      respond_to do |format|
        format.html
        format.csv { send_data User.to_csv(@users), filename: "#{csv_name}.csv" }
      end
    end

Here we are using the `scopes` created in the model to filter `@users` based on the `params[:status]` value.

I also included a `csv_name` variable which creates names such as;

* `subscribed-users-2021-01-01.csv`
* `canceled-users-2021-01-01.csv`
* `inactive-users-2021-01-01.csv`

_This variable would be better as a method in the model to avoid cluttering the controller_

**And that's it...**

This example is very specific to the application I was working on, but the logic can be used on any Ruby on Rails application.