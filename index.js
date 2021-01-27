//Step 1, like 'import' in react
const express = require('express')

//invoke express
const app = express()

//parses json into JS (json translator)
//Top Level Middleware
app.use(express.json())

//create a port for your server to run on
const port = 4040
app.listen(port, () => console.log(`Server running on port ${port}`))

