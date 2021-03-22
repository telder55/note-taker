// Dependencies
const express = require('express')
const path = require('path');
const fs = require('fs');

const app = express()
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

// Added to make css work
app.use(express.static(__dirname + '/public'));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requiring html routes
require('./routes/htmlroutes')(app);

//Requiring API Routes
require('./routes/apiroutes')(app);

// app.post(/api/notes, (req, res) => {
//     req.body() // sends request with body 
//     res.status(200).json(req.body) // sends back the same body 
// }) 

