const functionName = (first_name, last_name) => {
    const hello = `${'Privet'}, ${first_name} ${last_name}${'!'}`
    return hello
}

const functionNameTwo = (a) => {
   a++
   return a
}

export {
    functionName,
    functionNameTwo
}