import { useState, useEffect } from "react";
import Test from "./components/Test";

function App() {
	const [quote, setQuote] = useState("");
	const [author, setAuthor] = useState("");

	useEffect(() => {
		const setDataOnLoad = async () => {
			const data = await getQuote();
			setQuote(data.content);
			setAuthor(data.author);
		};
		setDataOnLoad();
	}, []);

	const getQuote = async () => {
		const res = await fetch("https://api.quotable.io/random", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await res.json();

		//? This one uses random hex color for background, has problems with white background
		//* var randomColor = Math.floor(Math.random() * 16777215).toString(16);
		//? This one uses random index to get random color from array
		var colors = [
			"#16a085",
			"#27ae60",
			"#2c3e50",
			"#f39c12",
			"#e74c3c",
			"#9b59b6",
			"#FB6964",
			"#342224",
			"#472E32",
			"#BDBB99",
			"#77B1A9",
			"#73A857",
		];
		var randomColor = Math.floor(Math.random() * colors.length).toString();
		document
			.querySelector(":root")
			.style.setProperty("--themeColor", colors[randomColor]);
		return data;
	};

	const newQuote = async () => {
		const data = await getQuote();
		setQuote(data.content);
		setAuthor(data.author);
	};

	return (
		<div className="App">
			<Test author={author} content={quote} newQuote={newQuote} />
		</div>
	);
}

export default App;

