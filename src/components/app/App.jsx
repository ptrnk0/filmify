import Navigation from "../navigation";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const App = () => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Navigation />
			<Routes>
				<Route path="/" element={""} />
				<Route path="/movies" element={""} />
				<Route path="/movies/:movieId" element={""}>
					<Route path="cast" element={""} />
					<Route path="reviews" element={""} />
				</Route>
				<Route path="*" element={""} />
			</Routes>
		</Suspense>
	);
};

export default App;
