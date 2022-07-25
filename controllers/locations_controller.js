//DEPENDENCIES
const location = require('express').Router()
const db = require('../models')
const {  locations } = db 
const { Op } = require('sequelize')

// LIST ALL PRODUCTS
location.get('/', async (req, res) => {
    try {
        const foundLocation = await locations.findAll()
        console.log(foundLocation)
        res.status(200).json(foundLocation)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = location;
