console.log("Adding 2 items in middle");
let animals = ["Cow", "Goat"]
animals.splice(1, 0, "Horse");
animals.splice(1, 0, "Camel");
console.log(animals);

console.log("%cConcating 2 Array","font-weight: bold");
let arr1 = ["Horse","Cow"]
let arr2 = ["Zebra", "Tiger"]
let arr12 = arr1.concat(arr2);
let arr3 = [...arr1,...arr2];
console.log("Array 1",arr1);
console.log("Array 2",arr2);
console.log("Array 1+2",arr12);
console.log("Array 1+2",arr3);

console.log("%cLoop in Array","font-weight: bold");
console.log("%cFor Loop","font-weight: bold");

for(let i=0;i<arr3.length;i++){
    console.log(arr3[i]);
}

console.log("%cUsing forEach","font-weight: bold");
let arr4 = ["Horse","Cow","Donkey"]
arr4.forEach((arr,index)=>{
    console.log(arr,index);
})

let num=[1,2,3,4,5];
let newNum=[];
for(let i = 0;i<num.length;i++){
    newNum.push(num[i]+5);
}
console.log(num);
console.log(newNum);
let ComNum = [...num,...newNum];
console.log(ComNum);

let newNum2 = [];
num.forEach(n => {
    if(n % 2 === 0) {
        newNum2.push(n + 3);
    } else {
        newNum2.push(n + 7);
    }
});

console.log(newNum2); 
