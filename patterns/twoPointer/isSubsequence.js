function isSubsequence(str1, str2) {

    if (!str1) {
        return false
    }

    let left = 0
    let right = 0

    while (right < str2.length - 1) {
        if (str1[left] === str2[right]) {
            left++
        }

        if (left === str1.length - 1) {
            return true
        }

        right++
    }

    return false
}

console.log(isSubsequence("hello", "hello world")) // true
console.log(isSubsequence("sing", "sting")) // true
console.log(isSubsequence("abc", "abracadabra")) // true
console.log(isSubsequence("abc", "acb")) // false
