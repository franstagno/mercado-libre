import React from "react";
import Button from "../Button";
import {
	Wrapper,
	Block,
	Img,
	Info,
	Name,
	Price,
	Text,
	Description,
	Subtitle,
} from "./styles";

const Product = ({ data }) => {
	if (Object.keys(data).length === 0) return;
	const formatPrice = data.price.amount.toLocaleString("es-AR", {
		currency: "ARS",
		style: "currency",
		maximumFractionDigits: 0,
	});
	return (
		<Wrapper>
			<Block>
				<Img src={data.picture}></Img>
				<Info>
					<Block>
						<Text>{`${data.condition} -`}</Text>
						<Text>{`${data.sold_quantity} vendidos`}</Text>
					</Block>
					<Name>{data.title}</Name>
					<Price>{formatPrice}</Price>
					<Button>Comprar</Button>
				</Info>
			</Block>
			<Subtitle>Descripcion del producto</Subtitle>
			<Description>{data.description}</Description>
		</Wrapper>
	);
};

export default Product;
