import React, { useContext, useState } from "react";
import SearchSvg from "../svg/Search";
import { Wrapper, Input, Block } from "./styles";

const Search = () => {
	const [search, setSearch] = useState("");

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			window.location = `/items?search=${search}`;
		}
	};
	const handleChange = (event) => {
		const value = event.target.value;
		setSearch(value);
	};
	return (
		<Wrapper>
			<Input
				type="text"
				placeholder="Nunca dejes de buscar"
				onChange={handleChange}
				onKeyDown={handleKeyDown}
			></Input>
			<Block
				onClick={() => (window.location = `/items?search=${search}`)}
			>
				<SearchSvg height="20px"></SearchSvg>
			</Block>
		</Wrapper>
	);
};

export default Search;
