const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const userRoute = require('./routes/user');

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE_URI, {})
    .then(() => console.log("Server is connected to databse successfully!!!!"))
    .catch(e => console.error(e));

app.use('/', userRoute)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});