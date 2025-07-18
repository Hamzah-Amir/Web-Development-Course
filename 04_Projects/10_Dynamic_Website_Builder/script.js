function CreateCard(title, Cname, views, duration, monthsOld,thumbnail) {
    
    let card = document.createElement("div");
    document.querySelector(".container").appendChild(card)
    card.setAttribute("class","card")
    
    let img_container = document.createElement("div")
    card.appendChild(img_container)
    img_container.setAttribute("class", "img-container")


    let img = document.createElement("img")
    img_container.appendChild(img)
    img.setAttribute("class","img")
    img.setAttribute("style","height: 100px")
    img.src = thumbnail
    
    let box = document.createElement("div")
    img_container.appendChild(box)
    box.setAttribute("class","duration-box")

    let time = document.createElement("span")
    box.appendChild(time)
    time.setAttribute("class","duration")
    time.insertAdjacentText("beforeend",duration)
    
    let titles = document.createElement("div")
    card.appendChild(titles)
    titles.setAttribute("class","title")
    titles.insertAdjacentText("beforeend", title)
    
    let channel = document.createElement("div")
    card.appendChild(channel)
    channel.setAttribute("class","channel-name")
    channel.insertAdjacentText("beforeend",Cname)
    
    let view = document.createElement("div")
    card.appendChild(view)
    view.setAttribute("class","views")
    view.insertAdjacentText("beforeend",views)

    let month = document.createElement("div")
    card.appendChild(month)
    month.setAttribute("class","months-old")
    month.insertAdjacentText("beforeend",monthsOld)
}

CreateCard("Sigma Web Development Course", "Code With Harry", "75k","20:24", "6 months", "https://i.ytimg.com/vi/oxO1Z5L5S4c/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBq_FaK-_G-qXzjaCe2dSVzROtBbw")
