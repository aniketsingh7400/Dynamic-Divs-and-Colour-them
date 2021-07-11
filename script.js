let rows = window.prompt("Enter how many rows");
let cols = window.prompt("Enter how many columns");

for(let i=0; i<rows; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.className = "row";

    for(let j=0; j<cols; j++) {
        let columnDiv = document.createElement("div");
        columnDiv.className = "col";
        rowDiv.appendChild(columnDiv);
    }

    document.body.appendChild(rowDiv);
}

let changeColour = document.createElement("button");
changeColour.id = "btn";
changeColour.innerHTML = "Click to give colour"
document.body.appendChild(changeColour);

document.getElementById("btn").addEventListener('click', function() {
    let colourRow = window.prompt("Enter row number which you want to colour");
    let colourColumn = window.prompt("Enter column number which you want to colour");
    let colour = window.prompt("Enter name of colour");
    let node = document.getElementsByClassName("row")[colourRow-1].children.item(colourColumn-1);
    node.style.backgroundColor = colour;
});