import { Outlet } from "react-router-dom";

import css from "./Layout.module.css";

import Header from "../header/Header";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";

const Navigation = () => {
	return (
		<div className={css.pageContainer}>
			<Logo />
			<Header />
			<main className="container">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Navigation;
