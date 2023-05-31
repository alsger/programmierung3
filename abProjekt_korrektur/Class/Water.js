let j = 0;
class Water{
    zeile;
    spalte;
  
    constructor(z,s) {
      this.zeile = z;
      this.spalte = s;
    };
    spawn(){
      matrix[this.zeile][this.spalte] = 3;
    };
    scanGrass() {
      let benachbarteFelder = [
        [this.zeile - 1, this.spalte],
        [this.zeile, this.spalte + 1],
        [this.zeile + 1, this.spalte],
        [this.zeile, this.spalte - 1]
      ];
  
      let freieFelder = [];
  
      for (let i = 0; i < benachbarteFelder.length; i++) {
        let feld = benachbarteFelder[i];
  
        if (feld[0] >= 0
          && feld[1] >= 0
          && feld[0] < matrix.length
          && feld[1] < matrix.length
          && (matrix[feld[0]][feld[1]] === 1 || matrix[feld[0]][feld[1]] === 1)
        ) {
          freieFelder.push(feld);
        }
      }
      return freieFelder;
    };
    scan() {
        let neighbour = [
          [this.zeile - 1, this.spalte],
          [this.zeile, this.spalte + 1],
          [this.zeile + 1, this.spalte],
          [this.zeile, this.spalte - 1]
        ];
    
        let freeField = [];
    
        for (let i = 0; i < neighbour.length; i++) {
          let feld = neighbour[i];
    
          if (feld[0] >= 0
            && feld[1] >= 0
            && feld[0] < matrix.length
            && feld[1] < matrix.length
            && ((matrix[feld[0]][feld[1]] === 0 || matrix[feld[0]][feld[1]] === 3) || matrix[feld[0]][feld[1]] === 2)
          ) {
            freeField.push(feld);
          }
        }
        return freeField;
      };
    grow(){
        let freieFelder = this.scanGrass();
        let freeField = this.scan();
        if (j === 500 && freieFelder.length > 0){
            let newGrass = new Grass(this.zeile, this.spalte);
            newGrass.spawn();
            grassArray.push(newGrass);
            //let feld = freieFelder;
            let field = freeField[randomNumber(0, freeField.length - 1)];
            this.zeile = field[0];
            this.spalte = field[1];
            matrix[this.zeile][this.spalte] = 1;
        }
        if(j < 500){
          j++;
        } else {
          j = 0;
        }
    }
}