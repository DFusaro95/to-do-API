//? Dependencies
const express = require('express')

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

//? /todo   /todo/:id
//? Rutas de TO DO's
app.get('/todo', (req, res) => {
// Cuando me hagan una peticion a mi todoDB y sea exitosa, pasare en la respuesta un status 200 (OK)
  res.status(200).json(todoDB)
})

app.post('/todo', (req, res) => {
  const {title, description} = req.body

  if(title && description){
    const newToDo = {
      id: id++,
      title,
      description,
      is_completed: false
    }
  todoDB.push(newToDo)
  res.status(200).json(newToDo)
  } else {
    res.status(400).json({
      message: 'Invalid Data'
    })
  }
})

app.get('/todo/:id', (req, res) => {
  const id = req.params.id

  const todo = todoDB.find(item => item.id == id)

  if (todo){
    res.status(200).json(todo)
  } else {
    res.status(404).json({message: 'Invalid ID'})
  }
})

app.listen(port, () => {
  console.log(`Server started at port: ${port}`)
})