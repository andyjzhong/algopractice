// Frequency Counter

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    let charMapA = {}
    let charMapB = {}

    // Build char map for Str 1
    for (let char of str1) {
        if (!charMapA[char]) {
            charMapA[char] = 1
        } else {
            charMapA[char]++
        }
    }

    // Build char map for Str 2
    for (let char of str2) {
        if (!charMapB[char]) {
            charMapB[char] = 1
        } else {
            charMapB[char]++
        }
    }

    console.log(charMapA)
    console.log(charMapB)

    // Compare A with B
    for (let key in charMapA) {
        if (charMapA[key] !== charMapB[key]) {
            return false
        }
    }

    return true
}

// console.log(validAnagram("tshirt", "thirst")) // true
console.log(validAnagram("tshirtb", "thirsty")) // false
