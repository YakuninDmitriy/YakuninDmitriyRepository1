const myCity = {
    name: 'Orel',
    popular: 13,
    age: 480
}

myCity.country = 'Russia'

myCity.age = 650

const myCity1 = JSON.parse(JSON.stringify(myCity))

myCity.age2 = 77

console.log(myCity1)
console.table(myCity)