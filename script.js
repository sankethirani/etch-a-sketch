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

function activateHoverEffect(){
    cells.forEach(cell => cell.addEventListener("pointerenter", hoverEffect));
}

function activateRainbowEffect(){
    cells.forEach(cell => cell.addEventListener("pointerenter", rainbowEffect));
}

function rainbowEffect(e){
    const rgb = [];
    for (i = 0; i < 3; i++){
        rgb[i] = Math.floor(Math.random() * 255);
    }
    this.style.backgroundColor = `rgb(${rgb.toString()})`;
}

populateGrid(16);
let cells = document.querySelectorAll(".cell");
activateHoverEffect();
document.querySelector("#btn-update-grid").addEventListener("click", updateGrid);
document.querySelector("#btn-rainbow").addEventListener("click", activateRainbowEffect);

