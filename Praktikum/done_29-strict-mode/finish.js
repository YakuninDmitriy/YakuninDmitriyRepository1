/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим? объявится переменная в глобальной области видимости
 */

'use strict'

function myFunction() {
  let a
  a = 2
  return a
}

myFunction()
