const path = require('path');
const noteData = require('../db/db');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

    // Handles posting new note to db.json file and adds a unique ID to each note.
    app.post('/api/notes', (req, res) => {
        // Setting random ID for new note entry
        req.body.id = uuidv4()

        // Push new note data into array
        noteData.push(req.body)
        fs.readFile((__dirname + '/../db/db.json'), 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            fs.writeFile((__dirname + '/../db/db.json'), JSON.stringify(noteData), err => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        })
        res.json(noteData);
    })

    // Gets Note from database and sends to left side of page
    app.get('/api/notes', (req, res) => {
        res.json(noteData)
    });

    // Handles Deleting note
    app.delete('/api/notes', (req, res) => {
        console.log(req);
        res.json(noteData)
    })

};