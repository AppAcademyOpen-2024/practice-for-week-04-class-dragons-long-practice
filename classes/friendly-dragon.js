const Dragon = require("./dragon");

// Your code here
class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  hasLifeGoals() {
    this.lifeGoals.forEach((goal) => console.log(`${this.name} likes to ${goal}`));
  }

  helpsPeople() {
    return `${this.name} helps their friend ${this.friend}`;
  }
}
/*
const puff = new FriendlyDragon(
  "Puff",
  "green",
  [
    "live by the sea",
    "frolick in the autumn mist",
    "help small children"
  ],
  "Jackie Paper"
);
console.log(puff);
console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!
puff.hasLifeGoals();
console.log(puff.helpsPeople());
*/
/*
FriendlyDragon {
  name: 'Puff',
  color: 'green',
  lifeGoals: [
    'live by the sea',
    'frolick in the autumn mist',
    'help small children'
  ],
  friend: 'Jackie Paper'
}
Puff breathes fire everywhere! BURN!!!!
Puff likes to live by the sea
Puff likes to frolick in the autumn mist
Puff likes to help small children
Puff helps their friend Jackie Paper
*/
/*
const toothless = new FriendlyDragon(
  "Toothless",
  "black",
  [
    "save the town of Burke",
    "fly with a kid on his back",
    "hang out with Vikings"
  ],
  "Hiccup"
);
console.log(toothless); toothless.hasLifeGoals();
console.log(toothless.helpsPeople());
console.log(toothless.breathesFire());
*/
/*
FriendlyDragon {
  name: 'Toothless',
    color: 'black',
      lifeGoals: [
        'save the town of Burke',
        'fly with a kid on his back',
        'hang out with Vikings'
      ],
        friend: 'Hiccup';
}
Toothless likes to save the town of Burke
Toothless likes to fly with a kid on his back
Toothless likes to hang out with Vikings
Toothless helps their friend Hiccup
Toothless breathes fire everywhere! BURN!!!!;
*/

try {
  module.exports = FriendlyDragon;
} catch {
  module.exports = null;
}
