import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './styles/theme';
import './styles/overrides.css';

import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const SportsListLazy = lazy(() => import('sports/SportsList'));
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
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Router history={history}>
					<Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
					<Suspense fallback={<Progress />}>
						<Switch>
							<Route path="/auth">
								<AuthLazy onSignIn={onSignIn} />
							</Route>
							<Route path="/translations">
								{!isSignedIn && <Redirect to="/" />}
								<TranslationsLazy />
							</Route>
							<Route path="/sports" component={SportsListLazy} />
							<Route path="/" component={MarketingLazy} />
						</Switch>
					</Suspense>
				</Router>
			</ThemeProvider>
		</React.StrictMode>
	);
};

export default App;
