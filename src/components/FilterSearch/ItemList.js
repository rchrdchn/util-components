import React from 'react';

const ItemList = ({ results }) => {
	return (
		<ul>
			{results.map(result => <li>{result}</li>)}
		</ul>
	)
}

export default ItemList;
