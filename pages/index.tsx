import type { NextPage } from 'next'
import React, { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/Navbar'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

type UserSubmitForm = {
  start_from: Date;
  end_at: Date;
  hotel: number;
  count: number;
};


const App: NextPage = () => {
  const [datas, setData] = useState<any[]>([]);

  const getHotelData = async () => {
    var res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/hotel`)
      .then(function (response) {
        setData(response.data.data.data);
      }).catch(function (error) {

      })
  }

  const validationSchema = Yup.object().shape({
    start_from: Yup.string().required('Fullname is required'),
    end_at: Yup.string().required('Username is required'),
    hotel: Yup.number().required('Email is required'),
    count: Yup.number().required('Email is required'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data: UserSubmitForm) => {
    router.push({
      pathname: '/hotel',
      query: {
        start_from: (document.getElementById('start_from') as HTMLInputElement).value,
        end_at: (document.getElementById('end_at') as HTMLInputElement).value,
        hotel: (document.getElementById('hotel') as HTMLInputElement).value,
        count: (document.getElementById('count') as HTMLInputElement).value,
      },
    })
  };

  const router = useRouter()


  useEffect(() => {
    getHotelData();
  }, []);

  return (
    <>
      <div className={styles.hero}>
        <Navbar></Navbar>
        <div className={styles.heroContent}>
          <div>
            <h1><b>Find Your</b></h1>
            <h1> <b>Best Hotel</b></h1>
          </div>
          <div style={{ width: "500px", height: "500px", display: "flex", justifyContent: "center", flexWrap: "wrap", columnGap: "40px" }}>
            <div className={styles.cards}>
              <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px" }} />
              <h5><b>Shinciri Room</b></h5>
            </div>
            <div className={styles.cards}>
              <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px" }} />
              <h5><b>Shinciri Room</b></h5>
            </div>
            <div className={styles.cards}>
              <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px" }} />
              <h5><b>Shinciri Room</b></h5>
            </div>
            <div className={styles.cards}>
              <img src="/img/room1.jpg" className="card-img-top" style={{ height: "145px" }} />
              <h5><b>Shinciri Room</b></h5>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className={styles.containerBook}>
        <form className={styles.inputBook} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.inputBookForm}>
            <input type="date" id='start_from' {...register('start_from')} className={`form-control ${errors.start_from ? 'is-invalid' : ''}`} style={{ width: '245px', display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} />
            <input type="date" id='end_at' {...register('end_at')} className={`form-control ${errors.end_at ? 'is-invalid' : ''}`} style={{ width: '245px', display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} />
            <select id="hotel" {...register('hotel')} className={`form-control ${errors.hotel ? 'is-invalid' : ''}`} style={{ width: '245px', display: "inline-block", padding: "15px 10px", lineHeight: "140%" }}>
              <option value="">Select Hotel</option>
              {datas &&
                datas.map((dt, key) => (
                  <option value={dt.id} key={key}>{dt.name}</option>
                ))}
            </select>
            <input type="number" id='count' {...register('count')} className={`form-control ${errors.count ? 'is-invalid' : ''}`} min="0" style={{ width: '75px', display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} />
          </div>
          <div>
            <button type="submit" className="btn" style={{ borderRadius: "20px", fontSize: "32px", color: '#53A1D0', height: '140px', width: '330px', background: 'white' }}>
              <b>Book Now !</b>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
