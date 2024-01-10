// Your code here
class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  static getDragons(...dragons) {
    return dragons.map((d) => d.name);
  }
}

/*
const puff = new Dragon("Puff", "green");
console.log(puff);
console.log(puff.breathesFire());
// Dragon { name: 'Puff', color: 'green'; }
// Puff breathes fire everywhere! BURN!!!!
*/
/*
const toothless = new Dragon("Toothless", "black");
console.log(toothless);
console.log(toothless.breathesFire());
// Dragon { name: 'Toothless', color: 'black' }
// Toothless breathes fire everywhere! BURN!!!!
*/
/*
const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless));
// [ 'Puff', 'Toothless' ]
*/
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
