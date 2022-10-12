import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/auth.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from "react"
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'


const Login: NextPage = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();


    const submitHandler = async (event : any) => {
        event.preventDefault();
        var res = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/v1/auth/login', {
            'email': email,
            'password': password,
        }).then(function (res) {
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Login Successfully !',
                    showConfirmButton: false,
                    timer: 1500
                })

                localStorage.setItem("user", JSON.stringify(res.data));
                router.push({pathname: '/'})

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
                        <h1><b>Login</b></h1>
                        <br />
                        <br />
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email address ..." style={{ display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter your password ..." style={{ display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <br />
                        <br />
                        <div className="d-flex justify-content-between">
                            <h6>Dont Have Account</h6>
                            <h6>Forgot Password ?</h6>
                        </div>
                        <br />
                        <br />
                        <button className="btn btn-info  w-100" style={{ height: "60px", color: 'white', background: "linear-gradient(90deg, #53A1D0, #97C7D5) !important" }}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
