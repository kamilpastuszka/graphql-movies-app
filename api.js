import axios from "axios";
import _ from "lodash";

import apiKey from "./apiKey";

const api = {
  getMovies() {
    return axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then(res => res.data.results)
      .then(res => {
        let movies = [];
        _.map(res, (val, key) => {
          movies[key] = {
            vote_count: val.vote_count,
            id: val.id,
            video: val.video,
            vote_average: val.vote_average,
            title: val.title,
            popularity: val.popularity,
            poster_path: val.poster_path,
            original_language: val.original_language,
            original_title: val.original_language,
            genre_ids: val.genre_ids,
            backdrop_path: val.backdrop_path,
            adult: val.adult,
            overview: val.overview,
            release_date: val.release_date
          };
        });
        return movies;
      })
      .catch(err => console.error("errror", err));
  }
};
export default api;
