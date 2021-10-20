function sameFrequency (num1, num2) {

    if (num1.toString().length !== num2.toString().length) {
        console.log("numbers don't have equal lengths")
        return false
    }

    let charMapA = {}
    let charMapB = {}

    for (let char of num1.toString()) {
        if (!charMapA[char]) {
            charMapA[char] = 1
        } else {
            charMapA[char]++
        }
    }

    for (let char of num2.toString()) {
        if (!charMapB[char]) {
            charMapB[char] = 1
        } else {
            charMapB[char]++
        }
    }

    console.log(charMapA)
    console.log(charMapB)

    for (let key in charMapA) {
        if (charMapA[key] !== charMapB[key]) {
            return false
        }
    }

    return true
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 41)) // false
console.log(sameFrequency(987654321, 123456789)) // true
console.log(sameFrequency(22, 222)) // false
