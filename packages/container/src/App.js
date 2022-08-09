import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

export default () => {
	return (
		<BrowserRouter>
			<div className="container-app">
				<Header />
				<MarketingApp />
			</div>
		</BrowserRouter>
	);
};
