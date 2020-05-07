import React from 'react';
import Search from './Search';
import ItemList from './ItemList';
import styles from './FilterSearch.module.css';

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
		<div className={styles.container}>
			<Search value={searchText} onChange={handleInput} />
			<ItemList results={searchResults} />
			<div>
				<h6>Search Filter</h6>
			</div>
		</div>
	)
}

export default FilterSearch;
