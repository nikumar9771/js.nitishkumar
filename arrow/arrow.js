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


 console.log(this);

