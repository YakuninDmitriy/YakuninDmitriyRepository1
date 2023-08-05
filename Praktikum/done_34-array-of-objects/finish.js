/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

let cars1 = {
    carBrand: 'BMW',
    price: 5,
    isAvailableForSale: true
}

let cars2 = {
    carBrand: 'LADA',
    price: 3,
    isAvailableForSale: false
}

let cars3 = {
    carBrand: 'Honda',
    price: 7,
    isAvailableForSale: true
}

const carsArray = [cars1, cars2, cars3]

carsArray.cars4 = 'loh'

console.log(carsArray)