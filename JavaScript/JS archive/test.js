const newObject = {
    a: 1,
    b: 2
}


const newObject2 = JSON.parse(JSON.stringify(newObject))

newObject2.c = 3

console.log(newObject)
console.log(newObject2)