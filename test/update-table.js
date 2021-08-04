require('dotenv').config()
const {models} = require('../models/model')

const updateTest = () => {
    models.Bookmark.update({ url: 'update.co.uk'},{
    where: {
        url: 'success.co.uk'
    }
    })
}

module.exports = updateTest