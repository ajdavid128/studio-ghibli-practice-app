import MovieCard from './MovieCard';


function ContentList({fetchMovies}) {

const movieArray = fetchMovies.map((eachMovie) => {
    return <MovieCard key={eachMovie.title} {...eachMovie}/>
}) 

    return(
        <ul className='cards'>
            {movieArray}
        </ul>
    )
}

export default ContentList;