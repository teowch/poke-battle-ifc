require('coffee-script/register');

const Battle = require('../pokemon-battle');

function battle(req, res) {
    // console.log(JSON.parse(req.query.leader))
    if (!req.query.user || !req.query.leader) {
        document.write('Faça uma requisição com JSON');
        console.log('Faça uma requisição com JSON');
        res.send('Faça uma requisição com JSON');
        return
    }
    let match = Battle.battle(JSON.parse(req.query.user), JSON.parse(req.query.leader));

    res.send(match)
}

module.exports = battle;