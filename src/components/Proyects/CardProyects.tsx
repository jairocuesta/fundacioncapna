import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

type CardProps = {
    images: string[];
    title: string;
    url: string; 
};

const CardProyects = ({ images, title, url }: CardProps) => {

    const router = useRouter();

const handleClick = () => {
    if (url) {
        router.push(`/proyectos-de-investigacion/${url}`);
    } else {
        console.error("El parámetro 'url' no está definido");
    }
};

    return (
        <div onClick={handleClick} className="relative flex flex-col rounded-md w-full cursor-pointer group overflow-hidden">
            <div className="relative hover:scale-105 duration-300 left-1/2 -translate-x-1/2 w-[calc(100%+3.3rem)] h-72 grid grid-cols-3 overflow-hidden">
                <div className='flex items-center w-full h-72'>
                    <div className="relative w-full h-[30rem]" >
                        <Image
                            src={images[0]}
                            alt=""
                            fill
                            style={{ transform: "rotate(13deg)" }}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className='flex items-center w-full h-72 '>
                    <div className="relative w-full h-[30rem]" >
                        <Image
                            src={images[1]}
                            alt=""
                            fill
                            style={{ transform: "rotate(13deg)" }}
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className='flex items-center w-full h-72'>
                    <div className="relative w-full h-[30rem]" >
                        <Image
                            src={images[2]}
                            alt=""
                            fill
                            style={{ transform: "rotate(13deg)" }}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 p-3">
                {/* <Subtitle text={"Monitoreo de Manatíes"} /> */}
                <h5 className='font-bold text-white sm:text-xl'>{title}</h5>
            </div>
        </div>

    );
};

export default CardProyects