const Dragon = require("./dragon");

// Your code here
class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }

  dontInviteThemOverForDinner() {
    this.evilDoings.forEach((doing) => console.log(`${this.name} will ${doing}`));
  }

  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}
/*
const enderDragon = new EvilDragon(
  "Ender Dragon",
  "black", [
  "spit a fireball at Steve",
  "rule over all the Endermen",
  "destroy all blocks in its way"
],
  "Steve"
);
console.log(enderDragon);
enderDragon.dontInviteThemOverForDinner();
console.log(enderDragon.breathesFire());
console.log(enderDragon.burnsNemesis());
*/
/*
EvilDragon {
  name: 'Ender Dragon',
    color: 'black',
      evilDoings: [
        'spit a fireball at Steve',
        'rule over all the Endermen',
        'destroy all blocks in its way'
      ],
        nemesis: 'Steve';
}
Ender Dragon will spit a fireball at Steve
Ender Dragon will rule over all the Endermen
Ender Dragon will destroy all blocks in its way
Ender Dragon breathes fire everywhere! BURN!!!!
Ender Dragon destroys Steve with fire! WHOOOSH!!!
*/
/*
const drogon = new EvilDragon(
  "Drogon",
  "black-red",
  [
    "eat all your livestock",
    "burn down your castle in Westeros",
    "burn your father and brother"
  ],
  "Night King"
);
console.log(drogon);
drogon.dontInviteThemOverForDinner();
console.log(drogon.breathesFire());
console.log(drogon.burnsNemesis());
*/
/*
EvilDragon {
  name: 'Drogon',
    color: 'black-red',
      evilDoings: [
        'eat all your livestock',
        'burn down your castle in Westeros',
        'burn your father and brother'
      ],
        nemesis: 'Night King';
}
Drogon will eat all your livestock
Drogon will burn down your castle in Westeros
Drogon will burn your father and brother
Drogon breathes fire everywhere! BURN!!!!
Drogon destroys Night King with fire! WHOOOSH!!!;
*/

try {
  module.exports = EvilDragon;
} catch {
  module.exports = null;
}
