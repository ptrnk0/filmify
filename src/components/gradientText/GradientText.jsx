import css from "./GradientText.module.css";

const GradientText = ({
	children,
	className = "",
	colors = ["#20002c", "#cbb4d4", "#20002c", "#cbb4d4", "#20002c"],
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
