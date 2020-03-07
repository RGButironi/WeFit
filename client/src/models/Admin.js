const Admin = [
    { Name: 'Ron', Password: "pass", Email: 'ron@gmail.com'},
];

export let CurrentAdmin = null;

export function AdminLogin(email, password) {
    const admin = Admin.find(x => x.Email == email);

    if(!admin) throw Error('User not found')
    if(admin.Password != password) throw Error('Wrong password')

    return CurrentAdmin = admin;
}