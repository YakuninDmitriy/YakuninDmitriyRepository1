const fnWithError = () => {
    throw new Error('Ebalo Error')
}

try {
fnWithError()
} catch (error) {
    console.error(error)
    console.log(error.message)
}

console.log('Continue...')