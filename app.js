//? Dependencies
const express = require('express')
const taskRouter = require('./tasks/tasks.router')

//? Initial config
const port = 9000
const app = express()

//? Enable get JSON format
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'OK'
  })
})

app.use('/', taskRouter)

app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})