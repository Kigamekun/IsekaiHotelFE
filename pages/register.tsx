import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/auth.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import { parseCookies, setCookie } from "nookies"
import { useRouter } from 'next/router'
import Link from 'next/link';

const Register: NextPage = () => {

    const [email, setEmail] = useState<string>('');
    const [name, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

    const router = useRouter();

    const submitHandler = async (event: any) => {
        event.preventDefault();
        var res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/register`, {
            'name': name,
            'email': email,
            'password': password,
            'password_confirmation': passwordConfirmation,
        }).then(function (res) {
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Register Successfully !',
                    showConfirmButton: false,
                    timer: 1500
                })
                router.push({ pathname: '/login' })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 1500
                })

            }
        }).catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                showConfirmButton: false,
                timer: 1500
            })
        });
    }
    return (
        <>
            <div className={styles.heroAuth}>
                <div className={styles.content}>
                    <div>
                        <form onSubmit={submitHandler}>
                            <h1><b>Register</b></h1>
                            <br />
                            <br />
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">username</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="username" style={{ display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} onChange={(event) => setUsername(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">email</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="email address" style={{ display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" style={{ display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Re Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Re password" style={{ display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} onChange={(event) => setPasswordConfirmation(event.target.value)} />
                            </div>
                            <br />
                            <br />
                            <div className="d-flex justify-content-between">
                                <h6>
                                    <Link href="/login">
                                        <a style={{ color: 'black', textDecoration: 'none' }}>Have Account</a>
                                    </Link>
                                </h6>
                            </div>
                            <br />
                            <br />
                            <button className="btn btn-info  w-100" style={{ height: "60px", color: 'white', background: "linear-gradient(90deg, #53A1D0, #97C7D5) !important" }}>Register</button>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
