const { reconDB } = require('reconlx')
const client = require('../index')
const mongoURL = require('../config.json').mongoString;
const db = new reconDB(client, {
    uri:
       mongoURL
})

module.exports = db;
