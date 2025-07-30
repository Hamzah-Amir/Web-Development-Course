function dataGenerator() {
    let names = ["Hamza", "Ali", "Ahmed", "Sara", "Fatima", "Zainab", "Omar", "Hassan", "Aisha", "Yasmin"];
    let lang = ["JavaScript", "Python", "Java", "C++", "Ruby", "PHP", "Swift", "Go", "Kotlin", "TypeScript"];
    let salary_amount = [50000, 6000, 70000, 80000, 90000, 100000, 110000, 120000, 130000, 40000];
    let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Karachi", "Philadelphia", "Miami", "San Diego", "Dallas", "San Jose"];
    let manager = [true, false];

    let name = names[Math.floor(Math.random() * names.length)];
    let language = lang[Math.floor(Math.random() * lang.length)];
    let salary = salary_amount[Math.floor(Math.random() * salary_amount.length)];
    let city = cities[Math.floor(Math.random() * cities.length)];
    let is_manager = manager[Math.floor(Math.random() * manager.length)];
    return { name, language, salary, city, is_manager }
}

document.querySelector(".button").addEventListener("click", async () => {
    let employeeData = []
    for (let i = 0; i < 10; i++) {
        const { name, language, salary, city, is_manager } = dataGenerator();
        employeeData.push({ name, language, salary, city, is_manager });
    }
    await fetch("http://localhost:3000/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeData)
    })
})
