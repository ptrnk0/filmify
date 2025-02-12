import { useTranslation } from "react-i18next";

import css from "./MovieDetails.module.css";

const MovieDetails = ({ data }) => {
	const [t] = useTranslation();

	return (
		<div className={css.movieDetailsContainer}>
			<h1 className={css.movieTitle}>{data.title}</h1>
			<p className={css.movieGenres}>
				{data.genres &&
					data.genres.map((genre) => genre.name).join(", ")}
			</p>
			<p className={css.movieUserScore}>
				User score: {data.vote_average}
			</p>
			<p className={css.movieOverview}>
				{t("Overview")}: {data.overview}
			</p>
		</div>
	);
};

export default MovieDetails;
