const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { authenticate, authorizeAdmin } = require('../middleware/auth');


// Create a new order
router.post('/', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json({ message: 'Order created', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
        next(err);
    }
});

// Get all orders
router.get('/', authenticate, authorizeAdmin, async (req, res) => {
    try {
        const orders = await Order.find().populate('items.menuItem');
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
        next(err);
    }
});

// Update an order
router.put('/:id', authenticate, authorizeAdmin, async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
        next(err);
    }
});

// Delete an order
router.delete('/:id', authenticate, authorizeAdmin, async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json({ message: 'Order deleted', order });
    } catch (err) {
        res.status(500).json({ error: err.message });
        next(err);
    }
});

module.exports = router;
