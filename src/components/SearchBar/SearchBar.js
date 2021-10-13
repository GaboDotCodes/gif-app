import { useState } from "react";
import './SearchBar.css'

const SearchBar = ({setSearches}) => {
    const handleSearch = (e) => {
        e.preventDefault();
        if(searchTerm.trim().length > 2) {
            setSearches( (searches) => [searchTerm, ...searches])
            setSearchTerm('');
        }
    };

    const handleChange = ({target: { value }}) => {
        setSearchTerm(value);
    };

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSearch}>
                <input type="text" placeholder="Cat rides horse" className="search-bar" value={searchTerm} onChange={handleChange}/>
                <button type="submit" className="search-button button">Go!</button>
            </form>
        </div>
    )
}

export default SearchBar