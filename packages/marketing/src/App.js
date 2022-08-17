import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// This will scope all CSS for this app
const generateClassName = createGenerateClassName({
	productionPrefix: 'ma',
});

const App = ({ history }) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Container className="marketing-app">
				<Router history={history}>
					<Switch>
						<Route exact path="/pricing" component={Pricing} />
						<Route path="/" component={Landing} />
					</Switch>
				</Router>
			</Container>
		</StylesProvider>
	);
};

export default App;
