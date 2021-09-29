import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const Favourites = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="dropdown">
			<button
				className="btn btn-primary dropdown-toggle "
				type="button"
				id="dropdownMenuButton1"
				data-bs-toggle="dropdown"
				aria-expanded="false">
				Favourites <span className="border-0 rounded bg-secondary px-1 fw-bold">{store.favourites.length}</span>
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.favourites.map((item, index) => {
					return (
						<li key={index}>
							<a className="dropdown-item" href="#">
								{item}
							</a>
							<i className="fas fa-trash float-right" onClick={() => actions.removeFavourites(item)} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Favourites;
