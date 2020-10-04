//packages
const express = require('express')
const mongoose = require('mongoose');
const config = require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');
//models
const postRouter = require('./routes/posts');

//config
const app = express();
//middlewares
app.use(cors())
app.use(bodyParser.json());
//MONGO DB
mongoose.connect(process.env.MONGO_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo db')
})

//ROUTES
app.use('/posts', postRouter);


//LISTENING
app.listen(3000);