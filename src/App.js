import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import CardComponent from "./components/CardComponent.js";
import FloatingBubbles from "./components/FloatingBubbles";

function App() {
	return (
		<div className='App'>
			<CardComponent />
			<FloatingBubbles />
		</div>
	);
}

export default App;
