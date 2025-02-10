import { Link, Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import css from "./MovieDetailsPage.module.css";

import useFetchData from "../../hooks/useFetchData";

const MovieDetailsPage = () => {
	const [t] = useTranslation();
	const { movieId } = useParams();
	const { data, loading, error } = useFetchData("details", movieId);

	return (
		<section>
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
					<p>
						{data.genres &&
							data.genres.map((genre) => genre.name).join(", ")}
					</p>
					<p>User score: {data.vote_average}</p>
					<p>
						{t("Overview")}: {data.overview}
					</p>
					<h2>{t("Additional")}</h2>
					<ul>
						<li>
							<Link to="cast">{t("Cast")}</Link>
						</li>
						<li>
							<Link to="reviews">{t("Reviews")}</Link>
						</li>
					</ul>
					<Outlet context={movieId} />
				</>
			)}
		</section>
	);
};

export default MovieDetailsPage;
