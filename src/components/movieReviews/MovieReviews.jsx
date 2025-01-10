import useFetchData from "../../hooks/useFetchData";
import { useOutletContext } from "react-router-dom";

const MovieReviews = () => {
	const movieId = useOutletContext();

	const removeHtmlTags = (text) => {
		return text.replace(/<[^>]*>/g, "");
	};

	const { data, loading, error } = useFetchData("reviews", movieId);

	return (
		<>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong, please try again.</p>}
			<ul>
				{data &&
					(data.results.length > 0 ? (
						data.results.map((review) => {
							return (
								<li key={review.id}>
									<article>
										<h2>Author: {review.author}</h2>
										<p>{removeHtmlTags(review.content)}</p>
									</article>
								</li>
							);
						})
					) : (
						<p>We don&apos;t have any reviews for this movie.</p>
					))}
			</ul>
		</>
	);
};

export default MovieReviews;
