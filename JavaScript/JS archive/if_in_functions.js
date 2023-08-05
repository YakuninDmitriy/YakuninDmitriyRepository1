function difNegativeNumbers (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number')
    return `One of the numbers if not negative`

    if (a >= 0 || b >=0)
    return `Dif only negative numbers`

    return (a - b)
}

console.log(difNegativeNumbers (-1, 'abs'))