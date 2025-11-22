type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const person: Person = {
    name: 'Maikon',
    age: 30
};

console.log(person);

type AB = 'A' | 'B';
type BC = 'B' | 'C';

type Intersection = AB & BC; // 'B'

console.log(`Intersection type value: ${'B' as Intersection}`);