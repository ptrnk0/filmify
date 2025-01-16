import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";

const Header = () => {
	return (
		<header>
			<Link to="/">Filmify</Link>
			<Navigation />
		</header>
	);
};

export default Header;
