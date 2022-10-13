import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/transaction.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PaymentModal from './components/PaymentModal'
import Modal from 'react-bootstrap/Modal'
import React, { useEffect, useState } from "react"
import axios from 'axios'
import { parseCookies, destroyCookie } from "nookies";
import PaymentXendit from './components/PaymentXendit'




interface IRoom {
  id: number;
  name: string;
  price: string;
  thumb: string;
}

const Transaction: NextPage = () => {

  const [auth, setAuth] = useState<number>(0);
  const [datas, setData] = useState<any[]>([]);
  const [foods, setFood] = useState<any[]>([]);
  const [link, setLink] = useState<string>('');

  const [modalDataFood, setModalDataFood] = useState<number>(0);
  const [modalDataRoom, setModalDataRoom] = useState<string>('');

  const [show, setShow] = useState(false);
  const [showXendit, setShowXendit] = useState(false);


  const handleCloseXendit = () => {
    setShowXendit(false);
  };
  const handleShowXendit = async (e: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/invoice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        currency: 'IDR',
        amount: e.currentTarget.getAttribute('data-total'),
        redirect_url: `${window.location.origin}/transaction`
      })

      
    });
    const data = await response.json();
    setLink(data.invoice_url);
    setShowXendit(true);
  };

  const handleClose = () => {
    setShow(false);
    getTransactionRoom();

  };
  const handleShow = (e: any) => {
    setModalDataRoom(e.currentTarget.getAttribute('data-id'));
    setShow(true);
  };


  const getTransactionRoom = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_room`, {
      headers: {

        'content-type': 'text/json',
        'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
      }
    })
      .then(function (response) {
        setData(response.data.data.data);
      }).catch(function (error) {
      })
  }

  const getTransactionFood = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_food`, {
      headers: {
        'content-type': 'text/json',
        'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
      }
    })
      .then(function (response) {
        setFood(response.data.data.data);
      }).catch(function (error) {
      })
  }

  const payTransactionRoom = async (e: any) => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_room/pay_room/${e.currentTarget.getAttribute('data-id')}`, {
      headers: {
        'content-type': 'text/json',
        'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
      }
    })
      .then(function (response) {
        setData(response.data.data.data);
      }).catch(function (error) {
      })
  }

  const cancelTransactionRoom = async (e: any) => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_room/cancel_room/${e.currentTarget.getAttribute('data-id')}`, {
      headers: {
        'content-type': 'text/json',
        'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
      }
    })
      .then(function (response) {
        setData(response.data.data.data);
      }).catch(function (error) {
      })
  }



  const payTransactionFood = async (e: any) => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_food/pay_food/${e.currentTarget.getAttribute('data-id')}`, {
      headers: {
        'content-type': 'text/json',
        'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
      }
    })
      .then(function (response) {
        setFood(response.data.data.data);
      }).catch(function (error) {
      })
  }

  const cancelTransactionFood = async (e: any) => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_food/cancel_food/${e.currentTarget.getAttribute('data-id')}`, {
      headers: {
        'content-type': 'text/json',
        'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
      }
    })
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
            <p>Terima kasih sudah booking hotel di Isekai Hotel!</p>
            <p>Berikut ini adalah informasi transaksi booking hotel yang telah anda lakukan di Isekai Hotel :</p>
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
                        {dt.status == 0 ? <><button data-id={dt.id} onClick={handleShow} className="btn btn-outline-info">Pay</button>  <button data-id={dt.id} data-total={dt.total} onClick={handleShowXendit} className="btn btn-outline-info">Pay Xendit</button></> : ''}
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
            <p>Terima kasih sudah booking food di Isekai Hotel!</p>
            <p>Berikut ini adalah informasi transaksi booking food yang telah anda lakukan di Isekai Hotel :</p>
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
      <Modal size="lg" id="modal-details" show={show} onHide={handleClose}>
        <PaymentModal id={modalDataRoom} />
      </Modal>



      <Modal size="lg" id="modal-details" show={showXendit} onHide={handleCloseXendit}>
        <PaymentXendit id={modalDataRoom} link={link} />
      </Modal>
    </>
  )
}

export default Transaction
