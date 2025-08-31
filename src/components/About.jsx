import React from "react";
import fotoLeo from "../assets/images/Sobre/fotoLeo.png";
import { Marquee } from "@/components/magicui/marquee";

const techBadges = [
	{
		tech: "React",
		style: "bg-blue-100 text-blue-600",
	},
	{
		tech: "Node.js",
		style: "bg-green-200 text-green-700",
	},
	{
		tech: "MongoDB",
		style: "bg-green-600 text-white",
	},
	{
		tech: "Tailwind",
		style: "bg-blue-400 text-white",
	},
	{
		tech: "Express.js",
		style: "bg-gray-300 text-gray-800",
	},
	{
		tech: "JavaScript",
		style: "bg-yellow-200 text-yellow-700",
	},
	{
		tech: "GitHub",
		style: "bg-gray-600 text-white",
	},
	{
		tech: "Git",
		style: "bg-red-300 text-red-700",
	},
];

const About = () => {
	return (
		<div id="Sobre" className="min-h-screen relative top-15">
			{" "}
			<div className="header__section text-center text-3xl font-bold text-gray-600 flex flex-col gap-5 mb-15">
				Sobre mim
				<div className="bg-blue-400 h-1 w-50 mx-auto"></div>
			</div>
			<div className="container__sobre flex justify-between  mx-auto  max-w-[80svw]">
				<div className="texts__sobre max-w-125 text-xl flex flex-col leading-relaxed">
					<p className="mb-4">
						Sou Leonardo Marques, estudante de Ciência da Computação na UNIP e
						formado em Técnico em Desenvolvimento de Sistemas pela Etec Fernando
						Prestes. Apaixonado por front-end, desenvolvo projetos usando React,
						Tailwind, Node.js, Express e MongoDB, sempre buscando aprender e
						aprimorar minhas habilidades.
					</p>
					<p>
						Busco equilibrar estudo e lazer, transformando minha paixão por
						tecnologia em uma carreira promissora e em constante crescimento.
					</p>
				</div>
				<div className="figure__container relative z-1">
					<img
						src={fotoLeo}
						className="absolute rotate-5 rounded-2xl"
						alt="Foto de mim (Leonardo Marques)"
					/>
					<img
						src={fotoLeo}
						alt="Foto de mim (Leonardo Marques)"
						className="shadow-blue-200 shadow-2xl rounded-2xl"
					/>
				</div>
			</div>
			<div className="techs__container pt-10">
				<Marquee className="marquee__tech">
					{techBadges.map((item, i) => (
						<li
							key={i}
							className={`badge__tech list-none -z-10 px-5 py-2 rounded-full ${item.style}`}
						>
							{item.tech}
						</li>
					))}
				</Marquee>
			</div>
		</div>
	);
};

export default About;
