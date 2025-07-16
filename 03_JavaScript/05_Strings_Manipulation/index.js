console.log("String Manipulation Tutorial")

let a = "Hamza";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

console.log(a.length)

let real_name = "Hamza"
let age = 18

console.log(`My name is ${real_name}, I am ${age} old`)

let b = `hello`
console.log(b, typeof b)
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)

let c = "Hamza Amir"

console.log(c.slice(0,5))
console.log(c.slice(0))

c = c.replace("Amir", "Ahmed")
console.log(c)
console.log(c.concat(" Amir"))
console.log(c.trim())
console.log(c.charAt(8))
console.log(c.indexOf("Ahmed"))