/**
 * If you would like to remove the console warning regarding findDOMNode,
 * comment out the first line that follows this comment and uncomment the second.
 * Please bare in mind that this warning only occurs in dev mode and, as such,
 * the first line should be uncommented before a new build.
 * The reason for this warning lies in the fact that material-ui versions lower
 * than 5.0 still use findDOMNode  which has been deprecated in strict mode,
 */
import { createTheme } from '@material-ui/core';
//import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

const theme = createTheme({
	spacing: 4,
	palette: {
		type: 'dark',
	},
	typography: {
		fontSize: 12,
		body1: {
			fontWeight: 300,
		},
		body2: {
			fontWeight: 300,
		},
	},
});

export default theme;
