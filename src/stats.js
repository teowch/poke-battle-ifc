require('coffee-script/register');

const Battle = require('../pokemon-battle');

function battle(req, res) {
    // console.log(JSON.parse(req.query.leader))
    console.log('called')
    let match = Battle.battle(JSON.parse(req.query.user), JSON.parse(req.query.leader));

    res.send(match)
}

module.exports = battle;