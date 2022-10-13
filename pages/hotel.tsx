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
import { useForm } from 'react-hook-form'
import Parser from 'html-react-parser'
import ReactDOM from 'react-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { parseCookies, destroyCookie } from "nookies"


interface IHotel {
  id: number;
  name: string;
  price: string;
  thumb: string;
  description: string;
  faccility: string;
  start_from?: string;
  end_at?: string;
}

type SearchForm = {
  start_from: Date;
  end_at: Date;
  hotel_id: number;
};

const Hotel: NextPage = () => {

  const router = useRouter()
  const data = router.query;

  const [datas, setData] = useState<any[]>([]);
  const [hotelData, setHotelData] = useState<any[]>([]);
  const [modalData, setModalData] = useState<IHotel>({ id: 0, name: "", price: "", thumb: "", start_from: "", end_at: "", description: "", faccility: "" });
  const [modalDetail, setModalDetail] = useState<string>('Loading ...');
  const [startFrom, setStartFrom] = useState<string>('');
  const [endAt, setEndAt] = useState<string>('');
  const [hotelId, setHotelId] = useState<string>('');
  const getRoomData = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/room?id=${data.hotel}`, {
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
      'start_from': startFrom! as string,
      'end_at': endAt! as string,
      'id': e.currentTarget.getAttribute('data-id'),
      'name': e.currentTarget.getAttribute('data-name'),
      'thumb': e.currentTarget.getAttribute('data-thumb'),
      'price': e.currentTarget.getAttribute('data-price'),
      'description': e.currentTarget.getAttribute('data-description'),
      'faccility': e.currentTarget.getAttribute('data-faccility'),
    });
    setShow(true);
  };


  const getHotelData = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/hotel`, {
      headers: {
        'content-type': 'text/json',
        'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
      }
    })
      .then(function (response) {
        setHotelData(response.data.data.data);
      }).catch(function (error) {
      })
  }


  const handlerSearch = async () => {
    var checkbox: string[];
    checkbox = [];
    $("input:checkbox[name=rGroup]:checked").each(function () {
      checkbox.push($(this).val() as string);
    });


    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/room/search`, {
      'hotel_id': $('#hotel').val(),
      'faccility': checkbox,
    }, {
      headers: {
        'content-type': 'text/json',
        'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
      }
    }).then(function (res) {
      setData(res.data.data);
    });
  }




  const validationSchema = Yup.object().shape({
    start_from: Yup.string().required('Fullname is required'),
    end_at: Yup.string().required('Username is required'),
    hotel_id: Yup.number().required('Email is required'),

  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SearchForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: SearchForm) => {
    var checkbox: string[];
    checkbox = [];
    $("input:checkbox[name=rGroup]:checked").each(function () {
      checkbox.push($(this).val() as string);
    });

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/room/search`, {
      'hotel_id': $('#hotel').val(),
      'faccility': checkbox,
    }, {
      headers: {
        'content-type': 'text/json',
        'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
      }
    }).then(function (res) {
      setData(res.data.data);
    });
  };


  useEffect(() => {
    if (!router.isReady) return;
    setStartFrom(data.start_from! as string);
    setEndAt(data.end_at! as string);
    setHotelId(data.hotel! as string);
    getRoomData();
    getHotelData();
  }, [router.isReady]);


  return (
    <>
      <div className={styles.hero}>
        <Navbar></Navbar>
        <div className={styles.heroContent}>
          <div className={styles.heroSection}>
            <form onSubmit={handleSubmit(onSubmit)} className='d-flex justify-content-around align-items-center w-100 h-100'>
              <div>
                <h4>Faccility </h4>
                <br />
                <div id="checkboxes" className='d-flex gap-3'>
                  <input type="checkbox" name="rGroup" value="1" id="r1" />
                  <label className='whatever d-flex justify-content-center align-items-center' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r1">
                    <Image src="/icon/cil_swimming.svg" alt="logo" width='24px' height='24px' />
                  </label>
                  <input type="checkbox" name="rGroup" value="2" id="r2" />
                  <label className='whatever d-flex justify-content-center align-items-center' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r2">
                    <Image src="/icon/iconoir_air-conditioner.svg" alt="logo" width='24px' height='24px' />
                  </label>
                  <input type="checkbox" name="rGroup" value="3" id="r3" />
                  <label className='whatever d-flex justify-content-center align-items-center' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r3">
                    <Image src="/icon/akar-icons_wifi.svg" alt="logo" width='24px' height='24px' />
                  </label>
                  <input type="checkbox" name="rGroup" value="4" id="r4" />
                  <label className='whatever d-flex justify-content-center align-items-center' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r4">
                    <Image src="/icon/ep_food.svg" alt="logo" width='24px' height='24px' />
                  </label>
                </div>
              </div>
              <div>
                <div style={{ textAlign: 'center' }}>
                  <h4>Check In - Check Out </h4>
                  <br />

                  <div className='d-flex gap-3'>
                    <div className="mb-3">
                      <input type="date" {...register('start_from')} className={`form-control ${errors.start_from ? 'is-invalid' : ''}`} onChange={(event) => setStartFrom(event.target.value)} />
                    </div>
                    <div className="mb-3">
                      <select id="hotel" {...register('hotel_id')} className={`form-control ${errors.start_from ? 'is-invalid' : ''}`}>
                        <option value="">Select Hotel</option>
                        {hotelData &&
                          hotelData.map((dt, key) => (
                            <option value={dt.id} key={key}>{dt.name}</option>
                          ))}
                      </select>
                    </div>
                    <div className="mb-3">
                      <input type="date" {...register('end_at')} className={`form-control ${errors.start_from ? 'is-invalid' : ''}`} onChange={(event) => setEndAt(event.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn" style={{ borderRadius: "20px", fontSize: "32px", color: '#53A1D0', background: '#53A1D0', width: '246px' }}>
                <b><Image src="/icon/cil_search.svg" width='24px' height='24px' alt="hotel" /></b>
              </button>
            </form>
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
      <div className="container" style={{ background: 'rgba(83, 161, 208, 0.3)', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', padding: '50px', borderRadius: '20px' }}>
        {datas &&
          datas.map((data, key) => (
            <div key={key} onClick={handleShow} className={styles.cards} data-id={data.id} data-name={data.name} data-thumb={data.thumb} data-price={data.price} data-description={data.description} data-faccility={data.faccility}>
              <img src={data.thumb} className="card-img-top" style={{ height: "200px" }} />
              <h5><b>{data.name}</b></h5>
              <h6>${data.price}</h6>
            </div>
          ))}
        {datas.length === 0 ? 'Oppps Data not found :( ' : ''}
      </div>
      <br />
      <div className="container">
        <div className="d-flex justify-content-end">
          <b> View More</b>
        </div>
      </div>
      <Footer></Footer>








      <Modal size="lg" id="modal-details" show={show} onHide={handleClose}>
        <ModalBody id={modalData.id} start_from={modalData.start_from!} end_at={modalData.end_at!} name={modalData.name} price={modalData.price} description={modalData.description} thumb={modalData.thumb} faccility={modalData.faccility} />
      </Modal>
    </>
  )
}

export default Hotel
