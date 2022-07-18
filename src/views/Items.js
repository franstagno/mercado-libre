import React, { useContext } from "react";
import Header from "../components/Header";
import ItemsContext from "../context/ItemsContext";
import CardProduct from "../components/CardProduct/CardProduct";
import BreadCrumb from "../components/BreadCrumb";

const Items = () => {
	const { results } = useContext(ItemsContext);
	return (
		<>
			<Header></Header>
			<BreadCrumb>{results.categories}</BreadCrumb>
			{Object.keys(results).length !== 0 &&
				results.items.length &&
				results.items.map(({ picture, title, price, state }, idx) => (
					<CardProduct
						key={idx}
						src={picture}
						name={title}
						price={price}
						state={state}
					></CardProduct>
				))}
		</>
	);
};

export default Items;
