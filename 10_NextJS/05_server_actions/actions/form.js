"use server"
import fs from 'fs/promises'

export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"))
    let file = await fs.writeFile("hamza.txt", `The name is ${e.get("name")} and he lives in ${e.get("add")}`)
}