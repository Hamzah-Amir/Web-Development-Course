// async function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(451)
//         }, 4000);
//     })
// }

async function getdata() {
    // Simulating datafrom server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let y = await x.json()
    let div = document.createElement("div")
    document.body.appendChild(div)
    let info = document.createElement("div")
    div.appendChild(info)
    let output = info.insertAdjacentText("beforeend",JSON.stringify(y))
    return output
}

async function main() {
    console.log('Loading Module');
    console.log('Something is Happening');
    console.log('Load data');
    let data = await getdata()
    console.log(data);
    console.log('Processing data');
    console.log('Other tasks performing');
}

main()