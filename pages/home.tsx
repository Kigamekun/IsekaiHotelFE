import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar  from './components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.hero}>
      <Navbar></Navbar>
        <div className={styles.heroContent}>
          <div>
            <h1><b>Find Your</b></h1>
            <h1> <b>Best Hotel</b></h1>
          </div>
          <div style={{ width: "500px", height: "500px", display: "flex", justifyContent: "center", flexWrap: "wrap", columnGap: "40px" }}>
            <div className={styles.cards}>
              <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px" }} />
              <h5><b>Shinciri Room</b></h5>
            </div>
            <div className={styles.cards}>
              <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px" }} />
              <h5><b>Shinciri Room</b></h5>
            </div>
            <div className={styles.cards}>
              <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px" }} />
              <h5><b>Shinciri Room</b></h5>
            </div>
            <div className={styles.cards}>
              <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px" }} />
              <h5><b>Shinciri Room</b></h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.containerBook}>
        <div className={styles.inputBook}>
          <div className={styles.inputBookForm}>
            <input type="date" className="form-control" style={{ width: '245px' ,display: "inline-block", padding: "15px 10px", lineHeight: "140%"}} />
            <input type="date" className="form-control" style={{ width: '245px' ,display: "inline-block", padding: "15px 10px", lineHeight: "140%"}} />
            <select name="" id="" className="form-select" style={{ width: '245px' ,display: "inline-block", padding: "15px 10px", lineHeight: "140%"}}>
              <option value="">Select Hotel</option>
            </select>
            <input type="number" className="form-control" value={0} style={{ width: '75px' ,display: "inline-block", padding: "15px 10px", lineHeight: "140%"}} />
          </div>
          <div>
            <button className="btn" style={{borderRadius:"20px",fontSize:"32px",color:'#53A1D0',height:'140px',width:'330px',background:'white'}}>
              <b>Book Now !</b>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
