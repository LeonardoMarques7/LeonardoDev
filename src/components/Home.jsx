import { ChevronDown } from "lucide-react";
import BackgroundWithIcons from "./ui/BackgroundWithIcons";
import "./Home.css";

const Home = () => {
	return (
		<section className="home w-full h-screen relative">
			{/* Background do canvas + ícones */}
			<div className="background__home absolute inset-0 z-0 bg-black">
				<BackgroundWithIcons />
			</div>

			{/* Conteúdo centralizado */}
			<div className="relative z-10 flex flex-col gap-5 items-center justify-start w-full h-full text-center py-20 px-4">
				<h1 className="text-7xl font-bold text-white">
					Leo<span className="text-blue-500">.</span>
				</h1>
				<h3 className="mt-4 text-2xl font-normal text-gray-300">
					Front-end & Criatividade
				</h3>
				<p className="text-gray-300 max-w-lg my-10">
					Desenvolvedor Frontend que combina simplicidade elegante com toques
					criativos únicos
				</p>

				<div className="mt-0  flex gap-5">
					<button className="px-6 py-4 bg-white text-black border-white border-1 rounded-full hover:scale-110  ease-in-out duration-500 cursor-pointer transition">
						Meus Projetos
					</button>
					<button className="px-6 py-4 bg-transparent border-white border-1 text-white rounded-full hover:bg-gray-200 hover:scale-110 hover:text-gray-900 ease-in-out duration-500 cursor-pointer transition">
						Vamos conversar
					</button>
				</div>
				<p className="home__techs text-gray-300 max-w-lg my-10 ">
					React | Node.js | Tailwind | MongoDB
				</p>
			</div>
			<ChevronDown className="text-white text-center w-full size-10 absolute bottom-5 animate-bounce" />
		</section>
	);
};

export default Home;
