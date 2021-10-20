function areThereDuplicates(arg) {

    let seen = {}
    let pointer = 0

    for (let value in arguments) {
        arguments[value]
    }
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates("a", "b", "c", "d")) // false
console.log(areThereDuplicates("a", "b", "c", "a")) // true
