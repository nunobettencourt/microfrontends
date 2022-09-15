import React from 'react';
import ScenariosList from './ScenariosList';
import SportsNames from './SportsNames';

const SportsContainer = () => {
	return (
		<div>
			<SportsNames />
			<h1>This is an example of a container</h1>
			<ScenariosList />
		</div>
	);
};

export default SportsContainer;
