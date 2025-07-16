let a = [1,3,5,7,9,11,13,15,17,19]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

a.forEach((value,index,arr) =>{
    console.log(value,index,arr)
})

let obj = {
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
        
    }
}

for (const element of a) {
    console.log(element)
}

let newArr = a.map((e,index,array)=>{
    return e**3
})

console.log(newArr)

const greatenthenhundred = e =>{
    if(e>100){
        return true
    }
    return false
}
console.log(newArr.filter(greatenthenhundred))


let arr2 = [1,2,3,4,5,6]

const red = (p,q) => {
    return (p*q)
}

console.log(arr2.reduce(red))