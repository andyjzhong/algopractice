function linearSearch(arr, target){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([10, 15, 25, 30, 35, 400, 8], 400)) // 5
