import { Link } from "react-router-dom";

import css from "./Logo.module.css";

import GradientText from "../gradientText/GradientText";

const Logo = () => {
	return (
		<div className="container">
			<Link to="/" className={css.logoLink}>
				<GradientText className={css.logo}>Filmify</GradientText>
			</Link>
		</div>
	);
};

export default Logo;
