import React, { FC } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'

const Navbar: FC<{}> = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
            width: '95%', background: 'white', height: '90px', margin: "50px auto", position: 'absolute',zIndex:'9999', top: '20px', left: "50%", transform: "translate(-50%, -50%)"
            , borderRadius: "10px"
        }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><b>Isekai Hotel</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <Link href="/food">
                                <a className="nav-link">Food</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#">Kiga</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

