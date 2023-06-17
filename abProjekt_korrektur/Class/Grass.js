const Creature = require("./Creature");
let border = 0;
module.exports= class Grass extends Creature{

  constructor(z, s) {
    super(z,s);
  };

  spawn() {
    matrix[this.zeile][this.spalte] = 1;
  }; 
  scan(){
    border++;
    return super.scan(0);
  }
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