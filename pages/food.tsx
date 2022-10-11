import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/food.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'

const Food: NextPage = () => {
  return (
    <>
    <div className={styles.hero}>
      <Navbar></Navbar>
      <div className={styles.heroContent}>
        <div className={styles.heroSection}>  
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2 style={{ textAlign: 'center' }}><b>List Menu</b></h2>

    <br />
    <br />
    <div className="container" style={{ background: '#BDD5D7',display:'flex',gap:'20px',justifyContent:'center',flexWrap:'wrap' ,padding:'50px',borderRadius:'20px'}}>
      <div className={styles.cards}>
        <img src="/img/food1.jpeg" className="card-img-top" style={{ height: "200px" }} />
        <h5><b>Kawakai Room</b></h5>
        <h6>$36</h6>
      </div>
      <div className={styles.cards}>
        <img src="/img/food1.jpeg" className="card-img-top" style={{ height: "200px" }} />
        <h5><b>Kawakai Room</b></h5>
        <h6>$36</h6>
      </div>
      <div className={styles.cards}>
        <img src="/img/food2.jpg" className="card-img-top" style={{ height: "200px" }} />
        <h5><b>Kawakai Room</b></h5>
        <h6>$36</h6>
      </div>
      <div className={styles.cards}>
        <img src="/img/food2.jpg" className="card-img-top" style={{ height: "200px" }} />
        <h5><b>Kawakai Room</b></h5>
        <h6>$36</h6>
      </div>
      <div className={styles.cards}>
        <img src="/img/food2.jpg" className="card-img-top" style={{ height: "200px" }} />
        <h5><b>Kawakai Room</b></h5>
        <h6>$36</h6>
      </div>
      <div className={styles.cards}>
        <img src="/img/food1.jpeg" className="card-img-top" style={{ height: "200px" }} />
        <h5><b>Kawakai Room</b></h5>
        <h6>$36</h6>
      </div>
      <div className={styles.cards}>
        <img src="/img/food1.jpeg" className="card-img-top" style={{ height: "200px" }} />
        <h5><b>Kawakai Room</b></h5>
        <h6>$36</h6>
      </div>
      <div className={styles.cards}>
        <img src="/img/food1.jpeg" className="card-img-top" style={{ height: "200px" }} />
        <h5><b>Kawakai Room</b></h5>
        <h6>$36</h6>
      </div>
      <div className={styles.cards}>
        <img src="/img/food1.jpeg" className="card-img-top" style={{ height: "200px" }} />
        <h5><b>Kawakai Room</b></h5>
        <h6>$36</h6>
      </div>
    </div>
    
      <Footer></Footer>
  </>
  )
}

export default Food
