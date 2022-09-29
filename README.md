# QA Interview Challenge

## The Challenge

Use this repository to submit your solution to the QA interview challenge. Please make a fork of this repository and push your code to the fork. Then, send us a link to your fork.

This repository contains an example REST API for managing users. The API is implemented in ExpressJS. We would like you to write a set of automated tests for the API. The tests should be written in JavaScript. You can use any testing library you prefer.

The REST API has the following endpoints:

- GET /api/users (returns all users)
- GET /api/users/{id} (get user based on a single ID)
- POST /api/users (adds user; the user name and email address should be included in the body of the request)
- DELETE /api/users/{id} (delete user based on single ID)

## Running the API

```
npm install
npm run start
```

This will start a server on localhost:5000
