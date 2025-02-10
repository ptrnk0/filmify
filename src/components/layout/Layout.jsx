import { Outlet } from "react-router-dom";

import Header from "../header/Header";
import Logo from "../logo/Logo";
import Footer from "../footer/Footer";

const Navigation = () => {
	return (
		<>
			<Logo />
			<Header />
			<main className="container">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Navigation;
