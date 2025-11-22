type MapStringCallback = (input: string) => string;
function mapStrings(array: string[], callback: MapStringCallback): string[] {
    const result: string[] = [];
    for (const str of array) {
        result.push(callback(str));
    }
    return result;
}

const strings = ['maikon', 'ana', 'carlos'];
const uppercasedStrings = mapStrings(strings, str => str.toUpperCase());
console.log(uppercasedStrings); // ['MAIKON', 'ANA', 'CARLOS']