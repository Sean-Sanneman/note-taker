const path = require("path");
const router = require("express").Router();
const db = require("../db/db.json");
const create = require("../db/create.js");

router.get("/notes", (req, res) => {
 
 create.getNote().then(notes => res.json(notes))
 .catch(err => console.log(err));
});

router.post("/notes", (req, res) => {
    create.addNote(req.body)
    .then((note) => res.json(note))
    .catch(err => console.log(err));
})
module.exports = router;
