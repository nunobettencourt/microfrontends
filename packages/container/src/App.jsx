import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Progress from './components/Progress';

import { ThemeContextProvider } from './contexts/Theme/ThemeContext.js';
import ThemeToggler from './components/ThemeToggler';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const SportsLazy = lazy(() => import('./components/SportsApp'));
const TranslationsLazy = lazy(() => import('./components/TranslationsApp'));

const history = createBrowserHistory();

const App = () => {
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		if (isSignedIn) {
			history.push('/translations');
		}
	}, [isSignedIn]);

	const onSignIn = () => {
		setIsSignedIn(true);
	};

	const onSignOut = () => {
		setIsSignedIn(false);
	};

	return (
		<ThemeContextProvider>
			<Router history={history}>
				<Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
				<ThemeToggler />
				<Suspense fallback={<Progress />}>
					<Switch>
						<Route path="/auth">
							<AuthLazy onSignIn={onSignIn} />
						</Route>
						<Route path="/translations">
							{!isSignedIn && <Redirect to="/" />}
							<TranslationsLazy />
						</Route>
						<Route path="/" component={SportsLazy} />
					</Switch>
				</Suspense>
			</Router>
		</ThemeContextProvider>
	);
};

export default App;
