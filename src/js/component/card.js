import React from "react";
import propTypes from "prop-types";

export const Card = ({ imgURL, title, body, cardBtnLabel, cardBtnUrl }) => (
	<div className="col-12 col-md-6 col-lg-3 mt-5">
		<div className="card h-100">
			<img src={imgURL} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{body}</p>
				<a
					href={cardBtnUrl}
					className="btn btn-primary"
					target="_blank">
					{cardBtnLabel}
				</a>
			</div>
		</div>
	</div>
);

Card.defaultProps = {
	imgURL: `https://picsum.photos/500`,
	title: `Default Card Title`,
	body: `Default card body text. .defaultProps is really nice :) `,
	cardBtnLabel: `Default`,
	cardBtnUrl: `#`,
};
