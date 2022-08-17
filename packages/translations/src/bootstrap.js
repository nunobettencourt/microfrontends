import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';

import App from './App';

/**
 * It creates a history object, listens for navigation events, and renders the app
 * @param el - The DOM element to mount the app to.
 * @param onNavigate - A callback to update the container's history
 * @param defaultHistory - Optional parameter. If exists, Browser History is used
 * @returns An object with a single property, onParentNavigate, which is a
 * function.
 */
const mount = (el, { onNavigate, defaultHistory, theme = {} }) => {
	const history = defaultHistory || createMemoryHistory();

	if (onNavigate) {
		history.listen(onNavigate);
	}

	ReactDOM.render(<App history={history} />, el);

	/**
	 * It takes a location object from the host application, if the pathname is
	 * different from the current pathname, it pushes the new pathname to
	 * the history object
	 */
	const onParentNavigate = ({ pathname: nextPathname }) => {
		const { pathname } = history.location;

		if (pathname !== nextPathname) {
			history.push(nextPathname);
		}
	};

	return {
		onParentNavigate,
	};
};

// When in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#_translations-dev-root');

	const defaultHistory = createBrowserHistory();

	if (devRoot) {
		mount(devRoot, { defaultHistory });
	}
}

// When running through the container app, export the mount function
export { mount };
