const newArr = [1,2,3,4]

//console.log(newArr.reduce((sum, el) => sum += el, 0))


let sum = 0

for (i = 0; i <= newArr.length; i++) {
    sum += newArr[i]
    console.log(sum)
}

console.log(sum)