const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	context: __dirname,
	entry: './src/App.jsx',
	output: {
		path: path.join(__dirname, 'public', 'dist'),
		filename: 'bundle.js',
	},
	resolve: {
		modules: ['node_modules', './src'],
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin('public/dist')
	]
}
