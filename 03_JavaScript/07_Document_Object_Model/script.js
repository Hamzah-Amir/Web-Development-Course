console.log("JAVASCRIPT DOM TUTORIAL")

console.log(document.body.firstElementChild.children)

document.body.childNodes[1].firstElementChild.style.backgroundColor = "gray"
document.body.childNodes[1].firstElementChild.parentElement.style.backgroundColor = "pink"

document.body.firstElementChild.children[3].style.backgroundColor = "yellow"
document.body.firstElementChild.children[2].style.backgroundColor = "green"
document.body.firstElementChild.children[1].style.backgroundColor = "gold"
document.body.firstElementChild.children[1].previousElementSibling.style.padding = '10px'
document.body.firstElementChild.children[1].nextElementSibling.style.margin = '10px'
