import React from 'react';
import { Table } from '@ptadmin/ui-components';

const ScenariosList = () => {
	return (
		<Table
			controlled
			handlePagination={() => {}}
			handleRowsPerPage={function noRefCheck() {}}
			handleSort={function noRefCheck() {}}
			headerCells={[
				{
					id: 'id',
					label: 'id',
				},
				{
					id: 'name',
					label: 'Scenario Name',
				},
				{
					id: 'desc',
					label: 'Description',
				},
				{
					id: 'sport',
					label: 'Sport',
				},
			]}
			keyColumn="id"
			rows={[
				{
					id: 'a04d8741355e4a02ba33207bfda9acb9',
					name: 'Donbest - Ice Hockey - Normal time - Toronto Maple Leafs vs Boston Bruins',
					desc: 'High scores',
					sport: 'Ice Hockey',
				},
				{
					id: '5e480ea9486a4612bd6d40664cd5c531',
					name: 'Football - BRUO - Normal time - Juventus Turin vs Ajax Amsterdam',
					desc: null,
					sport: 'Football',
				},
				{
					id: '9186d776a0b247319d9dad374dfb0203',
					name: 'Football - BRUO - Normal time and Penalty shootout - Zulia FC vs CA Nacional Potosi',
					desc: null,
					sport: 'Football',
				},
				{
					desc: 'High scores',
					id: 'f82eaf8b06dc4f818846e42b0abcc749',
					name: 'Football - BRUO - Normal time/Participants - Manchester City vs Tottenham Hotspur',
					sport: 'Football',
				},
				{
					id: '624ad99011db4c83925dc3d0b789a722',
					name: 'Tennis - BRUO - 3 set - VILLAR, YEUDY vs FAINBLUM, DANIEL',
					desc: null,
					sport: 'Tennis',
				},
				{
					id: '89c8438f7ca24a768ca2132d2f1d6833',
					name: 'Ice Hockey - BRUO - Normal time - Rytiri Kladno vs HC Motor Ceske Budejovice',
					desc: null,
					sport: 'Ice Hockey',
				},
				{
					id: 'ee35ba7c783542ac85613eaec8856aaf',
					name: 'Baseball - BRUO - Normal time - Washington Nationals vs San Francisco Giants',
					desc: null,
					sport: 'Baseball',
				},
				{
					id: 'e3c546e16db6470cbd86403e70a534a3',
					name: 'Football - BetGenius - Normal time -  Juventus vs Ajax',
					desc: null,
					sport: 'Football',
				},
				{
					id: '7e9326a8ee9f4e2e855777d5fa49d685',
					name: 'Volleyball - BetGenius - 5 sets - Fakel Novyi Urengoy vs Belogorie Belgorod',
					desc: null,
					sport: 'Volleyball',
				},
				{
					id: 'f2faed7afd204842abab671c1668bb43',
					name: 'Tennis - BetGenius - 3 set - Pella, Guido vs Cecchinato, Marco',
					desc: null,
					sport: 'Tennis',
				},
				{
					id: '3cc8c50d780d4497be83a3fa367a4110',
					name: 'HALBAUER, ELIZABETH vs SAEZ LARRA, OLGA',
					desc: null,
					sport: 'Tennis',
				},
				{
					id: 'dadda14feb7341ac9825efc3e6dedea1',
					name: 'Metric - Football - Arsenal v Chelsea',
					desc: null,
					sport: 'Football',
				},
				{
					id: 'bac8ac15afad418ab553d733f85a1a44',
					name: 'LSPO - Manchester City vs Leicester City',
					desc: null,
					sport: 'Football',
				},
				{
					id: '952e121b4ff343fa81c76281ee69dcdc',
					name: 'Basketball - Metric - Extra time - BOS Celtics v ATL Hawks',
					desc: null,
					sport: 'Basketball',
				},
				{
					id: 'ad47838d3b814526a147d37ba7147cd5',
					name: 'Philadelphia Phillies vs Milwaukee Brewers',
					desc: null,
					sport: 'Baseball',
				},
				{
					id: '6433ea8aaae74217afe939424b0758bc',
					name: 'L-sport TEST 123 Strømsgodset vs Viking',
					desc: null,
					sport: 'Football',
				},
				{
					desc: null,
					id: '6caf18d4b33042ed9e16b75aff7749b4',
					name: 'L-sport test 2 Málaga vs Real Oviedo',
					sport: 'Football',
				},
				{
					id: '7cebbfb664144484b7d849817b69d8bb',
					name: 'Cricket 50 overs test - England vs Pakistan',
					desc: null,
					sport: 'Cricket',
				},
				{
					id: 'ae0c540c678a485aad88e422266f0e4a',
					name: 'Cricket T20 test - Supernovas vs Velocity',
					desc: null,
					sport: 'Cricket',
				},
				{
					id: '8bf58a2c8dee4bbebf5a7e92d495383e',
					name: 'American Football - Metric - Extra time - ATL Falcons v ARZ Cardinals',
					desc: 'Markets expected to be not priced',
					sport: 'American Football',
				},
			]}
			sortColumn="name"
			tableName="Scenarios"
			total_results={20}
		/>
	);
};

export default ScenariosList;
