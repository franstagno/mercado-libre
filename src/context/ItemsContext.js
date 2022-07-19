import React, { useState, useEffect, createContext } from "react";
import { fetchItems, fetchItem, getParamsFromUrl } from "./Utils";

const ItemsContext = createContext(null);

export const ItemsProvider = ({ children }) => {
	const [results, setResults] = useState({});
	const [item, setItem] = useState({});
	const [search, setSearch] = useState(null);
	const [producId, setProductId] = useState(null);
	const urlParams = getParamsFromUrl();

	const getItem = async () => {
		const item = await fetchItem(producId);
		setItem(item);
	};

	const getItems = async (search) => {
		const items = await fetchItems(search);
		setResults(items);
	};

	useEffect(() => {
		const search = urlParams.get("search");
		if (search) setSearch(search);
	}, []);

	useEffect(() => {
		if (!search) return;
		getItems(search);
	}, [search]);

	useEffect(() => {
		if (!producId) return;
		getItem(producId);
	}, [producId]);

	return (
		<ItemsContext.Provider value={{ results, item, search, setProductId }}>
			{children}
		</ItemsContext.Provider>
	);
};

export default ItemsContext;
