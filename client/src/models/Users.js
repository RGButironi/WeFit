const Users = [
    { Name: 'Ron', Password: "pass", Email: 'ron@gmail.com'},
];

export let CurrentUser = null;

export function Login(email, password) {
    const user = Users.find(x => x.Email == email);

    if(!user) throw Error('User not found')
    if(user.Password != password) throw Error('Wrong password')

    return CurrentUser = user;
}