function main(){
    console.log("main is executed...");
    const socket = io();

    function openMatrix(matrixData){
        // zeichne diese Matrix
        matrix = matrixData;
    }
    function initMatrix(matrixData){
        matrix = matrixData;
        resizeCanvas(matrix[0].length * side +1, matrix.length * side);
    }
    socket.on('send matrix', openMatrix);
    socket.on('init matrix', initMatrix);

    //imports
    function killAll(){
        // sende Nachrichten an Server
        socket.emit('kill All', 'Grazer');
    }
    let btn = document.getElementById('myGameBtn');
    btn.onclick = killAll;
}

main();
let matrix = [];


let fr = 5;
let map = 20;
let side = 20;

let grassArr = [];
let grazerArr = [];
let predArr = [];

function mMapCreator(){
    for (let z = 0; z < map; z++) {
      matrix.push([]);
      for (let s = 0; s < map; s++) {
        matrix[z].push(0);
      }
    };
  }

// Funktionen definieren
function getRandomMatrix(width, height) {
    // erstellt matrix
    let matrix = [];
    // weitere Arrays erstellen
    for (let y = 0; y < height; y++) {
        // leeres Array in die Matrix speichern
        matrix.push([]);
        // jedes dieser Array - werte rein speichern
        for (let x = 0; x < width; x++) {
            matrix[y][x] = Math.floor(Math.random() * 2);
        }
    }
    return matrix;
}

function createMoreCreatures() {
    // Grasfresser und Fleischfresser
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (x == y) {
                matrix[y][x] = 2;
                if(y+2 < matrix.length && x+2 < matrix[0].length)
                matrix[y+2][x+2] = 2;
            }
            if(x+y == matrix.length-1){
                matrix[y][x] = 3;
            }
        }
    }
}

// einmal bei Programmstart
function setup() {
    matrix = getRandomMatrix(map, map);
    //createMoreCreatures();

    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(fr);
}

// wiederholend
function draw() {

    //update von Grass-Lebewesen
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul();
    }

    for (let i = 0; i < grazerArr.length; i++) {
        grazerArr[i].eat();
    }

    for (let i = 0; i < predArr.length; i++) {
        predArr[i].eat();
        
    }

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
             fill('white');
             if (matrix[y][x] == 1) {
                 fill("#28764F")
             } else if (matrix[y][x] == 2) {
                 fill('#DB960B')
             } else if (matrix[y][x] == 3) {
                 fill('#961707')
             }
            rect(x * side, y * side, side, side);
        }
    }



}

