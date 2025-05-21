import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { getTrendingMoviesByDay } from "../../tmdbApi.js";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieList = ({ children }) => {
  const { data } = useFetchData(getTrendingMoviesByDay);
  const prevButtonId = `btn-${Date.now()}-prev`;
  const nextButtonId = `btn-${Date.now()}-next`;

  console.log(data);

  return (
    <section className="m-auto pt-16 xl:w-10/12">
      <h2 className="mb-7 text-4xl font-medium invert">{children}</h2>

      <div className="flex items-center gap-5">
        <div
          className="cursor-pointer rounded-4xl bg-neutral-700 p-3"
          id={prevButtonId}
        >
          <svg className="size-4 rotate-180 fill-none stroke-white">
            <use href="/icons.svg#icon-arrow"></use>
          </svg>
        </div>
        <Swiper
          loop={true}
          modules={[Navigation]}
          navigation={{
            enabled: true,
            prevEl: `#${prevButtonId}`,
            nextEl: `#${nextButtonId}`,
          }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {data?.results.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <div className="overflow-hidden rounded-md">
                    <picture>
                      <source
                        srcSet={`https://image.tmdb.org/t/p/w342${movie.poster_path} 1x, https://image.tmdb.org/t/p/w780${movie.poster_path} 2x`}
                      />
                      <img
                        src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                        alt={`${movie.title} poster`}
                        loading="lazy"
                      />
                    </picture>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className="cursor-pointer rounded-4xl bg-neutral-700 p-3"
          id={nextButtonId}
        >
          <svg className="size-4 fill-none stroke-white">
            <use href="/icons.svg#icon-arrow"></use>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MovieList;
