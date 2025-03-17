import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <div>
                <picture>
                  <source
                    srcSet={`https://image.tmdb.org/t/p/w342${movie.poster_path} 1x, https://image.tmdb.org/t/p/w780${movie.poster_path} 2x`}
                  />
                  <img
                    src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    alt={`${movie.title} poster`}
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
