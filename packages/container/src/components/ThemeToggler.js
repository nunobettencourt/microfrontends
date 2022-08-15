import { Box, IconButton, useTheme } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/Theme/ThemeContext';

const ThemeToggler = () => {
	const { toggleTheme } = useContext(ThemeContext);

	const theme = useTheme();
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'background.default',
				color: 'text.primary',
				borderRadius: 1,
				p: 3,
			}}
		>
			{theme.palette.type} mode
			<IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
				{theme.palette.type === 'dark' ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		</Box>
	);
};

export default ThemeToggler;
