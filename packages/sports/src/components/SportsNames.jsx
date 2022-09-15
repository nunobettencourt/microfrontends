import React from 'react';
import { HeaderBar } from '@ptadmin/ui-components';

const SportsNames = () => {
	return (
		<HeaderBar
			routes={[
				{
					label: 'Home',
					path: '/',
				},
				{
					label: 'Sports',
					path: '/sports',
				},
			]}
		/>
	);
};

export default SportsNames;
