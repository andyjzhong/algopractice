// LC 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(s) {
    let left = 0;
    let right = s.length - 1

    while (left < right) {
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp

        left++
        right--
    }
};

// Time Complexity: O(N)
// Space Complexity: O(1)
