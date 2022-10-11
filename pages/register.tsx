import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/auth.module.css'
import 'bootstrap/dist/css/bootstrap.css'

const Register: NextPage = () => {
    return (
        <>
            <div className={styles.heroAuth}>
                <div className={styles.content}>
                    <div>
                        <h1><b>Login</b></h1>
                        <br />
                        <br />
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email address ..." style={{ display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Enter your password ..." style={{ display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} />
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
