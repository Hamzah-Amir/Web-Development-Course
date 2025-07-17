function factorial(a) {
        let result = 1
        for (let i = 2; i<=a ;i++) {
            result += i;            
        }
        return result
}

console.log(factorial(3))