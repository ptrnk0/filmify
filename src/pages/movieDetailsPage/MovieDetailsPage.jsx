import useFetchData from "../../hooks/useFetchData";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";

const MovieDetailsPage = () => {
	const { movieId } = useParams();
	const location = useLocation();
	const { data, loading, error } = useFetchData("details", movieId);
	console.log(data);

	return (
		<div>
			<Link to={location.state ?? "/"}>Go back</Link>
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
		</div>
	);
};

export default MovieDetailsPage;
