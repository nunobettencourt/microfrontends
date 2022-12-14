const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js',
		publicPath: '/sports/latest/',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'sports',
			filename: 'remoteEntry.js',
			exposes: {
				'./SportsApp': './src/bootstrap',
				'./ScenariosList': './src/components/ScenariosList',
			},
			shared: packageJson.dependencies,
		}),
	],
};

module.exports = merge(commonConfig, prodConfig);
