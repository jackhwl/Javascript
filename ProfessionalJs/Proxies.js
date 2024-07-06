/*
Use the Reflect API to define a Proxy for an object
*/
const target = { name: "Joseph" };
const handler = {
  get: (obj, prop) => {
    console.log(`Trying to get "${prop}" from "${JSON.stringify(obj)}"`)
    return Reflect.get(obj, prop) || 'default';
  }
};
const proxy = new Proxy(target, handler);
console.log(proxy.name);
