import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/hotel.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import React, { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import $ from 'jquery'

import Parser from 'html-react-parser';

const Hotel: NextPage = () => {

  const router = useRouter()
  const data = router.query;

  const [datas, setData] = useState<any[]>([]);
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


    var html = `
    <div className="modal-content">
      <div className="modal-body p-5">
      <img class="w-100 mb-4" style="border-radius:10px;height:360px" src="${e.currentTarget.getAttribute('data-thumb')}"/>
      <h3 ><b>${e.currentTarget.getAttribute('data-name')}</b></h3  >
      <h5>$${e.currentTarget.getAttribute('data-price')}</h5>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero tempora beatae officia quisquam ab impedit facilis explicabo dignissimos nostrum, blanditiis cum cumque nihil? Animi ut harum adipisci cupiditate aliquid non asperiores quasi dolor vitae maxime, molestias eum officiis minus maiores.  </p>
        <br />
        <br />
        <br />
        <div className="d-flex justify-content-end gap-4">
          <button type="button" className="btn button-left" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn button-right">Book !</button>
        </div>

        </div>

    </div>
  
  `;
    setModalDetail(html);
    console.log(modalDetail);
    setShow(true);

  };


  useEffect(() => {
    getRoomData();
  }, [data]);



  const getDataModal = async (e: any) => {

  }

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
      <h2 style={{ textAlign: 'center' }}><b>List Room</b></h2>
      <br />
      <br />
      <div className="container" style={{ background: '#BDD5D7', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', padding: '50px', borderRadius: '20px' }}>
        {datas &&
          datas.map((data, key) => (
            <div key={key} onClick={handleShow} className={styles.cards} data-name={data.name} data-thumb={data.thumb} data-price={data.price} data-description={data.description}>
              <img src={data.thumb} className="card-img-top" style={{ height: "200px" }} />
              <h5><b>{data.name}</b></h5>
              <h6>${data.price}</h6>
            </div>

          ))}
      </div>
      <Footer></Footer>








      <Modal size="lg" onEntered={getDataModal} show={show} onHide={handleClose}>
        {Parser(modalDetail)}
      </Modal>
    </>
  )
}

export default Hotel
