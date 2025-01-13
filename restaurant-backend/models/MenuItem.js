const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String }, // URL of the image
    availability: { type: Boolean, default: true },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

module.exports = mongoose.model('MenuItem', menuItemSchema);
