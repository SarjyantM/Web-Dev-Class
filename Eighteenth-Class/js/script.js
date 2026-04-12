const textbox = document.getElementById("textbox");
const redbtn = document.getElementById("redbtn");
const yellowbtn = document.getElementById("yellowbtn");
const bluebtn = document.getElementById("bluebtn");

redbtn.addEventListener("click", () => {
    textbox.textContent = "Red button clicked";
    textbox.style.backgroundColor = "red";
    textbox.style.color = "white";
});

yellowbtn.addEventListener("click", () => {
    textbox.textContent = "Yellow button clicked";
    textbox.style.backgroundColor = "yellow";
    textbox.style.color = "black";
});

bluebtn.addEventListener("click", () => {
    textbox.textContent = "Blue button clicked";
    textbox.style.backgroundColor = "blue";
    textbox.style.color = "white";
});


console.log("1");
setTimeout(() => {
    console.log("2 ");
}, 100);

setTimeout(() => {
    console.log("3");
}, 0);

Promise.resolve().then(() => {
    console.log("4");
}).then(() => {
    console.log("5");
});

console.log("6");
