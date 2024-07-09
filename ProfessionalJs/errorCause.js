/*
Create an Error with a cause
*/
try {
    throw new Error('Something went wrong', { cause: new Error('Original error') });
  } catch (error) {
    console.log(error.cause);
  }
  