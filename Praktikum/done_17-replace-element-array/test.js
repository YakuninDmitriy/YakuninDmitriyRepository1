const arr = ['a', 1, true]

console.log(arr)

const newArr = arr.map(element => {
    if (element === 'true1') {
        return false
    }
    return element
})

console.log(newArr)