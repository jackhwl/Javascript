/*
Use the rest operator to collect arguments into a single array
*/
function collect(...args) {
    console.log(args);
  }
  
  // Use the spread operator to expand elements of an array
  const arr = [1, 2, 3];
  const newArr = [4, 5, ...arr];
  console.log(newArr);
  