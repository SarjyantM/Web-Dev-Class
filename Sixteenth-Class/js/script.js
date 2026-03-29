window.addEventListener("DOMContentLoaded", () => {
    const boss = document.getElementById("boss");
    boss.innerText = "I am The BOSS";
    console.log(boss);

    const boxes = document.getElementsByClassName("box");
    console.log(boxes);

    for (let i = 0; i < boxes.length; i++) {
        if(i == 0) {
            boxes[i].innerText = "This is Box 1";
        }
    }
});

// Query Selector All to get last element of box

const boxes=document.querySelectorAll(".box");
for (let n=0; n < boxes.length; n++) {
    if (n === boxes.length - 1) {
        boxes[n].innerText = "Last Box";
    }
}
