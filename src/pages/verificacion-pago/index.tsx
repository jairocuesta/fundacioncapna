import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CODES_CARD } from '@/utils/cardCodes'  // Importa los códigos de la lista
import Image from 'next/image';
import { PaymentTypes } from '@/types';

const index = () => {
    const [paymentInfo, setPaymentInfo] = useState<PaymentTypes>()
    const [session, setSession] = useState<string | null>(null);
    const [donation, setDonation] = useState<string | null>(null);
    const [proyect, setProyect] = useState<string | null>(null);
    const [url, setUrl] = useState<string | null>(null);
    const [sessionKey, setSessionKey] = useState<string | null>(null);
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        company: '',
        comment: '',
    });
    const [modal, setModal] = useState<{ show: boolean; type: 'success' | 'error'; message: string }>({
        show: false,
        type: 'success',
        message: '',
    });


    const handleRemoveItem = () => {
        localStorage.removeItem('SESSION');
        localStorage.removeItem('session-key');
    }

    const cardNumber = paymentInfo?.CreditCardNumber;
    const maskedCardNumber = cardNumber
        ? '*'.repeat(cardNumber.length - 4) + cardNumber.slice(-4)
        : '';

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || 'null');
        const donation = JSON.parse(localStorage.getItem("donation") || 'null');
        const proyect = localStorage.getItem('proyecto');
        const url = localStorage.getItem('url');
        const session = localStorage.getItem('SESSION');
        const sessionKey = localStorage.getItem('session-key');
        const sessionStartTime = localStorage.getItem('session-start-time');

        if (sessionStartTime) {
            const currentTime = new Date().getTime();
            const sessionAge = currentTime - parseInt(sessionStartTime);

            if (sessionAge > 3600000) {
                localStorage.removeItem('SESSION');
                localStorage.removeItem('session-key');
                localStorage.removeItem('session-start-time');
                return;
            }
        }

        setSession(session);
        setSessionKey(sessionKey);
        setUser(user);
        setDonation(donation)
        setProyect(proyect)
        setUrl(url)

        if (!session || !sessionKey) {
            return;
        }

        const paymentStatus = async () => {
            try {
                const { data: response } = await axios.request({
                    url: `/api/donations/success`,
                    method: 'POST',
                    data: { session, sessionKey },
                });
                setPaymentInfo(response);
                //const code: keyof typeof CODES_CARD = "03";
                const code: keyof typeof CODES_CARD = response.ResponseCode;
                if (code === "00") {
                    setModal({
                        show: true,
                        type: 'success',
                        message: 'La transacción ha sido aprobada',
                    });
                    return true; // Indicar que la transacción fue exitosa
                } else if (code in CODES_CARD) {
                    const errorMessage = CODES_CARD[code];
                    setModal({
                        show: true,
                        type: 'error',
                        message: `Motivo: ${errorMessage}`,
                    });
                    return false; // Transacción no exitosa
                } else {
                    setModal({
                        show: true,
                        type: 'error',
                        message: 'Código desconocido',
                    });
                    return false; // Error desconocido
                }
            } catch (error) {
                console.log(error);
                setModal({
                    show: true,
                    type: 'error',
                    message: 'Error al procesar la solicitud',
                });
                return false; // Error al procesar la solicitud
            }
        };

        const sendEmailDonation = async () => {
            const cardNumber = paymentInfo?.CreditCardNumber;
            const transaction = paymentInfo?.TransactionID;

            const maskedCardNumber = cardNumber
                ? '*'.repeat(cardNumber.length - 4) + cardNumber.slice(-4)
                : '';

            if (modal.type === 'success' && cardNumber && transaction) {
                try {
                    await axios.request({
                        method: 'POST',
                        url: '/api/donations/emailDonation',
                        data: {
                            fullname: `${user.name} ${user.surname}`,
                            donation: donation,
                            email: user.email,
                            comment: user.comment,
                            company: user.company,
                            proyect: proyect,
                            card: maskedCardNumber,
                            transaction: transaction,
                        },
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        };

        const handlePayment = async () => {
            const isSuccess = await paymentStatus(); // Esperar que la función de pago termine
            if (isSuccess) {
                sendEmailDonation(); // Solo enviar el correo si la transacción fue exitosa
            }
        };

        handlePayment(); // Ejecutar la función que maneja todo el flujo

    }, [paymentInfo?.CreditCardNumber]);


    if (!session || !sessionKey) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='spinner'></div>
                    <p>No hay sesión activa, redirigiendo...</p>
                </div>
            </div>
        );
    }

    console.log(paymentInfo && paymentInfo.ResponseCode)
    console.log(paymentInfo && paymentInfo.AuthorizationCode)

    return (
        <div className={`flex justify-center items-center px-5 py-10 ${user.comment.length > 150 ? 'h-auto' : 'h-screen'}`}>
            {/* Mostrar el modal de éxito o error */}
            {modal.show && modal.type === 'success' ? (
                <div className='flex flex-col gap-10 justify-center items-center h-auto shadow-custom px-5 md:p-10 rounded-xl'>
                    <div className='flex flex-col justify-center items-center gap-10'>
                        <div className='relative w-40 md:w-full h-44'>
                            <Image src={"/logo-color.png"} alt={"Logo"} fill className='object-contain' />
                        </div>
                        <div className='flex flex-col justify-center gap-10'>
                            <div className='flex flex-col gap-1'>
                                <div className='flex justify-start items-center gap-1'>
                                    <p className='text-xl font-semibold text-[#918F39]'>
                                        {user.company ? 'Empresa:' : 'Nombre:'}
                                    </p>
                                    <p className='font-medium text-xl'>
                                        {user.company !== '' ? `${user.company}` : `${user.name} ${user.surname}`}
                                    </p>
                                </div>
                                <div className='flex justify-start items-center gap-1'>
                                    <p className='text-xl font-semibold text-[#918F39]'>
                                        Correo electrónico:
                                    </p>
                                    <p className='font-medium text-xl'>
                                        {user.email}
                                    </p>
                                </div>
                                <div className='flex justify-start items-center gap-1'>
                                    <p className='text-xl font-semibold text-[#918F39]'>
                                        Tarjeta:
                                    </p>
                                    <p className='font-medium text-xl'>
                                        {maskedCardNumber}
                                    </p>
                                </div>
                                <div className='flex justify-start items-center gap-1'>
                                    <p className='text-xl font-semibold text-[#918F39]'>
                                        N° Transacción:
                                    </p>
                                    <p className='font-medium text-xl'>
                                        {paymentInfo?.TransactionID}
                                    </p>
                                </div>
                                <div className='flex justify-start items-center gap-1'>
                                    <p className='text-xl font-semibold text-[#918F39]'>
                                        Apoyo a:
                                    </p>
                                    <p className='font-medium text-xl'>
                                        {proyect}
                                    </p>
                                </div>
                                <div className='flex justify-start items-center gap-1'>
                                    <p className='text-xl font-semibold text-[#918F39]'>
                                        Donación:
                                    </p>
                                    <p className='font-medium text-xl'>
                                        ${donation} DOP
                                    </p>
                                </div>
                                {user.comment && (
                                    <div className='flex flex-col justify-start items-start gap-1 max-w-[400px]'>
                                        <p className='font-medium text-xl w-full'>
                                            <span className='text-xl font-semibold text-[#918F39]'>Comentario:</span> Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                                        </p>
                                    </div>)
                                }
                            </div>
                            <h6 className='text-xl font-semibold text-[#918F39] text-center'>¡Gracias por contribuir <br /> a nuestra causa!</h6>
                        </div>
                    </div>
                    <a href='/' onClick={handleRemoveItem} className='text-sm underline cursor-pointer text-neutral-400 hover:text-neutral-500'>Volver al inicio</a>
                </div>
            ) : modal.show && modal.type === 'error' ? (
                <div className='flex flex-col gap-10 justify-center items-center shadow-custom px-5 md:p-10 rounded-xl'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <div className='relative w-full h-44'>
                            <Image src={"/logo-color.png"} alt={"Logo"} fill className='object-contain' />
                        </div>
                        <h6 className='font-semibold text-red-500 text-center'>No se pudo realizar la donacion <br /> {modal.message}</h6>
                    </div>
                    <a onClick={handleRemoveItem} href={`/proyectos-de-investigacion/${url}#form`} className='text-sm underline cursor-pointer text-neutral-400 hover:text-neutral-500'>Volver a intentarlo</a>
                </div>
            ) : (
                <div className='spinner'>
                </div>
            )}
        </div>
    );
};

export default index;
