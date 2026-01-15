const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let siteName = "Netnova"
    let searchText = "search anything"
    res.render("index", {siteName:siteName, searchText:searchText})
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Netnova  when and why?"
    let blogContent = "its very good website "
    res("blogpost", {blogTitle: blogTitle,blogContent: blogContent})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// Merge branch 'main' of https://github.com/...
// git pull origin main --allow-unrelated-histories
// git push -u origin main
