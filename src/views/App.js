import React from "react";
import MainLayout from "../components/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<MainLayout />}></Route>
			<Route path="items" element={<MainLayout />}></Route>
		</Routes>
	</BrowserRouter>
);
