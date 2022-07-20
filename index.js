//DEPENDENCIES
const express = require("express");
const db = require('./models/index.js');
const { Sequelize } = require('sequelize')
const app = express();

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROOT
app.get('/', (req, res) =>{
  res.status(200).json({
    message: 'Home Page'
  })
})

//CONTROLLERS
const productsController = require('./controllers/products_controller')
app.use('./products', bandsController)


//LISTEN
  app.listen(process.env.PORT, () => {
    console.log(`server is listening on port: ${process.env.PORT}`);
  });



//DIRECTIONS FOR SETTING UP HEROKU HERE.
// const { Client } = require('pg');

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect();

// client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
//   if (err) throw err;
//   for (let row of res.rows) {
//     console.log(JSON.stringify(row));
//   }
//   client.end();
// });