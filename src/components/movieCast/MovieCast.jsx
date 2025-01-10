import useFetchData from "../../hooks/useFetchData";
import { useOutletContext } from "react-router-dom";

const MovieCast = () => {
	const movieId = useOutletContext();

	const {
		data: { cast },
		loading,
		error,
	} = useFetchData("credits", movieId);

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
