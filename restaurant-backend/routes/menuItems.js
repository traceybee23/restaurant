const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');
const { authenticate, authorizeAdmin } = require('../middleware/auth');



// Create a new menu item
router.post('/', authenticate, authorizeAdmin, async (req, res, next) => {
    try {
        const menuItem = new MenuItem(req.body);
        await menuItem.save();
        res.status(201).json({ message: 'Menu item created', menuItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
        next(err);
    }
});

// Get all menu items
router.get('/', async (req, res, next) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
        next(err);
    }
});

// Update a menu item
router.put('/:id', authenticate, authorizeAdmin, async (req, res, next) => {
    try {
        const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.status(200).json(menuItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
        next(err);
    }
});

// Delete a menu item
router.delete('/:id', authenticate, authorizeAdmin, async (req, res, next) => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.status(200).json({ message: 'Menu item deleted', menuItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
        next(err);
    }
});

module.exports = router;
