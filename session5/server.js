const myTools = require("./Function/mathFunction");

const Creature = require("./Class/Creature");
const Grass = require("./Class/Grass");
const RasenDestroyer = require("./Class/RasenDestroyer");
const Water = require("./Class/Water");


  
  function mMapCreator(){
    for (let z = 0; z < map; z++) {
      matrix.push([]);
      for (let s = 0; s < map; s++) {
        matrix[z].push(0);
      }
    };
  }
  
  function mMapMaterial(){
    console.log(matrix);
  }


//Variables
let seite = 10;
let map = 100;
matrix = [];

rasenDestroyerArray = [
  new RasenDestroyer(2, 2),
];

waterArray = [

  new Water(myTools.randomNumber(0, map - 1), myTools.randomNumber(0, map - 1)),
  new Water(myTools.randomNumber(0, map - 1), myTools.randomNumber(0, map - 1))
];

grassArray = [
  new Grass(2, 1),
  new Grass(1, 1),
  new Grass(1, 2),
  new Grass(1, 4),
  new Grass(1, 6)
];

//Setup & Draw Function
function initGame() {
    console.log("initGame");
  mMapCreator(); //Matrix creator

  // RasenDestroyer spawner
  for (let i = 0; i < rasenDestroyerArray.length; i++) {
    rasenDestroyerArray[i].spawn();
  }

  //Water spawner
  // for (let i = 0; i < waterArray.length; i++){
  //   waterArray[i].spawn();
  // }

  //Grass spawner
  for (let i = 0; i < grassArray.length; i++) {
    grassArray[i].spawn();
  }

};

function updateGame() {

  mMapMaterial(); //Add the matrial of the map Squares

  //Rasen destroyer move
  for (let i = 0; i < rasenDestroyerArray.length; i++) {
    rasenDestroyerArray[i].step();
  }

  //Water
  // for (let i = 0; i < waterArray.length; i++){
  //   waterArray[i].grow();
  // }

  //Grass multiplycation
  for (let i = 0; i < grassArray.length; i++) {
    grassArray[i].multiply();
  }
};

initGame();
setInterval(function(){
    updateGame();
}, 100);
