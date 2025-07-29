// Write a program to organize all clutter files in different folder

// for example:   becomes:
// 1. name.jpg    jpg/name.jpg, cat.jpg 
// 2. name.png    png/name.png,
// 3. this.pdf    pdf/this.pdf, birds.pdf
// 4. abc.zip     zip/abc.zip, animal.zip, xyz.zip
// 5. animal.zip
// 6. cat.jpg
// 7. xyz.zip
const fs = require("fs")


const files = ['name.jpg', "birds.pdf", "abc.zip", "name.png", "this.pdf", "xyz.zip", "cat.jpg"]

for (let index = 0; index < files.length; index++) {
    const file = files[index];    
    if (file.endsWith(".jpg")) {
        fs.rename(`${file}`, `jpg/${file}`, err =>{
            if (err) {
                console.log("Error moving file.", err);
            }
            else{
                console.log("JPG File moved successfully!");
            }
        })
    }
    else if (file.endsWith(".png")) {
        fs.rename(`${file}`, `png/${file}`, err =>{
            if (err) {
                console.log("Error moving file.", err);
            }
            else{
                console.log("PNG File moved successfully!");
            }
        })
    }

    else if (file.endsWith(".zip")) {
        fs.rename(`${file}`, `zip/${file}`, err =>{
            if (err) {
                console.log("Error moving file.", err);
            }
            else{
                console.log("ZIP File moved successfully!");
            }
        })
    }

    else if (file.endsWith(".pdf")) {
        fs.rename(`${file}`, `pdf/${file}`, err =>{
            if (err) {
                console.log("Error moving file.", err);
            }
            else{
                console.log("PDF File moved successfully!");
            }
        })
    }
}