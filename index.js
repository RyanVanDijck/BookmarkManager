require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const { models, sequelize } = require('./models/model.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
app.post('/start', async (req, res) => {
    const bookmarks = await models.Bookmark.findAll({})
    console.log(bookmarks[0].url)
    res.render('main.ejs', {
        url: bookmarks[0].url
    })
})
  
app.get('/', (req, res) => {
    res.render('index.ejs')
})