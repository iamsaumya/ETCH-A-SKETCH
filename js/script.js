let resizebtn = document.getElementById("resize");
let blackbtn = document.getElementById("black");
let clearSketchbtn = document.getElementById("clearSketch");
let randomColors = document.getElementById("randomColors");

resizebtn.addEventListener("click", constructGrid);
blackbtn.addEventListener("click",fillBoxes);
clearSketchbtn.addEventListener("click",clearBoxes);
randomColors.addEventListener("click",fillBoxesRandom);

function constructGrid(e) {
    const container = document.getElementById("container");
    console.log(resizebtn);
    let ans = prompt("How many columns? Enter a number between 1 to 99.", "5");
    if(ans===null || ans<1 || ans>99){
        ans=25;
    }
    let string = "";
    container.innerHTML = "";
    container.style.gridTemplateColumns = string;
    container.style.gridTemplateRows = string;
    for(let i=1;i<=(ans*ans);i++){
        if(i<=ans)
            string = string +" 1fr";
        
         let node = document.createElement("DIV");
        node.classList.add("box");
        node.setAttribute("id",`"${i}"`);
        container.appendChild(node);
    }
    container.style.gridTemplateColumns = string;
    container.style.gridTemplateRows = string;
    fillBoxes();
}

function clearBoxes(e){
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box =>{
     box.style.backgroundColor ="white";
    });
}

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let generatedColor = "#";
    for(let i = 0 ; i<6 ;i++){
            generatedColor += letters.charAt(Math.floor(Math.random()*16));
    }
    
    return generatedColor;
}

function fillBoxes(e){
    clearBoxes();
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover",function(e){
      box.style.backgroundColor = "black";
    }));
}

function fillBoxesRandom(e){
    clearBoxes();
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover",function(e){
        box.style.backgroundColor =  getRandomColor();
    }));
}
