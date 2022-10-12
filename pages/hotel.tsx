import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/hotel.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ModalBody from './components/ModalBody'
import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import axios from 'axios'
import $ from 'jquery'

import Parser from 'html-react-parser'
import ReactDOM from 'react-dom'


interface IHotel {
  id: number;
  name: string;
  price: string;
  thumb: string;
  start_from?: string;
  end_at?: string;
}

const Hotel: NextPage = () => {

  const router = useRouter()
  const data = router.query;

  const [datas, setData] = useState<any[]>([]);
  const [hotelData, setHotelData] = useState<any[]>([]);
  const [modalData, setModalData] = useState<IHotel>({id: 0, name: "", price: "", thumb: "",start_from: "",end_at: "" });
  const [modalDetail, setModalDetail] = useState<string>('Loading ...');

  const getRoomData = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/room?id=${data.hotel}`)
      .then(function (response) {
        setData(response.data.data.data);
      }).catch(function (error) {

      })
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e: any) => {
    setModalData({
      'start_from': data.start_from! as string,
      'end_at': data.end_at! as string,
      'id': e.currentTarget.getAttribute('data-id'),
      'name': e.currentTarget.getAttribute('data-name'),
      'thumb': e.currentTarget.getAttribute('data-thumb'),
      'price': e.currentTarget.getAttribute('data-price')
    });
    console.log(modalData);
    setShow(true);

  };


  const getHotelData = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/hotel`)
      .then(function (response) {
        setHotelData(response.data.data.data);
      }).catch(function (error) {
      })
  }


  useEffect(() => {
    if (!router.isReady) return;
    getRoomData();
    getHotelData();
  }, [router.isReady]);




  return (
    <>
      <div className={styles.hero}>
        <Navbar></Navbar>
        <div className={styles.heroContent}>
          <div className={styles.heroSection}>
            <div className='d-flex justify-content-around align-items-center w-100 h-100'>
              <div>
                <h4>Faccility </h4>
                <br />
                <div id="checkboxes" className='d-flex gap-3'>
                  <input type="checkbox" name="rGroup" value="1" id="r1" />
                  <label className='whatever' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r1">
                  </label>
                  <input type="checkbox" name="rGroup" value="2" id="r2" />
                  <label className='whatever' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r2">
                  </label>
                  <input type="checkbox" name="rGroup" value="3" id="r3" />
                  <label className='whatever' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r3">
                  </label>
                  <input type="checkbox" name="rGroup" value="4" id="r4" />
                  <label className='whatever' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r4">
                  </label>
                </div>
              </div>
              <div>
                <div style={{ textAlign: 'center' }}>
                  <h4>Check In - Check Out </h4>
                  <br />
                  <div className='d-flex gap-3'>
                    <div className="mb-3">
                      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                      <select id="hotel" className="form-control" >
                        <option value="">Select Hotel</option>
                        {datas &&
                          datas.map((dt, key) => (
                            <option value={dt.id} key={key}>{dt.name}</option>
                          ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn" style={{ borderRadius: "20px", fontSize: "32px", color: '#53A1D0', background: '#53A1D0' }}>
                <b>Search</b>
              </button>
            </div>
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
      <h2 style={{ textAlign: 'center' }}><b>List Room</b></h2>
      <br />
      <br />
      <div className="container" style={{ background: '#BDD5D7', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', padding: '50px', borderRadius: '20px' }}>
        {datas &&
          datas.map((data, key) => (
            <div key={key} onClick={handleShow} className={styles.cards} data-id={data.id} data-name={data.name} data-thumb={data.thumb} data-price={data.price} data-description={data.description}>
              <img src={data.thumb} className="card-img-top" style={{ height: "200px" }} />
              <h5><b>{data.name}</b></h5>
              <h6>${data.price}</h6>
            </div>
          ))}

      </div>
      <br />
      <div className="container">
        <div className="d-flex justify-content-end">
          <b> View More</b>
        </div>
      </div>
      <Footer></Footer>








      <Modal size="lg" id="modal-details" show={show} onHide={handleClose}>
        <ModalBody id={modalData.id} start_from={modalData.start_from!}  end_at={modalData.end_at!}  name={modalData.name} price={modalData.price} thumb={modalData.thumb} />
      </Modal>
    </>
  )
}

export default Hotel
