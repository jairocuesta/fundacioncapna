import React, { useEffect, useState } from 'react'
import axios from 'axios';
// Components
import Layout from "@/components/Layout";
import CardProyects from "@/components/Proyects/CardProyects";
// Styles
import styles from './Index.module.css';
// Animations
import { motion } from "framer-motion";
import { ProyectTypes } from '@/types';
// Types


const ProyectosInvestigacion = () => {

    const [proyects, setProyects] = useState<ProyectTypes[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.request({
                    url: `/api/proyects/getAll`,
                });

                const projects = Array.isArray(data) ? data : [data];
                setProyects(projects);
            } catch (error) {
                console.error("Error al obtener el proyecto:", error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <Layout title={"Proyectos de Investigación"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Proyectos</div>
                        <div><span className={"font-bold"}>de Investigación</span></div>
                    </motion.h1>
                    <motion.span
                        animate={{ top: '30px' }}
                        transition={{ repeat: Infinity, duration: .5, ease: 'easeInOut', repeatType: "reverse" }}
                        className={"relative flex justify-center text-3xl md:text-4xl"}
                    >
                        <i className="fa-regular fa-angles-down"></i>
                    </motion.span>
                </div>

                <div className={"flex flex-col justify-center items-center w-full gap-10 px-5 py-20"}>
                    <div className='flex flex-col max-w-7xl w-full gap-14 overflow-hidden'>
                        {loading ? (
                            <div className='flex justify-center items-center w-full'>
                                <div className="secondSpinner"></div>
                            </div>
                        ) : (
                            proyects.map((proyect, index) => (
                                <CardProyects
                                    key={index}
                                    images={proyect.attributes.Images.slice(0, 3).map(image => `${process.env.NEXT_PUBLIC_NEW_STRAPI_URI}${image.Image.data.attributes.url}`)}
                                    title={proyect.attributes.name}
                                    url={proyect.attributes.url}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ProyectosInvestigacion;
