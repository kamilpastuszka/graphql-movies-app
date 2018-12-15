import api from "./api";

const resolvers = {
  Query: {
    getMovies: () => api.getMovies()
  }
};

export default resolvers;
