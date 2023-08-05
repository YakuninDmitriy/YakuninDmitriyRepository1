const myObject = {
    a: 10,
    b: 'abc',
    c: 1
}

//keys передает свойства объекта в новый массив
Object.keys(myObject).forEach(key => {
console.log(key, myObject[key])
})

//values передает значения свойств объекта в новый массив
Object.values(myObject).forEach(value => {
    console.log(value)
})