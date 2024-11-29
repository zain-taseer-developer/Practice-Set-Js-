

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

// Stack and Heap MEMORY
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

//   ..........    practice of loops 
// for loop below 
// for(let i=0; i<=20; i++){
// console.log(`value of i is ${i}`);
// }

// ..............   for loop for array
// let arr=["sasaa",2,3,5,6,90];
// for(let i=0; i<arr.length; i++){
//   console.log(`value of i is ${arr[i]}`);
//   }

// ...............  for loop for object 
// let obj={
//   sasaa:'ONEval',
//   2:'twoval',
//   3:'threeval',
//   5:'fourval',
//   6:'fiveval',
//   90:'sixval'
// };
// for(let i=0; i<Object.keys(obj).length; i++){
//   let key=Object.keys(obj)[i];
//   // console.log(key);
//   console.log(`value of i is ${obj[key]}`);
//   }

// ..............  for in loop  in object 
// let obj={
//   sasaa:'ONEval',
//   2:'twoval',
//   3:'threeval',
//   5:'fourval',
//   6:'fiveval',
//   90:'sixval'
// };
// for (const key in obj) {
//  console.log(`keys are : ${key} and values are ${obj[key]}`);
// }

//  ...............   for of loop    in array 
// let arr=[
//   "ONEval",
//   "twoval",
//   "threeval",
//   "fourval",
//   "fiveval",
//   "sixval"
// ];
// for (const element of arr) {
//   console.log(element);
// }

// .............   foreach loop for array
// let arr=[
//     "ONEval",
//     "twoval",
//     "threeval",
//     "fourval",
//     "fiveval",
//     "sixval"
//   ];

//   arr.forEach((element,index,arrayhere)=>{
// console.log(`arr values are : ${element} and index are : ${index} and whole arr is ${arrayhere}`)
//   });;

// // ..............  while or do while loops
//          while 
// let arr=[2,3,5,6,7,8]; 
// let count=0;
// while (count<arr.length) {
//   console.log(arr[count]);
//   count++;
// }

//       do while 
// let arr=[2,3,5,6,7,8]; 
// let count=0;
// do{
//   count++;
// document.write(`this is do part <br>`);
// }while(count<arr.length);

//   ....................   filter , map , reduce 
// filter    >>>>>>>>>>>>>>>>>>>>>>>>
// let arr=[2,3,5,6,7,8]; 
// let filteredVals=arr.filter((valsall)=>{
//  return (valsall>3);
// });

// document.write(filteredVals);

// map   >>>>>>>>>>>>>>>>>>
// let arr=[2,3,5,6,7,8]; 
// let result=arr.map((vallAll)=>{
// return (vallAll+1);
// })

// console.log(result);

// reduce >>>>>>>>>>>
// syntax below start   
// array.reduce((accumulator, currentValue, currentIndex, array) => {
// Operation on accumulator and currentValue
  // return accumulator;
// }, initialValue);
// syntax above ends 

// reduce example 
// let arr=[1,2,3];
// let sum = arr.reduce((accuVal, initialVal) => {
//  return (accuVal + initialVal);
// },0);
// console.log(sum); 


///////////////////////////////////////////////////////////   ******************   ///////////////

// DOM 
// innerText: Sirf wo text return karta hai jo actually webpage pe dikh raha hota hai. Yeh CSS styles (like display: none, visibility: hidden) ko follow karta hai. Agar koi text hidden ho ya style ke through visible na ho, toh innerText usse ignore kar deta hai.

// textContent: Saare text ko return karta hai jo element ke andar hota hai, chahe wo hidden ho ya visible. Yeh CSS properties ko ignore karta hai aur har text ko capture karta hai.

// let b= document.getElementById('h3hereid').innerText;
// console.log(`a: ${b}`);

// let a= document.getElementById('h3hereid').textContent;
// console.log(`a: ${a}`);

// ......................  how we deal with elements classes as it return HTML collection
// in this way , we convert html collection to an Array then easily we use array methods in it 
// let classes=document.getElementsByClassName('classes');
// let convertItToArray=Array.from(classes);
// console.log(convertItToArray.forEach((vals)=>{
// vals.style.backgroundColor = "red";
// }));

// this is not only one way to deal with html collection there are many other ways like below for loop 
// let classes=document.getElementsByClassName('classes');
// for(let i=0; i<=classes.length; i++){
//   console.log(classes[i]);
//   classes[i].style.backgroundColor = "red";
// }


// ......................   .......  some more selectors 
// Queryselector and QueryselectorAll
// Query selector will return us a Nodelist we can go to its prototypes and from these we get foreach idea so we apply 
// let classes=document.querySelectorAll('.classes');
// classes.forEach((e)=>{
// e.style.backgroundColor = "red";
// })

// spread and rest operator in array 
// rest oparator here 
// function naizi(a,b,c,...restall){
// console.log(a,b,c);
// console.log(restall[2]);
// }
// naizi(2,5,7,4,5,3);

// spread operator here 
// let a=[32,43,54,6576,34,32,24,3]
// function wazir(a,b){
// console.log(`Here value of a is : ${a} and b is : ${b}`);
// }
// wazir(...a);



// Some thing confussuion here 
// let arr2=[1,4,3,2,5,6];
// arr2.forEach((num)=>{
//   console.log(num);
//   if(num==3){
//     // return;
//     arr2.length=0;
//   }
// })
