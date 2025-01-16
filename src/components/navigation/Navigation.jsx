import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useTranslation } from "react-i18next";
import LOCALS from "../../i18n/constants";

const Navigation = () => {
	const [t, i18n] = useTranslation();

	const buildLinkClass = ({ isActive }) => {
		return clsx(css.link, isActive && css.active);
	};

	return (
		<>
			<nav>
				<NavLink to="/" className={buildLinkClass}>
					{t("Trending")}
				</NavLink>
				<NavLink to="/movies" className={buildLinkClass}>
					{t("Movie")}
				</NavLink>
			</nav>
			<div>
				<button
					onClick={() => {
						i18n.changeLanguage(LOCALS.EN);
					}}
				>
					English
				</button>
				<button
					onClick={() => {
						i18n.changeLanguage(LOCALS.UK);
					}}
				>
					Ukrainian
				</button>
			</div>
		</>
	);
};

export default Navigation;
