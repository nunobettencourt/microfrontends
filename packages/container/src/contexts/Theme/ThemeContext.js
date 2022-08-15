import React, { useMemo, useState, createContext } from 'react';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
	const [type, setType] = useState('dark');

	const toggleTheme = () =>
		setType((prevType) => (prevType === 'dark' ? 'light' : 'dark'));

	const theme = useMemo(
		() =>
			createMuiTheme({
				palette: {
					type,
				},
			}),
		[type]
	);

	const context = {
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={context}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
