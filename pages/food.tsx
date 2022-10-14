import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/food.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ModalFood from '../components/ModalFood'
import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import axios from 'axios'
import $ from 'jquery'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Parser from 'html-react-parser'
import { parseCookies, destroyCookie } from "nookies"

interface IFood {
  id: number;
  name: string;
  price: string;
  thumb: string;
}

const Food: NextPage = () => {

  const router = useRouter()
  const data = router.query;

  const [datas, setData] = useState<any[]>([]);
  const [modalDetail, setModalDetail] = useState<string>('Loading ...');
  const [modalData, setModalData] = useState<IFood>({ id: 0, name: "", price: "", thumb: "" });
  const getFoodData = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/food`, {
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


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e: any) => {
    setModalData({
      'id': e.currentTarget.getAttribute('data-id'),
      'name': e.currentTarget.getAttribute('data-name'),
      'thumb': e.currentTarget.getAttribute('data-thumb'),
      'price': e.currentTarget.getAttribute('data-price')
    });
    setShow(true);
  };



  const searchFood = async (e: any) => {
    e.preventDefault();
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/food?filter=${$('#search-food').val()}`, {
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



  useEffect(() => {
    getFoodData();
  }, []);



  return (
    <>
      <div className={styles.hero}>
        <Navbar></Navbar>
        <div className={styles.heroContent}>
          <div className={styles.heroSection} >
            <div className="m-5">
              <h3><b>Name Food</b></h3>
              <form onSubmit={searchFood} className="d-flex justify-content-around gap-5">
                <input type="text" id="search-food" className="form-control" />
                <button type="submit" className="btn" style={{ width: '246px', borderRadius: "20px", fontSize: "32px", color: '#53A1D0', background: '#53A1D0' }}>
                  <b><img src="/icon/cil_search.svg" style={{ width: '24px', height: '24px' }} /></b>
                </button>
              </form>
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
      <h2 style={{ textAlign: 'center' }}><b>List Menu</b></h2>
      <br />
      <br />
      <div className="container" style={{ background: 'rgba(83, 161, 208, 0.3)', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', padding: '50px', borderRadius: '20px' }}>
        {datas &&
          datas.map((data, key) => (
            <div key={key} onClick={handleShow} className={styles.cards} data-id={data.id} data-name={data.name} data-thumb={data.thumb} data-price={data.price} data-description={data.description}>
              <img src={data.thumb} className="card-img-top" style={{ height: "200px" }} />
              <h5><b>{data.name}</b></h5>
              <h6>${data.price}</h6>
            </div>
          ))}
      </div>
      <div className="container mt-5">
        <div className="d-flex justify-content-end">
          <b> View More</b>
        </div>
      </div>
      <Footer></Footer>




      <Modal size="lg" id="modal-details" show={show} onHide={handleClose}>
        <ModalFood id={modalData.id} name={modalData.name} price={modalData.price} thumb={modalData.thumb} handleCloseModal={handleClose} />
      </Modal>
    </>
  )
}

export default Food
