const express = require('express');
const userprofile = require('../models/UserProfile');
const router = express.Router();


router
    .get("/", (req, res) => res.send({
        UserProfile: userprofile.UserProfile[req.userId]
    }) )
    
module.exports = router;