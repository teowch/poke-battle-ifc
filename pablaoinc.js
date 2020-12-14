require('coffee-script/register')
const Battle = require('pokemon-battle');

// let user = {
//     trainer: 'Challenger',
//     pokemon: [
//         {
//             id: 448,
//             moves: [14, 309, 370, 418],
//         },
//         {
//             id: 385,
//             moves: [442, 369, 361, 7]
//         },
//         {
//             id: 376,
//             moves: [309, 8, 9, 89]
//         }
//     ]
// }

let user = {
    trainer: 'Challenger',
    pokemon: [
        { id: 3 },
        {
            id: 385,
            moves: [442, 369, 361, 7]
        },
        {
            id: 376,
            moves: [309, 8, 9, 89]
        }
    ]
}

let leader = {
    trainer: 'Leader',
    pokemon: [
        { id: 6 },
        { id: 230 },
        { id: 260 }
    ]
}

let match = Battle.battle(user, leader);

console.log(match);