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

//*********************************************************************** */
//stack(primitive) jb bhi stack memory use hoti hai
//  eska mtlb ye h jo bhi apne variable declare kiya uska copy milti hai

// , Heap(non primitive)
// jb bhi koi memory heap ke under defined hoti h 
// to wha se reference milta h original value ka 

//example
let myName = "Nitish"

let anotherName = myName
anotherName = "Raaj"
console.log( myName);
console.log(anotherName);

let userOne = {

email:"user@goggle.com",
upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "Nitish@goggle.com"
console.log(userOne.email);
console.log(userTwo.email);


