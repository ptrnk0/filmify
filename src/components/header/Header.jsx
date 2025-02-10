import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import css from "./Header.module.css";

import LocalsBtn from "../localsBtn/LocalsBtn";

const Header = () => {
	const [t] = useTranslation();

	return (
		<header className={css.header}>
			<nav className={css.navLinkContainer}>
				<NavLink to="/">{t("Trending")}</NavLink>
				<NavLink to="/movies">
					<FiSearch />
				</NavLink>
			</nav>
			<LocalsBtn />
		</header>
	);
};

export default Header;
