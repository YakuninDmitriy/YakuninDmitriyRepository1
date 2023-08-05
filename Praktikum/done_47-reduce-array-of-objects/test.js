const newArr = [
  {
  abc: 3,
  abv: 'abc'
},
{
  abc: 1,
  abv: 'abcd'
},
{
  abc: 5,
  abv: 'abcde'
}
]

/**
let addEl2 = newArr.filter(el => el.abv < 10)
let mappedEl2 = addEl2.map(el => el.abv)
console.log(mappedEl2)
*/

let reduceArr = newArr.reduce((letters, el) => {
  if (el.abc <= 4) {
  letters.push(el.abv)
  }
  return letters
}, [])

console.log(reduceArr)