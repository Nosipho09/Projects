import express from 'express'
import cors from 'cors'
import movies from './api/movies.route.js'

const app = express() //create server

app.use(cors())
app.use(express.json()) // midlleware that express uses to read and accept JSON


app.use("/api/v1/movies", movies)
app.use('*', (req, res) => {
    res.status(404).json({ error: "not found" })
}) // specify the initial routes

export default app
