const container = document.querySelector(".container");
let colour = "pink";

for(let i=0; i<16; i++){
    const div = document.createElement("div");
    div.className = "row"
    div.style.height = `${800/16}px`;
    for(let j=0; j<16; j++){
        const divChild = document.createElement("div");
        divChild.className = "elements";
        divChild.style.height = `${800/16}px`;
        divChild.style.width = `${800/16}px`;
        div.appendChild(divChild);
    }
    container.appendChild(div);
}

let newGridParameters = () => {
    let rows = prompt("Enter the no. of rows");
    let columns = prompt("Enter the no. of columns");
    for(let i=0; i<rows; i++){
        const div = document.createElement("div");
        div.className = "row";
        div.style.height = `${800/rows}px`;
        for(let j=0; j<columns; j++){
            const divChild = document.createElement("div");
            divChild.className = "elements";
            divChild.style.height = `${800/rows}px`;
            divChild.style.width = `${800/columns}px`;
            div.appendChild(divChild);
        }
        container.appendChild(div);
    }
};
container.addEventListener("mouseover", (e) =>{
    if(e.target.className ===  "elements"){
        if(colour == 1) e.target.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        else e.target.style.backgroundColor = colour;
    }
});

const gridGeneratorButton = document.querySelector("#gridGenerator");
gridGeneratorButton.addEventListener("click", () => {
    container.replaceChildren();
    newGridParameters();
});

const options = document.querySelector("#options");
options.addEventListener("click", (e) => {
    if(e.target.id == "allColours") colour = 1;
    if(e.target.id == "randomizedColour"){
        colour = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    }
});
