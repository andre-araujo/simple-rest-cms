module.exports = {
    MONGO_URL: 'mongodb://127.0.0.1:27017/srcms',
    APP_PORT: parseInt(process.env.PORT, 10) || 3000,
    SECRET: 'somesecretkey'
};
