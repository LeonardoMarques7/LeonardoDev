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

		const gridSize = 40; // tamanho de cada quadrado
		const fadeRadius = 150; // raio do efeito ao redor do mouse

		const draw = (mouse) => {
			ctx.clearRect(0, 0, width, height);

			// Fundo preto
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, width, height);

			for (let x = 0; x <= width; x += gridSize) {
				for (let y = 0; y <= height; y += gridSize) {
					// Opacidade base dos quadrados
					let opacity = 0.2; // sempre visível

					if (mouse) {
						const dx = mouse.x - (x + gridSize / 2);
						const dy = mouse.y - (y + gridSize / 2);
						const distance = Math.sqrt(dx * dx + dy * dy);

						if (distance < fadeRadius) {
							opacity = 0.2 + 0.6 * (1 - distance / fadeRadius); // aumenta opacidade perto do mouse
						}
					}

					ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
					ctx.beginPath();
					ctx.rect(x, y, gridSize, gridSize);
					ctx.stroke();
				}
			}
		};

		const handleMouseMove = (e) => draw({ x: e.clientX, y: e.clientY });
		const handleResize = () => {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
			draw();
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("resize", handleResize);

		draw(); // desenha inicialmente com grid sempre visível

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("resize", handleResize);
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
