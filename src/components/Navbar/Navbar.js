import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';

const Navbar = () => {
    return (
        <div>
            <header role="banner">
                <nav className="navbar navbar-expand-lg navbar-dark" style={{
                    position: 'fixed', background: '#000',
                    zIndex: 1000,
                    left: 0,
                    right: 0,
                    top: 0
                }}>
                    <div className="container">
                        <NavLink className="navbar-brand absolute" to='/' style={{
                            letterSpacing: '0.2em',
                            fontWeight: 400,
                        }}>LUVBIRDS</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05"
                            aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExample05">
                            <ul className="navbar-nav mx-auto pl-lg-5 pl-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link navitems" exact to="/">BERANDA</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link navitems" to="/pengenalan">PENGENALAN</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavDropdown title="BETERNAK" id="basic-nav-dropdown" className='navitems'>
                                        <NavLink to="/persiapan" style={{
                                            textDecoration: 'none',
                                            color: '#333',
                                            textAlign: 'center',
                                            display: 'block',
                                            marginBottom: 10
                                        }}>
                                            PERSIAPAN
                                        </NavLink>
                                        <NavLink to="/penjodohan" style={{
                                            textDecoration: 'none',
                                            color: '#333',
                                            textAlign: 'center',
                                            display: 'block',
                                            marginBottom: 10
                                        }}>
                                            PENJODOHAN
                                        </NavLink>
                                        <NavLink to="/perawatan" style={{
                                            textDecoration: 'none',
                                            color: '#333',
                                            textAlign: 'center',
                                            display: 'block',
                                            marginBottom: 10
                                        }}>
                                            PERAWATAN
                                        </NavLink>
                                    </NavDropdown>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link navitems" to="/pakan">PAKAN</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link navitems" to="/masalah">MASALAH</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link navitems" to="/Analisis-usaha">ANALISIS USAHA</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link navitems" to="/artikel">ARTIKEL</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink className="nav-link navitems" to="/kritiksaran">KRITIK & SARAN</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;