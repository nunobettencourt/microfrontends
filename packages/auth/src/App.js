import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

const App = ({ history, onSignIn }) => {
	return (
		<div className="auth-app">
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
		</div>
	);
};

export default App;
