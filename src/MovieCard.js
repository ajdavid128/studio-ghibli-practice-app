

function MovieCard({title, image, release_date, description, director}) {


    return (
        <li className="card">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <h5>{release_date}</h5>
            <h6>Director: {director}</h6>
            <div>
                <p className="p-text">{description}</p>
            </div>
        </li>
    )
}

export default MovieCard;