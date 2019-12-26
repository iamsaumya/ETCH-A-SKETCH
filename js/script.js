let resizebtn = document.getElementById("resize");
let blackbtn = document.getElementById("black");
let clearSketchbtn = document.getElementById("clearSketch");
let randomColorsbtn = document.getElementById("randomColors");
let greyScalebtn = document.getElementById("greyScale");


greyScalebtn.addEventListener("click", greyScaleFilling);
resizebtn.addEventListener("click", constructGrid);
blackbtn.addEventListener("click", fillBoxes);
clearSketchbtn.addEventListener("click", clearBoxes);
randomColorsbtn.addEventListener("click", fillBoxesRandom);

function constructGrid(e) {
    const container = document.getElementById("container");
    console.log(resizebtn);
    let ans = prompt("How many columns? Enter a number between 1 to 99.", "5");
    if (ans === null || ans < 1 || ans > 99) {
        ans = 25;
    }
    let string = "";
    container.innerHTML = "";
    container.style.gridTemplateColumns = string;
    container.style.gridTemplateRows = string;
    for (let i = 1; i <= (ans * ans); i++) {
        if (i <= ans)
            string = string + " 1fr";

        let node = document.createElement("DIV");
        node.classList.add("box");
        node.setAttribute("id", `"${i}"`);
        container.appendChild(node);
    }
    container.style.gridTemplateColumns = string;
    container.style.gridTemplateRows = string;
}

function clearBoxes(e) {
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let generatedColor = "#";
    for (let i = 0; i < 6; i++) {
        generatedColor += letters.charAt(Math.floor(Math.random() * 16));
    }

    return generatedColor;
}

function fillBoxes(e) {
    clearBoxes();
    clearListeners();
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover",blackColor));
}

function blackColor(e) {
        this.style.backgroundColor = "black";
}
function fillBoxesRandom(e) {
    clearBoxes();
    clearListeners();
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover",randomColors));
}

function randomColors(e) {
        this.style.backgroundColor = getRandomColor();
}

function greyScaleFilling(e) {
    
    clearBoxes();
    clearListeners();
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover", greyColor));
}

function greyColor(e){
        let colors = ["rgb(255, 255, 255)", "rgb(230, 230, 230)", "rgb(204, 204, 204)", "rgb(179, 179, 179)", "rgb(153, 153, 153)", "rgb(128, 128, 128)", "rgb(102, 102, 102)", "rgb(77, 77, 77)", "rgb(51, 51, 51)", "rgb(26, 26, 26)", "rgb(0, 0, 0)"]
        let element = getComputedStyle(this);
        let col = element.backgroundColor;
        console.log(col);
        for (let i = 0; i < 10; i++) {
            if (colors[i] == col) {
                this.style.backgroundColor = colors[i + 1];
                break;
            }
        }
}

function clearListeners(){
        let boxes = document.querySelectorAll(".box");
        boxes.forEach(box => box.removeEventListener("mouseover",blackColor));
        boxes.forEach(box => box.removeEventListener("mouseover",randomColors));
        boxes.forEach(box => box.removeEventListener("mouseover",greyColor));
}