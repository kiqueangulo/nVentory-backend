//DEPENDENCIES
const locations = require('express').Router()
const db = require('../models')
const {  location } = db 
const { Op } = require('sequelize')

// LIST ALL LOCATION
locations.get('/', async (req, res) => {
    try {
        const foundLocation = await location.findAll()
        console.log(foundLocation)
        res.status(200).json(foundLocation)
    } catch (error) {
        res.status(500).json(error)
    }
})

// FIND A LOCATION
locations.get('/:id', async (req, res) => {
    try {
        const foundLocation = await location.findOne({
            where: { location_id: req.params.id },
        })

        res.status(200).json(foundLocation)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE LOCATION
locations.post('/', async (req, res) => {
    try {
        const newLocation = await location.create(req.body)
        res.status(200).json({
            message: 'New location added to nVentory',
            data: newLocation
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// UPDATE LOCATION
locations.put('/:id', async (req, res) => {
    try {
        const updateLocation = await location.update(req.body, {
            where: {
                location_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Updated ${updateLocation} within nVentory`
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE LOCATION
locations.delete('/:id', async (req, res) => {
    try {
        const deleteLocation = await location.destroy({
            where: {
                location_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Deleted ${deleteLocation} within nVentory`
        })
    } catch (error) {
        res.status(500).json(err)
    }
})

module.exports = locations;
