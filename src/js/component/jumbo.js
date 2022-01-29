import React from "react";
import propTypes from "prop-types";

export const Jumbo = ({
	title,
	bodyFirst,
	bodySecond,
	buttonURL,
	buttonLabel,
}) => (
	<div className="bg-light mt-5 p-5">
		<h1 className="display-5">{title}</h1>
		<p className="lead">{bodyFirst}</p>
		<hr className="my-4" />
		<p>{bodySecond}</p>
		<p className="lead">
			<a
				className="btn btn-primary btn-lg"
				href={buttonURL}
				role="button">
				{buttonLabel}
			</a>
		</p>
	</div>
);

Jumbo.defaultProps = {
	title: "Default Title",
	bodyFirst: `This is a simple hero unit, a simple jumbotron-style component for
                calling extra attention to featured content or information.`,
	bodySecond: `This is a simple hero unit, a simple jumbotron-style component for
    calling extra attention to featured content or information.`,
	buttonURL: `#`,
	buttonLabel: `Default Label`,
};
