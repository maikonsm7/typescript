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

export class AnimalSounds {
    public playSound(animal: Animal): void {
        animal.makeSound();
    }
}

const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');    
const animalSounds = new AnimalSounds();
animalSounds.playSound(dog); // Buddy says: Woof! Woof!
animalSounds.playSound(cat); // Whiskers says: Meow! Meow!