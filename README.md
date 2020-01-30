# A self-learning project of building a RESTful API.

Powered by Node.js, Express.js & MongoDB with API authentication using JWT (JSON Web Token), data validation with @hpai/Joi, and bcryptjs for hashing passwords.

## Routes

| ROUTE                  |  HTTP  | DESCRIPTION                                         |
| ---------------------- | :----: | --------------------------------------------------- |
| /                      |  GET   | Main index page                                     |
| /api/courses           |  GET   | Show all courses                                    |
| /api/courses/:courseId |  GET   | Show by course id                                   |
| /api/courses           |  POST  | Create a new course                                 |
| /api/courses/:courseId | DELETE | Delete course by course id                          |
| /user/register         |  POST  | Register a new user with input credentials          |
| /user/login            |  POST  | Login an existing user with user credentials        |
| /admin                 |  GET   | Shows admin page only with correct JWT verification |

## Setting up environment

1. A file named `.env.example` exists on the root directory of the project.
2. Rename the file from `.env.example` to `.env` or run the following command from your terminal: `cp .env.example .env`
3. Modify the three environment-specific variable values to your environment and save the file.

## Requirements

- You must have [Node.js](https://nodejs.org/) and [MongoDB](https://mongodb.com/) installed

## Installation & Running Server:

1. Install npm dependencies

```
npm install
```

2. To start the server

```
npm run
```
