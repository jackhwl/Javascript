/*
Create a Symbol and use it as a property key in an object
*/
const sym = Symbol('description');
const obj = {
  [sym]: 'value'
};
console.log(obj[sym]);

const globalSymbol = Symbol.for('description');
