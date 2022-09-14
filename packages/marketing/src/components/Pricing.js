import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: 'none',
		},
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
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
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		width: '100%',
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
}));

const tiers = [
	{
		title: 'Free',
		price: 'This',
		description: [
			'10 users included',
			'2 GB of storage',
			'Help center access',
			'Email support',
		],
		buttonText: 'Sign up for free',
		buttonVariant: 'outlined',
	},
	{
		title: 'Pro',
		subheader: 'Most popular',
		price: 'is',
		description: [
			'20 users included',
			'10 GB of storage',
			'Help center access',
			'Priority email support',
		],
		buttonText: 'Get started',
		buttonVariant: 'contained',
	},
	{
		title: 'Enterprise',
		price: 'Dave',
		description: [
			'50 users included',
			'30 GB of storage',
			'Help center access',
			'Phone & email support',
		],
		buttonText: 'Contact us',
		buttonVariant: 'outlined',
	},
];
const footers = [
	{
		title: 'Company',
		description: ['Team', 'History', 'Contact us', 'Locations'],
	},
	{
		title: 'Features',
		description: [
			'Cool stuff',
			'Random feature',
			'Team feature',
			'Developer stuff',
			'Another one',
		],
	},
	{
		title: 'Resources',
		description: [
			'Resource',
			'Resource name',
			'Another resource',
			'Final resource',
		],
	},
	{
		title: 'Legal',
		description: ['Privacy policy', 'Terms of use'],
	},
];

export default function Pricing() {
	const classes = useStyles();

	return (
		<React.Fragment>
			{/* Hero unit */}
			<Container
				maxWidth="sm"
				component="main"
				className={classes.heroContent}
			>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					gutterBottom
				>
					Inner page
				</Typography>
				<Typography variant="h5" align="center" component="p">
					I created this page just to show Dave's photo!
				</Typography>
				<div className={classes.heroButtons}>
					<Grid container spacing={2} justifyContent="center">
						<Grid item>
							<RouterLink to="/">
								<Button variant="contained" color="primary">
									back to landing page
								</Button>
							</RouterLink>
						</Grid>
					</Grid>
				</div>
			</Container>
			{/* End hero unit */}
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{tiers.map((tier) => (
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={tier.title === 'Enterprise' ? 12 : 6}
							md={4}
						>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: 'center' }}
									subheaderTypographyProps={{
										align: 'center',
									}}
									action={
										tier.title === 'Pro' ? (
											<StarIcon />
										) : null
									}
								/>
								<CardMedia
									className={classes.cardMedia}
									image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWPXYFP4wL5MQPaFwOrqVM4d3GjZRUHVBjA&usqp=CAU"
									title="Dave"
								/>
								<CardContent>
									<div className={classes.cardPricing}>
										<Typography
											component="h2"
											variant="h3"
											color="textPrimary"
										>
											{tier.price}
										</Typography>
									</div>
									<ul>
										{tier.description.map((line) => (
											<Typography
												component="li"
												variant="subtitle1"
												align="center"
												key={line}
											>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button
										component={RouterLink}
										to="/auth/signup"
										fullWidth
										color="primary"
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
			{/* Footer */}
			<Container
				maxWidth="md"
				component="footer"
				className={classes.footer}
			>
				<Grid container spacing={4} justifyContent="space-evenly">
					{footers.map((footer) => (
						<Grid item xs={6} sm={3} key={footer.title}>
							<Typography
								variant="h6"
								color="textPrimary"
								gutterBottom
							>
								{footer.title}
							</Typography>
							<ul>
								{footer.description.map((item) => (
									<li key={item}>
										<Link
											href="#"
											variant="subtitle1"
											color="textSecondary"
										>
											{item}
										</Link>
									</li>
								))}
							</ul>
						</Grid>
					))}
				</Grid>
			</Container>
			{/* End footer */}
		</React.Fragment>
	);
}
