const newObject = {
    name: 'test'
}

let myFn = (nameOfObject) => {
    let newObject2 = Object.assign({}, nameOfObject)
    return newObject2
}

let newObject3 = myFn(newObject)

console.log(newObject3 == newObject)
console.log(typeof newObject)