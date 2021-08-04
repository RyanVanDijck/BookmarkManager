require('dotenv').config()
const express = require('express');
const bookmark = require('./models/bookmark.js');
var methodOverride = require('method-override')
const app = express()
const port = 3000

const { models, sequelize } = require('./models/model.js');

app.use(methodOverride('_method'))
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
app.post('/start', async (req, res) => {
    console.log(req.body.bookmark)
    await models.Bookmark.create({url: req.body.bookmark})

    res.redirect('/start')
})
  
app.get('/start', async (req, res) => {
    const bookmarks = await models.Bookmark.findAll({})
    res.render('main.ejs', {
        url: bookmarks,
    })
})
  
app.post('/refresh', async (req, res) => {
    await models.Bookmark.destroy({ truncate : true, cascade: true })

    res.redirect('/start')
})

app.delete('/start/:id', async (req, res) => {
    console.log("Params:" + req.params.id)
    await models.Bookmark.destroy({where:{id : req.params.id}})
    res.redirect('/start')
})