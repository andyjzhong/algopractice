function binarySearch(arr, value) {

    let left = 0
    let right = arr.length - 1
    let middle = Math.floor((left + right) / 2)

    // I don't get why the need for the second check tho.
    while (arr[middle] !== value && left <= right) {
        if (value < arr[middle]) right = middle - 1
        else left = middle + 1
        middle = Math.floor((left + right) / 2)
    }

    return arr[middle] === value ? middle : -1
}

console.log(binarySearch([3, 13, 23, 34, 39, 50, 90], 50)) // 5
