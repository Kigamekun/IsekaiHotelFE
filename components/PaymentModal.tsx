import React, { FC } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import $ from 'jquery'
import { parseCookies, destroyCookie } from "nookies"

type PaymentModalProps = {
    id: string,
    handleCloseModal: (values: any) => void;
}

const PaymentModal: FC<PaymentModalProps> = ({ id,handleCloseModal }) => {

    const router = useRouter()

    const BookNow = async (e: any) => {
        e.preventDefault();
        let formData = new FormData();
        var myFile = $('#bukti').prop('files');
        formData.append('bukti', myFile);
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/order_room/pay_room/${id}`, formData, {
            headers: {
                'content-type': 'text/json',
                'Authorization': `Bearer ${JSON.parse(parseCookies().user).access_token}`,
            }
        }).then(function (res) {
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Register Successfully !',
                    showConfirmButton: false,
                    timer: 1500
                })
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
                    <form id='buktiForm' onSubmit={BookNow}>
                        <h3>Upload Your Bukti Pembayaran Ruangan</h3>
                        <br />
                        <input type="file" name="bukti" id="bukti" className="form-control" />
                        <br />
                        <div className="d-flex justify-content-end gap-4">
                            <button type="button" className="btn button-left" onClick={handleCloseModal}>Close</button>
                            <button type="button" onClick={BookNow} className="btn button-right">Book !</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PaymentModal;

