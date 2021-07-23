var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };

var isEqualsJson = (obj1, obj2) => {
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    return keys1.length === keys2.length && keys1.every(key => obj1[key] == obj2[key]);
}
console.log(isEqualsJson(obj1, obj2));


var obj1 = { name: "Person 1", age: 5 };
var obj2 = { age: 5, name: "Person 1" };
 var ans=(obj1,obj2)=>{
     keys1=Object.keys(obj1);
     keys2=Object.keys(obj2);
     return keys1.length===keys2.length&&keys1.every(key=>obj1[key]==obj2[key]);
 }
 console.log(ans(obj1,obj2));