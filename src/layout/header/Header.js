import "./Header.css"

const Header = () => {
    return (
        <header className="header bg-warning py-3 shadow">
            <div className="container">
                <nav className="nav d-flex align-items-center justify-content-between">
                    <a href="#!" className="nav__logo text-decoration-none fs-3 text-dark">Creative Movie App</a>
                    <ul className="nav__list d-flex gap-4 align-items-center">
                        <li className="nav__item">
                            <a href="#!"
                               className="nav__link text-decoration-none fs-6 text-dark">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#!"
                               className="nav__link text-decoration-none fs-6 text-dark">About</a>
                        </li>
                        <li className="nav__item">
                            <a href="#!"
                               className="nav__link text-decoration-none fs-6 text-dark">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header