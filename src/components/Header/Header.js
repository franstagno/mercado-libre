import React from "react";
import Search from "../Search";
import { Wrapper, Block, Logo } from "./styles";

const Header = () => {
	return (
		<Wrapper>
			<Block>
				<a href="/">
					<Logo src="/logo.png"></Logo>
				</a>
				<Search></Search>
			</Block>
		</Wrapper>
	);
};

export default Header;
