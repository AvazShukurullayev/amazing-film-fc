import "./Main.css"
import Movies from "../../components/movies/Movies";

const Main = () => {
    return (
        <main className="main">
            <section className="movies-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center">Creative Movies</h1>
                            <div className="w-50">
                                <label htmlFor="search-bar" className="form-label">Search</label>
                                <input type="search" name="search-bar" id="search-bar" className="form-control"
                                       placeholder="Searching..."/>
                            </div>
                        </div>
                    </div>
                    <Movies/>
                </div>
            </section>
        </main>
    )
}

export default Main