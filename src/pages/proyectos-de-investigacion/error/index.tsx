import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Index = () => {

  const [url, setUrl] = useState<string | null>()
  
  useEffect(() => {
    const url = localStorage.getItem('url');
    setUrl(url);;
    localStorage.removeItem('SESSION');
    localStorage.removeItem('session-key');
  }, []);


  return (
    <div className='flex flex-col gap-10 justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div className='relative w-full h-44'>
                    <Image src={"/logo-color.png"} alt={"Logo"} fill className='object-contain'/>
                </div>
                <h6 className='font-semibold text-red-500 text-center'>Tu pago ha sido rechazado. <br /> Puede ser debido a una falta de fondos o un error en los datos de pago. <br /> Por favor, revisa y vuelve a intentarlo.</h6>
            </div>
                <a href={`/proyectos-de-investigacion/${url}#form`} className='text-sm underline cursor-pointer text-neutral-400 hover:text-neutral-500'>Volver a intentarlo</a>
        </div>
  );
};

export default Index;
