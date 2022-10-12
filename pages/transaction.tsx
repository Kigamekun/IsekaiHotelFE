import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/transaction.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar  from './components/Navbar'
import Footer from './components/Footer'
import React, { useEffect, useState } from "react"
import axios from 'axios'


const Transaction: NextPage = () => {


  const [datas, setData] = useState<any[]>([]);

  const getTransaction = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_room`)
      .then(function (response) {
        setData(response.data.data.data);
      }).catch(function (error) {
      })
  }




  useEffect(() => {
    getTransaction();
   
  }, []);


  return (
    <>
    <div className={styles.overflow}>
      <div className={styles.hero}>
      <Navbar></Navbar>
      </div>

      <div className={styles.containerBook}>
          <div className={styles.containerHead}>
            <h1><b>Hotels Transaction Room</b></h1>
            <p>Lorem Ipsum is simply dummy text of the printing<br></br> and typesetting industry.</p>
          </div>
          <div className="container table-responsive py-5"> 
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
        
        <div className={styles.containerBook2}>
        <div className={styles.containerHead}>
            <h1><b>History Transaction Food</b></h1>
            <p>Lorem Ipsum is simply dummy text of the printing<br></br> and typesetting industry.</p>
          </div>
          <div className="container table-responsive py-5"> 
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Transaction
