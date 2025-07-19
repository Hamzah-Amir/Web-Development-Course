
document.querySelector(".child").addEventListener("click", (e) =>{
    e.stopPropagation()
    alert("child is clicked")
})
document.querySelector(".childcontainer").addEventListener("click", (e) =>{
    e.stopPropagation()
    alert("You clicked Child Container")
})


document.querySelector(".container").addEventListener("click", (e) =>{
    // e.stopPropagation( )
    alert("You clicked Container")
})


setInterval(() => {
    alert("Running")
}, 3000);