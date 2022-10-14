import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/about.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About: NextPage = () => {
    return (
        <>
            <div className={styles.overflow}>

                <div className={styles.hero}>
                    <Navbar></Navbar>

                    <div className={styles.heroContent}>
                        <div className={styles.hereHeading}>
                            <p className='h1 text-light'><b>Are you looking for best hotel?</b></p>
                            <p className='h1 text-light'><b></b></p>
                        </div>
                    </div>
                </div>

                <div className={styles.heroSection}>
                    <p className='h2 fs-1 text-center' style={{ color: 'black' }}><b>Halu Isekai Hotel</b></p>
                </div>
                
                <div className={styles.heroDesc}>
                    <div className="container-xl">
                        <p className='fs-3' style={{ marginLeft: '20px' }}><b>About Us</b></p>
                        <p style={{ marginLeft: '20px' }}>Hotel isekai The Heritage is a modern hotel rich with historical culture and values. Its located in the center of Bogor,
                            konoha, in front of the Presidential Palace and a short distance to the renowned Bogor Botanical Garden.
                            The Hotel was built in the early 1900s, originally refurbished in 1998, and newly rejuvenated at the conclusion of 2014
                            to form a perfect blend of modern facilities with historical values.<br></br> <br />

                            Our hotel offers multiple accommodation options designed with luxury and heritage. There are 120 guest rooms
                            ranging from our Superior Rooms to the Colonial Presidential Suites, each equipped with air conditioning,
                            a bathtub and shower with hot water, wireless Internet connection, a safety deposit box,
                            and a television with in-house movies and satellite channels, among other basic toiletries and amenities.<br></br> <br />

                            Hotel Isekai The Heritage will take you on a culinary adventure around the world with our six restaurants
                            <br />known as much for their distinctive ambiances as they are for their cuisine. Our hotel also has a long-withstanding
                            <br />reputation as the most idyllic meeting place in Bogor to arrange business events, conferences, and exhibitions in any
                            <br />of our 14 meeting rooms or two ballrooms. Other on-site facilities include a fitness center, a swimming pool, a ladies-only
                            <br />ChocolaSpa, and a karaoke room. <br /> <br />

                            Our Hotels convenient location, sophisticated amenities, and historical quality make it the perfect
                            choice to stay during your trip to Konoha.</p> <br /><br />
                    </div>
                </div>



                <div className={styles.div} >
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className="container">
                        <h1 className='mb-4'><b>kontak kami</b></h1>
                        <div className="mb-3">
                            <br />
                            <h5 className='mb-3'>username</h5>
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="username" className="form-control" id="exampleFormControlInput1" placeholder="username" style={{ display: "inline-block", padding: "15px 20px", lineHeight: "140%", width: "80%" }} />
                        </div>
                        <div className="mb-3">
                            <br />
                            <h5 className='mb-3'>email</h5>
                            <label htmlFor="exampleFormControlInput1" className="form-label"></label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email address" style={{ display: "inline-block", padding: "15px 20px", lineHeight: "140%", width: "80%" }} />
                        </div>
                        <div className="mb-3">
                            <br />
                            <h5 className='mb-3'>bantuan</h5>
                            <label htmlFor='pesan' className="form-label"></label>
                            <textarea className='form-control' id='pesan ' placeholder='pesan anda' rows={4} style={{ padding: " 30px 30px", lineHeight: "140%", width: "80%" }}></textarea>
                        </div>
                        <br />
                        <button className='btn btn-primary form-control' style={{ lineHeight: "140%", width: "20%" }} >Hubungi Kami</button>
                        <br />
                    </div>

                    <Footer></Footer>
                </div>
            </div>
        </>

    )
}

export default About