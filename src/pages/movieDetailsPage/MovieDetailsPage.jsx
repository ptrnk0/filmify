import { Link, Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetchData from "../../hooks/useFetchData";
import MovieDetails from "../../components/movieDetails/MovieDetails";
import ProductionCompaniesList from "../../components/productionCompaniesList/ProductionCompaniesList";
import { getMovieDetails } from "../../tmdbApi.js";

const MovieDetailsPage = () => {
  const [t] = useTranslation();
  const { movieId } = useParams();
  const { data } = useFetchData(getMovieDetails, movieId);

  return (
    <section>
      {data && (
        <>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`,
            }}
            className="bg-cover bg-no-repeat"
          >
            {/* <div></div>
              <div>
                <div>
                  <picture>
                    <source
                      srcSet={`https://image.tmdb.org/t/p/w342${data.poster_path} 1x, https://image.tmdb.org/t/p/w780${data.poster_path} 2x`}
                    />
                    <img
                      src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
                      alt={`${data.title} poster`}
                    />
                  </picture>
                </div>
              </div> */}
            <MovieDetails data={data} />
            <ProductionCompaniesList
              productionCompanies={data.production_companies}
            />
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
    </section>
  );
};

export default MovieDetailsPage;
