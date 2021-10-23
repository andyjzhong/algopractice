// Establish two variables: maxSum and tempSum

// Rule out edge cases:
// If the length of the array is less than num...
    // return null

// Start by creating the current maxSum by looping thru the first n values of array:
// For each value until array[num]
    // Tally the maxSum
    // Set initial value of tempSum to maxSum

// For each value in array (starting with num)...
    // Take tempSum and SUBTRACT previous first number in window and ADD the new value in window
    // If the tempSum is greater than maxSum
        // Make the maxSum = tempSum

// Return maxSum



    for (let i = target; i < arr.length; i++) {
        tempSum = tempSum + arr[i]
    }

function maxSubarraySum(arr, num){
    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) {
        return null
    }

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
        tempSum = maxSum
    }

    for (let i = num; i < arr.length; i++) {
        // i would be the passed in length (num), which in this case is 2.
        // this is also represents the starting index to loop
        // 1st loop. arr[2 - 2] resolves to arr[0]
        // 2nd loop. arr[3 - 2] resolves to arr[1]
        // so we're just moving the window along.
        // The first value must be greater than or eql to num because that's what's iterating by 1 each time.
        tempSum = tempSum - arr[i - num] + arr[i]

        if (tempSum > maxSum) {
            maxSum = tempSum
        }
    }

    return maxSum
}


console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
