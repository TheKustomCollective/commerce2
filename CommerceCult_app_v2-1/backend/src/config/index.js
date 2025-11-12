require('dotenv').config();

const config = {
    openaiApiKey: process.env.OPENAI_API_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
    port: process.env.PORT || 5000,
    jwtSecretKey: process.env.JWT_SECRET_KEY,
    nodeEnv: process.env.NODE_ENV || 'development',
};

module.exports = config;