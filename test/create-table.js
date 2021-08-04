require('dotenv').config()
const { models } = require('../models/model')

const createTable = () => {
  console.log('creating tables')
  models.Bookmark.create({ 
      url: 'success.co.uk'
   })
}

module.exports = createTable