console.log("Multiple of 2 using For Loop")
for (let n=2;n<=20;n+=2){
    console.log(n)
}
console.log("Multiple of 2 using While Loop")
let i = 1;
while(i <= 10) {
    console.log(i * 2);
    i++;
}
console.log("Break and Continue")
for (let l=1;l<=20;l++){
    if(l==3){
        continue;
    }
    if(l>=15){
        break;  
    }
    console.log(l);
}