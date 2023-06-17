module.exports =  class Creature
{
  zeile;
  spalte;
  multiplyTimer;
  energy;
  
    constructor(z, s) 
    {
        this.zeile = z;
        this.spalte = s;
        this.multiplyTimer = 0;
        this.energy = 15;
    };
    
    scan(pIndex) {
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
        && (matrix[feld[0]][feld[1]] === pIndex || matrix[feld[0]][feld[1]] === 0)
      ) {
        freieFelder.push(feld);
      }
    }
    return freieFelder;
  };
}