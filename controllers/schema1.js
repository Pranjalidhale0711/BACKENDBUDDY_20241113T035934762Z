// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Schema1 = require('../models/schema1Schema');

// CRUD operations for schema1
// Create Controller 
const createSchema1 = async (req, res) => { 
    const { fiel1 } = req.body;
    try {
        const schema1 = await Schema1.create({ fiel1 }) 
        await schema1.save();
        res.status(201).json(schema1);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateSchema1 = async (req, res) => { 
    const _id=req.params.id;
    const { fiel1 } = req.body;
    try {
        const schema1 = await Schema1.findByIdAndUpdate( _id, { fiel1 },{new:true}) 
        if (!schema1) {
            return res.status(404).send('schema1 not found');
        }
        await schema1.save();
        res.status(201).json(schema1);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteSchema1 = async (req, res) => { 
    const _id=req.params.id;
    try {
        const schema1 = await Schema1.findById(_id)
        if (!schema1) {
            return res.status(404).send('schema1 not found');
        }
        await Schema1.deleteOne({_id: _id})
        await schema1.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getSchema1 = async (req, res) => { 
    const _id=req.params.id;
    try {
        const schema1 = await Schema1.findById(_id)
        if (!schema1) {
            return res.status(404).send('schema1 not found');
        }
        res.status(201).json(schema1);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllSchema1 = async (req, res) => { 
    try {
        const schema1 = await Schema1.find({})
        if (!schema1) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(schema1);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createSchema1,
    updateSchema1,
    deleteSchema1,
    getSchema1,
    getAllSchema1
}