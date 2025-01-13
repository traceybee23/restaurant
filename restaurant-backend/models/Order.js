const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true, match: /^[0-9]{10}$/ }, // Example regex for 10-digit phone number
    customerEmail: { type: String, required: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }, // Basic email validation
    items: [
        {
            menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true },
            quantity: { type: Number, required: true },
        }
    ],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: 'Pending' }, // Pending, Completed, Cancelled
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model('Order', orderSchema);
