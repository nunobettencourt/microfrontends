import { forEach } from 'lodash';

const flatItem = (item, fields) => {
	const newItem = { ...item };

	forEach(fields, (value, key) => {
		newItem[value] = item[key] ? item[key][value] : null;
		delete newItem[key];
	});
	return newItem;
};

const flattenFields = (items, fields) =>
	items.map((item) => flatItem(item, fields));

export const handleFlatData = (items, fields, headerCells) => {
	const flatData = flattenFields(items, fields);
	const rows = handleData(flatData, headerCells);
	return rows;
};

const buildComponent = (Component, props, row) => {
	const componentProps = {};
	forEach(props, (value, key) => {
		return (componentProps[key] = value in row ? row[value] : value);
	});
	return <Component {...componentProps} />;
};

export const handleData = (items, headerCells) => {
	const rows = items.map((row) => {
		const fmt_row = {};
		headerCells.forEach(({ id, Component = null, props = '{}' }) => {
			switch (true) {
				case Component !== null:
					fmt_row[id] = buildComponent(Component, props, row);
					break;
				default:
					fmt_row[id] = row[id];
			}
			return row[id];
		});
		return fmt_row;
	});
	return rows;
};

export const createTableData = (
	headerCells = [],
	rows = [],
	total_results = 0,
	mainColumn = '',
	keyColumn = '',
	handlePagination = () => {},
	handleRowsPerPage = () => {},
	handleSort = () => {}
) => ({
	headerCells,
	rows,
	total_results,
	mainColumn,
	keyColumn,
	handlePagination,
	handleRowsPerPage,
	handleSort,
});

export const descendingComparator = (a, b, orderBy) => {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
};

export const getComparator = (order, orderBy) => {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = (array, comparator) => {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
};

export const getNewSelected = (name, selected) => {
	const selectedIndex = selected.indexOf(name);
	let newSelected = [];

	switch (true) {
		case selectedIndex === -1:
			newSelected = newSelected.concat(selected, name);
			break;
		case selectedIndex === 0:
			newSelected = newSelected.concat(selected.slice(1));
			break;
		case selectedIndex === selected.length - 1:
			newSelected = newSelected.concat(selected.slice(0, -1));
			break;
		case selectedIndex > 0:
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1)
			);
			break;
		default:
			break;
	}

	return newSelected;
};

export const filterData = (filters = [], data = []) => {
	filters.forEach((filter) => {
		for (const key in filter) {
			if (key === 'text') {
				data = data.filter((item) => {
					const inName = item.name
						.toLowerCase()
						.includes(filter[key].toLowerCase());
					const inDesc = item.description
						? item.description
								.toLowerCase()
								.includes(filter[key].toLowerCase())
						: false;

					return inName || inDesc;
				});
			}
			if (key === 'sportCode') {
				data = data.filter((item) => filter[key].includes(item[key]));
			} else if (Array.isArray(filter[key]) && filter[key].length) {
				data = data.filter((item) =>
					item[key].some(
						(i) =>
							filter[key].filter((f) => i.includes(f)).length > 0
					)
				);
			}
		}
	});

	return data;
};

/**
 * Given a field, return a list of unique values from that field.
 * @param data - The data object that you want to get unique values from.
 * @param field - The field to get unique values from.
 */
export const getUniqueValuesFromField = (data, field) => {
	const rawData = data
		.map((item) => item[field])
		.flat()
		.map((item) => item.split(':')[0]);
	const unique_values = [...new Set(rawData)].sort();
	return unique_values;
};
