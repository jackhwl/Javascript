/*
Convert the start function into async/await syntax
*/
function doInSeconds(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Success'), seconds * 1000);
    });
}
console.log("Setting the alert in 2 seconds");
  
doInSeconds(2).then(m=> alert(m));

(async function() {
    const message = await doInSeconds(2);
    alert(message);
})();


 async function start() {
    try {
        var value = await doInSeconds(2);
        alert(value);
    } catch (e) {
        console.error(e);
    }

    console.log(value)
  }
  
  start();
  