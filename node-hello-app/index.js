const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("working as restart")
})

app.get('/api', (req, res) => {
    res.send("working as restart", process.env.API_KEY)
})


app.listen(3000)