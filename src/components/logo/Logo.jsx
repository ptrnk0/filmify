import { Link } from "react-router-dom";

import css from "./Logo.module.css";

import GradientText from "../gradientText/GradientText";

const Logo = () => {
	return (
		<div className={css.logoContainer}>
			<div className="container">
				<Link to="/" className={css.headerLogo}>
					<GradientText>Filmify</GradientText>
				</Link>
			</div>
		</div>
	);
};

export default Logo;
