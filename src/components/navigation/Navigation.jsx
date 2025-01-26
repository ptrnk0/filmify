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
			<nav className={css.navLinkContainer}>
				<NavLink to="/" className={buildLinkClass}>
					{t("Trending")}
				</NavLink>
				<NavLink to="/movies" className={buildLinkClass}>
					{t("Movie")}
				</NavLink>
			</nav>
			<div className={css.localsBtnContainer}>
				<button
					onClick={() => {
						i18n.changeLanguage(LOCALS.EN);
					}}
					className={css.localsBtn}
				>
					EN
				</button>
				<button
					onClick={() => {
						i18n.changeLanguage(LOCALS.UK);
					}}
					className={css.localsBtn}
				>
					UA
				</button>
			</div>
		</>
	);
};

export default Navigation;
