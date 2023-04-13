import React from "react";

function Search({setSearchMovies}) {

    const handleChange = (se) => {
        setSearchMovies(se.target.value);
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





// import React from "react";

// function Search({setSearchMovies}) {

//     const handleChange = (e) => {
//         setSearchMovies(e.target.value);
//     }

//     return (
//         <div className="searchbar">
//             <label htmlFor="search">Search Studio Ghibli Movies:</label>
//             <input 
//                 type="text"
//                 id="search"
//                 placeholder="Search by movie title or date..."
//                 onChange={handleChange} />
//         </div>
//     );
// }

// export default Search;
