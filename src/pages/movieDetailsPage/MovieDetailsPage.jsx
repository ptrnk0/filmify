import { useRef } from "react";
import useFetchData from "../../hooks/useFetchData";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
	const location = useLocation();
	const refLocation = useRef(location.state);
	const { movieId } = useParams();
	const { data, loading, error } = useFetchData("details", movieId);

	return (
		<section>
			<Link to={refLocation.current ?? "/"}>Go back</Link>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong, please try again.</p>}
			{data && (
				<>
					<div className={css.poster}>
						<div
							className={css.posterBackdrop}
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`,
							}}
						>
							<div className={css.posterBackdropGradient}></div>
							<div className={css.posterImgContainer}>
								<img
									src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
									alt={`${data.title} movie poster`}
									className={css.posterImg}
								/>
							</div>
						</div>
					</div>
					<h1>{data.title}</h1>
					<p>User score: {data.vote_average}</p>
					<p>Overview: {data.overview}</p>
					<p>
						Genres:{" "}
						{data.genres?.length > 0
							? data.genres.map((genre) => genre.name).join(", ")
							: "No genres available."}
					</p>
					<h2>Additional information</h2>
					<ul>
						<li>
							<Link to="cast" state={refLocation.current ?? "/"}>
								Cast
							</Link>
						</li>
						<li>
							<Link
								to="reviews"
								state={refLocation.current ?? "/"}
							>
								Reviews
							</Link>
						</li>
					</ul>
					<Outlet context={movieId} />
				</>
			)}
		</section>
	);
};

export default MovieDetailsPage;
