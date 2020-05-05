const UserProfile = [
    {
        Name: "Ron",
        Bio: "Future Biggest Loser!",
        Picture: "http://cs.newpaltz.edu/~butironr1/WeFitPics/ronwefit.jpeg",
        Location: "New York, New York",
        Favorite: "Weight Loss",
        AnnualGoal: "Lose 25 pounds and run a mile in 7 minutes or less",
        userId: 0
    },
    {
        Name: "Conor",
        Bio: "I only start counting reps when it begins to hurt!",
        Picture: "http://cs.newpaltz.edu/~butironr1/WeFitPics/conorwefit.png",
        Location: "Los Angeles, California",
        Favorite: "Strength",
        AnnualGoal: "Bench 300ibs for 10 reps",
        userId: 1
    },
    {
        Name: "Mike",
        Bio: "Runner's high is my kind of drug!",
        Picture: "http://cs.newpaltz.edu/~butironr1/WeFitPics/mikewefit.png",
        Location: "Boulder, Colorado",
        Favorite: "Endurance",
        AnnualGoal: "Break 2 hours and 30 minutes in the Marathon",
        userId: 3
    },
];

const Achievements = [
    {
        userId: 0,
        Achievement: [
            
        ]
    },
    {
        userId: 1,
        Achievement: [
            
        ]
    },
    {
        userId: 2,
        Achievement: [
    
        ]
    }
];
function GetUserId(userId){
    return Players.findIndex(x=> x.userId == userId);
}
function shareAchievement(userid, name, time){
    const id = Achievements.find(x=> x.userId == userid);
    id.Achievement.push([name, time]);
    return id;
}

module.exports = {
    UserProfile, shareAchievement, Achievements
}