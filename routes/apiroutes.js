const path = require('path');
const noteData = require('../db/db');


module.exports = (app) => {

    app.post('/api/notes', (req, res) => {
        // console.log(noteData);
        console.log(req.body)
        noteData.push(req.body)
        // console.log(req.body);
    })

    app.get('/api/notes', (req, res) => {
        // console.log(noteData);
        res.json(noteData)
    });

};