const express = require('express');
const userprofile = require('../models/UserProfile');
const router = express.Router();


router
    .get("/", (req, res) => res.send({
        UserProfile: userprofile.UserProfile[req.userId],
        Achievements: userprofile.Achievements[req.userId],
        NewsFeed: userprofile.NewsFeeds[req.userId]
    }))
    .post('/shareachievement', (req, res) => res.send(
        userprofile.shareAchievement(req.userId, req.body.name, req.body.time)
    ))
    .post('/tonewsfeed', (req, res) => res.send(
        userprofile.toNewsFeed(req.userId, req.body.name, req.body.time)
    ))
    
module.exports = router;