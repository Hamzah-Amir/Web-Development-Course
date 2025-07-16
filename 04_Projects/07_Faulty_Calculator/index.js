/*Create a Faulty Calculator that Performs wrong oprerations as follows
+ ---> -
- ---> /
/ ---> * 
* ---> + 
It should only perform wrong operations only 10% of times
*/


function sum(x,y) {
    return x+y
}
function subtract(x,y) {
    return x-y
}
function divide(x,y) {
    return x/y
}
function multiply(x,y) {
    return x*y
}

function faulty_sum(x,y) {
    return x-y
}

function faulty_divide(x,y) {
    return x*y
}

function faulty_subtract(x,y) {
    return x/y
}

function faulty_multiply(x,y) {
    return x+y
}

function faulty_calculator(x,y,op) {
    let a = Math.random()
    if (a < 0.1) {
        if (op == "+") { return faulty_sum(x,y) }
        else if (op == "-") { return faulty_subtract(x,y) }
        else if (op == "*") { return faulty_multiply(x,y) }
        else if (op == "/") { return faulty_divide(x,y) }
    }
    else {
        if (op == "+") {return sum(x,y) }
        else if (op == "-") { return subtract(x,y) }
        else if (op == "*") { return multiply(x,y) }
        else if (op == "/") { return divide(x,y) }
    }
}

console.log(faulty_calculator(3,4,"/"))