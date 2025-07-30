// Write a program to organize all clutter files in different folder

// for example:   becomes:
// 1. name.jpg    jpg/name.jpg, cat.jpg 
// 2. name.png    png/name.png,
// 3. this.pdf    pdf/this.pdf, birds.pdf
// 4. abc.zip     zip/abc.zip, animal.zip, xyz.zip
// 5. animal.zip
// 6. cat.jpg
// 7. xyz.zip

import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basePath = "D:\\Sigma Web Development\\Web-Development-Course\\04_Projects\\12_Clear_the_Clutter"

"D:\\Sigma Web Development\\Web-Development-Course\\04_Projects\\12_Clear_the_Clutter\\main.js"

let files = await fs.readdir(basePath)

for (const file of files) {
    console.log("running for", file);
    let ext = file.split(".")[1]

    if (ext != "js" && ext != "json" && file.split('.').length > 1) {
        if (fsn.existsSync(path.join(basePath, ext))) {
            fs.rename(path.join(basePath, file), path.join(basePath, ext, file))
        }
    }
    else {
        fs.mkdir(path.join(basePath, ext), { recursive: true })
        fs.rename(path.join(basePath, file), path.join(basePath, ext, file))
    }
}