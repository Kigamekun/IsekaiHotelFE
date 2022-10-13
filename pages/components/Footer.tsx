import React, { FC } from 'react';
import Link from 'next/link';


const Footer: FC<{}> = () => {

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <footer>
                <div className='d-flex align-items-center' style={{ background: '#2C3E50', color: 'white', height: '300px' }}>
                    <div className="container">
                        <div className="d-flex justify-content-between gap-5  h-100 text-center">
                            <div style={{ flex: 1 }}>
                                <h3>Location</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3>Around On The Web</h3>
                                <br />
                                <div className='d-flex justify-content-center gap-3'>
                                    <div className='d-flex justify-content-center align-items-center' style={{ width: "42px", height: '42px', borderRadius: '50%', background: 'gray' }}>
                                        <img src="/icon/instagram.svg" alt="" />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center' style={{ width: "42px", height: '42px', borderRadius: '50%', background: 'gray' }}>
                                        <img src="/icon/akar-icons_telegram-fill.svg" alt="" />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center' style={{ width: "42px", height: '42px', borderRadius: '50%', background: 'gray' }}>
                                        <img src="/icon/icon _linkedin_.svg" alt="" />
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center' style={{ width: "42px", height: '42px', borderRadius: '50%', background: 'gray' }}>
                                        <img src="/icon/icon _phone_.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3>About</h3>
                                <p>isekai hotel is a five-star hotel that provides
                                    room booking services or a place for meetings.
                                    isakai also provides a variety of food menus
                                    ranging from VIP to regular</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ background: '#1A252F', height: '90px' }}>
                </div>
            </footer>
        </>
    );
};

export default Footer;

