import React from "react";
import propTypes from "prop-types";

export const Footer = ({ siteName }) => (
	<div className="bg-dark mt-5 mb-0">
		<p className="text-white p-4 text-center mb-0">
			Copyright &copy; {siteName} {new Date().getFullYear()}
		</p>
	</div>
);
