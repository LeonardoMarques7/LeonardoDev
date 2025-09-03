import "./App.css";
import React, { useState, useEffect } from "react";
import MenuBar from "./components/ui/MenuBar";
import NavegeationPill from "./components/NavegeationPill";
import Home from "./components/Home";
import Projetos from "./components/Projetos";
import About from "./components/About";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className="relative w-full min-h-screen ">
			{/* Conteúdo da página com z-index maior para sobrepor o background */}
			<div className="relative z-10 flex flex-col gap-20 overflow-hidden">
				{isMobile && <MenuBar />}
				<NavegeationPill />
				<Home />
				<Projetos />
				<About />
				<Contato />
				<Footer />
			</div>
		</div>
	);
}

export default App;
