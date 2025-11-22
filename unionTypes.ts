function addOrConcat(a: number | string, b: number | string): number | string {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    // mixed types: convert both to string and concatenate
    return `${a}${b}`;
}

console.log(addOrConcat(5, 10));           // 15
console.log(addOrConcat('Hello, ', 'world!')); // 'Hello, world!'
console.log(addOrConcat(5, ' apples'));     // '5 apples'
console.log(addOrConcat('Number: ', 10));   // 'Number: 10'