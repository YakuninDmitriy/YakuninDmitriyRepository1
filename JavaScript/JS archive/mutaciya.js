const blacklist = {
    name: 'lohi',
    age: '25-28',
    party: {
        party1: 1,
        party2: 'rock'
    }
}

const blacklist2 = JSON.parse(JSON.stringify(blacklist))

blacklist2.party.party1 = 2

console.log(blacklist)
console.log(blacklist2)

