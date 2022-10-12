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
                                    <div style={{ width: "42px", height: '42px', borderRadius: '50%', background: 'gray' }}>

                                    </div>
                                    <div style={{ width: "42px", height: '42px', borderRadius: '50%', background: 'gray' }}>

                                    </div>
                                    <div style={{ width: "42px", height: '42px', borderRadius: '50%', background: 'gray' }}>

                                    </div>
                                    <div style={{ width: "42px", height: '42px', borderRadius: '50%', background: 'gray' }}>

                                    </div>
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3>About</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sequi culpa iusto aliquam atque, numquam iure error incidunt nulla.</p>
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

