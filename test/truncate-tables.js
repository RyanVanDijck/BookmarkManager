require('dotenv').config()
const { models } = require('../models/model')

const truncateTables = () => {
  console.log('truncating tables')
  models.Bookmark.destroy({ truncate : true, cascade: true })
}

module.exports = truncateTables