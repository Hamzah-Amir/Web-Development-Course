"use client"
export default function Home() {

  const handleClick = async ()=>{
    let data = {
      name: "Hamza",
      age: "18",
      profession: "Web developer",
    }
    let a = await fetch('./api/add',
       {
        method: "POST",
        headers: {"Content-Type":'application/json'},
        body: JSON.stringify(data)
      })
    let res = await a.text()
    console.log(res)
  }

  return (
   <div>
    <h1 className="text-2xl font-bold">Next.JS API routes demo</h1>
    <button className="cursor-pointer" onClick={handleClick}>POST</button>
   </div>
  );
}
