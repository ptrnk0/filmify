import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import LOCALS from "../../i18n/constants";

const Navigation = () => {
	const { t } = useTranslation();

	const buildLinkClass = ({ isActive }) => {
		return clsx(css.link, isActive && css.active);
	};

	return (
		<>
			<nav>
				<NavLink to="/" className={buildLinkClass}>
					Home
				</NavLink>
				<NavLink to="/movies" className={buildLinkClass}>
					{t("Movie")}
				</NavLink>
			</nav>
			<div>
				<button
					onClick={() => {
						i18next.changeLanguage(LOCALS.EN);
					}}
				>
					English
				</button>
				<button
					onClick={() => {
						i18next.changeLanguage(LOCALS.UK);
					}}
				>
					Ukrainian
				</button>
			</div>
		</>
	);
};

export default Navigation;
