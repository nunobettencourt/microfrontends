import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import SportsList from './components/SportsList';

// This will scope all CSS for this app
const generateClassName = createGenerateClassName({
	productionPrefix: 'spr',
});

const App = ({ history }) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Container className="sports-app">
				<Router history={history}>
					<Switch>
						<Route path="/" component={SportsList} />
					</Switch>
				</Router>
			</Container>
		</StylesProvider>
	);
};

export default App;
