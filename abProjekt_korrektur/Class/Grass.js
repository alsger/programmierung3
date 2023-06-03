let border = 0;
class Grass extends Creature{
  zeile;
  spalte;
  multiplyTimer;

  constructor(z, s) {
    super.constructor(z,s);
    this.multiplyTimer = 0;
  };
  spawn() {
    matrix[this.zeile][this.spalte] = 1;
  };
  scan() {
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
        && (matrix[feld[0]][feld[1]] === 0 || matrix[feld[0]][feld[1]] === 0)
      ) {
        freieFelder.push(feld);
        border++;
      }
    }
    return freieFelder;
  };
  multiply() {
    this.multiplyTimer++;
    if (this.multiplyTimer > 5) {
      this.multiplyTimer = 0;
      let freieFelder = this.scan();
      if (freieFelder.length > 0) {
        let newGrass = new Grass(this.zeile, this.spalte);
        newGrass.spawn();
        grassArray.push(newGrass);

        let feld = freieFelder[randomNumber(0, freieFelder.length - 1)];
        this.zeile = feld[0];
        this.spalte = feld[1];
        matrix[this.zeile][this.spalte] = 1;
      }
    }
  }
}