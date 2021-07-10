if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();

//connect to mongodb
mongoose.connect(
    `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@jobportal.ymtdz.gcp.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
     });

app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
    next();
});

// every route has to have /api infront of them after host
//this is a middleware
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(502).send({
        error: err.message
    });
});

app.listen(process.env.PORT || 4000, function(){
    console.log('Listening...');
});