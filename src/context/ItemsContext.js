import React, { useState, useEffect, createContext } from "react";
import { fetchItems, fetchItem, getParamsFromUrl } from "./Utils";

const ItemsContext = createContext(null);

export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState([]);
	const [item, setItem] = useState({});
	const [search, setSearch] = useState(null);
	const [id, setId] = useState(null);
	const urlParams = getParamsFromUrl();

	const getItem = async () => {
		const item = await fetchItem();
		setItem(item);
	};

	const getItems = async () => {
		const items = await fetchItems();
		setItems(items);
	};

	useEffect(() => {
		const search = urlParams.get("search");
		const id = urlParams.get("id");
		if (id) setId(id);
		if (search) setSearch(search);
	}, []);

	useEffect(() => {
		if (!search) return;
		getItems();
	}, [search]);

	useEffect(() => {
		if (!id) return;
		getItem();
	}, [id]);

	return (
		<ItemsContext.Provider value={{ items, item }}>
			{children}
		</ItemsContext.Provider>
	);
};

export default ItemsContext;
