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
								<img
									src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
									alt={`${movie.title}`}
								/>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default MovieList;
