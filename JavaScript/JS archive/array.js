const myArray = [0, 'Dima', 'abc']

const myArray2 = [0, 'Dima', 'abc']

//если сравнить массивы myArray и myArray2, то мы получим false, тк это два разных объекта
console.log(myArray === myArray2)

//альтернативный вариант создания массива
const myArray3 = new Array(0, 'Dima', 'abc')

console.table(myArray3)

const myObject = {
    0:1,
    1:'test'
}

console.log(myObject[0])

const myArray4 = [0, 'Dima', 'abc']

myArray4.lenght = 4

console.log(myArray4)