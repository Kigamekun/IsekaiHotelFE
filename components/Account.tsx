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


    return (
<>ada</>
    );
};

export default Navbar;

