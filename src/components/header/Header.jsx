import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import css from "./Header.module.css";

const Header = () => {
	return (
		<header>
			<Link to="/" className={css.logo}>
				Filmify
			</Link>
			<Navigation />
		</header>
	);
};

export default Header;
