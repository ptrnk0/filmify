import { useTranslation } from "react-i18next";

const MovieDetails = ({ data }) => {
  const [t] = useTranslation();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.genres && data.genres.map((genre) => genre.name).join(", ")}</p>
      <p>User score: {data.vote_average}</p>
      <div>
        <h2>{t("Overview")}</h2>
        <p>{data.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
