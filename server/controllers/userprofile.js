const express = require('express');
const userprofile = require('../models/UserProfile');
const router = express.Router();


router
    .get("/", (req, res) => res.send({
        UserProfile: userprofile.UserProfile[req.userId],
        Achievements: userprofile.Achievements[req.userId]
    }))
    .post('/shareachievement', (req, res) => res.send(
        userprofile.shareAchievement(req.userId, req.body.name)
    ))
    
module.exports = router;