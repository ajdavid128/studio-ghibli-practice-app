import React from "react";

function Search() {

    const handleChange = () => {
        console.log("Our event is working!");
    }

    return (
        <div className="searchbar">
            <label htmlFor="search">Search Studio Ghibli Movies:</label>
            <input 
                type="text"
                id="search"
                placeholder="Search by movie title or date..." 
                onChange={handleChange}
            />
        </div>
    );
}

export default Search;