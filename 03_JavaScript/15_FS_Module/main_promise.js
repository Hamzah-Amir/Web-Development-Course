import fs from  "fs/promises"

let a = await fs.readFile("Sample.txt")
let b = await fs.appendFile("Sample.txt", "\nPromises in Fs module")
console.log(a.toString());
