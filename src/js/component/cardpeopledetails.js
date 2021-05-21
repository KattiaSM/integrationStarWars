import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export function Cardpeopledetails(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	return (
		<div>
			<div className="card text-center border-0 mt-5" style={{ width: "1040px" }}>
				<div className="row no-gutters">
					<div className="col-md-6">
						<img
							src="https://i.blogs.es/36e398/star-wars-eras/500_333.jpeg"
							width="500"
							height="300"
							alt=""
						/>
					</div>
					<div className="col-md-6">
						<div className="card-body">
							<h5 className="card-title">{props.name}</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut vestibulum enim.
								Quisque vel consectetur dolor, ut vulputate eros. Nullam sollicitudin malesuada urna at
								interdum. Duis sollicitudin suscipit tellus in laoreet. Nulla tempus odio orci, non
								egestas sem faucibus vel. Sed sollicitudin consectetur eros at scelerisque. Aliquam erat
								volutpat. Proin tincidunt mattis nunc at condimentum. Integer massa erat, imperdiet at
								vehicula ut, rutrum et sem. Curabitur sed nulla faucibus, vestibulum mi porta, porta
								dui. In faucibus orci eu tincidunt placerat. Aenean pharetra finibus nisl in rhoncus.
							</p>
						</div>
					</div>
				</div>
			</div>
			<table className="table mt-3">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Birth Year</th>
						<th scope="col">Gender</th>
						<th scope="col">Height</th>
						<th scope="col">Skin Color</th>
						<th scope="col">Eye Color</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.name}</td>
						<td>{props.birth_year}</td>
						<td>{props.gender}</td>
						<td>{props.height}</td>
						<td>{props.skin_color}</td>
						<td>{props.eye_color}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

Cardpeopledetails.propTypes = {
	name: PropTypes.string,
	birth_year: PropTypes.number,
	gender: PropTypes.string,
	height: PropTypes.number,
	skin_color: PropTypes.string,
	eye_color: PropTypes.string,
	img: PropTypes.string,
	id: PropTypes.number
};
