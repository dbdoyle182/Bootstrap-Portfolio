import React from 'react';
import './Navbar.css';

const Navbar = () => (
    <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light" id="navbar">
        <a className="navbar-brand" href="/DoyleDev/">Daniel Doyle</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end">
            <li className="nav-item active">
                <a className="nav-link" href="/DoyleDev/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/DoyleDev/portfolio">Portfolio</a>
            </li>
            <li className="nav-item dropdown contactInfo">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="https://github.com/dbdoyle182" rel="noopener noreferrer">Github</a>
                <a className="dropdown-item" href="https://www.linkedin.com/in/daniel-doyle-b34a90ba/" rel="noopener noreferrer">LinkedIn</a>
                <a className="dropdown-item" href="https://uptowork.com/mycv/doyle" rel="noopener noreferrer">Resume</a>
                </div>
            </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>*/}
        </div>
    </nav>
)

export default Navbar;