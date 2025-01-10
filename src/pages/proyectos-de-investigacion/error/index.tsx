import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CODES_CARD } from '@/utils/cardCodes'  // Importa los códigos de la lista
import Image from 'next/image';
import { PaymentTypes } from '@/types';

const Index = () => {
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
    setDonation(donation);
    setProyect(proyect);
    setUrl(url);

    if (!session || !sessionKey) {
      return;
    }

    // Asegúrate de que se está realizando la solicitud correctamente
    const paymentStatus = async () => {
      try {
        const { data: response } = await axios.request({
          url: `/api/donations/success`,
          method: 'POST',
          data: { session, sessionKey },
        });
        
        console.log("Respuesta del servidor:", response); // Verifica la respuesta

        setPaymentInfo(response);
        const code: keyof typeof CODES_CARD = response.ResponseCode;
        //const code: keyof typeof CODES_CARD = "54";

        if (code === "00") {
          setModal({
            show: true,
            type: 'success',
            message: 'La transacción ha sido aprobada',
          });
          window.location.href = '/verificacion-pago'; // Redirigir a la página de éxito (si no hay problemas)
          return true;
        } else if (code in CODES_CARD) {
          const errorMessage = CODES_CARD[code];
          setModal({
            show: true,
            type: 'error',
            message: `Motivo: ${errorMessage}`,
          });
          return false;
        } else {
          setModal({
            show: true,
            type: 'error',
            message: 'Código desconocido',
          });
          return false;
        }
      } catch (error) {
        console.log("Error al hacer la solicitud:", error); // Agregar más detalles del error
        setModal({
          show: true,
          type: 'error',
          message: 'Error al procesar la solicitud',
        });
        return false;
      }
    };

    paymentStatus(); // Ejecutar la solicitud
  }, [session, sessionKey]); // Dependencias para ejecutar el efecto

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

  return (
    <div className={`flex justify-center items-center px-5 py-10 ${user.comment.length > 150 ? 'h-auto' : 'h-screen'}`}>
      {modal.show && modal.type === 'error' &&
        <div className='flex flex-col gap-10 justify-center items-center shadow-custom px-5 md:p-10 rounded-xl'>
          <div className='flex flex-col justify-center items-center gap-5'>
            <div className='relative w-full h-44'>
              <Image src={"/logo-color.png"} alt={"Logo"} fill className='object-contain' />
            </div>
            <h6 className='font-semibold text-red-500 text-center'>No se pudo realizar la donacion <br /> {modal.message}</h6>
          </div>
          <a onClick={handleRemoveItem} href={`/proyectos-de-investigacion/${url}#form`} className='text-sm underline cursor-pointer text-neutral-400 hover:text-neutral-500'>Volver a intentarlo</a>
        </div>}
    </div>
  );
};

export default Index;
