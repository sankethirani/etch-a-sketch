function populateGrid(cellCount){
    const gridContainer = document.querySelector("#grid-container");
    var child = gridContainer.lastElementChild;
    while(child){
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
    
    for (i = 0; i < cellCount; i++){
        let divRow = document.createElement("div");
        gridContainer.appendChild(divRow);
        for (j = 0; j < cellCount; j++){
            const div = document.createElement("div");
            div.className = "cell";
            divRow.appendChild(div);
        }
    }

    cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.addEventListener("pointerenter", hoverEffect));
}

function hoverEffect(e){
    this.style.backgroundColor = "red";
}

function updateGrid(){
    const input = prompt("How many rows and columns do you want on the grid?");
    const cellCount = parseInt(input);
    if (!isNaN(cellCount) && cellCount <= 100 && cellCount > 0){
        populateGrid(cellCount);
    }
    else{
        alert("that will not work");
    }
}


populateGrid(16);
document.querySelector("#btn-update-grid").addEventListener("click", updateGrid);