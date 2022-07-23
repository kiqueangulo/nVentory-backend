//DEPENDENCIES
const express = require("express");
const app = express();
const { Sequelize } = require('sequelize')
const db = require('./models/index.js');



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
app.use('/products', productsController)


//LISTEN
  app.listen(process.env.PORT, () => {
    console.log(`server is listening on port: ${process.env.PORT}`);
  });