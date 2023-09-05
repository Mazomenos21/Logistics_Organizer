/*
import React, {useState} from "react";

function Navbar() {
    const [activeTab, setActiveTab] = useState('estado');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            {/!* NavContainer Component *!/}

            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">Sound Logistic</a>

                    <div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                            aria-label="Toggle navigation"
                            onClick={() => handleTabChange('estado')}
                        >
                            <span className="bi bi-file-music-fill"></span>
                        </button>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                            aria-label="Toggle navigation"
                            onClick={() => handleTabChange('app')}
                        >
                            <span className="bi bi-person-fill"></span>
                        </button>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                            aria-label="Toggle navigation"
                        >
                            <span className="bi bi-bell-fill"></span>
                        </button>
                        {/!* inicio Desplegable para notificaciones *!/}
                        <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar"
                             aria-labelledby="offcanvasDarkNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Notificaciones</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Casa</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button"
                                           data-bs-toggle="dropdown"
                                           aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li>
                                                <hr className="dropdown-divider"/>
                                            </li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex mt-3" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search"
                                           aria-label="Search"/>
                                    <button className="btn btn-success" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                        {/!* fin Desplegable para notificaciones *!/}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
*/
