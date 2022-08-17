import React, { useEffect, useState } from 'react';
import { createTableData, Table } from '@ptadmin/ui-components';
import axios from 'axios';

const Languages = () => {
	const [languages, setLanguages] = useState([]);

	const fetchLanguages = async () => {
		if (!languages.length) {
			const { data } = await axios.get(
				'https://titan-featuretest.custenv.geneity.co.uk/genmoj_xlations/translations/PRX/languages'
			);
			setLanguages(data.data);
		}
	};

	useEffect(fetchLanguages, []);

	const tableName = 'Translations';

	const headers = [
		{
			id: 'LANG',
			label: 'Language code',
		},
		{
			id: 'LANG_NAME',
			label: 'Language Name',
		},
		{
			id: 'LANG_NAME_NATIVE',
			label: 'Native Language Name',
		},
	];

	const tableData = createTableData(
		headers,
		languages,
		languages.length,
		'LANG',
		'LANG'
	);

	return (
		<Table
			{...tableData}
			numberOfRows={25}
			numberOfRowsOptions={[25, 50, 100, 150]}
			tableName={tableName}
			controlled
		/>
	);
};

export default Languages;
