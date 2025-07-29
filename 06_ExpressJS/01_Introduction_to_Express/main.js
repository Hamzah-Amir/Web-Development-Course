const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/:slug', (req, res) => {
  res.send(`Hello World! ${slug} `)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})