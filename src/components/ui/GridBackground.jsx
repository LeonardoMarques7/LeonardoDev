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

		const gridSize = 30; // tamanho de cada quadrado
		const hoverRadius = 60; // raio da área de hover em volta do mouse
		let mouse = null;
		let animationFrameId;

		const draw = () => {
			ctx.clearRect(0, 0, width, height);

			// Fundo preto
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, width, height);

			for (let x = 0; x <= width; x += gridSize) {
				for (let y = 0; y <= height; y += gridSize) {
					let isHovered = false;

					if (mouse) {
						const dx = mouse.x - (x + gridSize / 2);
						const dy = mouse.y - (y + gridSize / 2);
						const distance = Math.sqrt(dx * dx + dy * dy);

						if (distance < hoverRadius) {
							isHovered = true;
						}
					}

					// borda do quadrado (sempre visível)
					ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
					ctx.beginPath();
					ctx.rect(x, y, gridSize, gridSize);
					ctx.stroke();

					// se estiver no hover → quadrado preenchido branco
					if (isHovered) {
						ctx.fillStyle = "rgba(0, 133, 255, 1)";
						ctx.strokeStyle = "rgba(000, 000, 000, 1)";
						ctx.fillRect(x, y, gridSize, gridSize);
						ctx.stroke();
					}
				}
			}

			animationFrameId = requestAnimationFrame(draw);
		};

		const handleMouseMove = (e) => {
			mouse = { x: e.clientX, y: e.clientY };
		};

		const handleMouseLeave = () => {
			mouse = null; // some o efeito quando sai do canvas
		};

		const handleResize = () => {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseleave", handleMouseLeave);
		window.addEventListener("resize", handleResize);

		draw(); // inicia animação

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseleave", handleMouseLeave);
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
