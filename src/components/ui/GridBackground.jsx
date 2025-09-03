import { useRef, useEffect } from "react";

export default function GridBackground() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		let width = (canvas.width = window.innerWidth);
		let height = (canvas.height = window.innerHeight);

		const gridSize = 50; // tamanho de cada quadrado
		const fadeRadius = 150; // raio do efeito ao redor do mouse
		let mouse = null;
		let time = 0;
		let animationFrameId;

		const draw = () => {
			ctx.clearRect(0, 0, width, height);

			// Fundo gradiente azul escuro → claro → azul escuro
			const gradient = ctx.createLinearGradient(0, 0, 0, height);
			gradient.addColorStop(0, "#00050cff"); // azul quase preto (topo)
			gradient.addColorStop(0.5, "#000e1dff"); // azul mais claro (meio)
			gradient.addColorStop(1, "#00050eff"); // azul quase preto (base)

			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, width, height);

			for (let x = 0; x <= width; x += gridSize) {
				for (let y = 0; y <= height; y += gridSize) {
					// Opacidade base
					let opacity = 0.2;

					// Efeito pulsante global (respiração)
					const pulse = 0 * Math.sin(time / 10 + x / 50);
					opacity += pulse;

					// Efeito de foco no mouse
					if (mouse) {
						const dx = mouse.x - (x + gridSize / 2);
						const dy = mouse.y - (y + gridSize / 2);
						const distance = Math.sqrt(dx * dx + dy * dy);

						if (distance < fadeRadius) {
							opacity = 0.2 + 0.6 * (1 - distance / fadeRadius) + pulse;
						}
					}

					// Garantir que a opacidade nunca seja negativa
					opacity = Math.max(0.01, opacity);

					ctx.strokeStyle = `rgba(0, 18, 100, ${opacity})`;
					ctx.beginPath();
					ctx.rect(x, y, gridSize, gridSize);
					ctx.stroke();
				}
			}

			time++;
			animationFrameId = requestAnimationFrame(draw);
		};

		const handleMouseMove = (e) => {
			mouse = { x: e.clientX, y: e.clientY };
		};

		const handleResize = () => {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("resize", handleResize);

		draw(); // inicia animação

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				display: "block",
				zIndex: -1,
			}}
		/>
	);
}
