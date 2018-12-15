const typeDefs = `
type Movie {
      vote_count: Int
      id: ID
      video: Boolean
      vote_average: Float
      title: String
      popularity: Float
      poster_path: String
      original_language: String
      original_title: String
      genre_ids: [Int] 
      backdrop_path: String
      adult: Boolean
      overview: String
      release_date: String
}
type Query {
    getMovies: [Movie]
}
`;

export default typeDefs;
