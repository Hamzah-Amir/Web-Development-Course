async function hack() {
    let text = document.querySelector(".text")
    let text1 = document.createElement("span")
    let text2 = document.createElement("span")
    let text3 = document.createElement("span")
    let text4 = document.createElement("span")
    let text5 = document.createElement("span")
    text.appendChild(text1)
    text.appendChild(text2)
    text.appendChild(text3)
    text.appendChild(text4)
    text.appendChild(text5)
    
    let a = Math.ceil(0 + Math.random() * 7)
    setTimeout(() => {
        text1.insertAdjacentText("beforeend", "Initializing hacking...")
    }, a);
    
    
    let b = Math.ceil(0 + Math.random() * 7)
    setTimeout(() => {
        text2.insertAdjacentText("beforeend", "Reading Your Files...")
    }, b);

    let c = Math.ceil(0 + Math.random() * 7)
    
    setTimeout(() => {
        text3.insertAdjacentText("beforeend", "Password Files Detected...")
    }, c);
    
    let d = Math.ceil(0 + Math.random() * 7)
    setTimeout(() => {
        text4.insertAdjacentText("beforeend", "Sending all passwords and personal files to server...")
    }, d);
    
    let e = Math.ceil(0 + Math.random() * 7)
    setTimeout(() => {
        text5.insertAdjacentText("beforeend", "Cleaning up...")
    }, e);

}

hack()

a = Math.ceil(0 + Math.random() * 7)
console.log(a);
