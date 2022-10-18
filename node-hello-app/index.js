const express = require('express')
const os = require('os')

const app = express()

app.get('/', (req, res) => {
    console.log(os.hostname())
    res.json({ success: true, hostname: os.hostname(), env: process.env.API_KEY })
})

app.get('/api', (req, res) => {
    res.send("working as restart",)
})

const PORT = process.env.APPID

app.listen(PORT, () => console.log("Server on port", PORT))