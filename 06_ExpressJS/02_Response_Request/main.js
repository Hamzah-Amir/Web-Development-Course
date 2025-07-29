const express = require('express')
const app = express()
const port = 3000
const blog = require("./routes/blog")

app.use('/blog', blog)

app.get('/', (req, res) => {
  res.send('Hello World!')
}).get('/index', (req, res) => {
  res.sendFile('./templates/index.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
