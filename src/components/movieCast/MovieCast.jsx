import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Keyboard, Mousewheel } from "swiper/modules";
import { useOutletContext } from "react-router-dom";

import css from "./MovieCast.module.css";

import useFetchData from "../../hooks/useFetchData";

const MovieCast = () => {
	const movieId = useOutletContext();

	const { data, loading, error } = useFetchData("credits", movieId);

	return (
		<div className={css.castContainer}>
			{loading && <p>Loading...</p>}
			{error && <p>Something went wrong, please try again.</p>}
			{data && (
				<Swiper
					modules={[Scrollbar, Keyboard, Mousewheel]}
					spaceBetween={20}
					mousewheel={{
						invert: false,
					}}
					keyboard={{
						enabled: true,
						onlyInViewport: true,
					}}
					scrollbar={{
						hide: false,
					}}
					slidesPerView={3}
					className={css.castSwiper}
				>
					{data.cast.map((member) => {
						return (
							<SwiperSlide
								key={member.id}
								className={css.castSlide}
							>
								<img
									src={
										member.profile_path
											? `https://image.tmdb.org/t/p/w185${member.profile_path}`
											: "/download.png"
									}
									alt={`${member.name}`}
								/>
								<div className={css.castInfo}>
									<p className={css.castInfoName}>
										{member.name}
									</p>
									<p className={css.castInfoCharacter}>
										{member.character}
									</p>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			)}
		</div>
	);
};

export default MovieCast;
