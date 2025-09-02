import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Home, Briefcase, User, Mail, Settings } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";

import ImageMail from "../../assets/images/Contato/mailMinimal.png";
import ImageGithub from "../../assets/images/Contato/githubMinimal.png";
import ImageLinkedin from "../../assets/images/Contato/linkedinMinimal.png";

function MenuBar() {
	const [activeSection, setActiveSection] = useState("Home");

	const navItems = [
		{ id: "Home", icon: Home, label: "Home" },
		{ id: "Projetos", icon: Briefcase, label: "Projetos" },
		{ id: "Sobre", icon: User, label: "Sobre" },
		{ id: "Contato", icon: Mail, label: "Contato" },
	];

	const extraItems = [
		{
			id: "Email",
			icon: ImageMail,
			label: "E-mail",
			href: "https://mail.google.com/mail/?view=cm&fs=1&to=leonardo.emcsantos@gmail.com",
		},
		{
			id: "GitHub",
			icon: ImageGithub,
			label: "Github",
			href: "https://github.com/LeonardoMarques7/",
		},
		{
			id: "LinkedIn",
			icon: ImageLinkedin,
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/leonardo-emanuel-3695451a0/",
		},
	];

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveSection(sectionId);
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="fixed z-50 right-5 top-5 bg-white border-2 border-blue-300 p-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
				<Menu className="w-5 h-5" />
			</DropdownMenuTrigger>

			<DropdownMenuContent className="mx-4 p-2 bg-white rounded-xl shadow-xl">
				{/* Perfil */}
				<div className="flex flex-col items-center gap-2 px-4 py-2">
					<div className="w-12 h-12 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-lg">
						LM
					</div>
					<span className="font-semibold">Leonardo Marques</span>
				</div>

				<DropdownMenuSeparator />

				{/* Navegação */}
				{navItems.map((item) => (
					<motion.div
						key={item.id}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className={`relative`}
					>
						<DropdownMenuItem
							className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
								activeSection === item.id
									? "bg-blue-400 text-white"
									: "hover:bg-blue-100"
							}`}
							onClick={() => scrollToSection(item.id)}
						>
							<item.icon className="w-5 h-5" />
							<span>{item.label}</span>
						</DropdownMenuItem>
					</motion.div>
				))}

				<DropdownMenuSeparator />

				{/* Extras */}
				{extraItems.map((item) => (
					<motion.div
						key={item.id}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className={`relative`}
					>
						{item.href ? (
							<a
								href={item.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
							>
								<img src={item.icon} className="w-5 h-5" />
								<span>{item.label}</span>
							</a>
						) : (
							<DropdownMenuItem className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
								<img src={item.icon} className="w-5 h-5" />
								<span>{item.label}</span>
							</DropdownMenuItem>
						)}
					</motion.div>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default MenuBar;
