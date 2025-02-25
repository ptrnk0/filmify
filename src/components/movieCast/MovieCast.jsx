import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Keyboard, Mousewheel } from "swiper/modules";
import { useOutletContext } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

import css from "./MovieCast.module.css";

import useFetchData from "../../hooks/useFetchData";
import { Avatar } from "antd";

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
              <SwiperSlide key={member.id} className={css.castSlide}>
                {member.profile_path ? (
                  <Avatar
                    shape="square"
                    size={79}
                    src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                  />
                ) : (
                  // <img
                  //   src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                  //   alt={`${member.name}`}
                  // />
                  <Avatar shape="square" size={79} icon={<UserOutlined />} />
                )}
                <div className={css.castInfo}>
                  <p className={css.castInfoName}>{member.name}</p>
                  <p className={css.castInfoCharacter}>{member.character}</p>
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
