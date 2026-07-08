// for off loop
// ["", "", "",""]
// [{}, {}, {}, {}]

// const arr = [1, 2, 3, 4, 5]
// for(const iterator of object){

// }


// const arr = [1, 2, 3, 4, 5]
// for(const num of arr){
//     console.log(num);
    
// }

// const greetings = "Hello world"
// For (const greet of greetings){
//     console.log(`each char is ${greet}`);
// }


// Map (unique value deta h same order me)

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "united state of america")
map.set('Fr', "france")
// console.log(map);

for(const [key, value] of map){
    //console.log(key, ':-', value);
    
}

// for in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject){
    //console.log(`${key}shortcut is for ${myObject[key]}`);
    
}

const programming = ["js","rb", "py","java","cpp"]
for (const key in programming){
  // console.log(programming[key]);
   
}


// for each loop

const coding = ["js", "ruby", "java","python","cpp"]
// coding.forEach(function (val){
//     console.log();
    
// })

// coding.forEach( (val) =>{
//     console.log(val);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    //console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})