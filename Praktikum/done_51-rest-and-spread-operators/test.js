
function meanScore(...kek) {
   for(key of kek) {
    if (typeof key == 'number') {
   let sum = kek.reduce((sum, el) => sum + el)
   let mean = sum / kek.length
   return mean.toFixed(2)
   }
   return 'Все аргументы в вызове функции должны быть числами!'
   }
}

const scores4 = ['abc', 1.3, true, 2.5, 1.9]

console.log(meanScore(...scores4))