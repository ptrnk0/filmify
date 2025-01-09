import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import fetchData from "../../tmdb-api";

const MovieCast = () => {
	const [cast, setCast] = useState([]);
	const movieId = useOutletContext();

	useEffect(() => {
		async function fetchCast() {
			const result = await fetchData("credits", { movieId });
			setCast(result.cast);
		}

		fetchCast();
	}, [movieId]);

	return (
		<ul>
			{cast &&
				cast.map((member) => {
					return (
						<li key={member.id}>
							<img
								src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
								alt={`${member.name}`}
							/>
							<p>{member.name}</p>
							<p>Character: {member.character}</p>
						</li>
					);
				})}
		</ul>
	);
};

export default MovieCast;
