// function creation

function sayMyName(){
    console.log("N");
    console.log("i");
    console.log("t");
    console.log("i");
    console.log("s");
    console.log("h");
    
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}


 const result = addTwoNumber(9, 9)
 // console.log("result", result);

 function loginUserMessage(username){
    if(!undefined){
    //if(username === undefined){
        console.log("please enter a username");
        return
        
    }
    return`${username} just logged in`
 }
 //console.log(loginUserMessage("Nitish"));
 console.log(loginUserMessage());
 



