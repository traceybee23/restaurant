const express = require('express');
const router = express.Router();
const AdminUser = require('../models/AdminUser');
const jwt = require('jsonwebtoken');

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

      // Generate JWT
      const token = jwt.sign({ id: adminUser._id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
});

module.exports = router;
