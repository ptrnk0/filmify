import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Header.module.css";

import LocalsBtn from "../localsBtn/LocalsBtn";

const Header = () => {
	const [t] = useTranslation();

	const buildLinkClass = ({ isActive }) => {
		return clsx(css.link, isActive && css.active);
	};

	return (
		<header className={css.header}>
			<nav className={css.navLinkContainer}>
				<NavLink to="/" className={buildLinkClass}>
					{t("Trending")}
				</NavLink>
				<NavLink to="/movies" className={buildLinkClass}>
					{t("Movie")}
				</NavLink>
			</nav>
			<LocalsBtn />
		</header>
	);
};

export default Header;
