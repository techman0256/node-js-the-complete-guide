// Array methods

//toString method
let num = [1, 2, 3, "I am going to sleep", "Pranav is sleeping"]
let b = num.toString();

console.log(typeof(b), b, num);

// join() method
let c = num.join('%')
console.log(typeof(c), c);

// pop() deletes last elements of array
num.pop()
// let r = num.pop();
console.log(num.pop());