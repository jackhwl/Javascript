/*
Convert this callback example to the Promise pattern and handle it with then and catch
*/
function doInSeconds(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, seconds*1000)
    })
    setTimeout(callback, seconds*1000)
  }
  
  console.log("Setting the alert in 2 seconds");
  doInSeconds(2)
    .then(value=>alert(value))
    .catch(error=>console.error(error))

  