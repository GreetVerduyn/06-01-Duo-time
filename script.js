/*
* javascript for donald duck puzzle
*/

(function() {
/**
 * Page Design
 
let main = document.querySelector(".main");
main.classList.add("container");
let heading = document.querySelector(".heading");
heading.classList.add("row", "p-4", "p-md-5", "mb-4", "mt-2", "text-white", "rounded", "bg-dark");

*/




document.querySelector("#headingPicture img").style.height = "250px";
document.querySelector(".heading").style.height = "270px";
document.querySelector(".heading").style.marginBottom = "0px";

let mainDiv = document.querySelector('.info');
  let  childDiv = mainDiv.getElementsByTagName('div')[2];
   let requiredDiv = childDiv.getElementsByTagName('div')[0];
    requiredDiv.innerHtml = "Favourite Celebrity : Deepika Padukon";




//document.querySelector(".heading").innerHTML = `

  let challengeBox = document.querySelector(".challengeBox");
  /**
   * create a new game button and append it challenge box
   */
   


  /**upload an image for game */
  let gameImg = document.getElementById("donald");
    gameImg.src="./images/p.png";
    gameImg.style.height = "350px";

    
    let table = document.createElement("div");
      table.setAttribute("id","table");
     
table.innerHTML = `<center>
<div id="row1" style="display: table-row;">
   <div id="cell11" class="tile1" onClick="clickTile(1,1);"></div>
   <div id="cell12" class="tile2" onClick="clickTile(1,2);"></div>
   <div id="cell13" class="tile3" onClick="clickTile(1,3);"></div>
</div>
<div id="row2" style="display: table-row;">
   <div id="cell21" class="tile4" onClick="clickTile(2,1);"></div>
   <div id="cell22" class="tile5" onClick="clickTile(2,2);"></div>
   <div id="cell23" class="tile6" onClick="clickTile(2,3);"></div>
</div>
<div id="row3" style="display: table-row;">
   <div id="cell31" class="tile7" onClick="clickTile(3,1);"></div>
   <div id="cell32" class="tile8" onClick="clickTile(3,2);"></div>
   <div id="cell33" class="tile9" onClick="clickTile(3,3);"></div>
</div>

<button onClick="shuffle();">New Game</button>
</center>`;


challengeBox.appendChild(table);


  })();

function clickTile(row,col){
  if(row>1){ 
    //check the white tile is below the clicked tile
    let idt = "tile"+row+col;
    var li = document.getElementById(idt);
    if(li.className != "tile9"){
      swapTiles("tile"+row+col,"tile"+(row+1)+col);
    }
    //Checking if white tile is above
    if (row>1) {
      if ( document.getElementById("tile"+(row-1)+column).className=="tile9") {
        swapTiles("tile"+row+column,"tile"+(row-1)+column);
        return;
      }
    }
  //Checking if white tile on the right
    if (column<3) {
      if ( document.getElementById("tile"+row+(column+1)).className=="tile9") {
        swapTiles("tile"+row+column,"tile"+row+(column+1));
        return;
      }
    }
    //Checking if white tile on the left
    if (column>1) {
      if ( document.getElementById("tile"+row+(column-1)).className=="tile9") {
        swapTiles("tile"+row+column,"tile"+row+(column-1));
        return;
      }
    }

  }
}

function swapTiles(tilex,whiteTile){
  console.log("tilx = "+tilex+" Tiley = "+whiteTile);
  let temp = document.getElementById(tilex).className;
  document.getElementById(tilex).className = document.getElementById(whiteTile).className;
  document.getElementById(whiteTile).className = temp;
  //console.log("Temp = "+temp);

}
function swapTiles(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

function shuffle() {
for (var row=1;row<=3;row++) { 
   for (var column=1;column<=3;column++) { 
  
    var row2=Math.floor(Math.random()*3 + 1); 
    var column2=Math.floor(Math.random()*3 + 1); 
     
    swapTiles("cell"+row+column,"cell"+row2+column2); 
  } 
} 
}

function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  if (tile!="tile9") { 
       //Checking if white tile on the right
       if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
       //Checking if white tile is below
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       } 
  }
  
}
