//Деструктуризация в функциях
const carCoast = {
    model: 'LADA',
    age: 10,
    condition: 'normal'
}

const ageTest = ({model, age}) => {
    if (age<15) {
        return `Car ${model} is not old yet. She is ${age} years old.`
    }
    return `Car ${model} is too old.`
}

ageTest(carCoast);