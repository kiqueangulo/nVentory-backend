//DEPENDENCIES
const products = require('express').Router()
const db = require('../models')
const {  ProductDetails } = db 
const { Op } = require('sequelize')

// LIST ALL PRODUCTS
products.get('/', async (req, res) => {
    try {
        const foundProducts = await ProductDetails.findAll()
        console.log(foundProducts)
        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND A PRODUCT
products.get('/:id', async (req, res) => {
    try {
        const foundProducts = await ProductDetails.findOne({
            where: { product_id: req.params.id },
        })

        res.status(200).json(foundProducts)
    } catch (error) {
        res.status(500).json(error)
    }
})

//CREATE PRODUCT
products.post('/', async (req, res) => {
    try {
        const newProduct = await ProductDetails.create(req.body)
        res.status(200).json({
            message: 'New product added to nVentory',
            data: newProduct
        }) 
    } catch (err) {
        res.status(500).json(err)
    }
})

// //UPDATE PRODUCT
 products.put('/:id', async (req, res) => {
    try {
     const updateProducts = await ProductDetails.update(req.body, {
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

// //DELETE PRODUCTS
 products.delete('/:id', async (req, res) => {
     try {
         const deleteProducts = await ProductDetails.destroy({
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