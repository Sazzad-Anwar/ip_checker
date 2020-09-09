const express = require('express')
var ip = require('ip');
 
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`Your IP address is ${ip.address()}`))
app.listen(port, () => console.log(`Example app listening on port port!`))