import React, { FC } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

type ModalBodyProps = {
    id: number,
    name: string,
    price: string,
    thumb: string,
    start_from: string,
    end_at: string,
}

const ModalBody: FC<ModalBodyProps> = ({ end_at,start_from,id,name, price, thumb }) => {

    const router = useRouter()


    const BookNow = async (e: any) => {
        e.preventDefault();
        axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/v1/order_room/booking', {
            'start_from': start_from,
            'end_at': end_at,
            'room_id': id,
        }).then(function (res) {
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Register Successfully !',
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
                    <img className="w-100 mb-4" style={{ borderRadius: "10px", height: "360px" }} src={thumb} />
                    <h3><b>{name}</b></h3>
                    <h5>${price}</h5>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero tempora beatae officia quisquam ab impedit facilis explicabo dignissimos nostrum, blanditiis cum cumque nihil? Animi ut harum adipisci cupiditate aliquid non asperiores quasi dolor vitae maxime, molestias eum officiis minus maiores.  </p>
                    <br />
                    <br />
                    <br />
                    <div className="d-flex justify-content-end gap-4">
                        <button type="button" className="btn button-left" data-bs-dismiss="modal">Close</button>
                        <button type="button" onClick={BookNow} className="btn button-right">Book !</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBody;

