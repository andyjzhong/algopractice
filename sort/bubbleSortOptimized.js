function bubbleSort(arr) {

    let noSwaps = null;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

                noSwaps = false
            }
        }

        if (noSwaps) break
    }
    return arr
}

console.log(bubbleSort([6, 8, 3, 10, 4, 1]))
console.log(bubbleSort([9, 1, 2, 3, 4]))
