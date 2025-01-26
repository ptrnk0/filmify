import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app/App";
import "./i18n/index";
import "modern-normalize";
import "./styles/index.css";
import "./styles/common.css";
import "./fonts/Mulish-Bold.ttf";
import "./fonts/Mulish-BoldItalic.ttf";
import "./fonts/Mulish-Regular.ttf";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
);
