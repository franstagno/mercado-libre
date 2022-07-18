import React from "react";
import Home from "./views/Home";
import Items from "./views/Items";
import Item from "./views/Item";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { ItemsProvider } from "./context/ItemsContext";

const root = createRoot(document.getElementById("root"));
root.render(
	<ItemsProvider>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="items" element={<Items />}></Route>
				<Route path="items/:id" element={<Item />}></Route>
			</Routes>
		</BrowserRouter>
	</ItemsProvider>
);
