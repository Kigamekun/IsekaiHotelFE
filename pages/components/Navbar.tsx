import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { parseCookies, destroyCookie } from "nookies";
import { Menu } from '@headlessui/react'
import Swal from 'sweetalert2'

interface IUser {
    id: number;
    name: string;
    email: string;
}

const Navbar: FC<{}> = () => {

    const [userData, setUserData] = useState<IUser>({ id: 0, name: "", email: "" });
    const [auth, setAuth] = useState<number>(0);


    useEffect(() => {
        if (Object.keys(parseCookies()).length != 0) {
            setUserData({
                'id': JSON.parse(parseCookies().user).user.id,
                'name': JSON.parse(parseCookies().user).user.name,
                'email': JSON.parse(parseCookies().user).user.email
            })
            setAuth(1)
        }
    }, []);

    const logout = async () => {
        destroyCookie(null, 'user', 'fromServer')
        setAuth(0)
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Success Logout !',
            showConfirmButton: false,
            timer: 1500
        })
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{
            width: '95%', background: 'white', height: '90px', margin: "50px auto", position: 'absolute', zIndex: '10', top: '20px', left: "50%", transform: "translate(-50%, -50%)"
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
                        {auth == 1
                            ? <DropdownButton id="dropdown" className='bg-light' drop={'down'} variant={'light'} style={{ background: 'white !important' }} title={userData.name}>
                                <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                                <Dropdown.Item href="/transaction">Transaction</Dropdown.Item>
                                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                            </DropdownButton> : <>
                                <li className="nav-item">
                                    <Link href="/login">
                                        <a className="nav-link " aria-current="page" >Login</a>
                                    </Link>
                                </li> <li className="nav-item">
                                    <Link href="/register">
                                        <a className="nav-link " aria-current="page" >Register</a>
                                    </Link>
                                </li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

