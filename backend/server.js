const express = require('express');
const { createVercelHandler } = require('vercel-server');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

const app = express();
app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
module.exports = createVercelHandler(app);

