/*
Use the flat method to flatten the nested array
*/
const arr = [1, [2, [3, [4]]]];
const flattened = arr.flat(2);
console.log(flattened);

/*
Use the flatMap method to map and flatten the array
*/
const arr2 = [1, 2, 3, 4];
const result = arr2.flatMap(x => [x, x * 2]);
console.log(result);
