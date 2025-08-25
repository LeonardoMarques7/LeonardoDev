import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, BookOpen, User, Mail } from "lucide-react";

export default function NavegeationPill() {
	const [activeSection, setActiveSection] = useState("home");

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setActiveSection(sectionId);
		}
	};

	const navItems = [
		{ id: "Home", icon: Home, label: "Home" },
		{ id: "Projetos", icon: Briefcase, label: "Projetos" },
		{ id: "Sobre", icon: User, label: "Sobre" },
		{ id: "Contato", icon: Mail, label: "Contato" },
	];

	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.5 }}
			className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
		>
			<div className="bg-gray-900/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-2 shadow-2xl">
				<div className="flex items-center space-x-1">
					{navItems.map((item) => (
						<motion.button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className={`relative px-4 cursor-pointer py-2 rounded-full transition-all duration-300 ${
								activeSection === item.id
									? "text-white"
									: "text-white/60 hover:text-white/80"
							}`}
						>
							{activeSection === item.id && (
								<motion.div
									layoutId="navbar-active"
									className="absolute inset-0 bg-blue-400/60 rounded-full"
									transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
								/>
							)}
							<div className="relative flex items-center gap-2">
								<item.icon className="w-4 h-4" />
								<span className="text-sm font-medium hidden sm:block">
									{item.label}
								</span>
							</div>
						</motion.button>
					))}
				</div>
			</div>
		</motion.nav>
	);
}
