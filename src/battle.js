require('coffee-script/register');

const Battle = require('../pokemon-battle');

function battle(req, res) {
    console.log(JSON.parse(req.query.leader))
    let match = Battle.battle(JSON.parse(req.query.user), JSON.parse(req.query.leader));

    let turns = match.split('%END_TURN%');

    let tmp = turns.map(turn => turn.split('\n'));

    let filteredTurns = tmp.map(array => {
        let filtered = array.filter(string => string.length > 0)

        return filtered;
    });

    return res.json(filteredTurns);
}

module.exports = battle;