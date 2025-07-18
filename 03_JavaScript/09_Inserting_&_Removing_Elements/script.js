document.querySelector(".box").innerHTML
document.querySelector(".box").innerText
document.querySelector(".box").outerHTML
document.querySelector(".box").tagName
document.querySelector(".box").hasAttribute("style")
document.querySelector(".box").getAttribute("style")
document.querySelector(".box").setAttribute("style","font-size: 20px")
document.querySelector(".box").removeAttribute("style")
let div = document.createElement("div");
div.setAttribute("class","box2");
div.innerHTML= "I have been created by <b>JavaScript DOM</b>"
document.querySelector(".container").append(div);
// document.querySelector(".container").replaceWith(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").after(div);
// document.querySelector(".box2").remove();
document.querySelector(".container").className;
document.querySelector(".container").classList;
document.querySelector(".container").classList.add("Hamza");
// document.querySelector(".container").classList.remove("Hamza");
document.querySelector(".container").classList.add("box1");
// document.querySelector(".container").classList.remove("box1");
// document.querySelector(".container").classList.toggle("box1");