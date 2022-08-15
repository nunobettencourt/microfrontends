import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

const Header = ({ isSignedIn, onSignOut }) => {
	const onClick = () => {
		if (isSignedIn && onSignOut) {
			onSignOut();
		}
	};

	return (
		<AppBar position="static" color="default" elevation={0}>
			<Toolbar>
				<Typography
					variant="h6"
					color="inherit"
					noWrap
					component={RouterLink}
					to="/"
				>
					App
				</Typography>
				<Button
					color="primary"
					variant="outlined"
					component={RouterLink}
					to={isSignedIn ? '/' : '/auth/signin'}
					onClick={onClick}
				>
					{isSignedIn ? 'Logout' : 'Login'}
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
