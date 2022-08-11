import React from 'react';
import { Animate } from 'react-simple-animate';

import "./styles/style.css";


function App() {

  const [animationState, setAnimationState] = React.useState(false);

	return (
		<main className="container">
			<div className="header">
				<h1>Erika Y. Zaffira</h1>
				<h5>Phone: 0404958279</h5>
				<h5>Email: erika.ys0306@gmail.com</h5>
				<h5>Address: Taringa, Queensland, 4068</h5>
			</div>
			<div className="categories">

				<h2>
					<span className="category--dot"></span> About me
				</h2>
				<h2>
					<span className="category--dot"></span> Skills
				</h2>
				<h2>
					<span className="category--dot"></span> Education
				</h2>
				<h2>
					<span className="category--dot"></span> Projects
				</h2>
				<h2>
					<span className="category--dot"></span> Experience
				</h2>
			</div>
			<div className="content">
				<p>My name is</p>
			</div>
			<footer>FOOTER</footer>
		</main>
	);
}

export default App;
