const newObject = {
    color: 'red',
    post: 3
}

const newObject2 = {
    loh: 123,
    color: 'black'
}

function ifFunction ({color}) {
  return color !== 'black' ? console.log('Color is not black!') : console.log('Color is black')
}

ifFunction(newObject2)