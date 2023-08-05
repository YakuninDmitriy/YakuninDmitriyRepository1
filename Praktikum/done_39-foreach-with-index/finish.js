/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore']

let cityInfo = (city, arr) => {
    if (arr.includes(city) == true) {
        return console.log(city + ' is at the index ' + myCities.indexOf(city) + ' in the myCities array.')
    }
}

cityInfo('London', myCities)

myCities.forEach(el => cityInfo(el, myCities))