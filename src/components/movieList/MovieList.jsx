import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData.js";
import { getTrendingMoviesByDay } from "../../tmdbApi.js";
import { Keyboard, Mousewheel, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieList = ({ children }) => {
  const { data, loading, error } = useFetchData(getTrendingMoviesByDay);

  return (
    <section className="m-auto pt-16 lg:w-10/12">
      <h2 className="mb-7 text-4xl font-medium invert">{children}</h2>
      <Swiper
        modules={[Navigation]}
        navigation={{
          enabled: true,
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
              <Link to={`/movies/${data.results.id}`}>
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
    </section>
  );
};

export default MovieList;
