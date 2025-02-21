import { Link } from "react-router-dom";

import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.movieList}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={css.movieListItem}>
            <Link to={`/movies/${movie.id}`}>
              <div className={css.movieImgContainer}>
                <picture>
                  <source
                    srcSet={`https://image.tmdb.org/t/p/w342${movie.poster_path} 1x, https://image.tmdb.org/t/p/w780${movie.poster_path} 2x`}
                  />
                  <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={`${movie.title} poster`}
                    className={css.posterImg}
                  />
                </picture>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
