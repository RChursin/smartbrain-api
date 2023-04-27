# Getting Started with Smart Brain Api
#### This is a backend part of the app.
#### Frontend part of the app is available [SmartBrain](https://github.com/RChursin/smartbrain-local)
Using: `Node.js`, `Express.js`, `PostgreSQL`, `Knex.js`\
You need to have your own PostgreSQL database.

#### For this DB you need to create 2 tables:
`users` with columns:\
`id` - type: `serial`, primary key\
`name` - type: `varchar(100)`, not null\
`email` - type: `varchar(100)`, not null, unique\
`entries` - type: `bigint`, not null\
`joined` - type: `timestamp`, not null

`login` with columns:\
`id` - type: `serial`, primary key\
`hash` - type: `varchar(100)`, not null\
`email` - type: `varchar(100)`, not null, unique

#### Set up your DB for local use in `server.js` file.

## Available Scripts

In the project directory, you can run:

#### `npm install`

Installs all the dependencies required for the project.

#### `npm start` by default or `nodemon server.js` if you have nodemon installed globally\
You always can install it with `npm install -g nodemon`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.