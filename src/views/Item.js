import React, { useContext } from "react";
import Header from "../components/Header";
import ItemsContext from "../context/ItemsContext";
import BreadCrumb from "../components/BreadCrumb";

const Item = () => {
	// const { item } = useContext(ItemsContext);
	// console.log("hola-item", item);
	return (
		<>
			<Header></Header>
			<>holas</>
			{/* <BreadCrumb>{results.categories}</BreadCrumb> */}
		</>
	);
};

export default Item;
