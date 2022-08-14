import React from "react";
import { Animate } from "react-simple-animate";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "./styles/style.css";
import Personal from "./components/Personal";

function App() {
	const [content, setContent] = React.useState(<About />);
	const [start, setStart] = React.useState(0);
	const [finish, setFinish] = React.useState(34);

	function move(category, start, finish) {
		setStart(start);
		setFinish(finish);
		// setPlay((prevPlay) => !prevPlay);
		selectCategory(category);
	}

	function selectCategory(category) {
		switch (category) {
			case "About":
				setContent(<About />);
				break;
			case "Skills":
				setContent(<Skills />);
				break;
			case "Projects":
				setContent(<Projects />);
				break;
			case "Education":
				setContent(<Education />);
				break;
			case "Experience":
				setContent(<Experience />);
				break;
			default:
				setContent(<About />);
		}
	}

	return (
		<main className="container">
			<div className="personal-information">
				<Personal />
				<div className="categories">
					<Animate
						play={true}
						start={{
							transform: `translateY(${start}px)`,
						}}
						end={{ transform: `translateY(${finish}px)` }}
					>
						<div className="selection">
							<FontAwesomeIcon icon={faAngleRight} />
						</div>
					</Animate>
					<h2 onClick={() => move("About", 0, 34)}>About me</h2>
					<h2 onClick={() => move("Skills", 34, 85)}>Skills</h2>
					<h2 onClick={() => move("Education", 80, 135)}>Education</h2>
					<h2 onClick={() => move("Projects", 135, 185)}>Projects</h2>
					<h2 onClick={() => move("Experience", 185, 235)}>Experience</h2>
				</div>
			</div>
			<div className="content">{content}</div>
		</main>
	);
}

export default App;
