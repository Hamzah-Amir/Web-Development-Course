console.log("Loops Tutorial")

let a = 1;
for (let i = 0; i<100; i++) {
    console.log(a+i)
}

let obj = {
    name:"Hamza",
    role : "Programmer",
    language : "JavaScript"
}

for (const key in obj) {
        const element = obj[key];
        console.log(element)
}

for (const c of "Hamza") {
    console.log(c)    
}
let i = 1
while (i<=10) {
    console.log(i)
    i++;
}

let b=10;
do {
    console.log(b)
    b++;

} while (b<20);