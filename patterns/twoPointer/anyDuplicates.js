function areThereDuplicates(...args) {
    args.sort((a, b) => a > b)

    let left = 0
    let right = 1

    while (right < args.length) {
        if (args[right] === args[left]) {
            return true
        }

        left++
        right++
    }

    return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates("a", "b", "c", "d")) // false
console.log(areThereDuplicates("a", "a", "b", "c")) // true
