let a = prompt("Enter first number")

let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)){
    throw SyntaxError("PLease enter a number only")
}
let sum = parseInt(a) + parseInt(b)

function main() {
    x = 1
    try {
        console.log(`The sum of numbers is ${sum*x}`)
        return true
    } catch (error) {
        console.log("Follwing error occured:", error);
        return false
    }
    finally{
        console.log('I am finally, I will run at any cause!');    
    }
}

let c = main()
console.log(c);
