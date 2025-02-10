import { Link, Outlet } from "react-router-dom";

import css from "./Layout.module.css";

import GradientText from "../gradientText/GradientText";
import Header from "../header/Header";

const Navigation = () => {
	return (
		<>
			<div className={css.logoContainer}>
				<div className="container">
					<Link to="/" className={css.headerLogo}>
						<GradientText>Filmify</GradientText>
					</Link>
				</div>
			</div>
			<Header />
			<main className="container">
				<Outlet />
			</main>
		</>
	);
};

export default Navigation;
