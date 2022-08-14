import "../styles/component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faCss3,
	faJs,
	faPhp,
	faReact,
	faBootstrap
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCodeBranch } from "@fortawesome/free-solid-svg-icons";

export default function About() {
	return (
		<div className="component">
			<h1 className="component--title">Projects</h1>	
			<div className="component--content">
				<div>
					<a href="https://github.com/erika-yz/tenzies.git" target="_blank">Tenzies</a>
				</div>
				<div >
					<a href="https://github.com/erika-yz/quizzical.git" target="_blank">Quizzical</a>
				</div>
				<div >
					<a href="https://github.com/erika-yz/travel_journal.git" target="_blank">Travel Journal</a>
				</div>
			</div>
		</div>
	);
}
