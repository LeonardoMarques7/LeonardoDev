import "./Footer.css";

import GridBackground from "./ui/GridBackground";

import mailMinimal from "../assets/images/Contato/mailMinimal.png";
import githubMinimal from "../assets/images/Contato/githubMinimal.png";
import imageLinkedin from "../assets/images/Contato/linkedinMinimal.png";

function Footer() {
	return (
		<footer>
			<div className="relative w-full bg-black text-white h-30 overflow-hidden">
				<div className="containter__links-texts z-1 absolute bottom-0 h-full justify-between  w-full text-white flex items-center">
					<p className="texts__footer flex-1 w-full mx-10">
						&copy; 2025 Leo. Todos os direitos reservados.
					</p>
					<ul className="container__links flex mx-10 gap-3 invert-100">
						<li className="item__contato w-10 transition-all ease-in-out duration-500 hover:scale-110 ">
							<a
								href="https://mail.google.com/mail/?view=cm&fs=1&to=leonardo.emcsantos@gmail.com"
								className="link__contato"
							>
								<img src={mailMinimal} alt="Link do Gmail" />
							</a>
						</li>
						<li className="item__contato w-10 transition-all ease-in-out duration-500 hover:scale-110 ">
							<a
								href="https://github.com/LeonardoMarques7/"
								className="link__contato"
							>
								<img src={githubMinimal} alt="Link do Github" />
							</a>
						</li>
						<li className="item__contato w-10 transition-all ease-in-out duration-500 hover:scale-110">
							<a
								href="https://www.linkedin.com/in/leonardo-emanuel-3695451a0/"
								className="link__contato"
							>
								<img src={imageLinkedin} alt="Link do Linkedin" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
