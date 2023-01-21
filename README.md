# Contentful Remix Starter Blog

![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=contentful-remix-starter-blog) ![Checkly](https://api.checklyhq.com/v1/badges/checks/458d0ea0-c335-4b75-a344-3f7f2dcd082b?)

Create a [Remix](https://remix.run/) blog powered by [Contentful](https://www.contentful.com). Based on the [contentful gatsby starter](https://github.com/contentful/starter-gatsby-blog) blog repo.

![Screenshot](screenshot.png)

## Getting started

### Get the source code and install dependencies
```shell
$ git clone git@github.com:marcolink/contentful-remix-starter-blog.git
$ npm install
```
Or hit the `Use this template` button on the repo page.  

### Create contentful space
Create contentful account or use your existing account to create a space.
Now create a delivery and management token.

### Create environment variables
We now need to set up some env variables:

> I personally like to use `direnv` to manage my env variables. [go check it out!](https://direnv.net/)

```
# your space id
export CONTENTFUL_SPACE=<contentful-space-id>

# your content delivery API token 
export CONTENTFUL_CDA_TOKEN=<contentful-delivery-token>

# your content delivery API token 
export CONTENTFUL_CMA_TOKEN=<contentful-management-token>
```

### Import data to your contentful space

```sh
$ npm run setup
```

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
$ npm install
```

Afterwards, start the Remix development server like so:

```sh
$ npm run dev
```

Update your local typescript definitions for your content types. This step is only needed If you change content types in the associated space.

```sh
$ npm run generate
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.

## Deployment

This project is bootstrapped with `npx create-remix@latest` and can be deployed to [vercel](https://vercel.com/).
