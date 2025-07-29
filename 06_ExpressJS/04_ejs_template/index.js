const express = require('express')
const app = express()
const port = 3000
app.set("view engine", "ejs")  

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let searchText = "Search Now"
  res.render('index', {siteName: siteName, searchText:searchText})
})

app.get('/blog/:slug', (req, res) => {
  let blogTitle = "Why To Choose Web Development"
  let blogContent = "Its a high paying skill via Freelancing"
  res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})