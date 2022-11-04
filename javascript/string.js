//Feautres of string in javascript
//string literals
// string interpolation


let naam = "pranav"
console.log(naam.length);


//slice(start, end)
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
let part2 = str.slice(7)
console.log(part)
console.log(part2);
//If a parameter is negative, the position is counted from the end of the string.

//substring(start, end) simillar to slice() but without negative index

//substr(start, length) but here the second parameter is length

// replace(substring_to_be_replaced, replacing_string)
// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// by default case sensitive
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

// trim() will remove whitespace form a string
let string = 'this is a test'
let trimeer = string.trim()

let text1 = "Hello        World!      ";
let text2 = text1.trim();

console.log(text2)