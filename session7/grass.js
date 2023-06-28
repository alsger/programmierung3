const LivingCreature = require('./livingCreature');
const random = require('./utils');
module.exports = class Grass extends LivingCreature{

    constructor(x,y){
        super(x,y);
        this.colorValue = 1;
        this.roundCount = 0;
    }

    mul() {
        // counter > 6 , dann vermehren
        this.roundCount++;
        if (this.roundCount >= 6) {
            let emptyFields = this.findFields(0);
            if (emptyFields.length > 0) {
                let newPos = random(emptyFields); // [x,y]
                let newX = newPos[0];
                let newY = newPos[1];
                grassArr.push(new Grass(newX, newY));
                matrix[newY][newX] = this.colorValue;
            }
            this.roundCount = 0;
        }
    }
}