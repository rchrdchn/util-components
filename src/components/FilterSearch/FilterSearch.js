import React from 'react';
import Search from './Search';
import ItemList from './ItemList';

const items = ['Pants', 'T-shirts', 'Shirts', 'Socks', 'Hoodies', 'Underwear'];

const FilterSearch = () => {
	const [searchText, setSearchText] = React.useState('');
	const [searchResults, setSearchResults] = React.useState([]);

	React.useEffect(() => {
	const results = items.filter(item => item.toLowerCase().includes(searchText));

		setSearchResults(results);
  	}, [searchText]);

	const handleInput = e => setSearchText(e.target.value);

	return (
		<div>
			<Search value={searchText} onChange={handleInput} />
			<ItemList results={searchResults} />
		</div>
	)
}

export default FilterSearch;
