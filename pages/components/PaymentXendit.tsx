import React, { FC } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import $ from 'jquery'
import { parseCookies, destroyCookie } from "nookies"

type PaymentModalProps = {
    id: string,
    link: string,
}

const PaymentXendit: FC<PaymentModalProps> = ({ id,link }) => {

    const router = useRouter()
    return (
        <div>
            <div className="modal-content">
                <div className="modal-body p-5">
                    <iframe width={'100%'} height={'800px'} src={link}>

                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default PaymentXendit;

