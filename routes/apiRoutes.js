const path = require("path");
const router = require("express").Router();
const db = require("../db/db.json")

router.get("/api/notes", (req, res) => {
    return res.json(db);
});












module.exports = router;