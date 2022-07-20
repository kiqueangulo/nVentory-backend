//DEPENDENCIES
const products = require('express').Router()
const db = require('../models')
const { location, product_details, product_location } = db 
const { Op } = require('sequelize')

// FIND ALL BANDS
products.get('/', async (req, res) => {
    try {
        const foundProducts = await product_details.findAll({
            order: [ [ 'last_updated' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.export = products