import { useTranslation } from "react-i18next";

import css from "./MovieDetails.module.css";
import { Rate } from "antd";

const MovieDetails = ({ data }) => {
  const [t] = useTranslation();

  return (
    <div className={css.movieDetailsContainer}>
      <h1 className={css.movieTitle}>{data.title}</h1>
      <p className={css.movieGenres}>
        {data.genres && data.genres.map((genre) => genre.name).join(", ")}
      </p>
      <Rate
        disabled
        allowHalf={true}
        defaultValue={data.vote_average}
        count={10}
      />
      <div className={css.movieOverview}>
        <h2>{t("Overview")}</h2>
        <p>{data.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
