let x = [1, 2, 3, 4] === [1, 2, 3, 4]; // the data is saved in different memory locaction object
console.log(x); // return false it allocate new memory of different array. it check as another array.
let y = [1, 2, 3, 4]; // never used

x = "hello" === "hello"; //primitive data reverance by  value
console.log(x); //return true it will only check the value. It changes value not the data type it is immutable
