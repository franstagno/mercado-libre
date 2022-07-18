import React from "react";
import { Wrapper, Img, Info, Text, Block, State } from "./styles";

const CardProduct = ({ src, price, name, state }) => {
	const formatPrice = price.amount.toLocaleString("es-AR", {
		currency: "ARS",
		style: "currency",
	});
	return (
		<Wrapper>
			<Block>
				<Img src={src}></Img>
				<Info>
					<Text>{formatPrice}</Text>
					<Text>{name}</Text>
				</Info>
				<State>{state}</State>
			</Block>
		</Wrapper>
	);
};

export default CardProduct;
