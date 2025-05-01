"use strict";
// Spread Operatores, Rest Operatores and Destructuring
// Spread Operator with array
const cricketPlayer = ['Tamim', 'Shakib', 'Riyad'];
const footballPlayer = ['Jamal', 'Shaki', 'Rubel'];
cricketPlayer.push(...footballPlayer);
// console.log(cricketPlayer)
// Spread Operator with Object
const bowler = {
    fastBowler: 'Taskin',
    spinBowler: 'Shakib',
    legSpinBowler: 'Rishad'
};
const batsMan = {
    strickOpening: 'Tamim',
    nonstrickOpening: 'Liton',
    fastDown: 'Somoya'
};
const newCricketTeam = Object.assign(Object.assign({}, batsMan), bowler);
// console.log(newCricketTeam)
// Rest Operator
const cricketTeam = (...players) => {
    players.forEach((player) => console.log(`Hi ${player}. How are you?`));
};
cricketTeam('Tamim', 'Shakib', 'Riyad', 'Mushi');
