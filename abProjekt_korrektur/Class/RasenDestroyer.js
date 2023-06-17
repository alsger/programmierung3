const Creature = require("./Creature");
module.exports= class RasenDestroyer extends Creature{

  constructor(z,s) {
    super(z,s);
  };
  spawn() {
    matrix[this.zeile][this.spalte] = 2;
  };
  scan(){
    return super.scan(1);
  }
  loeschGrasZelle(z,s){
    for(let i=0; i<grassArray.length; i++){
      let grasObjekt = grassArray[i];
      if(grasObjekt.zeile === z && grasObjekt.spalte === s){
        grassArray.splice(i,1);
        return;
      }
    }
  };
  move() {
    let freieFelder = this.scan();
    if (freieFelder.length > 0) {
      this.energy += 2;
      matrix[this.zeile][this.spalte] = 0;
      let feld = freieFelder[0];
      this.zeile = feld[0];
      this.spalte = feld[1];
      this.loeschGrasZelle(feld[0],feld[1]);
      matrix[this.zeile][this.spalte] = 2;
    }
  };
  multiply(){
    let freieFelder = this.scan();
    if (freieFelder.length > 0) {
      this.energy -= 14;
      let newRasen = new RasenDestroyer(this.zeile, this.spalte);
      newRasen.spawn();
      rasenDestroyerArray.push(newRasen);
      let feld = freieFelder[0];
      this.zeile = feld[0];
      this.spalte = feld[1];
      this.loeschGrasZelle(feld[0],feld[1]);
      matrix[this.zeile][this.spalte] = 2;
    }

  };
  die(){
      matrix[this.zeile][this.spalte] = 0;
      this.loeschRasenZelle(this.zeile,this.spalte);
  };
  loeschRasenZelle(z,s){
    for(let i=0; i<rasenDestroyerArray.length; i++){
      let rasenObjekt = rasenDestroyerArray[i];
      if(rasenObjekt.zeile === z && rasenObjekt.spalte === s){
        rasenDestroyerArray.splice(i,1);
        return;
      }
    }
  };
  step(){
    if (this.energy > 30) {
      this.energy -= 1;
      this.multiply();
    }else if(this.energy > 0) {
      this.energy -= 1;
      this.move();
    } else {
      this.die();
    }
  }
}