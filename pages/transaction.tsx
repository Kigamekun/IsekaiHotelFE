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
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        <div className={styles.heroTable}>
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Order Code</th>
                  <th>Start From</th>
                  <th>End At</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {datas &&
                datas.map((dt, key) => (
                  <tr key={key}>
                  <td>{ key + 1}</td>
                  <td>{dt.order_code}</td>
                  <td>{dt.start_from}</td>
                  <td> {dt.end_at} </td>
                  <td> {dt.status} </td>
                  <td> Act</td>
                </tr>
                ))}
             
              </tbody>
            </table>
        </div>
      </div>

        
        <div className={styles.containerBook2}>
        <div className={styles.containerHead}>
            <h1><b>History Transaction Food</b></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        <div className={styles.heroTable}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Billing To</th>
                  <th>Start date</th>
                  <th>Start date</th>
                  <th>End date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td> 80 cm </td>
                  <td> 80 cm </td>
                  <td> 60 cm </td>
                  <td> 60 cm </td>
                  <td> 220 cm </td>
                </tr>
                <tr>
                  <td> 70 cm </td>
                  <td> 70 cm </td>
                  <td> 65 cm </td>
                  <td> 65 cm </td>
                  <td> 80 cm </td>
                </tr>
                <tr>
                  <td> 16 kg </td>
                  <td> 16 kg </td>
                  <td> 22 kg </td>
                  <td> 22 kg </td>
                  <td> 31 kg </td>
                </tr>
                <tr>
                  <td> 120 cm </td>
                  <td> 120 cm </td>
                  <td> 92 cm </td>
                  <td> 92 cm </td>
                  <td> 80 cm </td>
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
