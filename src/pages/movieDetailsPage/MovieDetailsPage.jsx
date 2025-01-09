import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import fetchData from "../../tmdb-api";

const MovieDetailsPage = () => {
	const [details, setDetails] = useState({});
	const { movieId } = useParams();
	const location = useLocation();

	useEffect(() => {
		async function fetchDetail() {
			const result = await fetchData("details", { movieId });
			setDetails(result);
		}

		fetchDetail();
	}, [movieId]);

	return (
		<div>
			<Link to={location.state ?? "/"}>Go back</Link>
			{details && (
				<div>
					<img
						src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
						alt={`${details.title} movie poster`}
					/>
					<h1>{details.title}</h1>
					<p>User score: {details.popularity}</p>
					<p>{details.overview}</p>
					<p>
						{details.genres?.length > 0
							? details.genres
									.map((genre) => genre.name)
									.join(", ")
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
		</div>
	);
};

export default MovieDetailsPage;
