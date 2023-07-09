let cells = []
populateGrid(16);
document.querySelector("#btn-update-grid").addEventListener("click", updateGrid);
document.querySelector("#btn-rainbow").addEventListener("click", activateRainbowEffect);
document.querySelector("#btn-darkening").addEventListener("click", activateDarkeningEffect);

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
    activateHoverEffect();
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

// There is a reason for creating 3 different functions to run activateEffect(effect) instead of putting it in the button event listeners like this
// document.querySelector("#btn-darkening").addEventListener("click", activateEffect("darkening"));
// This is because when putting in the button event listener, the event listeners are applied when the page is loading right at the start
// Therefore, the value of effect defaults to the last button listener in the code 

function activateHoverEffect(){
    activateEffect("hover");
}

function activateRainbowEffect(){
    activateEffect("rainbow");
}

function activateDarkeningEffect(){
    activateEffect("darkening");
}

function activateEffect(effect){
    console.log(effect);
    cells.forEach(cell => clearEventListener(cell));
    cells = document.querySelectorAll(".cell");

    switch (effect){
        case "rainbow":
            cells.forEach(cell => cell.addEventListener("pointerenter", rainbowEffect));
            break;
        case "darkening":
            cells.forEach(cell => cell.addEventListener("pointerenter", darkeningEffect));
            break;
        case "hover":
            cells.forEach(cell => cell.addEventListener("pointerenter", hoverEffect));

    }
}

function clearEventListener(cell){
    cell.replaceWith(cell.cloneNode(true));
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


//old implementation idea before making it cleaner

// function activateDarkeningEffect(){
//     cells.forEach(cell => clearEventListener(cell));
//     cells = document.querySelectorAll(".cell");
//     cells.forEach(cell => cell.addEventListener("pointerenter", darkeningEffect));
// }
// function activateHoverEffect(){
//     cells.forEach(cell => clearEventListener(cell));
//     cells = document.querySelectorAll(".cell");
//     cells.forEach(cell => cell.addEventListener("pointerenter", hoverEffect));
// }

// function activateRainbowEffect(){
//     cells.forEach(cell => clearEventListener(cell));
//     cells = document.querySelectorAll(".cell");
//     cells.forEach(cell => cell.addEventListener("pointerenter", rainbowEffect));
// }

