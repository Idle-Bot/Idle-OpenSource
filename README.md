# License 
`Check license file`
# Config.JS 🔑
```json
{
  "token": "YOUR OWN BOT TOKEN",
  "default_prefix": "ANY PREFIX YOU WANT",
  "mongoString": "MONGODB SRV"
}
```
# How to connect to mongoose 🔗 ( https://discord.js.org/ ) 

> const mongoose = require('mongoose')
    ```
      mongoose.connect(mongoString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false
    }).then(() => {
      console.log('Connected to database')
    }).catch((err) => {
      console.log(err);
    })
    ```
  
# reconDB File ( npmjs.com/package/reconlx )
```js
const { reconDB } = require('reconlx')
const client = require('../index')
const mongoURL = require('../config.json').mongoString;
const db = new reconDB(client, {
    uri:
       mongoURL
})
module.exports = db;
```
