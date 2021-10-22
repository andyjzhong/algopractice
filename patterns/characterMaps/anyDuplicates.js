// Remember: arguments is a JS object.

function areThereDuplicates(args) {
    let charMap = {}

    for (let i = 0; i < arguments.length; i++) {
        !charMap[arguments[i]]
            ? charMap[arguments[i]] = 1
            : charMap[arguments[i]]++
    }

    for (let key in charMap) {
        if (charMap[key] > 1) {
            return true
        }
    }

    return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates("a", "b", "c", "d")) // false
console.log(areThereDuplicates("a", "b", "c", "a")) // true
