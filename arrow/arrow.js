const  user = {
    username: "Nitish",
    price: 999,
    wellcomeMessage: function(){
        console.log(`${this.username}, velcome to website`); // this means current context bnata h 
        // mtlb es scope ke undr ke  variable ko acces karne ke liye this lgate h
         console.log(this);
        
    }

}
// user.wellcomeMessage()
// user.username ="sam"
// user.wellcomeMessage()


 // console.log(this);

//  function chai(){
//     let username = "Nitish"
//     console.log(this.username);
    
//  }
//  chai()

//  const chai = function(){
//     let username = "Nitish"
//     console.log(this.username);
    
//  }
//  chai()

// arrow function
const chai =() => {
    let username = "Nitish"
    //console.log(this.username);
}
// chai()

// basics arrow function syntax
//() => {}

    // const addTwo = (num1, num2) => {
    //     return num1 + num2
    //{} ye use hua to return likhne ki jaryrat hai otherwise nhi 
    // }
    // console.log(addTwo(9, 4));

    // 2nd method emplicit return

    // const addTwo = (num1, num2) =>   num1 + num2 // return ka koi jarurat nhi hai
    // const addTwo = (num1, num2) =>   (num1 + num2)

    // object me
    const addTwo = (num1, num2) =>   ({username: "Nitish"})


    console.log(addTwo(9, 4));



