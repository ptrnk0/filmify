import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import LocalsBtn from "../localsBtn/LocalsBtn";

const Header = () => {
  const [t] = useTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">{t("Trending")}</NavLink>
          </li>
          <li>
            <NavLink to="/movies">{t("Search")}</NavLink>
          </li>
        </ul>
      </nav>
      <LocalsBtn />
    </header>
  );
};

export default Header;
