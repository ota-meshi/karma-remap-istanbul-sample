const path = require('path');
module.exports = [
	{
		context: path.resolve(__dirname, 'src/'),
		entry: './main.js',
		output: {
			path: path.resolve(__dirname, 'dist/'),
			filename: 'main.es5.js',
			library: 'Main',
			libraryTarget: 'umd',
			//https://github.com/webpack/docs/wiki/configuration#outputdevtoolmodulefilenametemplate
			devtoolModuleFilenameTemplate: 'srcmap/[resource-path]',
		},
		resolve: {
			extensions: ['.js'],
		},

		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: ['es2015']
					}
				}
			]
		},
		devtool: '#source-map',
	},
];