const { doesNotMatch } = require('assert');
const { error } = require('console');
const fs = require('fs')

console.log("starting");

// fs.writeFileSync("Sample.txt", "Hello! My name is Hamza")

fs.writeFile("Sample.txt", "Hello! My name is Hamza", () => {
    console.log("Done Now reading the file");
})

fs.readFile("Sample.txt", (err, data) => {
    console.log(err, data.toString());
    fs.appendFile("Sample.txt", "\nI am learning Web Development from Code With Harry's Sigma Web Development Course", () => {
        fs.readFile("Sample.txt", (err, d) => {
            console.log(d.toString());
            console.log("Closing File")
            fs.appendFile("Sample.txt", "\nThis is tutorial of FS Module", (e, data) => {
                console.log(e, "Finally Execution Completed");
            })
        })
    })
})

console.log("ending");