import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import css from "./Header.module.css";

const Header = () => {
	return (
		<>
			<header className={css.header}>
				<div className="container">
					<Link to="/" className={css.headerLogo}>
						Filmify
					</Link>
				</div>
			</header>
			<Navigation />
		</>
	);
};

export default Header;
