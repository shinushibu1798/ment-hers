const express = require('express')
const app = express()
const port = 3000

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

app.use(express.static('./'))
app.get('/', (req, res) => {
	
	res.sendFile(__dirname + './index.html')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
