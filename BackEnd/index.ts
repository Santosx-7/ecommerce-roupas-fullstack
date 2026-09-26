import express from 'express'

const app = express()

app.get("/", (request, response) => {"Mensagem"})

app.listen(3000, () => {
    console.log("Listen 3000")
})