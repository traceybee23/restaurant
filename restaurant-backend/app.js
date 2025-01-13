require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose'); // Import mongoose
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors'); // Import CORS

var indexRouter = require('./routes/index');
const menuItemsRouter = require('./routes/menuItems');
const ordersRouter = require('./routes/orders');
const adminUsersRouter = require('./routes/adminUsers');

var app = express();

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/restaurant';
mongoose
    .connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/api/menu-items', menuItemsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/admin-users', adminUsersRouter);

module.exports = app;
