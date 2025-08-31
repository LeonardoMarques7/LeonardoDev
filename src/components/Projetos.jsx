import { image, title } from "motion/react-client";
import React from "react";
import imageCorinthiansPage from "../assets/images/Projetos/image.png";
import imageCorinthiansPage2 from "../assets/images/Projetos/image2.png";
import imageCorinthiansPage3 from "../assets/images/Projetos/image3.png";
import imageCorinthiansPage4 from "../assets/images/Projetos/image4.png";
import imageCorinthiansPage5 from "../assets/images/Projetos/image5.png";
import imageCorinthiansPage6 from "../assets/images/Projetos/image6.png";
import imageCorinthiansPage7 from "../assets/images/Projetos/image7.png";
import imageCorinthiansPage8 from "../assets/images/Projetos/image8.png";

//

import imagePlayer from "../assets/images/Projetos/imagePlayer.png";
import imagePlayer2 from "../assets/images/Projetos/imagePlayer2.png";
import imagePlayer3 from "../assets/images/Projetos/imagePlayer3.png";

//

import imageWiki from "../assets/images/Projetos/imageWiki.png";
import imageWiki2 from "../assets/images/Projetos/imageWiki2.png";
import imageWiki3 from "../assets/images/Projetos/imageWiki3.png";
import imageWiki4 from "../assets/images/Projetos/imageWiki4.png";

import "./Projetos.css";

import { ExternalLink } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { color } from "motion";
const navItems = [
	{
		id: 1,
		image: [
			imageCorinthiansPage,
			imageCorinthiansPage2,
			imageCorinthiansPage3,
			imageCorinthiansPage4,
			imageCorinthiansPage5,
			imageCorinthiansPage6,
			imageCorinthiansPage7,
			imageCorinthiansPage8,
		],
		title: "CorinthiansPage",
		linkCode: "https://github.com/LeonardoMarques7/CorinthiansPage",
		linkDemo: "https://corinthianspage.netlify.app/",
		badge: [
			{
				text: "React",
				color: "bg-gray-500 text-white",
			},
			{
				text: "Tailwind",
				color: "bg-blue-500 text-white",
			},
		],
		description:
			"Página sobre o Corinthians, desenvolvida com foco em design responsivo e identidade visual do clube, destacando informações, títulos e história.",
	},
	{
		id: 2,
		image: [imagePlayer, imagePlayer2, imagePlayer3],
		title: "Player de Música",
		linkCode: "https://github.com/LeonardoMarques7/Projeto_music",
		linkDemo: "https://projeto-music.onrender.com/",
		badge: [
			{
				text: "React",
				color: "bg-gray-500 text-white",
			},
			{
				text: "MongoDB",
				color: "bg-green-500 text-white",
			},
		],
		description:
			"Um site de streaming de música moderno e responsivo, inspirado no Spotify. Desenvolvido com React.js, JavaScript, HTML, CSS, Tailwind CSS e MongoDB. O projeto foi estruturado para suportar uma lista de músicas royalty-free",
	},
	{
		id: 3,
		image: [imageWiki, imageWiki2, imageWiki3, imageWiki4],
		title: "Wiki do Artista Jão",
		linkCode: "https://github.com/LeonardoMarques7/projeto_wiki_jao",
		linkDemo: "https://projeto-wiki-jao.onrender.com/",
		badge: [
			{
				text: "React",
				color: "bg-gray-500 text-white",
			},
			{
				text: "MongoDB",
				color: "bg-green-500 text-white",
			},
			{
				text: "Tailwind",
				color: "bg-blue-500 text-white",
			},
		],
		description:
			"wiki colaborativa sobre Jão, reunindo sua biografia, fotos, álbuns e datas de shows. Aqui, fãs podem explorar detalhes da carreira do cantor, conhecer suas músicas e acompanhar tudo sobre seus lançamentos e eventos. Um espaço completo para celebrar a trajetória de Jão.",
	},
];

const Projetos = () => {
	return (
		<section id="Projetos" className="min-h-screen relative top-15">
			<div className="header__section text-center text-3xl font-bold text-gray-600 flex flex-col gap-5 mb-15">
				Projeto Selecionados
				<div className="bg-blue-400 h-1 w-50 mx-auto"></div>
			</div>
			<div className="container__projetos">
				<ul className="flex flex-col gap-20">
					{navItems.map((item, index) => (
						<li
							className={`item__projeto max-w-[80svw] rounded-xl flex gap-10 mx-auto ${
								index % 2 === 0 ? "item__left" : "item__right flex-row-reverse"
							}`}
							key={index}
						>
							{/* Imagem ocupa metade */}
							<div className="image__projeto relative flex-1">
								<div className="mockup-browser border border-base-300 rounded-xl w-full ">
									<div className="mockup-browser-toolbar">
										<div className="input">{item.linkDemo}</div>
									</div>

									{/* Container da tela */}
									<div className="relative w-full overflow-hidden rounded-b-xl !min-w-full !px-0">
										<Carousel
											plugins={[
												Autoplay({
													delay: 2000,
													stopOnInteraction: true,
													stopOnLastSnap: false,
												}),
											]}
											className="w-full h-full"
										>
											<CarouselContent className="">
												{" "}
												{/* remove o espaço */}
												{item.image.map((image, i) => (
													<CarouselItem
														key={i}
														className="w-full !basis-auto flex-shrink-0 " // remove padding lateral
													>
														<img
															src={image}
															className="w-full h-full object-cover object-center"
															alt="Print do Projeto"
														/>
													</CarouselItem>
												))}
											</CarouselContent>
											<span className="carroseul__actions relative min-w-max w-full bottom-5 left-0 z-99">
												<CarouselPrevious className="carroseul__voltar rounded-none bg-gray-600  !border-gray-600 px-5 py-4" />
												<CarouselNext className="carroseul__proximo rounded-none rounded-tr-xl bg-gray-600 !border-gray-600 px-5 py-4" />
											</span>
										</Carousel>

										{/* Botões */}
										<div className="actions__projeto absolute bottom-0 right-0 flex">
											<div className="action__item">
												<a
													href={item.linkDemo}
													className="action__link bg-white hover:bg-gray-200 duration-300 transition-all ease-in-out flex gap-2 px-5 py-4"
												>
													<ExternalLink />
													Ver Projeto
												</a>
											</div>
											<div className="action__item bg-white">
												<a
													href={item.linkCode}
													className="action__link bg-gray-600 text-white rounded-br-xl hover:bg-gray-800 duration-300 transition-all ease-in-out flex gap-2 px-5 py-4"
												>
													{" "}
													{/* Ícone do GitHub */}{" "}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														width="24"
														height="24"
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
														className="lucide lucide-github"
													>
														{" "}
														<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />{" "}
														<path d="M9 18c-4.51 2-5-2-7-2" />{" "}
													</svg>{" "}
													Código{" "}
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Textos ocupam a outra metade */}
							<div
								className={`texts__projetos flex flex-col gap-4 flex-1 ${
									index % 2 === 0 ? "item__left" : "items-end text-end"
								}`}
							>
								<div className="badges__tech flex gap-2">
									{item.badge.map((b, i) => (
										<span
											key={i}
											className={`badg px-5 py-1 text-sm rounded-full ${b.color}`}
										>
											{b.text}
										</span>
									))}
								</div>
								<h2 className="title__projeto text-2xl font-bold text-gray-800">
									{item.title}
								</h2>
								<div className="description__projeto leading-relaxed">
									{item.description}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Projetos;
