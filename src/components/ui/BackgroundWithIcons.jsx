import { Code, Database, Cpu, Terminal, Braces } from "lucide-react";
import "../Home.css";

export default function BackgroundWithIcons() {
	return (
		<div className="bg__home relative h-[98dvh] overflow-hidden rounded-b-xl bg-blue-900 mx-5 mr-5 w-auto shadow-[10px_10px_100px_#59f]">
			{/* Ícones sobre o fundo */}
			<Code className="absolute top-10 right-1/5 rotate-20 w-8 h-8 text-gray-600" />
			<Database className="absolute top-60 right-40 w-8 h-8 text-gray-600" />
			<Cpu className="absolute bottom-20 right-1/5 rotate-10 w-8 h-8 text-gray-600" />
			<Terminal className="absolute top-30 left-1/5 -rotate-5 w-8 h-8 text-gray-600" />
			<Braces className="absolute bottom-30 left-1/7 -rotate-5 w-8 h-8 text-gray-600" />
		</div>
	);
}
