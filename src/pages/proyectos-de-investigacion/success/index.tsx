import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Index = () => {
    const [session, setSession] = useState<string | null>(null);
    const [sessionKey, setSessionKey] = useState<string | null>(null);
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        company: '',
        comment: '',
    });
    const router = useRouter();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") || 'null')
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
                router.push('/');
                return;
            }
        }

        setSession(session);
        setSessionKey(sessionKey);
        setUser(user);

        if (!session || !sessionKey) {
            router.push('/');
            return;
        }

        const sendEmailDonation = async () => {
            if (user) {
                try {
                    await axios.request({
                        method: 'POST',
                        url: '/api/emailDonations',
                        data: {
                            fullname: `${user.name} ${user.surname} || ${user.company}`,
                            email: user.email,
                            phone_number: user.phone,
                            comment: user.comment,
                        },
                    });
                } catch (error) {
                } finally {
                }
            }
        };
        sendEmailDonation();

    }, []);

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

    const handleRemoveItem = () => {
        localStorage.removeItem('SESSION');
        localStorage.removeItem('session-key');
    }

    console.log(user)


    return (
        <div className='flex flex-col gap-10 justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center gap-10'>
                <div className='relative w-full h-44'>
                    <Image src={"/logo-color.png"} alt={"Logo"} fill className='object-contain' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-xl font-semibold text-[#918F39]'>
                        {user.company !== '' ? `|| ${user.company}` : `${user.name} ${user.surname}`}
                    </p>
                    <h6 className='text-xl font-semibold text-[#918F39]'>¡Gracias por contribuir a nuestra causa!</h6>
                </div>
            </div>
            <a href='/' onClick={handleRemoveItem} className='text-sm underline cursor-pointer text-neutral-400 hover:text-neutral-500'>Volver al inicio</a>
        </div>
    )
};

export default Index;
