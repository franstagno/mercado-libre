import React from "react";
import { Wrapper, Img, Info, Text, Block, State } from "./styles";

const CardProduct = ({ src, price, name, state, id }) => {
	const formatPrice = price.amount.toLocaleString("es-AR", {
		currency: "ARS",
		style: "currency",
		maximumFractionDigits: 0,
	});
	return (
		<Wrapper>
			<Block>
				<a href={`/items/${id}`}>
					<Img src={src}></Img>
				</a>
				<Info>
					<Text>{formatPrice}</Text>
					<a href={`/items/${id}`}>
						<Text>{name}</Text>
					</a>
				</Info>
				<State>{state}</State>
			</Block>
		</Wrapper>
	);
};

export default CardProduct;
