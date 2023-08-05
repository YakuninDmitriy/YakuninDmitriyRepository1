const day = {
    weather: 'sunny',
    time: 13,
    options: {
        popular0: 10,
        popular1: 20
    }
}

function newPopular1(popular2, popular3) {
    const newDay = JSON.parse(JSON.stringify(popular2))
    newDay.options.popular1 += popular3
    return newDay
}

const newDay = newPopular1(day, 4)

console.log(day)
console.log(newDay)

