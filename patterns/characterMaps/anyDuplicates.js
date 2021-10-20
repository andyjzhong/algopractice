// Remember: arguments is a JS object.

function areThereDuplicates(arg) {
    let charMap = {}

    for (let item of arguments) {
        !charMap[arguments[item]] ? charMap[arguments[item]] = 1 : charMap[arguments[item]]++
    }

    console.log(charMap)

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
