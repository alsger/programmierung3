
function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

function random(list) {
    if(list.length == 0) return;
    let randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }
  module.exports = {randomNumber, random};