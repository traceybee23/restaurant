const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // For password hashing

const adminUserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Will be hashed
    email: { type: String, required: true, unique: true },
}, { timestamps: true });

// Pre-save middleware to hash passwords before saving
adminUserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare passwords
adminUserSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('AdminUser', adminUserSchema);
