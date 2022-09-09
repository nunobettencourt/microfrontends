import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const Header = ({ isSignedIn, onSignOut }) => {
	const theme = useTheme();

	console.log('header: ', theme.palette.mode);

	const onClick = () => {
		if (isSignedIn && onSignOut) {
			onSignOut();
		}
	};

	return (
		<>
			<AppBar position="static" elevation={0}>
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component={RouterLink}
						to="/"
					>
						Home
					</Typography>
					<Typography
						variant="h6"
						noWrap
						component={RouterLink}
						to="/translations"
					>
						Translations
					</Typography>
					<Button
						variant="outlined"
						component={RouterLink}
						to={isSignedIn ? '/' : '/auth/signin'}
						onClick={onClick}
					>
						{isSignedIn ? 'Logout' : 'Login'}
					</Button>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
