// singleton

// object literals
// object declare
// const jsUser ={}

const mySym = Symbol("key1")

const jsUser = {
    name:"Hitesh",
    "full name": "Nitish Kumar",  // esko .(dot) se access kr hi nhi skte
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "nikumar91@gmail.com",
    isLogedIn : false
}

// object ko kaise access krte hai
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Nitish@gmail.com"
Object.freeze(jsUser)
jsUser.email = "nitish@goggle.com"
//console.log(jsUser);


// functon add
jsUser.greeting = function(){
    console.log("Hello js user");   
}
jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);   
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


