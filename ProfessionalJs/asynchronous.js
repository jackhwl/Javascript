/*
Use for await...of to iterate over async data
*/
async function* asyncGenerator() {
    yield 'a';
    yield 'b';
    yield 'c';
  }
  async function start() {
    for await (const value of asyncGenerator()) {
      alert(value);
    }
  }
  
  start();
  