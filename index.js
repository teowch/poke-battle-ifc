require('coffee-script/register')
const Battle = require('./pokemon-battle');

// let battleText = Battle.battle(59, 135);

// let text_array = battleText.split('\n\n');
// let new_array = [];
// text_array.forEach(row => {
//   if (row) {
//     // console.log(row);
//     new_array.push(row.split('\n'));
//   }
// });
// console.log(new_array);


let user = {
  "trainer": "Leader",
  "pokemon": [
    {
      "id": 431,
      "moves": [252, 10, 216]
    },
    {
      "id": 470,
      "moves": [320, 75, 204]
    }
  ]
}

let leader = {
  "trainer": "Teo",
  "pokemon": [
        {
          "id": 562,
          "moves": [310, 506, 101]
        },
        {
          "id": 213,
          "moves": [32, 51, 380]
        }
  ]
}


let match = Battle.battle(user, leader);

console.log(match['log']);
