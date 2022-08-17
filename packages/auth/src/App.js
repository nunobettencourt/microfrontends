import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

// This will scope all CSS for this app
const generateClassName = createGenerateClassName({
	productionPrefix: 'au',
});

const App = ({ history, onSignIn }) => {
	return (
		<StylesProvider generateClassName={generateClassName}>
			<Container className="auth-app">
				<Router history={history}>
					<Switch>
						<Route path="/auth/signin/">
							<SignIn onSignIn={onSignIn} />
						</Route>
						<Route path="/auth/signup/">
							<SignUp onSignIn={onSignIn} />
						</Route>
					</Switch>
				</Router>
			</Container>
		</StylesProvider>
	);
};

export default App;
