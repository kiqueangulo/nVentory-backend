//DEPENDENCIES
const express = require("express");
const app = express();
const cors = require('cors')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// ROOT
app.get('/', (req, res) =>{
  res.status(200).json({
    message: 'Home Page'
  })
})

//CONTROLLERS
//PRODUCTS
const productsController = require('./controllers/products_controller')
app.use('/products', productsController)
//LOCATIONS
const locationController = require('./controllers/locations_controller')
app.use('/locations', locationController)


//LISTEN
  app.listen(process.env.PORT, () => {
    console.log(`server is listening on port: ${process.env.PORT}`);
  });
