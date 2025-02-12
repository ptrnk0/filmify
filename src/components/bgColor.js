import ColorThief from "colorthief";

export const getPosterColor = (image) => {
	const colorThief = new ColorThief();
	const img = new Image();

	img.crossOrigin = "Anonymous";
	img.src = image;

	return new Promise(
		(resolve) =>
			(img.onload = () => {
				resolve(colorThief.getColor(img));
			})
	);
};

export const setBgColor = (colors = null) => {
	if (!colors) {
		return (document.body.style.backgroundColor = "white");
	}

	document.body.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
};
