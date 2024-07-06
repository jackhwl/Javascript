/*
Use top-level await to fetch data at the module level
*/
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);
