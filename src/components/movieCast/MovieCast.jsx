import useFetchData from "../../hooks/useFetchData";
import { useOutletContext } from "react-router-dom";

const MovieCast = () => {
	const movieId = useOutletContext();

	const { data, loading, error } = useFetchData("credits", movieId);

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong, please try again.</p>}
			<ul>
				{data &&
					data.cast.map((member) => {
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
		</>
	);
};

export default MovieCast;
