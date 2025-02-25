import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import css from "./Header.module.css";

import LocalsBtn from "../localsBtn/LocalsBtn";

const Header = () => {
  const [t] = useTranslation();

  return (
    <header className={`${css.headerContainer} container`}>
      <nav className={css.navLinkContainer}>
        <ul className={css.navLinkList}>
          <li>
            <NavLink to="/" className={css.navLink}>
              {t("Trending")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.navLink}>
              {t("Search")}
            </NavLink>
          </li>
        </ul>
      </nav>
      <LocalsBtn />
    </header>
  );
};

export default Header;
