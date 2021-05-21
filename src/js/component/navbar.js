import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	//console.log(store);

	const handleDelete = index => {
		console.log("Quiero eliminar el item en el index" + index);
		actions.deleteFavPlanet(index);
		actions.deleteFavPeople(index);
	};

	const showFavorites = store.favorites.map((item, index) => {
		console.log("favoritos", store.favorites);
		return (
			<a
				className="dropdown-item"
				href="#"
				key={index}
				onClick={e => {
					handleDelete(index);
				}}>
				{item}
				<span>
					<i className="fas fa-trash float-right" />
				</span>
			</a>
		);
	});

	return (
		<nav className="navbar navbarcolor">
			<a className="navbar-brand" href="#">
				<Link to="/">
					<img
						src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_black-700x700.png"
						width="150"
						height="150"
						alt=""
					/>
				</Link>
			</a>
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites <span className="badge badge-light">{store.favorites.length}</span>
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					{showFavorites}
				</div>
			</div>
		</nav>
	);
};
