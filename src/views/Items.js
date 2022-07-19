import React, { useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ItemsContext from "../context/ItemsContext";
import CardProduct from "../components/CardProduct/CardProduct";
import BreadCrumb from "../components/BreadCrumb";
import Spinner from "../components/Spinner";

const Items = () => {
	const { results, search } = useContext(ItemsContext);
	const WrapperSpinner = styled.div`
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	`;

	return (
		<>
			<Header></Header>
			<BreadCrumb>{results.categories}</BreadCrumb>
			{!search && <p>Ingresa una busqueda</p>}
			{Object.keys(results).length !== 0 ? (
				results.items.length &&
				results.items.map(
					({ picture, title, price, state, id }, idx) => (
						<CardProduct
							key={idx}
							src={picture}
							name={title}
							price={price}
							state={state}
							id={id}
						></CardProduct>
					)
				)
			) : (
				<WrapperSpinner>
					<Spinner></Spinner>
				</WrapperSpinner>
			)}
		</>
	);
};

export default Items;
