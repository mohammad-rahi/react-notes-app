import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
    return (
        <div className="search">
            <MdSearch className="search_icon" size={'1.5em'} />
            <input type="text" onChange={(event) => handleSearchNote(event.target.value)} placeholder="Type to search..." />
        </div>
    );
};

export default Search;