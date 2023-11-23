// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../model/user');

// Create user
router.post('/user', async (req, res) => {
    console.log("Creating a user.......");
    try {
        const { name, branch, certification } = req.body;

        const newUser = new User({
            name,
            branch,
            certification,
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

//Get all users
router.get('/users', async (req, res) => {
    console.log("Getting all users details....");
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get user by ID
router.get('/user/:id', async (req, res) => {
    console.log("Getting the user details....");
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Update user by ID
router.put('/user/:id', async (req, res) => {
    console.log("Updating user details.......");
    try {
        const userId = req.params.id;
        const { name, branch, certification } = req.body;

        const existingUser = await User.findById(userId);

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        existingUser.name = name || existingUser.name;
        existingUser.branch = branch || existingUser.branch;
        existingUser.certification = certification ? [...existingUser.certification, ...certification] : existingUser.certification;

        const updatedUser = await existingUser.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Delete user by ID
router.delete('/user/:id', async (req, res) => {
    console.log("Deleting user.....");
    try {
        const userId = req.params.id;

        const deletedUser = await User.findByIdAndRemove(userId);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
