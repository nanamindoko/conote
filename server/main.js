var express = require('express');
var path = require('path');

var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

// LOG HTTP REQUEST
var morgan = require('morgan');
// PARSE HTML BODY
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var session= require('express-session');

/* Setup routers */
var api = require('./routes');

const app = express();
const port = 3000;
//const devPort = 4000;

app.use(morgan('dev'));
app.use(bodyParser.json());

// MongoDB Connection
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => { console.log("Connected to mongodb server"); });

// Connect mongodb
mongoose.connect("mongodb://localhost:27017");
app.use(session({
    secret: "conote123",
    resave: false,
    saveUninitialized: true
}));

app.use('/api', api);
/*
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './../build/index.html'));
})*/
app.use('/', express.static(path.join(__dirname, './../build')));
app.get('*', (req, res) => {
    res.redirect('/');
})


// RELEASE
app.listen(port, () => {
    console.log("Server listening to port", port);
})

// DEVELOPMENT PORT
/*
if(process.env.NODE_ENV == 'development') {
    console.log("Server is running on development mode");
    const config =require('../webpack.dev.config');
    const compiler = webpack(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(
        devPort, () => {
        console.log("webpack-dev-server is listening on port ", devPort);
    })
}
 */