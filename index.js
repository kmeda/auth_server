// Main starting point of the application
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router.js");
const mongoose = require("mongoose");

//DB Setup
mongoose.connect('mongodb://localhost:auth/auth');


// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

router(app);

// Server setup
const port = process.env.PORT || 3000;
const server = app.listen(port, function(){
    console.log("Server listening on port: ", port);
});
