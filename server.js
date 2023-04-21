const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const {handleRegister} = require("./controllers/register");
const {handleSignin} = require("./controllers/signin");
const {handleProfileId} = require("./controllers/profile_id");
const {handleImage} = require("./controllers/image");

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: '',
        password: '',
        database: 'smart-brain'
    }
});

db.select('*').from('users').then(data => {
    console.log(data);
});

const app = express();
app.use(express.json());
app.use(cors())


app.get('/', (req, res) => {res.send('it is working! Pick a route /signin or /register');});
app.post('/signin', (req, res) => { handleSignin(req, res, db, bcrypt) });
app.post('/register', (req, res) => { handleRegister(req, res, db, bcrypt) });
app.get('/profile/:id', (req, res) => { handleProfileId(req, res, db) });
app.put('/image', (req, res) => { handleImage(req, res, db) });


app.listen(3000, () => {
    console.log('My server is running on port localhost:3000');
});
