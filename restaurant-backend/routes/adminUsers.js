const express = require('express');
const router = express.Router();
const AdminUser = require('../models/AdminUser');

// Register a new admin user
router.post('/register', async (req, res) => {
    try {
        const adminUser = new AdminUser(req.body);
        await adminUser.save();
        res.status(201).json({ message: 'Admin user registered', adminUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Admin login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const adminUser = await AdminUser.findOne({ username });
        if (!adminUser || !(await adminUser.comparePassword(password))) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        res.status(200).json({ message: 'Login successful', adminUser });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
