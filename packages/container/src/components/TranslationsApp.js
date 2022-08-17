import { mount } from 'translations/TranslationsApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import theme from '../styles/theme';

const TranslationsApp = () => {
	const ref = useRef(null);
	const history = useHistory();

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
			theme,
		};

		const { onParentNavigate } = mount(ref.current, mountOptions);

		history.listen(onParentNavigate);
	}, []);

	return <div ref={ref} />;
};

export default TranslationsApp;
