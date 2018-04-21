const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackCommonConfig = require('./webpack.config.common');

module.exports = merge(webpackCommonConfig, {
	module: {
		rules: [
			{
				test: /\.less/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader!postcss-loader!less-loader'
				}),
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			minimize: true,
			sourceMap: true
		}),
		new webpack.EnvironmentPlugin({ NODE_ENV: 'production' }),
	]
});
