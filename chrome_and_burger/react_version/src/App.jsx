import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="font-sans text-base w-full h-full">
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
