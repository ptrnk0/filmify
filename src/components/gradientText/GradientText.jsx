import css from "./GradientText.module.css";

const GradientText = ({
	children,
	className = "",
	colors,
	animationSpeed = 8,
	showBorder = false,
}) => {
	const gradientStyle = {
		backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
		animationDuration: `${animationSpeed}s`,
	};

	return (
		<div className={`${css.animatedGradientText} ${className}`}>
			{showBorder && (
				<div
					className={css.gradientOverlay}
					style={gradientStyle}
				></div>
			)}
			<div className={css.textContent} style={gradientStyle}>
				{children}
			</div>
		</div>
	);
};

export default GradientText;
