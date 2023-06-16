alert("je heb 10 minuten om de puzzel op te lossen en te ontsnappen")

// this is the close button
const closeButton = document.querySelector(".close");

closeButton.addEventListener('click', closePopup);

function closePopup(){
    document.querySelector(".bg-model").style.display = "none";
}

// open button
const openButton = document.querySelector(".puzzle1");

openButton.addEventListener("click", openPopup);

function openPopup(){
    document.querySelector(".bg-model").style.display = "flex";
}

//puzzel 1

//timer
const createTimer = (num= 44) => {
    const timer = setInterval(() => {
        console.log(num)
        num--;
        if(num == 0) {
            alert("de tijd is op, de puzzel word gereset probeer opnieuw!")

            clearInterval(timer)
            location.reload()
        }
    }, 1000)
}
createTimer(600)

//puzzle
const rows=3;
const collums=3;

let currentTile;
let otherTile; // the blank tile

let imgOrder = ["4","2","8","5","1","6","7","9","3"] //"4","2","8","5","1","6","7","9","3"

//if img order is correct display alert

 

// <img id="0-0" src="1.jpg"
window.onload=function() {
    for (let r=0; r<rows; r++){
        for (let c=0; c<collums; c++){

            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src =  "img/" + imgOrder.shift()  +".jpg";
            
            //drag functionality
            tile.addEventListener("dragstart", dragStart); // click an image to drag
            tile.addEventListener("dragover", dragOver); // dragging image around while clicked
            tile.addEventListener("dragenter", dragEnter); //moving image onto another one
            tile.addEventListener("dragleave", dragLeave); //dragged image leaving on another image
            tile.addEventListener("drop", dragDrop ); // drag an image over another image , drop the image
            tile.addEventListener("dragend", dragEnd); //drag after drop, swap the tiles

            tile.addEventListener("correct", correct)
            document.querySelector(".board").append(tile);

        }
    }
}

function dragStart(){
    currentTile = this; // this refers to the img tile being dragged
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    otherTile= this; //this refers to the img tile being dropped on
}

function dragEnd(){
if (!otherTile.src.includes("img/3.jpg")){
    return;
}

    let currentCoords= currentTile.id.split("-");
    let r = parseInt(currentCoords[0])
    let c = parseInt(currentCoords[1])

    let otherCoords= otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0])
    let c2 = parseInt(otherCoords[1])

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c ==c2 && r2 == r-1;
    let moveDown = c ==c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

if (isAdjacent){
    let currentImg = currentTile.src;
    let otherImg = otherTile.src;

    currentTile.src = otherImg;
    otherTile.src = currentImg;
    }
   
}

function correct(){
    if (imgOrder == ["1","2","3","4","5","6","7","8","9"]){
        console.log("correct")
    }
}

// er moet nog een alert in wanneer de puzzel af is even vragen hoe


