import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
	console.log('container: ', theme.palette.type);
	return {
		'@global': {
			ul: {
				margin: 0,
				padding: 0,
				listStyle: 'none',
			},
			a: {
				textDecoration: 'none',
			},
		},
		appBar: {},
		toolbar: {
			flexWrap: 'wrap',
			justifyContent: 'space-between',
		},
		link: {
			margin: theme.spacing(1, 1.5),
		},
		heroContent: {
			padding: theme.spacing(8, 0, 6),
		},
		cardPricing: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'baseline',
			marginBottom: theme.spacing(2),
		},
		footer: {
			borderTop: `1px solid ${theme.palette.divider}`,
			marginTop: theme.spacing(8),
			paddingTop: theme.spacing(3),
			paddingBottom: theme.spacing(3),
			[theme.breakpoints.up('sm')]: {
				paddingTop: theme.spacing(6),
				paddingBottom: theme.spacing(6),
			},
		},
	};
});

const Header = ({ isSignedIn, onSignOut }) => {
	const classes = useStyles();

	const onClick = () => {
		if (isSignedIn && onSignOut) {
			onSignOut();
		}
	};

	return (
		<>
			<AppBar position="static" elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
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
						to="/sports"
					>
						Scenarios
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
						className={classes.link}
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
