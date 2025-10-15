
const express = require('express');
const router = express.Router()
const multer = require('multer');

const upload = multer({storage:multer.memoryStorage()})


router.post('/songs', upload.single("audio"), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    res.status(201).json({
        message: "songs created successfully",
        song: req.body
    })
    
})

module.exports = router


