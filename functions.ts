function add(...args: number[]): number {
  return args.reduce((acc, curr) => acc + curr, 0);
}

function multiply(...args: number[]): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}

function concat(...args: string[]): string {
  return args.join('');
}

function toUpperCase(...args: string[]): string[] {
  return args.map(str => str.toUpperCase());
}
// factory function
function createPerson(name: string, age?: number): { name: string; age?: number } {
  if (age !== undefined) {
    return { name, age };
  }
  return { name };
}

const user: {
    name: string;
    age?: number;
    isAdmin: boolean;
} = {
    name: 'Maikon',
    isAdmin: true
}

console.log(add(1, 2, 3, 4)); // 10
console.log(multiply(1, 2, 3, 4)); // 24
console.log(concat('Hello, ', 'world', '!')); // 'Hello, world!'
console.log(toUpperCase('hello', 'world')); // ['HELLO', 'WORLD']
console.log(user);
console.log(createPerson('Maikon', 30)); // { name: 'Maikon', age: 30 }
console.log(createPerson('Ana')); // { name: 'Ana' }
