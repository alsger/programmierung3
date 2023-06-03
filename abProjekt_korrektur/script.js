//Variables
let seite = 10;
let map = 100;
let matrix = [];

let rasenDestroyerArray = [
  new RasenDestroyer(10, 2),
];

let waterArray = [

  new Water(randomNumber(0, map - 1), randomNumber(0, map - 1)),
  new Water(randomNumber(0, map - 1), randomNumber(0, map - 1))
];

let grassArray = [
  new Grass(2, 1),
  new Grass(1, 1),
  new Grass(1, 2),
  new Grass(1, 4),
  new Grass(1, 6)
];

//Setup & Draw Function
function setup() {

  mCanvas(50);  //frameRate
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

function draw() {

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
