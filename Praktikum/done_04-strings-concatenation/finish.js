/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

let myFirstName = 'Dmitriy'

let myLastName = 'Yakunin'

let myProfession = 'Project Manager'

let visitka = `My name is ${myFirstName} ${myLastName} and i am ${myProfession}.`

console.log(visitka)

let visitka2 = 'My name is ' + myFirstName + ' ' + myLastName + ' and i am ' + myProfession + '.'

console.log(visitka2)