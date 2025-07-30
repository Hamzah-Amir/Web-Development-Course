cument.querySelector(".button").addEventListener("click", async () => {
    const { name, language, salary, city, isManager} = dataGenerator()
    await fetch("http://localhost:3000/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            language: language,
            salary: salary,
            city: city,
            isManager: isManager
        })
    })
})