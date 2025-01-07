import { NavLink, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<>
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/movies">Movies</NavLink>
			</nav>
			<Routes>
				<Route path="/" element={""} />
				<Route path="/movies" element={""} />
				<Route path="/movies/:movieId" element={""}>
					<Route path="cast" element={""} />
					<Route path="reviews" element={""} />
				</Route>
				<Route path="*" element={""} />
			</Routes>
		</>
	);
};

export default App;
