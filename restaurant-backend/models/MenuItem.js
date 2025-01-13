const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number }, // Optional, as price may depend on variations
    category: { type: String, required: true },
    availability: { type: Boolean, default: true },
    options: {
        sizes: [
            {
                size: { type: String, required: true },
                price: { type: Number, required: true }
            }
        ],
        sauces: [{ type: String }],
        dippingSauces: [{ type: String }]
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model('MenuItem', menuItemSchema);
