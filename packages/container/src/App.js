import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, CreateGenerateClassName } from '@material-ui/styles';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

const generateClassName = CreateGenerateClassName({
	productionPrefix: 'co',
});

export default () => {
	return (
		<BrowserRouter>
			<StylesProvider generateClassName={generateClassName}>
				<div className="container-app">
					<Header />
					<MarketingApp />
				</div>
			</StylesProvider>
		</BrowserRouter>
	);
};
