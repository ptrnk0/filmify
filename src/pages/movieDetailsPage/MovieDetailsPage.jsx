import { Link, Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import useFetchData from "../../hooks/useFetchData";
import useMediaQuery from "../../hooks/useMediaQuery.js";
import MovieDetails from "../../components/movieDetails/MovieDetails";
import FadeContent from "../../components/FadeContent";
import ProductionCompaniesList from "../../components/productionCompaniesList/ProductionCompaniesList";

const MovieDetailsPage = () => {
  const [t] = useTranslation();
  const { movieId } = useParams();
  const { data, loading, error } = useFetchData("details", movieId);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section>
      <FadeContent>
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong, please try again.</p>}
        {data && (
          <>
            <div>
              <div
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`,
                }}
              >
                <div></div>
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
                  <div>{!isMobile && <MovieDetails data={data} />}</div>
                </div>
              </div>
            </div>
            {isMobile && <MovieDetails data={data} />}
            <ProductionCompaniesList
              productionCompanies={data.production_companies}
            />
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
