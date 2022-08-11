import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
	productionPrefix: 'co',
});

const history = createBrowserHistory();

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if (isSignedIn) {
			history.push('/dashboard');
		}
	}, [isSignedIn]);

	const onSignIn = () => {
		setIsSignedIn(true);
	};

	const onSignOut = () => {
		setIsSignedIn(false);
	};

	return (
		<Router history={history}>
			<StylesProvider generateClassName={generateClassName}>
				<div className="container-app">
					<Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
					<Suspense fallback={<Progress />}>
						<Switch>
							<Route path="/auth">
								<AuthLazy onSignIn={onSignIn} />
							</Route>
							<Route path="/dashboard">
								{!isSignedIn && <Redirect to="/" />}
								<DashboardLazy />
							</Route>
							<Route path="/" component={MarketingLazy} />
						</Switch>
					</Suspense>
				</div>
			</StylesProvider>
		</Router>
	);
};

export default App;
