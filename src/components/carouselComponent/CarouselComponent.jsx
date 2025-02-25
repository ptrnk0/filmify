import { Carousel } from "antd";

import css from "./CarouselComponent.module.css";
import { Link } from "react-router-dom";

const CarouselComponent = ({ movies }) => {
  return (
    <Carousel
      autoplay={{ dotDuration: true }}
      autoplaySpeed={3000}
      arrows={true}
      adaptiveHeight={true}
    >
      {movies.map((movie) => {
        console.log(movie);

        return (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginBottom: 20,
                  borderRadius: 4,
                  height: 250,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h2 className={css.title}>{movie.title}</h2>
              </div>
            </Link>
          </div>
        );
      })}
    </Carousel>
  );
};

export default CarouselComponent;
