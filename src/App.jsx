import "./App.css";
import React, { useState, useEffect } from "react";
import MenuBar from "./components/ui/menuBar";
import NavegeationPill from "./components/NavegeationPill";
import Home from "./components/Home";
import Projetos from "./components/Projetos";
import About from "./components/About";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // mobile por padrão

	// Detecta redimensionamento para mobile
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="flex flex-col gap-10">
			{isMobile && <MenuBar />}
			<NavegeationPill />
			<Home />
			<Projetos />
			<About />
			<Contato />
			<Footer />
		</div>
	);
}

export default App;
