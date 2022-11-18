API Peliculas

{
  id: 1,
  title: "Pacific Rim",
  year: 2012,
  director: "Guillermo del Toro",
  genre: ['action', 'Sci-Fi']
}

Peticiones:

get /movies -> para obtener todas las peliculas
post /movies -> para crear una pelicula nueva
get /movies/1 -> para obtener la pelicula con el id 1 (por parametros dinamicos)

En Express