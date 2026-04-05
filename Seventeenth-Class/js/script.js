// querySelectorAll('.box')

const wraps = document.querySelectorAll('.wrapper');

wraps.forEach((wrap, wrapIndex) => {
    const boxes = wrap.querySelectorAll('.box');

    if (wrapIndex === 0) {
        boxes.forEach((box, index) => {
            box.innerText = index === 0 ? 'first box' : 'second box';
        });
    } else {
        boxes.forEach((box, index) => {
            box.innerText = `box ${index + 1}`;
        });
    }
});

const toggleBtn = document.getElementById("togglebtn");
const addBtn = document.getElementById("addbtn");
const removeBtn = document.getElementById("removebtn");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

addBtn.addEventListener("click", () => {
    document.body.classList.add("dark");
});

removeBtn.addEventListener("click", () => {
    document.body.classList.remove("dark");
});