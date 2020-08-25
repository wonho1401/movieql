let movies = [
  {
    id: 0,
    name: "Avengers: End game",
    score: 9.9,
  },
  {
    id: 1,
    name: "Doctor Strange",
    score: 8.7,
  },
  {
    id: 2,
    name: "Hulk",
    score: 8.5,
  },
  {
    id: 3,
    name: "Iron Man 3",
    score: 9.2,
  },
  {
    id: 4,
    name: "First avenger",
    score: 7.3,
  },
  {
    id: 5,
    name: "Thor: Ragnarok",
    score: 8.8,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => id === movie.id);
  return filteredMovies[0];
};

export const deleteMovies = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovies = (name, score) => {
  const newMovie = {
    name,
    score,
    id: `${movies.length + 1}`,
  };
  movies.push(newMovie);
  return newMovie;
};
