import React, { useEffect, useState } from 'react';
// components
import Layout from '@/components/Layout';
// Animations
import Breadcrumb from '@/components/Breadcrumb';
import { TextSlider } from '@/components/Sliders';
import DonationForm from '@/components/Proyects/DonationForm';
import Subtitle from '@/components/Subtitle';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ProyectTypes, ContentParagraph } from '@/types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
// Styles
//import styles from './Index.module.css';

const ViewProyects = () => {

    const [backgroundImage, setBackgroundImage] = useState('/investigacion/1.jpeg');

    const router = useRouter();
    const { url } = router.query;
    const [proyecto, setProyecto] = useState<ProyectTypes>();
    const [images, setImages] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState<any[]>();
    const [textForm, setTextForm] = useState<any[]>();

    useEffect(() => {
        setLoading(true);
        if (url) {
            (async () => {
                try {
                    const { data } = await axios.get(`/api/proyects/getByUrl?url=${url}`);
                    setProyecto(data[0]);
                    //console.log(data[0].attributes) 
                } catch (error) {
                    setLoading(false);
                    console.error("Error al obtener el detalle del proyecto:", error);
                } finally {
                    setLoading(false);
                }
            })();
        }
    }, [url]);

    useEffect(() => {
        if (proyecto) {
            typeof url === 'string' ? localStorage.setItem('url', url) : null;
            localStorage.setItem('proyecto', proyecto?.attributes.name) 
            setDescription(proyecto.attributes.content);
            setTextForm(proyecto.attributes.textForm.text);
        }
    }, [proyecto, url]);

    useEffect(() => {
        if (proyecto && window.location.hash) {
            const hash = window.location.hash;
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [proyecto]);


    return (
        loading ? (
            <div className='flex justify-center items-center h-screen'>
                <div className='secondSpinner'></div>
            </div>
        ) : (
            <Layout title={"Proyectos de Investigación"} header={{ styles: { background: 'white', color: '#898C31', image: 'color' } }}>
                {/* <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div
                    className={`grid place-content-center gap-10 h-[40rem] text-white px-5`}
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                >
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Monitoreo</div>
                        <div><span className={"font-bold"}>de Manatíes</span></div>
                    </motion.h1>
                    <motion.span
                        animate={{ top: '30px' }}
                        transition={{ repeat: Infinity, duration: .5, ease: 'easeInOut', repeatType: "reverse" }}
                        className={"relative flex justify-center text-3xl md:text-4xl"}
                    >
                        <i className="fa-regular fa-angles-down"></i>
                    </motion.span>
                </div> */}
                <div className='flex flex-col gap-5 py-40'>
                    <div className='flex flex-col gap-12'>
                        <div className='flex flex-col w-full px-5 sm:px-10 lg:px-20 mx-auto'>
                            <TextSlider
                                title={"Frase para esta imagen que irá aquí"}
                                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                                images={[
                                    {
                                        src: `${process.env.NEXT_PUBLIC_NEW_STRAPI_URI}${proyecto?.attributes.Images[0].Image.data.attributes.url}`
                                    },
                                    {
                                        src: `${process.env.NEXT_PUBLIC_NEW_STRAPI_URI}${proyecto?.attributes.Images[1].Image.data.attributes.url}`
                                    },
                                    {
                                        src: `${process.env.NEXT_PUBLIC_NEW_STRAPI_URI}${proyecto?.attributes.Images[2].Image.data.attributes.url}`
                                    },
                                ]}
                            />
                        </div>
                        <div className={"relative -top-8 flex flex-col gap-4 w-full px-5 sm:px-10 lg:px-20 mx-auto"}>
                            {proyecto && proyecto.attributes.redirect ? (
                                <Breadcrumb
                                    routes={proyecto.attributes.redirect.map((redirect) => ({
                                        name: redirect.name_redirect,
                                        url: redirect.url_redirect,
                                    }))}
                                />
                            ) : null}
                        </div>
                        <div className={"flex flex-col px-5 md:px-10 lg:px-20 gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                            <div className="flex flex-col gap-6 [&>p>strong]:font-bold">
                                {description ? (
                                    <BlocksRenderer content={description} />
                                ) : (
                                    <p>No hay contenido disponible</p>  // O cualquier otro fallback que prefieras mostrar si no hay 'description'
                                )}
                            </div>
                        </div>
                        <div id="form" className='flex flex-col lg:flex-row justify-between items-start gap-10 xl:gap-20 px-5 md:px-10 lg:px-20'>
                            <DonationForm/>
                            <div className='w-full lg:w-1/2 flex flex-col gap-5 [&>p>strong]:font-bold'>
                                <Subtitle text={proyecto?.attributes.textForm.subtitle!} />
                                {textForm ? (
                                    <BlocksRenderer content={textForm} />
                                ) : (
                                    <p>No hay contenido disponible</p>
                                )}
                                <p>
                                    Actualmente se está elaborando el Plan de Manejo del SAMAR, el cual consiste en un documento técnico y normativo que contiene el conjunto de
                                    decisiones sobre el área protegida en las que, con fundamento estrictamente basado en el conocimiento científico y en la experiencia de las
                                    aplicaciones técnicas, establece prohibiciones y autorizaciones específicas y norma las actividades que son permitidas en el área protegida.
                                    Actualmente se está elaborando el Plan de Manejo del SAMAR, el cual consiste en un documento técnico y normativo que contiene el conjunto de
                                    decisiones sobre el área protegida en las que, con fundamento estrictamente basado en el conocimiento científico y en la experiencia de las
                                    aplicaciones técnicas, establece prohibiciones y autorizaciones específicas y norma las actividades que son permitidas en el área protegida.
                                </p>
                                <p>
                                    Actualmente se está elaborando el Plan de Manejo del SAMAR, el cual consiste en un documento técnico y normativo que contiene el conjunto de
                                    decisiones sobre el área protegida en las que, con fundamento estrictamente basado en el conocimiento científico y en la experiencia de las
                                    aplicaciones técnicas, establece prohibiciones y autorizaciones específicas y norma las actividades que son permitidas en el área protegida.
                                    Actualmente se está elaborando el Plan de Manejo del SAMAR, el cual consiste en un documento técnico y normativo que contiene el conjunto de
                                    decisiones sobre el área protegida en las que, con fundamento estrictamente basado en el conocimiento científico y en la experiencia de las
                                    aplicaciones técnicas, establece prohibiciones y autorizaciones específicas y norma las actividades que son permitidas en el área protegida.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    )
};

export default ViewProyects;
