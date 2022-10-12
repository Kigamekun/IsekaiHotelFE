import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/transaction.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React, { useEffect, useState } from "react"
import axios from 'axios'


const Transaction: NextPage = () => {


  const [datas, setData] = useState<any[]>([]);
  const [foods, setFood] = useState<any[]>([]);

  const getTransactionRoom = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_room`)
      .then(function (response) {
        setData(response.data.data.data);
      }).catch(function (error) {
      })
  }

  const getTransactionFood = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_food`)
      .then(function (response) {
        setFood(response.data.data.data);
      }).catch(function (error) {
      })
  }

  const payTransactionRoom = async (e: any) => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_room/pay_room/${e.currentTarget.getAttribute('data-id')}`)
      .then(function (response) {
        setData(response.data.data.data);
      }).catch(function (error) {
      })
  }

  const cancelTransactionRoom = async (e: any) => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_room/cancel_room/${e.currentTarget.getAttribute('data-id')}`)
      .then(function (response) {
        setData(response.data.data.data);
      }).catch(function (error) {
      })
  }



  const payTransactionFood = async (e: any) => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_food/pay_food/${e.currentTarget.getAttribute('data-id')}`)
      .then(function (response) {
        setFood(response.data.data.data);
      }).catch(function (error) {
      })
  }

  const cancelTransactionFood = async (e: any) => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_food/cancel_food/${e.currentTarget.getAttribute('data-id')}`)
      .then(function (response) {
        setFood(response.data.data.data);
      }).catch(function (error) {
      })
  }



  useEffect(() => {
    getTransactionRoom();
    getTransactionFood();

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
                  <th scope="col">No</th>
                  <th scope="col">Order Code</th>
                  <th scope="col">Check In</th>
                  <th scope="col">Check Out</th>
                  <th scope="col">status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {datas &&
                  datas.map((dt, key) => (
                    <tr key={key}>
                      <td style={{ verticalAlign: "middle" }}>{key + 1}</td>
                      <td style={{ verticalAlign: "middle" }}>{dt.order_code}</td>
                      <td style={{ verticalAlign: "middle" }}>{dt.start_from}</td>
                      <td style={{ verticalAlign: "middle" }}> {dt.end_at} </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {
                          dt.status == -1 ?
                            <div className='status-badge unfulfilled'>
                              Canceled
                            </div>
                            : dt.status == 0 ?
                              <div className='status-badge idle'>
                                Idle
                              </div>
                              :
                              <div className='status-badge fulfilled'>
                                Payed
                              </div>
                        }
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {dt.status == 0 ? <button data-id={dt.id} onClick={cancelTransactionRoom} className="btn btn-outline-danger me-2">Cancel</button> : ''}
                        {dt.status == 0 ? <button data-id={dt.id} onClick={payTransactionRoom} className="btn btn-outline-info">Pay</button> : ''}
                      </td>
                    </tr>
                  ))}
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
                  <th scope="col">No</th>
                  <th scope="col">Order Code</th>
                  <th scope="col">Address</th>
                  <th scope="col">status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {foods &&
                  foods.map((dt, key) => (
                    <tr key={key}>
                      <td style={{ verticalAlign: "middle" }}>{key + 1}</td>
                      <td style={{ verticalAlign: "middle" }}>{dt.order_code}</td>

                      <td style={{ verticalAlign: "middle" }}> {dt.address} </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {
                          dt.status == -1 ?
                            <div className='status-badge unfulfilled'>
                              Canceled
                            </div>
                            : dt.status == 0 ?
                              <div className='status-badge idle'>
                                Idle
                              </div>
                              :
                              <div className='status-badge fulfilled'>
                                Payed
                              </div>
                        }
                      </td>
                      <td style={{ verticalAlign: "middle" }}>
                        {dt.status == 0 ? <button data-id={dt.id} onClick={cancelTransactionFood} className="btn btn-outline-danger me-2">Cancel</button> : ''}
                        {dt.status == 0 ? <button data-id={dt.id} onClick={payTransactionFood} className="btn btn-outline-info">Pay</button> : ''}
                      </td>
                    </tr>
                  ))}
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
