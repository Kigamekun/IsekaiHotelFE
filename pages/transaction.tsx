import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

const Transaction: NextPage = () => {
  return (
    <>
    <div className="hero">
      <nav className="navBook">
      </nav>
      <div className="heroContent">
        <div>
          <h1><b>Find Your</b></h1>
          <h1> <b>Best Hotel</b></h1>
        </div>
        <div style={{ width: "500px", height: "500px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
          <div className="cards">
            <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px", width: "200px" }} />
            <h5><b>Shinciri Room</b></h5>
          </div>
          <div className="cards">
            <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px", width: "200px" }} />
            <h5><b>Shinciri Room</b></h5>
          </div>
          <div className="cards">
            <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px", width: "200px" }} />
            <h5><b>Shinciri Room</b></h5>
          </div>
          <div className="cards">
            <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px", width: "200px" }} />
            <h5><b>Shinciri Room</b></h5>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="containerBook">

    </div>
  </>
  )
}

export default Transaction
