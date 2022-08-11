import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthApp = ({ onSignIn }) => {
	const ref = useRef(null);
	const history = useHistory();

	/**
	 * Navigation handler which is shared with the remote apps to ensure
	 * consistency with host
	 */
	const onNavigate = ({ pathname: nextPathname }) => {
		const { pathname } = history.location;

		if (pathname !== nextPathname) {
			history.push(nextPathname);
		}
	};

	useEffect(() => {
		const mountOptions = {
			initialPath: history.location.pathname,
			onNavigate,
			onSignIn,
		};

		const { onParentNavigate } = mount(ref.current, mountOptions);

		history.listen(onParentNavigate);
	}, []);

	return <div ref={ref} />;
};

export default AuthApp;
