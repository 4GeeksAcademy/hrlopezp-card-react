export const Navbar = () => {
    return (
        <div className="container-fluid ">
            <div className="row justify-content-center">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-4 position-fixed">
                    <div className="container-fluid d-flex justify-content-between">
                        <span>
                            <a className="navbar-brand text-white pe-5 me-5 fw-bold" href="#">Start Bootstrap</a>
                            <button className="navbar-toggler ms-5" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </span>
                        <span>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active text-white fw-bold" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-secondary fw-bolder" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-secondary fw-bolder" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-secondary fw-bolder" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </span>
                    </div>
                </nav>
            </div>
        </div>
    )
}