// let ajay={Address:"Baund Kalan", Contact:["123456","987654"]}
// let a=Object.values(ajay);
// let k=Object.keys(ajay);
// let e=Object.entries(ajay);
// // let arr=

// console.log(a);
// console.log(k);
// console.log(e);

let arr=[
  {
    "_id": "639c800f8cca6fbf02c76b7a",
    "age": 63,
    "name": "Doris Macdonald",
    "address": "736 Dekoven Court, Kirk, Guam, 9437"
  },
  {
    "_id": "639c800fdcd18f1b488ac80a",
    "age": 21,
    "name": "Susana Booker",
    "address": "412 Wyona Street, Brutus, Colorado, 433"
  },
  {
    "_id": "639c800f42a242702d0b3f64",
    "age": 59,
    "name": "Tyson Chase",
    "address": "202 Clarkson Avenue, Riegelwood, Minnesota, 8667"
  },
  {
    "_id": "639c800f8c427e5b797344ec",
    "age": 76,
    "name": "Allison Duke",
    "address": "364 Noll Street, Allendale, Maryland, 4429"
  },
  {
    "_id": "639c800ff310b5fc35cd45e8",
    "age": 58,
    "name": "Angeline Ellison",
    "address": "546 Hinckley Place, Torboy, South Carolina, 9620"
  },
  {
    "_id": "639c800f26a7b218e16e095e",
    "age": 80,
    "name": "Justine Gutierrez",
    "address": "734 Cleveland Street, Newkirk, Idaho, 8590"
  },
  {
    "_id": "639c800f571be3216875c289",
    "age": 18,
    "name": "Leonard Mayo",
    "address": "879 Bergen Avenue, Homestead, Hawaii, 4481"
  },
  {
    "_id": "639c800f17c6272eceb43ba0",
    "age": 24,
    "name": "Jasmine Lowery",
    "address": "808 Norfolk Street, Gadsden, Wisconsin, 8430"
  }
]
// let name=Object.values(arr);
// console.log(name);
let name=[];
for(let i=0;i<arr.length;i++){

  name.push(arr[i].name)
}
console.log(name);

function GetAllValues(arr){

  let ret=[];

  for(let i=0;i<arr.length;i++){
    ret.push(Object.values(arr[i]))

    
    
  }

  return ret;
  
  
}
// console.log(GetAllValues(arr))
// console.log(ret[i])
// you have to create a function

// I want a result something like 
// output 
// ["Doris Macdonald","Jasmine Lowery","Leonard Mayo","Justine Gutierrez", "Angeline Ellison","Tyson Chase","Susana Booker"]