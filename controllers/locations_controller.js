//DEPENDENCIES
const location = require('express').Router()
const db = require('../models')
const {  locations } = db 
const { Op } = require('sequelize')

// LIST ALL LOCATIONS
location.get('/', async (req, res) => {
    try {
        const foundLocation = await locations.findAll()
        console.log(foundLocation)
        res.status(200).json(foundLocation)
    } catch (error) {
        res.status(500).json(error)
    }
})

//FIND ALL LOCATIONS
location.get('/:id', async (req, res) => {
    try {
        const foundLocation = await locations.findOne({
            where: { location_id: req.params.id },
        })

        res.status(200).json(foundLocation)
    } catch (error) {
        res.status(500).json(error)
    }
})

// CREATE LOCATION
location.post('/', async (req, res) => {
    try {
        const newLocation = await locations.create(req.body)
        res.status(200).json({
            message: 'New location added to nVentory',
            data: newLocation
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

// UPDATE LOCATION
location.put('/:id', async (req, res) => {
    try {
        const updateLocation = await locations.update(req.body, {
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
location.delete('/:id', async (req, res) => {
    try {
        const deleteLocation = await locations.destroy({
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


module.exports = location;
