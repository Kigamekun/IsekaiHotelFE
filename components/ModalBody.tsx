import React, { FC, useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { parseCookies, destroyCookie } from "nookies";

type ModalBodyProps = {
    id: number,
    name: string,
    price: string,
    thumb: string,
    description: string,
    start_from: string,
    faccility: string,
    end_at: string,
    handleCloseModal: (values: any) => void;

}

const ModalBody: FC<ModalBodyProps> = ({ faccility, end_at, start_from, id, name, price, thumb, description, handleCloseModal }) => {
    const router = useRouter()

    const BookNow = async (e: any) => {
        e.preventDefault();

        var act = JSON.parse(parseCookies().user).access_token;

        console.log(act);
        axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/v1/order_room/booking', {
            'start_from': start_from,
            'end_at': end_at,
            'room_id': id,
        }, {
            headers: {
                'content-type': 'text/json',
                'Authorization': `Bearer ${act}`,
            }
        }).then(function (res) {
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Booking Room Successfully !',
                    showConfirmButton: false,
                    timer: 1500
                })
                router.push({
                    pathname: '/transaction',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        });
    }

    return (
        <div>
            <div className="modal-content">
                <div className="modal-body p-5">
                    <img className="w-100 mb-4" style={{ borderRadius: "10px", height: "360px", width: '100%' }} src={thumb} alt="Not Found" />
                    <h3><b>{name}</b></h3>
                    <h5>${price}</h5>
                    <p>{description}  </p>
                    <br />
                    <br />
                    <br />
                    <div className="d-flex justify-content-between">

                        <div className="d-flex gap-3 align-items-center">

                            {Object.keys(JSON.parse(JSON.parse(faccility))).map((data, key) => (
                                data == "0" ? <label key={key} className='whatever d-flex justify-content-center align-items-center' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r1">
                                    <img src="/icon/cil_swimming.svg" style={{ width: '24px', height: '24px' }} />
                                </label> :
                                    data == "1" ? <label key={key} className='whatever d-flex justify-content-center align-items-center' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r2">
                                        <img src="/icon/iconoir_air-conditioner.svg" style={{ width: '24px', height: '24px' }} />
                                    </label> :
                                        data == "2" ? <label key={key} className='whatever d-flex justify-content-center align-items-center' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r3">
                                            <img src="/icon/akar-icons_wifi.svg" style={{ width: '24px', height: '24px' }} />
                                        </label> :
                                            data == "3" ? <label key={key} className='whatever d-flex justify-content-center align-items-center' style={{ border: '1px solid gray', width: '50px', height: '50px', borderRadius: '10px' }} htmlFor="r4">
                                                <img src="/icon/ep_food.svg" style={{ width: '24px', height: '24px' }} />
                                            </label>
                                                : ""
                            ))}
                        </div>
                        <div className="d-flex justify-content-end gap-4">
                            <button type="button" className="btn button-left" onClick={handleCloseModal}>Close</button>
                            <button type="button" onClick={BookNow} className="btn button-right">Book !</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBody;

