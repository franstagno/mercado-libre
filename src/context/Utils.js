const urlItems = "https://api.mercadolibre.com/sites/MLA/search?q=";
const urlItem = "https://api.mercadolibre.com/items/";
const urlCategory = "https://api.mercadolibre.com/categories/";

export const fetchItems = async (text = "ipod", limit = "4") => {
	try {
		const response = await fetch(`${urlItems}${text}&limit=${limit}`);
		const data = await response.json();
		return fakeSearchApi(data);
	} catch (error) {
		console.warn("function fetchItems", error);
		return [];
	}
};

const fakeSearchApi = ({ available_filters, results }) => {
	try {
		const categories = getCategory(available_filters);
		const items = getDataItems(results);
		return {
			author: {
				name: "Franco",
				lastName: "Stagno",
			},
			categories,
			items,
		};
	} catch (error) {
		console.warn("function fakeSearchApi", error);
	}
};

const getCategory = (filters) => {
	try {
		const categories = filters.filter(
			(filter) => filter.id === "category"
		)[0];
		const category = categories.values.reduce((acum, category) => {
			acum = !acum.results ? category : acum;
			acum = acum.results > category.results ? acum : category;
			return acum;
		}, {}).name;
		return category;
	} catch (error) {
		console.warn("function getCategory", error);
	}
};

const getDataItems = (items) => {
	try {
		return items.map((item) => {
			return {
				id: item.id,
				title: item.title,
				price: {
					currency: item.currency_id,
					amount: item.price,
					decimals: 0,
				},
				picture: item.thumbnail,
				condition: item.condition,
				free_shipping: item.shipping.free_shipping,
			};
		});
	} catch (error) {
		console.warn("function getDataItems", error);
	}
};

export const fetchItem = async (id = "MLA919970533") => {
	try {
		const response = await fetch(`${urlItem}${id}`);
		const data = await response.json();
		return fakeItemApi(data);
	} catch (error) {
		console.warn("function", error);
		return {};
	}
};

const fakeItemApi = async ({
	id,
	category_id,
	title,
	currency_id: currency,
	price: amount,
	thumbnail: picture,
	condition,
	shipping,
	sold_quantity,
}) => {
	try {
		const category = await fetchCategory(category_id);
		const description = await fetchDescription(id);
		return {
			author: {
				name: "Franco",
				lastName: "Stagno",
			},
			category,
			description,
			id,
			title,
			price: {
				currency,
				amount,
				decimals: 0,
			},
			picture,
			condition,
			free_shipping: shipping.free_shipping,
			sold_quantity,
		};
	} catch (error) {
		console.warn("function fakeItemApi", error);
	}
};

const fetchCategory = async (id) => {
	try {
		const response = await fetch(`${urlCategory}${id}`);
		const { name } = await response.json();
		return name;
	} catch (error) {
		console.warn("function fetchCategory", error);
	}
};

const fetchDescription = async (id) => {
	try {
		const response = await fetch(`${urlItem}${id}/description`);
		const { plain_text } = await response.json();
		return plain_text;
	} catch (error) {
		console.warn("function fetchDescription", error);
	}
};

export const getParamsFromUrl = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	return urlParams;
};

try {
} catch (error) {
	console.warn("function", error);
}
