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
					<a href="https://github.com/erika-yz/tenzies.git">Tenzies</a>
				</div>
				<div >
					<a href="https://github.com/erika-yz/quizzical.git">Quizzical</a>
				</div>
				<div >
					<a href="https://github.com/erika-yz/travel_journal.git">Travel Journal</a>
				</div>
				<div >
					<span className="icon"><FontAwesomeIcon icon={faDatabase} /></span>
					MySQL
				</div>
				<div>
					<span className="icon"><FontAwesomeIcon icon={faCodeBranch} /></span>
					Git
				</div>
				<div >
					<span className="icon"><FontAwesomeIcon icon={faPhp} /></span>
					PHP
				</div>
				<div className="icon">jQuery</div>
				<div >
					<span className="icon"><FontAwesomeIcon icon={faReact} /></span>
					React
				</div>
				<div >
					<span className="icon"><FontAwesomeIcon icon={faBootstrap} /></span>
					Bootstrap
				</div>
			</div>
		</div>
	);
}
