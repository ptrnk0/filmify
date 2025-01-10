import useFetchData from "../../hooks/useFetchData";
import { useOutletContext } from "react-router-dom";

const MovieReviews = () => {
	const movieId = useOutletContext();

	const removeHtmlTags = (text) => {
		return text.replace(/<[^>]*>/g, "");
	};

	const {
		data: { results },
		loading,
		error,
	} = useFetchData("reviews", movieId);

	return (
		<ul>
			{results &&
				results.map((review) => {
					return (
						<li key={review.id}>
							<article>
								<h2>Author: {review.author}</h2>
								<p>{removeHtmlTags(review.content)}</p>
							</article>
						</li>
					);
				})}
		</ul>
	);
};

export default MovieReviews;
