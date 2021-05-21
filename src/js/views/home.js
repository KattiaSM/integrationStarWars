import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center homebg">
		<h1>Star Wars Blog</h1>
		<Link to="/register" className="btn btn-warning">
			Register!
		</Link>
		<Link to="/login" className="btn btn-dark">
			Log In
		</Link>
	</div>
);
