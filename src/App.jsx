import "./App.css";
import NavegeationPill from "./components/NavegeationPill";
import Home from "./components/Home";
import Projetos from "./components/Projetos";
import About from "./components/About";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
function App() {
	return (
		<>
			<NavegeationPill />
			<Home />
			<Projetos />
			<About />
			<Contato />
			<Footer />
		</>
	);
}

export default App;
