import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Progress from './components/Progress';

import { ThemeContextProvider } from './contexts/Theme/ThemeContext.js';
import ThemeToggler from './components/ThemeToggler';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

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
			<ThemeContextProvider>
				<Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
				<ThemeToggler />
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
			</ThemeContextProvider>
		</Router>
	);
};

export default App;
