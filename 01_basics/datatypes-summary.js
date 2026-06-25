// primitive

// 7types--> string, number, boolean, null, undefined, symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsiderTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId);

// const bigNumber = 45545522522555555n // last me n kr dijiye bigint bn jayega


// Reference (non primitive)

// Array, object, function

let myObj = {
    name: "Nitish",
    age: 22,
}
// {} ke under jo bhi hote h object hote hai

const myFunction = function(){
   console.log('Hello World');
}
console.log(typeof myFunction);


