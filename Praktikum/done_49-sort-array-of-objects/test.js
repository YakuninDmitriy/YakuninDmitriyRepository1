const newArr = [1,5,32,6,7,1]

console.log(newArr.sort((a, b) => a - b))

function compare(a, b) {
    if (a > b) return 1; // если первое значение больше второго
    if (a == b) return 0; // если равны
    if (a < b) return -1; // если первое значение меньше второго
  }

console.log(newArr.sort(compare))

console.log(newArr.sort((a, b) => a > b ? 1 : -1))