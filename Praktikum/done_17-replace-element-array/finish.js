/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */

const newArray = [1, 'abc', null]

console.log(newArray)

const newArray2 = newArray.map(element => {
    if (element === 'abc') {
        return 'abcd'
    }
    return element
})

console.log(newArray2)