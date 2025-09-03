import { Code, Database, Cpu, Terminal, Braces } from "lucide-react";
import GridBackground from "./GridBackground"; // seu componente do canvas

export default function BackgroundWithIcons() {
	return (
		<div className="relative w-full h-dvh overflow-hidden">
			{/* Canvas do grid */}
			<GridBackground />

			{/* Ícones sobre o fundo */}
			<Code className="absolute top-10 right-1/5 rotate-20 w-8 h-8 text-gray-600" />
			<Database className="absolute top-60 right-40 w-8 h-8 text-gray-600" />
			<Cpu className="absolute bottom-20 right-1/5 rotate-10 w-8 h-8 text-gray-600" />
			<Terminal className="absolute top-30 left-1/5 -rotate-5 w-8 h-8 text-gray-600" />
			<Braces className="absolute bottom-30 left-1/7 -rotate-5 w-8 h-8 text-gray-600" />
		</div>
	);
}
