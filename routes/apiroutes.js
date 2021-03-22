const path = require('path');
const noteData = require('../db/db');
const fs = require('fs');



module.exports = (app) => {

    app.post('/api/notes', (req, res) => {
        // console.log(noteData);
        console.log(req.body)
        noteData.push(req.body)
        console.log(noteData);
        fs.readFile((__dirname + '/../db/db.json'), 'utf8' , (err, data) => {
            if (err) {
              console.error(err)
              return
            }
            fs.writeFile((__dirname + '/../db/db.json'), JSON.stringify(noteData), err => {
                if (err) {
                  console.error(err)
                  return
                }
                console.log("File written");
              })
            console.log(data)
          })

        // console.log(req.body);
        res.json(noteData);

    })

    app.get('/api/notes', (req, res) => {
        // console.log(noteData);
        res.json(noteData)
    });

};