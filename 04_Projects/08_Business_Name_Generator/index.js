let adj = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"
}

let shop = {
    1 : "Engine",
    2 : "Garments",
    3 : "Foods"
}

let word = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

a = Math.random()

function Business_name_generator() {
    let a = Math.floor(Math.random() * 3) +1 ;
    const first_name = adj[a]
    let b = Math.floor(Math.random() * 3) +1 ;
    const second_name = shop[b]
    let c = Math.floor(Math.random() * 3) +1 ;
    const third_name = word[c]
    const business_name = `${first_name} ${second_name} ${third_name}`
    return business_name
}

console.log(Business_name_generator())