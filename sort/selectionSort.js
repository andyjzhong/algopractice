function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr
}

// console.log(selectionSort([6, 8, 3, 10, 4, 1]))
console.log(selectionSort([9, 1, 2, 3, 4]))
