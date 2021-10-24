function isSubsequence(str1, str2) {

    let [first, second] = [0, 0]

    for (let i = 0; i < str2.length; i++) {
        if (str1[first] === str2[second]) {
            first++
        }
        second++
    }

    if (first === str1.length) {
        return true
    } else {
        return false
    }
}

console.log(isSubsequence("hello", "hello world")) // true
console.log(isSubsequence("sing", "sting")) // true
console.log(isSubsequence("abc", "abracadabra")) // true
console.log(isSubsequence("abc", "acb")) // false
