//  let firstname = "ritik";
//  const age = 19;
//  const lastname = Symbol ("xyz")
//  const x = true
//  var z ;
//  const a = { k : 7 }
//  const f = null
//  const c = [1, "x" , 3]
//  const inder = function inder(){

//  }


//  console.log(typeof firstname)
//  console.log(typeof age)
//  console.log(typeof lastname)
//  console.log(typeof y)
//  console.log(typeof x)
//  console.log(typeof a)
//  console.log(typeof c)
//  console.log(typeof inder)
//  console.log(typeof f)

// premitive datatypes

// strings, number, bollean,null, undefine,symbol, bigInt


// const a = new String('  stRing')
// const a2 = '20'
// const b = 20
// const c = null
// let d;

// const e = 34984302890324893204890324n

// console.log(a);
// console.log(a[0]);
// console.log(a.trim()[0]);
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());
// console.log(a.trim().length);


// non peremetive

// const myArray = ['apple', 'banana', 'orange']

// const object = {
//     name: 'anshul',
//     age: 19,
//     isLoggedin: false,
// }



// // console.log(myArray[0]);
// // console.log(object.name);
// // console.log(myArray.length)







// const varibale1 = "helllo"
// let variable2 = "name"
// var variable3 = 3

// // console.log(varibale1)






// // non peremetives datatypes



// // stacks (premitive datatypes)
// // heap ( non-premitive dataypes)





// function MyFunction(num1, num2) {
//     // console.log(num1 + num2)
//     return num1 + num2
//     console.log(num1 + num2)
// }

// const result = MyFunction(2, 2)
// const result1 = MyFunction(3, 2)

// console.log(result)
// console.log(result1)

// let newDate = new Date();
var time = document.getElementById("time")
let newDate = new Date().getFullYear();
console.log(newDate)

function yrs (){
 time.innerHTML = newDate();   
}