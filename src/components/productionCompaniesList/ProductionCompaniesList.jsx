const ProductionCompaniesList = ({ productionCompanies }) => {
  return (
    <ul>
      {productionCompanies.map(({ id, logo_path, name }) => {
        if (logo_path) {
          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${logo_path}`}
                alt={name}
              />
            </li>
          );
        }
      })}
    </ul>
  );
};

export default ProductionCompaniesList;
