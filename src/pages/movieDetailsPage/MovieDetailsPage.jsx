import { useRef } from "react";
import useFetchData from "../../hooks/useFetchData";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
	const location = useLocation();
	const goBack = useRef(location);
	const { movieId } = useParams();
	const { data, loading, error } = useFetchData("details", movieId);

	return (
		<>
			<Link to={goBack.current ?? "/"}>Go back</Link>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong, please try again.</p>}
			{data && (
				<div>
					<img
						src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
						alt={`${data.title} movie poster`}
					/>
					<h1>{data.title}</h1>
					<p>User score: {data.popularity}</p>
					<p>{data.overview}</p>
					<p>
						{data.genres?.length > 0
							? data.genres.map((genre) => genre.name).join(", ")
							: "No genres available."}
					</p>
					<h2>Additional information</h2>
					<ul>
						<li>
							<Link to="cast">Cast</Link>
						</li>
						<li>
							<Link to="reviews">Reviews</Link>
						</li>
					</ul>
					<Outlet context={movieId} />
				</div>
			)}
		</>
	);
};

export default MovieDetailsPage;
