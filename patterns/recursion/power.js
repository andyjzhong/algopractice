function power(base, exponent){
    // check for 0 and NOT 1
    if (exponent === 0) {
        return 1
    }

    return base * power(base, exponent - 1)
}

console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16
