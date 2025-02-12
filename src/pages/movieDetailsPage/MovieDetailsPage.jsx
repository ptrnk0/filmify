import { Link, Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import css from "./MovieDetailsPage.module.css";

import useFetchData from "../../hooks/useFetchData";
import { useEffect, useMemo, useState } from "react";
import MovieDetails from "../../components/movieDetails/MovieDetails";
import FadeContent from "../../components/FadeContent";
import { setBgColor, getPosterColor } from "../../components/bgColor";

const MovieDetailsPage = () => {
	const [t] = useTranslation();
	const { movieId } = useParams();
	const { data, loading, error } = useFetchData("details", movieId);
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const [mainColor, setMainColor] = useState("white");

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
			setBgColor();
		};
	}, []);

	useEffect(() => {
		if (data?.poster_path) {
			(async () => {
				const color = await getPosterColor(
					`https://image.tmdb.org/t/p/w300${data.poster_path}`
				);
				setMainColor(color);
				setBgColor(color);
			})();
		}
	}, [data]);

	return (
		<section>
			<FadeContent>
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
								<div
									className={css.posterBackdropGradient}
									style={{
										backgroundImage: `linear-gradient(to right, rgb(${mainColor[0]}, ${mainColor[1]}, ${mainColor[2]}) 20%, rgba(10.5, 31.5, 31.5, 0) 50%)`,
									}}
								></div>
								<div className={css.posterDetail}>
									<div className={css.posterImgContainer}>
										<img
											src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
											alt={`${data.title} movie poster`}
											className={css.posterImg}
											id="img"
										/>
									</div>
									<div className={css.posterText}>
										{!isMobile && (
											<MovieDetails data={data} />
										)}
									</div>
								</div>
							</div>
						</div>
						{isMobile && <MovieDetails data={data} />}
						<div className={css.productionCompanies}>
							{data.production_companies.map(
								({ id, logo_path }) => {
									if (logo_path) {
										return (
											<div key={id}>
												<img
													src={`https://image.tmdb.org/t/p/w300${logo_path}`}
													alt=""
												/>
											</div>
										);
									}
								}
							)}
						</div>
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
			</FadeContent>
		</section>
	);
};

export default MovieDetailsPage;
