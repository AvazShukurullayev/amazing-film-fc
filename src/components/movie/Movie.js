import "./Movie.css"

const Movie = () => {
    return (
        <div className="card">
            <div className="card-header"><h4>Movie title</h4></div>
            <div className="card-body">
                <div className="card-img"></div>
            </div>
            <div className="card-footer">
                <p>Liker: 90% ❤️</p>
                <p>Produced: October 1, 2010</p>
            </div>
        </div>
    )
}

export default Movie