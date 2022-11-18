//? ESTE ARCHIVO VA A MANEJAR TODO LO RELACIONADO A ACCIONES DE LAS BASES DE DATOS

const todoDB = []
//? TO-DO
//*   {
//*     id: 5,
//*     title: 'Practicar Express',
//*     description: 'Reforzar con videos tutoriales y crear otra app'
//*     is_completed: false
//*   }

let id = 1


//? ESTA FUNCION DEBE TRAER TODOS LOS TO-DO'S DE LA BASE DE DATOS 
const findAllToDos = () => {
  return todoDB
}

//? ESTA FUNCION DEBE RETORNAR UN TO-DO DEPENDIENDO DEL ID
const findToDoById = (id) => {
  const todo = todoDB.find(item => item.id == id)
  return todo
}

//? ESTA FUNCION DEBE CREAR UN TO-DO EN MI DB Y RETORNARLO
const createToDo = (obj) => {
  const newToDo = {
    id: id++,
    title: obj.title,
    description: obj.description,
    is_completed: false
  }
  todoDB.push(newToDo)
  return newToDo
}

module.exports = {
  findAllToDos,
  findToDoById,
  createToDo
}