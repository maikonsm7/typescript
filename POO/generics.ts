type ReduceCallback<T> = (acum: number, actual: T, array?: T[]) => number;

function reduceArray<T>(array: T[], callback: ReduceCallback<T>): number {
  let acum: number = 0;
  for (let i = 0; i < array.length; i++) {
    acum = callback(acum, array[i]);
  }
  return acum;
}

const array = [1, 2, 3, 4, 5];

const result = reduceArray(array, (acum, actual) => acum + actual);
console.log(result); // 15
