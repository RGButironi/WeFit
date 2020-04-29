const UserProfile = [
    {
        Name: "Ron",
        Bio: "Future Biggest Loser!",
        //picture: ,
        Location: "New York, New York",
        Focus: "Weight Loss",
        AnnualGoal: "Lose 25 pounds and run a mile in 7 minutes or less",
        userId: 0
    },
    {
        Name: "Conor",
        Bio: "I only start counting reps when it begins to hurt!",
        //picture: ,
        Location: "Los Angeles, California",
        Focus: "Strength",
        AnnualGoal: "Bench 300ibs for 10 reps",
        userId: 1
    },
    {
        Name: "Mike",
        Bio: "Runner's high is my kind of drug!",
        //picture: ,
        Location: "Boulder, Colorado",
        Focus: "Endurance",
        AnnualGoal: "Break 2 hours and 30 minutes in the Marathon",
        userId: 3
    },
];

function GetUserId(userId){
    return Players.findIndex(x=> x.userId == userId);
}
module.exports = {
    UserProfile
}