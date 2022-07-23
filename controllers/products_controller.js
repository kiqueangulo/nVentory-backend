//DEPENDENCIES
const products = require('express').Router()
const db = require('../models')
const {  product_details } = db 
const { Op } = require('sequelize')

// LIST ALL PRODUCTS
products.get('/', async (req, res) => {
    try {
        const foundProducts = await product_details.findAll({
            //order: [ [ 'last_updated' ] ],
            where: {
                name: { [Op.like]: `%${req.query.name ? req.query.name : ''}%` }
            }
        })
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A PRODUCT
products.get('/:name', async (req, res) => {
    try {
        const foundBand = await product_details.findOne({
            where: { name: req.params.name },
        })

        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE PRODUCT
products.post('/', async (req, res) => {
    try {
        const newProduct = await product_details.create(req.body)
        res.status(200).json({
            message: 'New product added to nVentory',
            data: newProduct
        }) 
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE PRODUCT
products.put('/:id', async (req, res) => {
   try {
    const updateProducts = await product_details.update(req.body, {
        where: {
            product_id: req.params.id
        }
    })
    res.status(200).json({
        message: `Updated ${updateProducts} within nVentory`
    })
   } catch (error) {
    res.status(500).json(err)
   }
})

//DELETE PRODUCTS
products.delete('/:id', async (req, res) => {
    try {
        const deleteProducts = await product_details.destroy({
            where: {
                product_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Deleted ${deleteProducts} within nVentory`
        })
    } catch (error) {
        res.status(500).json(err)
    }
})

module.exports = products;
