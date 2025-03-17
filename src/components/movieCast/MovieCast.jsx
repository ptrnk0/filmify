import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Keyboard, Mousewheel } from "swiper/modules";
import { useOutletContext } from "react-router-dom";

import useFetchData from "../../hooks/useFetchData";

const MovieCast = () => {
  const movieId = useOutletContext();

  const { data, loading, error } = useFetchData("credits", movieId);

  return (
    <div>
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
        >
          {data.cast.map((member) => {
            return (
              <SwiperSlide key={member.id}>
                <img
                  src={
                    member.profile_path
                      ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                      : "/download.png"
                  }
                  alt={`${member.name}`}
                />
                <div>
                  <p>{member.name}</p>
                  <p>{member.character}</p>
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
