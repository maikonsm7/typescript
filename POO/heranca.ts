export abstract class Animal {
    constructor(protected name: string) {}
    abstract makeSound(): void;
}

export class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Woof! Woof!`);
    }
}

export class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Meow! Meow!`);
    }
}   
const dog = new Dog('Buddy');
dog.makeSound(); // Buddy says: Woof! Woof!

const cat = new Cat('Whiskers');
cat.makeSound(); // Whiskers says: Meow! Meow!