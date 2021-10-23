function fib(num){

    if (num < 2) {
        return num
    }

    let result = [0, 1]

    for (let i = 2; i <= num; i++) {
        let first = result[i - 2]
        let second = result[i - 1]

        result.push(first + second)
    }

    return result[num]
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465
