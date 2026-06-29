let myDate = new Date()
//console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // interview question eska type object hota h

//let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date(2026-0-23)
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
 // console.log(myCreatedDate.getTime()); // milisecond ko nikalta hai
console.log(Math.floor(Date.now()/100)); // second me convert krta hai interveww question


let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default' , {
 weekday: "long"
})


