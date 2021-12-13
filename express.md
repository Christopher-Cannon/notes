# Express

A minimal web application framework for Node.js. Useful for creating REST APIs or back-end web apps using templating.

The [Express website](http://expressjs.com/) provides further information, guides, and docs.

## Installation

Create the project directory and initialise package.json with:

    npm init

Install express as a dependency with:

    npm i express

## Using express in an application

The following lines give us access to express. Requiring the express package returns a function. We can invoke this function by referring to it as **app** (common convention).

    const express = require("express");
    const app = express();

Or, more succintly:

    const app = require("express")();

## Basic express application

    const express = require("express");
    const app = express();
    require("dotenv").config();

    app.get("/", (req, res) => {
      res.send("Hello, World");
    });

    app.get("/api/courses", (req, res) => {
      res.send([1, 2, 3, 1, 2, 3]);
    });

    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`Listening on port ${port}...`));

### Handling HTTP requests

We can use various commands to handle HTTP requests to our application.

- app.get()
- app.post()
- app.put()
- app.patch()
- app.delete()

These take a URL and a callback function that defines what the response will be. This callback has access to the request and response objects.

## Development tools

### Node monitor (nodemon)

A useful tool that restarts the node application when you make changes to the application. Find out more on [npm](https://www.npmjs.com/package/nodemon).

Install using the following command (probably a good idea to save as a dev dependency).

    npm i nodemon --save-dev

The following command (replacing "index.js" with whatever your application's entry point is) will restart the application for you when you make changes.

    nodemon index.js

This command can also be added to package.json as part of a larger start script.

### dotenv

Allows you to define environment variables not already defined in your local environment using an **.env** file. Install with:

    npm i dotenv

Ensure you add ".env" to your .gitignore file. This file is often used to contain database connection credentials and other sensitive information which should be kept private.

## URL parameters

### Route parameters

These are named values passed to the server via a URL. They can be considered mandatory as they are integral to their route's correct functioning.

Route parameters are:

- never null or undefined.
- strings with a positive length.
- stored as named properties in the req.params object.

### Query parameters

These are optional named values passed to the server via a URL.

## Express router

## Middleware

## Authentication

