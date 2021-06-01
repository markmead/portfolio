---
title: How to Schedule Vercel Deploys [2021]
description: Setup scheduled deploys to Vercel in 5 minutes through deploy hooks,
  GitHub secrets and GitHub actions
path: schedule-vercel-deploys

---
There's been a few cases where I have needed scheduled deploys, the most recent was on my new websites:

[Learn Ruby on Rails](https://www.learnrubyonrails.com/ "Learn Ruby on Rails website")

This uses the Gumroad API to fetch all my products and then converts them to GraphQL. The issue with this is that if I update a product on Gumroad, I need to redeploy on Vercel so the app can redo the GraphQL data.

I could just not use GraphQL but the Gumroad API returns a lot of data when I only need at most 5 things.

## Adding a Deploy Hook to Vercel

This is simple, as all things are with Vercel.

Head on over to `https://vercel.com/name/project/settings/git` where `name` is your Vercel username and `project` is the name of your Vercel project.

There you can create a **Deploy Hook**.

Simply add the name of your hook, I call mine **"Deploy"** and set the branch you wish to deploy, typically **master** or **main**.

Copy the URL it provides.

## Adding a Secret Key to GitHub

Next we need to add the unique ID at the end of the URL provided by Vercel into the GitHub repository for the Vercel project.

Head on over to `https://github.com/name/project/settings/secrets/actions` where `name` is your GitHub username and `project` is the name of your GitHub repository.

Create a new repository secret and name it:

    VERCEL_DEPLOY_HOOK

Then set the value to the unique ID of the URL provided by Vercel:

    https://api.vercel.com/v1/integrations/deploy/UNIQUE_ID

Click **Add Secret** and that's that.

## Adding a GitHub Action to Trigger Vercel Deploys

In your GitHub repository make a file `.github/workflows/scheduled-deploy.yml` at the root of the application.

In this file add the following:

    name: Scheduled deploy
    on:
      schedule:
        - cron: '0 */8 * * *'
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - name: Trigger our build webhook on Vercel
            run: curl -X POST "https://api.vercel.com/v1/integrations/deploy/${TOKEN}"
            env:
              TOKEN: ${{ secrets.VERCEL_DEPLOY_HOOK }}

Push that to master and that's it. You now have scheduled deploys to Vercel.

This setup will deploy every 8 hours on the hour, if you need to change this you'd update the following line:

    - cron: '0 */8 * * *'

If you need help finding timings, then the [Crontab Guru website](https://crontab.guru/#0_*/8_*_*_* "Crontab Guru website to help create cron schedules") is your best friend.