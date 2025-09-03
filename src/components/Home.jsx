import { ChevronDown } from "lucide-react";
import "./Home.css";
import BackgroundWithIcons from "./ui/BackgroundWithIcons";

const Home = () => {
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveSection(sectionId);
		}
	};

	return (
		<section className="home w-full md:h-screen relative" id="Home">
			{/* Background do canvas + ícones */}
			<div className="background__home absolute inset-0 z-0 ">
				<BackgroundWithIcons />
			</div>

			{/* Conteúdo centralizado */}
			<div className="container__texts relative z-10 flex flex-col gap-5 items-center justify-center w-full h-dvh text-center py-20 px-4">
				<h1 className="text-7xl font-bold text-white">
					Leo<span className="text-blue-500">.</span>
				</h1>
				<h3 className="mt-4 text-2xl font-normal text-gray-300">
					Front-end & Criatividade
				</h3>
				<p className="text-gray-200 max-w-lg my-10">
					Desenvolvedor Frontend que combina simplicidade elegante com toques
					criativos únicos
				</p>

				<div className="mt-0  flex gap-5">
					<button
						onClick={() => scrollToSection("Projetos")}
						className="button__home px-6 py-4 bg-white text-black border-white border-1 rounded-full hover:scale-110 hover:bg-white hover:border-white hover:text-blue-400  ease-in-out duration-500 cursor-pointer transition"
					>
						Meus Projetos
					</button>
					<button
						onClick={() => scrollToSection("Contato")}
						className="button__home px-6 py-4 bg-transparent border-white border-1 text-white rounded-full hover:bg-white hover:border-white hover:text-blue-400  hover:scale-110  ease-in-out duration-500 cursor-pointer transition"
					>
						Vamos conversar
					</button>
				</div>
				<p className="home__techs text-gray-300 max-w-lg my-10 ">
					React • Node.js • Tailwind • MongoDB
				</p>
			</div>
		</section>
	);
};

export default Home;
