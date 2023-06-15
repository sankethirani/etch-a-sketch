function populateGrid(){
    const gridContainer = document.querySelector("#grid-container");
    for (i = 0; i < 16; i++){
        let divRow = document.createElement("div");
        gridContainer.appendChild(divRow);
        for (j = 0; j < 16; j++){
            const div = document.createElement("div");
            div.className = "cell";
            divRow.appendChild(div);
        }
    }
}

function hoverEffect(e){
    this.style.backgroundColor = "red";
}

populateGrid();
cells = document.querySelectorAll(".cell");
cells.forEach(cell => cell.addEventListener("pointerenter", hoverEffect));
