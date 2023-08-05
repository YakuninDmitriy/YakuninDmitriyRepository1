/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  }
  if (inputArray.length == 0) {
    return 'Массив пустой'
  }
}

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))


const myArray = [1, 3]

const returnValue = myArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'

console.log(returnValue)

let isArrayEmpty = (inputArray) => {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  }
  if (inputArray.length == 0) {
    return 'Массив пустой'
  }
}