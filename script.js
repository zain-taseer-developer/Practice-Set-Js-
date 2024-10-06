

//  pre and post INCREMENT
// let goal = 20;
// let goaladded = goal++;
// // goaladded = goal;
// console.log(`goal :${goal}`);
// console.log(`goaladded :${goaladded}`);
// let goaladdedinNew = goal++;
// console.log(goaladdedinNew);

// console.log(goal);

// BIGINT
// 1)
// let num1 = 5;
// let bigNum1 = 10n;
// console.log(typeof(bigNum1))
// console.log(BigInt(num1) + bigNum1);
// 2)
// let num2 = 5;
// let bigNum2 = 10545445455n;
// console.log(num2+ Number(bigNum2));

// SYMBOLS 
// let symbol1=Symbol('this is symbol 1');
// let symbol2=Symbol('this is symbol 1');
// let confirmvalues= (symbol1==symbol2);
// console.log(confirmvalues);

// Stact and Heap MEMORY
// Primitive	
//  Examples: string, number, boolean, null, undefined, symbol, bigint	
//  in primitive stact memory used 

//  Non-Primitive (Reference)
//  Examples: object, array, function, date
//  in non primitive Heap memory used 


//  shallow andd deep copyn
// shallow copy
//      let originalObj = {
//   name: "John",
//     age: 30,
//     address: "123 Street"
// };

// // Creating a shallow copy using Object.assign()
// let shallowCopy = Object.assign({}, originalObj);
// // let updatedPerson = { ...originalObj, name: "Bob" };
// // Modifying the nested object in the copy
// shallowCopy.age = 35;

// console.log(originalObj.age); // 35 (affected because of shared reference)
// console.log(shallowCopy.age); // 35 (same reference)

// Deep copy 
// let originalObj = {
//   name: "John",
//   details: {
//     age: 30,
//     address: "123 Street"
//   }
// };

// // Creating a deep copy using JSON methods
// let deepCopy = JSON.parse(JSON.stringify(originalObj));
// // console.log(typeof deepCopy);

// // Modifying the nested object in the deep copy
// deepCopy.details.age = 35;

// console.log(originalObj.details.age); // 30 (not affected)
// console.log(deepCopy.details.age);    // 35 (separate copy)

// -------------> Deep and shallow copy example in object
// let originalObj = {
//   name: "John",
//   details: {
//     age: 30,
//     address: "123 Street"
//   }
// };

// // let cone= Object.assign({}, originalObj);
// let cone=JSON.parse(JSON.stringify(originalObj));
// // console.log(typeof cone)
// cone.details.age=59;
// console.log(`original bj: ${originalObj.details.age}`)
// console.log(`conned obj:  ${cone.details.age}`);

// -------------> Deep and shallow copy example in array
// shallow copy 
// let arrOriginal=["one","two","three","four"]
// let arrClonned=[...arrOriginal];
// arrClonned[0]="fun";

// arrOriginal.map((vals)=>{
// console.log(`old : ${vals}`);
// })
// arrClonned.map((vals)=>{
// console.log(`Clonned ${vals}`);
// })

// Deep copy 
// let arrOriginal=["one","two","three",["four","five"]];
// // let clonnedarr=[...arrOriginal];
// let clonnedarr=JSON.parse(JSON.stringify(arrOriginal));
// clonnedarr[3][0]="new lun";

// console.log(arrOriginal.map((vals)=>{
//   console.log(`result new:   ${vals}`);
// }))

// console.log(clonnedarr.map((vals)=>{
//   console.log(`result old:   ${vals}`);
// }))     

