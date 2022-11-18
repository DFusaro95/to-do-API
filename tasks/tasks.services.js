//? EN ESTE ARCHIVO VAMOS A UTILIZAR TODO LO RELACIONADO AL REQ Y RES

const taskControllers = require('./tasks.controllers')

//* taskControllers.createToDo()
//* taskControllers.findAllToDos()
//* taskControllers.findToDoById()

const getAllToDo = (req, res) => {
  const data = taskControllers.findAllToDos()
  res.status(200).json(data)
}

const getToDoById = (req, res) => {
  const id = req.params.id
  const data = taskControllers.findToDoById(id)
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({message: 'Invalid ID'})
  }
}

const postToDo = (req, res) => {
  const {title, description} = req.body
  if (title && description) {
    const data = taskControllers.createToDo({title, description})
    res.status(201).json(data)
  } else {
    res.status(400).json({message: 'Invalid Data'})
  }
}

module.exports = {
  getAllToDo,
  getToDoById,
  postToDo
}