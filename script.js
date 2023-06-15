function populateGrid(){
    const gridContainer = document.querySelector('#grid-container');
    for (i = 0; i < 16; i++){
        console.log(i);
        let divRow = document.createElement('div');
        gridContainer.appendChild(divRow);
        for (j = 0; j < 16; j++){
            const div = document.createElement('div');
            divRow.appendChild(div);
        }
    }
}

populateGrid();