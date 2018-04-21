const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackCommonConfig = require('./webpack.config.common');

const port = process.env.PORT || 3000;

module.exports = merge(webpackCommonConfig, {
	output: {
		publicPath: '/dist/',
	},
	module: {
		rules: [
			{
				test: /\.less/,
				loader: 'style-loader!css-loader!less-loader!postcss-loader'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
	],
	devtool: "source-map",
	devServer: {
		hot: true,
		port,
		historyApiFallback: true,
		publicPath: '/dist/',
	}
});
