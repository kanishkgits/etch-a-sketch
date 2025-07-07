const container = document.querySelector(".container");

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
        e.target.style.backgroundColor = "pink";
    }
});

const button = document.querySelector("#gridGenerator");
button.addEventListener("click", () => {
    container.replaceChildren();
    newGridParameters();
});