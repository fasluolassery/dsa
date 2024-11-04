function countDownEven(n) {
    if (n % 2 !== 0) n -= 1
    if (n <= 0) {
        console.log(0)
        return
    } else {
        console.log(n)
        countDownEven(n-2)
    }
}

countDownEven(9)