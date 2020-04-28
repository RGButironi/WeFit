const Users = [
    { Name: 'Ron', Password: 'ron', Email: 'ron@np.edu', userId: 0 },
    { Name: 'Conor', Password: 'conor', Email: 'conor@np.edu', userId: 1},
    { Name: 'Mike', Password: 'mike', Email: 'mike@np.edu', userId: 2 },    
];

module.exports = {
    Login(email, password) {
    
        const user = Users.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong Password');
    
        return user;
    },
    Get(userId) {
        return Users[userId]
    }
}