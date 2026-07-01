//const tinderUser = new Object()  // singleton object hai
const tinderUser = {}
tinderUser.id = "123abcc" 
tinderUser.name = "Nitish"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "nik@goggle.com",
    fullname:{
       userFullname:{
           firstname: "Nitish",
           lastname: "Kumar"
        }
    
    }
}
// console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = Object.assign({}, obj1, obj2, obj4)
// console.log(obj3);

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
         id:  1,
         email: "h@gmail.com"
    },
    {
         id:  1,
         email: "h@gmail.com"
    },
    {
         id:  1,
         email: "h@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// object de-structure

const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor);

//  ********************** API *********************
// json
// {
//    name: "Hitesh",
//    coursename: "js hindi",
//    price: "free"
// }

[
    {},
    {},
    {}

]
