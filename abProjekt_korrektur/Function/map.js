function mCanvas(speed){
  createCanvas(map * seite, map * seite);
  frameRate(speed);
  noStroke();
}

function mMapCreator(){
  for (let z = 0; z < map; z++) {
    matrix.push([]);
    for (let s = 0; s < map; s++) {
      matrix[z].push(0);
    }
  };
}

function mMapMaterial(){
  for (let z = 0; z < matrix.length; z++) {
    for (let s = 0; s < matrix[0].length; s++) {
      mSquare(z, s);
    }
  }
}

function mSquare(zeile, spalte) {
    let x = zeile * seite;
    let y = spalte * seite;
    let colorCode = matrix[zeile][spalte];
  
    if (colorCode === 0) {   //Earth
      fill(216, 197, 150)
    } else if (colorCode === 1) { //Grass
      fill(0, 255, 0)
    } else if (colorCode === 2) { //RazenDestroyer
      fill(0, 0, 0)
    } else if (colorCode === 3) { //Water
      fill(0, 0, 250)
    }
  
    rect(y, x, seite, seite);
  }