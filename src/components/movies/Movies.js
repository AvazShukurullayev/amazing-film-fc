import "./Movies.css"
import Movie from "../movie/Movie";

const Movies = () => {
    return (
        <div className="row">
            <div className="col">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <Movie/>)}
            </div>
        </div>
    )
}

export default Movies