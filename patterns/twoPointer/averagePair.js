// [-1, 0, 3, 4, 5, 6]       Avg: 4.1

function averagePair(arr, avg) {

    if (arr.length === 0) {
        return false
    }

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        // if the calc'ed avg is less than target, that means we need bigger numbers
        if ((arr[left] + arr[right] / 2) < avg ) {
            left++
        // if the calc'ed avg is more than target, that means we need smaller numbers
        } else if ((arr[left] + arr[right] / 2) > avg) {
            right--
        } else {
            return true
        }
    }

    return false
}


console.log(averagePair([1, 2, 3], 2)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
