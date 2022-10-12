import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/transaction.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar  from './components/Navbar'
import Footer from './components/Footer'
const Transaction: NextPage = () => {
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
