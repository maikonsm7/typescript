export class User{
    private _firstName: string = '';

    get firstName(): string {
        return this._firstName;
    }

    set firstName(name: string) {
        this._firstName = name;
    }
}

const user1 = new User();
user1.firstName = 'Maikon';
console.log(user1.firstName); // Maikon