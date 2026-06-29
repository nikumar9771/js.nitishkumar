// Array

  const myArr = [0, 1, 2, 3, 4, 5]
 const myHerro = ["saktiman"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // array ke starting me add ho jata hai
//  myArr.shift() // delete ho jata hai starting se


//  console.log(myArr.includes(9));
//  console.log(myArr.index0f(3));


// const newArr = myArr.join()

// console.log(myArr);
 
// console.log( newArr);



//slice (slice() किसी ऐरे के कुछ हिस्सों (elements) को निकालकर एक नया ऐरे बनाता है।
// मूल ऐरे (Original Array): यह मूल ऐरे में कोई बदलाव नहीं करता।वाक्यविन्यास (Syntax):
//  array.slice(start, end) (end इंडेक्स शामिल नहीं होता है))

// , splice
// 2. splice()splice() का उपयोग मूल ऐरे में नए एलिमेंट जोड़ने, पुराने एलिमेंट हटाने या दोनों एक साथ करने के लिए किया जाता है।
// मूल ऐरे (Original Array): यह मूल ऐरे को सीधे तौर पर बदल देता है (mutates)।वाक्यविन्यास
//  (Syntax): array.splice(index, deleteCount, item1, ...itemN) index:
//  जहाँ से बदलाव शुरू करना है ।deleteCount: कितने एलिमेंट हटाने हैं ।

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // interview question difference between splice and slice
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("c ", myArr);
console.log(myn2);


