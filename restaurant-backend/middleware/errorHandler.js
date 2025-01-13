
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    // Respond with a generic error message
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        error: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

module.exports = errorHandler;
