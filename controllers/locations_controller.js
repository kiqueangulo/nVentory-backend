//DEPENDENCIES
const locations = require('express').Router()
const db = require('../models')
const {  location } = db 
const { Op } = require('sequelize')

// LIST ALL PRODUCTS
locations.get('/', async (req, res) => {
    try {
        const foundLocation = await location.findAll()
        console.log(foundLocation)
        res.status(200).json(foundLocation)
    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = locations;
