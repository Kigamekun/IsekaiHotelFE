import React, { FC } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import $ from 'jquery'
import { parseCookies, destroyCookie } from "nookies"


type ModalFoodProps = {
    id: number,
    name: string,
    price: string,
    thumb: string,

}

const ModalFood: FC<ModalFoodProps> = ({ id, name, price, thumb }) => {

    const router = useRouter()

    const OrderNow = async (e: any) => {
        e.preventDefault();
        axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/v1/order_food/order', {
            'food_id': id,
            'qty': $('#qty').val(),
            'address': $('#address').val(),

        }, {
            headers: {
                'content-type': 'text/json',
                'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
            }
        }).then(function (res) {
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Order Food Successfully !',
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
                    <form onSubmit={OrderNow} className="d-flex justify-content-around gap-4">
                        <div className='d-flex gap-4'>
                            <input type="number" id='qty' className='form-control' style={{ width: '80px', display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} required />
                            <input type="text" id='address' className='form-control' style={{ width: '245px', display: "inline-block", padding: "15px 10px", lineHeight: "140%" }} placeholder='Short Address ..' required />
                        </div>
                        <div className='d-flex gap-4'>
                            <button type="button" className="btn button-left" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn button-right">Book !</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalFood;

