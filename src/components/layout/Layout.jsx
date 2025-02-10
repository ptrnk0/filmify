import clsx from "clsx";
import { Link, NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
import { useTranslation } from "react-i18next";
import LocalsBtn from "../localsBtn/LocalsBtn";
import GradientText from "../gradientText/GradientText";

const Navigation = () => {
	const [t] = useTranslation();

	const buildLinkClass = ({ isActive }) => {
		return clsx(css.link, isActive && css.active);
	};

	return (
		<>
			<div className={css.logoContainer}>
				<div className="container">
					<Link to="/" className={css.headerLogo}>
						<GradientText
							colors={[
								"#20002c",
								"#cbb4d4",
								"#20002c",
								"#cbb4d4",
								"#20002c",
							]}
						>
							Filmify
						</GradientText>
					</Link>
				</div>
			</div>
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
			<main className="container">
				<Outlet />
			</main>
		</>
	);
};

export default Navigation;
