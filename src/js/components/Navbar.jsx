export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark fixed-top navbar-dark">
  <div className="container px-0">
    <a className="navbar-brand fw-bold" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li className="nav-item fw-bold">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item fw-bold">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item fw-bold">
          <a className="nav-link" href="#">Services</a>
        </li>
         <li className="nav-item fw-bold">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}