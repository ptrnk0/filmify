import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import css from "./Header.module.css";

const Header = () => {
	return (
		<>
			<div className={css.logoContainer}>
				<div className="container">
					<Link to="/" className={css.headerLogo}>
						Filmify
					</Link>
				</div>
			</div>
			<header className={`container ${css.header}`}>
				<Navigation />
			</header>
		</>
	);
};

export default Header;
