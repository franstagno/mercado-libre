import React from "react";
import Search from "../Search";
import { Wrapper, Block, Logo } from "./styles";

const Header = () => {
	return (
		<Wrapper>
			<Block>
				<Logo src="logo.png"></Logo>
				<Search></Search>
			</Block>
		</Wrapper>
	);
};

export default Header;
