import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import SportsList from './components/SportsList';

const App = ({ history }) => {
	return (
		<div className="sports-app">
			<Router history={history}>
				<Switch>
					<Route path="/" component={SportsList} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
