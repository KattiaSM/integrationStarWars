import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export function Cardplanetdetails(props) {
	const { store, actions } = useContext(Context);
	console.log(store);

	return (
		<div>
			<div className="card text-center border-0 mt-5" style={{ width: "1040px" }}>
				<div className="row no-gutters">
					<div className="col-md-6">
						<img
							src="https://sm.ign.com/t/ign_in/gallery/e/every-plan/every-planet-and-location-in-star-wars-battlefront-2s-multip_te1n.1080.jpg"
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
						<th scope="col">Climate</th>
						<th scope="col">Population</th>
						<th scope="col">Orbital Period</th>
						<th scope="col">Rotation Period</th>
						<th scope="col">Diameter</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.name}</td>
						<td>{props.climate}</td>
						<td>{props.population}</td>
						<td>{props.orbital_period}</td>
						<td>{props.rotation_period}</td>
						<td>{props.diameter}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

Cardplanetdetails.propTypes = {
	name: PropTypes.string,
	climate: PropTypes.string,
	population: PropTypes.number,
	orbital_period: PropTypes.number,
	rotation_period: PropTypes.number,
	diameter: PropTypes.meter,
	img: PropTypes.string,
	id: PropTypes.number
};
