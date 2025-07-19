let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        setTimeout(() => {
            reject("Invalid Number Generated 1")
        }, 2500);
    }
    else{
        setTimeout(() => {
            resolve("Valid Number is Generated1 !")
        }, 2500);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a > 0.5) {
        setTimeout(() => {
            reject("Invalid Number Generated2 ")
        }, 2500);
    }
    else{
        setTimeout(() => {
            resolve("Valid Number is Generated 2 !")
        }, 2500);
    }
})

let prom3 = Promise.all([prom1,prom2])
prom3.then(a=> {
    console.log(a);
    
}).catch(e => {
    console.log(e)
})

let prom4 = Promise.allSettled([prom1,prom2])
prom3.then(a=> {
    console.log(a);
    
}).catch(e => {
    console.log(e)
})