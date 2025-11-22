type VerifyUser = (user: User, sentValue: User) => boolean;
type User = {
    name: string;
    password: string;
}
const verifyUser: VerifyUser = (user, sentValue) => {
    return user.name === sentValue.name && user.password === sentValue.password;
}
const user1: User = {
    name: 'Maikon',
    password: '123456'
}
const sentValue1 = {
    name: 'Maikon',
    password: '123457'
}
console.log(verifyUser(user1, sentValue1)); // true