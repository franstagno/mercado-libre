const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	devServer: {
		port: 9000,
	},
	entry: {
		home: path.join(__dirname, "src/views/Home.js"),
		items: path.join(__dirname, "src/views/Home.js"),
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"],
					},
				},
			},
			{
				test: /\.(png|jp(e*)g|gif|svg)$/,
				use: ["file-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			chunks: ["home"],
			template: path.join(__dirname, "src/html/index.html"),
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			chunks: ["items"],
			template: path.join(__dirname, "src/html/items.html"),
			filename: "items/index.html",
		}),
		new CopyPlugin({
			patterns: [{ from: path.resolve(__dirname, "public") }],
		}),
		new Dotenv({
			systemvars: true,
		}),
	],
};
