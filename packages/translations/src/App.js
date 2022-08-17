import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';

import Languages from './components/Languages';

const App = ({ history }) => {
	return (
		<div className="translations-app">
			<Router history={history}>
				<Switch>
					<Route path="/" component={Languages} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
