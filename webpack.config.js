// Required, obviously, because we're setting up webpack here
const webpack = require("webpack");
// Just required to join the pathnames in output
const path = require("path");

const config = {
	// Entry is where webpack starts its search process for the code to bundle. It should be the beginning of your CLIENT side JS - not the JS that runs your server/db
	entry: "./src/index.js",
	// Output is where webpack will put the transpiled & bundled code. The directory should be the same directory as what express.static() is looking at (or would look at, if you're not using express.static()).
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	// From webpack documentation for module: "These options determine how the different types of modules within a project will be treated." By module, they mean each individual JS or JSX file you will be transpiling and bundling via webpack.
	module: {
		rules: [
			{
				// if file has a .js or .jsx extension...
				test: /\.(js|jsx)$/,
				// and they are not node modules...
				exclude: /node_modules/,
				// the "loader" to use to transpile this code. you will have had to previously installed babel-loader, along with @babel/core and @babel/preset-env,
				use: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	watch: true,
	watchOptions: {
		ignored: /node_modules/,
	},
	node: {
		fs: "empty",
	},
	// ADVANCED: YOU CAN NEGLECT EVERYTHING BELOW THIS:

	// This enables you to drop the 'js' AND 'jsx' when importing modules in your client-side script files. By default webpack only does so with js files.
	resolve: {
		extensions: [".js", ".jsx"],
	},
};

module.exports = config;
