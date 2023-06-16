// const
const express = require("express");
const path = require('path');
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: './.env' });

const app = express();

// bd
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_user,
  password: process.env.DATABASE_password,
  database: process.env.DATABASE
});

const publicDirectory = path.join(__dirname, './public');

// app use
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'hbs');

// connect
db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('MYSQL connected...');
  }
});

// get
app.use("/",require('./routes/pages'))
app.use("/auth",require('./routes/auth'))
// listen port
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
