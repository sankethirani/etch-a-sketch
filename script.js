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

function hoverEffect(e){
    this.style.backgroundColor = "red";
}

function rainbowEffect(e){
    this.style.filter = null;
    const rgb = [];
    for (i = 0; i < 3; i++){
        rgb[i] = Math.floor(Math.random() * 255);
    }
    this.style.backgroundColor = `rgb(${rgb.toString()})`;
}

function darkeningEffect(e){
    let currentBrightness = this.style.filter;
    if (currentBrightness === ""){
        this.style.backgroundColor = "white";
        this.style.filter = "brightness(1)";
    }
    else{
        let brightnessValue = currentBrightness.substring(currentBrightness.indexOf("(") + 1, currentBrightness.lastIndexOf(")"));
        brightnessValue -= 0.1;
        if (!(brightnessValue < 0)){
            this.style.filter = `brightness(${brightnessValue})`;
        } 
    }
    
}

function activateDarkeningEffect(){
    cells.forEach(cell => clearEventListener(cell));
    cells.forEach(cell => cell.addEventListener("pointerenter", darkeningEffect));
}
function activateHoverEffect(){
    cells.forEach(cell => cell.addEventListener("pointerenter", hoverEffect));
}

function activateRainbowEffect(){
    cells.forEach(cell => clearEventListener(cell));
    cells.forEach(cell => cell.addEventListener("pointerenter", rainbowEffect));
}

function clearEventListener(cell){
    cell.replaceWith(cell.cloneNode(true));
    cells = document.querySelectorAll(".cell");
}

populateGrid(16);
let cells = document.querySelectorAll(".cell");
activateHoverEffect();
document.querySelector("#btn-update-grid").addEventListener("click", updateGrid);
document.querySelector("#btn-rainbow").addEventListener("click", activateRainbowEffect);
document.querySelector("#btn-darkening").addEventListener("click", activateDarkeningEffect);

