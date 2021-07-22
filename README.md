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

    ```js
      mongoose.connect(mongoString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false
    }).then(() => {
      // To check if we are conected to database or not
      console.log('Connected to database')
    }).catch((err) => {
     // logs error if there was any errror
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
// exporting DB 
module.exports = db;
```
