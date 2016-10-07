var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:8050',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	output: {
		path: __dirname + '/public/build/',
		publicPath: 'build/',
		filename: 'bundle.js'
	},
	resolve: {
    	extensions: ['', '.js', '.jsx'], 
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
        		exclude: /(node_modules|public)/,
        		loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime']
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader',
				exclude: /(node_modules|public)/
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.gif$/,
				loader: 'url-loader?limit=10000&mimetype=image/gif'
			},
			{
				test: /\.jpg$/,
				loader: 'url-loader?limit=10000&mimetype=image/jpg'
			},
			{
				test: /\.png$/,
				loader: 'url-loader?limit=10000&mimetype=image/png'
			},
			{
				test: /\.svg$/,
				loader: 'url-loader?limit=26000&mimetype=image/svg+xml'
			}
		]
	}
};