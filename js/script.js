fillBoxes();
let resizebtn = document.getElementById("resize");
let blackbtn = document.getElementById("black");
resizebtn.addEventListener("click", constructGrid);
blackbtn.addEventListener("click",fillBoxes);

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

function fillBoxes(e){
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover",function(e){
    e.target.style.backgroundColor = "black";
    }));
}

