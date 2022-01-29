//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { NavBar } from "./component/navbar";
import { Jumbo } from "./component/jumbo";
import { Card } from "./component/card";
import { Footer } from "./component/footer";

const App = ({ siteName }) => (
	<div>
		<NavBar siteName={siteName} />
		<div className="container">
			<Jumbo title="The Best Title" />
			<div className="row">
				<Card
					title="Custom Title"
					body="Some really cool custom card body."
					cardBtnLabel="Click Me"
					cardBtnUrl="https://4geeksacademy.com/"
					imgURL="https://picsum.photos/500?random=1"
				/>
				<Card
					title="Custom Title"
					body="Some really cool custom card body."
					cardBtnLabel="Click Me"
					cardBtnUrl="https://4geeksacademy.com/"
					imgURL="https://picsum.photos/500?random=2"
				/>
				<Card
					title="Custom Title"
					body="Some really cool custom card body."
					cardBtnLabel="Click Me"
					cardBtnUrl="https://4geeksacademy.com/"
					imgURL="https://picsum.photos/500?random=3"
				/>
				<Card imgURL="https://picsum.photos/500?random=4" />
				<Card imgURL="https://picsum.photos/500?random=5" />
				<Card imgURL="https://picsum.photos/500?random=6" />
				<Card imgURL="https://picsum.photos/500?random=7" />
				<Card imgURL="https://picsum.photos/500?random=8" />
			</div>
		</div>
		<Footer siteName={siteName} />
	</div>
);

App.defaultProps = {
	siteName: "Default Name",
};

//render your react application
ReactDOM.render(
	<App siteName="React Landing Page" />,
	document.querySelector("#app")
);
