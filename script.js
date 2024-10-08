

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
// clonnedarr[3][0]="new newarrhere";

// console.log(arrOriginal.map((vals)=>{
//   console.log(`result new:   ${vals}`);
// }))

// console.log(clonnedarr.map((vals)=>{
//   console.log(`result old:   ${vals}`);
// }))     

// find ...........................................
// let arrone=new Array(1,2,3,1,4,1);

// console.log(arrone.find((Element)=>{
//  return Element>2;
// }));

// Mixing of arrays ........................................
// let arrone = new Array(1, 2, 3, 1, 4, 1);
// let empty = [722121,72121,72112,71211];

// let var2= empty.concat(arrone);  ...........  // agr array ko akhta krna chchta hai hm to concat b acha oppertunity rhy ga 
// console.log(var2)

// empty.push(arrone);   ...................... // is trha ya dono arrays ko hm akhta ni kr skain gy , ku ky ya aik array ko utha k us k andr rkh data hai 

// empty.push(...arrone);  ...................  // ya option b thek hai 1 array ko 2sra arry ma dalna ka 
// console.log(empty);

// ....... push  in array 
// resultone=33
// empty.push(resultone);
// console.log(empty)     

// .......  pop
// resultone=[33,43,34,54,6,77,88];
// empty.pop();
// console.log(empty) 

// resultone=[33,43,34,54,6,77,88];
// console.log(resultone);
// .........Tested all prototypes

// .......... shift and unshift 
// a=[33,43,34,54,6,77,88];
// let b=a.shift();
// console.log(b);
// console.log(a);
// a=[33,43,34,54,6,77,88];
// let b=a.unshift(99);
// console.log(b);

// // .......... slice and splice
// let a=[33,43,34,54,6,77,88];    ....// slice new rray return krta hai or is ma last range include ni hogi 
// let b=a.slice(0,3);
// console.log(b);

// .......... slice and splice
// let a=[33,43,34,54,6,77,88];    //... slice new rray return krta hai or is ma last range include ni hogi 
// let b=a.slice(0,3);
// console.log(b);
// console.log(a);

// let a=[33,43,34,54,6,77,88];       //... splice new rray return krta hai or is ma last range include hogi 
// let b =a.splice(0,3);              //... splice existing array ma b chcnge krta hai 
// console.log(b);
// console.log(a);                    

// ............................object are of two tyoes 
// ....Object singleton
// ....object literals

// ->>>>>>>>    here lets practice object litrals 
// let obj1 = {
  //   num2: 1,
  //   name: "zain",
  //   lastname:"Taseer",
  //   "full name":"zain Taseer Developer",
  //   login: false,
  //   objfordunc: {
    //     hi: 1,
    //     hj: "Nested obj me here"  // Yahaan comma hona chahiye
    //   },
    //   funcforobj: function(a) {
      //     console.log(6 + 3+a+this.num2);
//   }
// };

// obj1["full name"]="nani";
// // console.log(obj1.funcforobj(21));
// console.log(obj1["full name"]);

// ->>>>>>>>    here lets practice object singleton 
// let obj1=new Object();
// obj1.id=23;
// console.log(obj1["id"]);


// ----->   mixing of objects ( means kis trha hm object ko akhta krain )
// obj1={
//   num1: 1,
//     name1: "zain",
//     lastname1:"Taseer",
//     "full name1":"zain Taseer Developer",
// }

// obj2={
//   num2: 12,
//     name2: "zain2",
//     lastname2:"Taseer2",
//     "full namee2":"zain Taseer Developer2",
//     haha:{
//       one:1,
//       two:2
//     }
// }

// let mixobjs={...obj1,...obj2};
// let mixobjs=Object.assign({},obj1,obj2);
// console.log(mixobjs["lastname2"]);
// document.write( Object.values(obj2));  isi trha objects k kuch builtin fmethods hain 



//........... object de-structuring 
// let obj2={
//   num2: 12,
//     name2: "zain2",
//     lastname2:"Taseer2",
//     "full namee2":"zain Taseer Developer2",
// }

// let {name2:n2}=obj2;
// console.log(n2);
// Scope in js /................
// let a="billa";
// function func(){        //means global andr available hai 
// console.log("here is tested scope "+a);
// // let a="ali";         
// // or local bahir available ni hai 
// }

// func();
// console.log(a);