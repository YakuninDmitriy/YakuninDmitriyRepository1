const car = {
    coast: 47000,
    type: 'SUV',
    name: '0'
}

const testCar = ({coast, type}) => {
    if (coast < 45000) {
        return `Car type ${type} is not expensive.`
    }
    else if (coast < 48000) {
        return `Car type ${type} is expensive.`
    }
    else if (coast < 50000) {
        return `Car type ${type} is SO expensive!`
    }
    else {
        return `Tachka pizdec dorogaya, ti chto ebach?`
    }
}

testCar(car)
