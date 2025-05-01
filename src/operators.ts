// Spread Operatores, Rest Operatores and Destructuring

// Spread Operator with array
const cricketPlayer : string[] = ['Tamim', 'Shakib', 'Riyad']
const footballPlayer : string[] = ['Jamal', 'Shaki', 'Rubel']

cricketPlayer.push(...footballPlayer)
// console.log(cricketPlayer)

// Spread Operator with Object

const bowler = {
    fastBowler : 'Taskin',
    spinBowler : 'Shakib',
    legSpinBowler : 'Rishad'
}

const batsMan = {
    strickOpening : 'Tamim',
    nonstrickOpening : 'Liton',
    fastDown : 'Somoya'
}

const newCricketTeam = {...batsMan, ...bowler}
// console.log(newCricketTeam)


// Rest Operator
const cricketTeam = (...players : string[]) => {
    players.forEach((player : string) => console.log(`Hi ${player}. How are you?`))
}
cricketTeam('Tamim', 'Shakib', 'Riyad', 'Mushi')