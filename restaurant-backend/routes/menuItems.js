const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

// Create a new menu item
router.post('/', async (req, res) => {
    try {
        const menuItem = new MenuItem(req.body);
        await menuItem.save();
        res.status(201).json({ message: 'Menu item created', menuItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all menu items
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a menu item
router.put('/:id', async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.status(200).json(menuItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a menu item
router.delete('/:id', async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.status(200).json({ message: 'Menu item deleted', menuItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
