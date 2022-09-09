import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	spacing: 4,
	palette: {
		mode: 'dark',
	},
	typography: {
		fontSize: 9,

		body1: {
			fontFamily: ['Poppins', 'sans-serif'].join(','),
		},
		body2: {
			fontWeight: 300,
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundColor: '#333 !important',
				},
			},
		},
	},
});

export default theme;
