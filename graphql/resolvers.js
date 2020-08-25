import { getById, getMovies, addMovies, deleteMovies } from "./db";
const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovies: (_, { name, score }) => addMovies(name, score),
    deleteMovies: (_, { id }) => deleteMovies(id),
  },
};

export default resolvers;
