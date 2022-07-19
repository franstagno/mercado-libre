import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ItemsContext from "../context/ItemsContext";
import BreadCrumb from "../components/BreadCrumb";
import Product from "../components/Product/Product";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const Item = () => {
	const { item, setProductId } = useContext(ItemsContext);
	const { id } = useParams();

	const WrapperSpinner = styled.div`
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	useEffect(() => {
		setProductId(id);
	}, []);

	const spinner = (
		<WrapperSpinner>
			<Spinner></Spinner>
		</WrapperSpinner>
	);

	const render = (
		<>
			<Header></Header>
			<BreadCrumb>{item.category}</BreadCrumb>
			<Product data={item}></Product>
		</>
	);

	return Object.keys(item).length === 0 ? spinner : render;
};

export default Item;
