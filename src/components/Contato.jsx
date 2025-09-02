import React from "react";
import imageEmail from "../assets/images/Contato/mail.png";
import imageGitHub from "../assets/images/Contato/github.png";
import imageLinkedin from "../assets/images/Contato/linkedin.png";
import "./Contato.css";

const Contato = () => {
	return (
		<div
			id="Contato"
			className="text-center flex mt-15 flex-col gap-10 justify-center items-center"
		>
			<h2 className="title__contato text-4xl font-bold">Vamos Conversar</h2>
			<p className="description__contao text-gray-700 text-lg">
				Tem um projeto em mente? Vamos transformar suas ideias em realidade
			</p>
			<ul className="container__links flex gap-4">
				<li className="item__contato w-10 transition-all ease-in-out duration-500 hover:scale-110 hover:rotate-3">
					<a
						href="https://mail.google.com/mail/?view=cm&fs=1&to=leonardo.emcsantos@gmail.com"
						className="link__contato"
					>
						<img
							className="image__contato"
							src={imageEmail}
							alt="Logo do Gmail do Google"
						/>
					</a>
				</li>
				<li className="item__contato w-10 transition-all ease-in-out duration-500 hover:scale-110 ">
					<a
						href="https://github.com/LeonardoMarques7/"
						className="link__contato"
					>
						<img
							className="image__contato"
							src={imageGitHub}
							alt="Logo do GitHub"
						/>
					</a>
				</li>
				<li className="item__contato w-10 transition-all ease-in-out duration-500 hover:scale-110 hover:-rotate-3">
					<a
						href="https://www.linkedin.com/in/leonardo-emanuel-3695451a0/"
						className="link__contato"
					>
						<img
							className="image__contato"
							src={imageLinkedin}
							alt="Logo do Linkedin"
						/>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Contato;
