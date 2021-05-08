---
title: How to Download a CSV with Current Params in Ruby on Rails [2021]
description: Exporting a CSV in Ruby on Rails is easy, but exporting a CSV with params
  that filter the data is trickier, but not anymore.
path: download-csv-current-params-ruby-on-rails

---
Working with a CSV in Ruby on Rails is a problem free experience 99% of the time, but I hit that 1% when a client requested the functionality of exporting a CSV with options.

The application had a concept of `users` and `subscriptions` where a user can be **subscribed**, **canceled,** or **inactive**. This was all powered by the Pay gem by Chris Oliver.

    class User < ApplicationRecord
      include ::Pay::Billable
    end

In the application, they wanted to be able to filter and export a CSV based on the three statuses; **subscribed**, **canceled,** or **inactive**.

**Here's what I changed to get the functionality to work;**

## Add scopes to the user model

    scope :subscribed, -> { left_outer_joins(:subscriptions).where("subscriptions.status = ?", "active") }
    scope :canceled, -> { left_outer_joins(:subscriptions).where("subscriptions.status = ?", "canceled") }
    scope :inactive, -> { where(processor: nil) }

## Pass records into the `to_csv` method

    def self.to_csv(records = [])
      attributes = %w[email full_name status]
    
      CSV.generate(headers: true) do |csv|
        csv << attributes
    
        records.each do |user|
           csv << attributes.map { |attr| user.send(attr) }
        end
      end
    end

I had to create a `status` method so it would show the **subscription status** in the CSV;

    def status
      subscription&.status
    end

## Update the controller

    def index
      @subscribers = User.order(created_at: :desc)
    
      @subscribers = @subscribers.subscribed if params[:status] == 'subscribed'
      @subscribers = @subscribers.canceled if params[:status] == 'canceled'
      @subscribers = @subscribers.inactive if params[:status] == 'inactive'
    
      csv_name = [(params[:status].present? ? params[:status] : 'all'), 'users', Date.today].compact.join('-')
    
      respond_to do |format|
        format.html
        format.csv { send_data User.to_csv(@subscribers), filename: "#{csv_name}.csv" }
      end
    end

This includes a local variable called `csv_name` which allows for names like:

* `subscribed-users-2021-01-01.csv`
* `canceled-users-2021-01-01.csv`
* `inactive-users-2021-01-01.csv`

## Add a form to pass params

    = form_with(url: users_path, local: true, method: :get) do |f|
      = f.select :status, [['Subscribed', 'subscribed'], ['Canceled', 'canceled'], ['Inactive', 'inactive']], { include_blank: 'Filter users by', selected: params[:status] }
      = f.submit
    
    = link_to "Download CSV", users_path(request.params.merge(format: :csv))

And that's it...

The only change you really need to do is;

**Update the controller to send a value to the `to_csv` method**

    format.csv { send_data User.to_csv(@subscribers), filename: "#{csv_name}.csv" }

**Loop over the data `to_csv` receives from the controller**

    records.each do |user|
    end