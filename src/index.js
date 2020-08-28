require('dotenv').config();
const express = require('express')
const app = express()
const port = process.env.PORT
const routes = require('./routes/index');

// Midlewares
app.disable('x-powered-by');
app.use(express.json());

// Routes
app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

