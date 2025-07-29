const express = require('express')
const app = express()
const fs = require("fs")
const port = 3000
const birds = require('./routers/birds')

app.use('/birds', birds)
app.use((req, res, next) =>{
    console.log(req.headers);
    fs.appendFileSync("Logs.txt", `${Date.now()} is a ${req.method}\n`)
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})