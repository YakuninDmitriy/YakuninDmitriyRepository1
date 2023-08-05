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
 * "Сообщение номер 3"/workspaces/82409966/Praktikum/fail done 31-intervals-timeouts
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

let i = 1

const messageId = setInterval(() => {
    console.log('Сообщение номер ' + i)
    i = i + 1
}, 2000)

setTimeout(() => clearInterval(messageId), 11000)









