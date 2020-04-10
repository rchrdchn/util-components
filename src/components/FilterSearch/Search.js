import React from 'react';

const Search = ({ value, onChange }) => {
	return (
		<input
			type="text"
			placeholder="Search items..."
			value={value}
			onChange={onChange}
		/>
	)
}

export default Search;
