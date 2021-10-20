// LC 387. First Unique Character in a String

// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:
// Input: s = "leetcode"
// Output: 0
//
// Example 2:
// Input: s = "loveleetcode"
// Output: 2
//
// Example 3:
// Input: s = "aabb"
// Output: -1

var firstUniqChar = function(s) {
    let charMap = {}

    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        charMap[char] !== undefined
            ? charMap[char] = -1
            : charMap[char] = i
    }

    console.log(charMap)

    for (let key in charMap) {
        if (charMap[key] !== -1) {
            return charMap[key]
        }
    }

    return -1
};
