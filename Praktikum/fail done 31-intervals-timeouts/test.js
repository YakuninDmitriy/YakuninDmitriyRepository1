/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

let i = 1
sendMessage () {
    setInterval(() => {
    if (i < 6) {
    console.log('Сообщение номер ' + i)
    } i++
}, 2000)
}

clearInterval(setInterval(sendMessage, 2000), 11000)