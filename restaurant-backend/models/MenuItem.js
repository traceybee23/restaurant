const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number }, // Optional, as price may depend on variations
    category: { type: String, required: true },
    availability: { type: Boolean, default: true },
    options: {
        type: {
            sizes: [
                {
                    size: { type: String },
                    price: { type: Number }
                }
            ],
            sauces: [{ type: String }],
            dippingSauces: [{ type: String }],
            sauceToss: {
                available: { type: Boolean, default: false },
                price: { type: Number }
            },
            addProtein: [
                {
                    name: { type: String },
                    price: { type: Number }
                }
            ],
            hotdogStyles: [
                {
                    name: { type: String },
                    description: { type: String }
                }
            ]
        },
        default: undefined // Ensures `options` is only included if data is provided
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model('MenuItem', menuItemSchema);
