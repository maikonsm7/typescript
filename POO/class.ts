export class User {
    name: string;
    password: string;

    constructor(name: string, password: string) {
        this.name = name;
        this.password = password;
    }

    public welcomeMessage(): string {
        return `Welcome, ${this.name}!`;
    }
}

const user1 = new User('Maikon', '123456');

console.log(user1.welcomeMessage());