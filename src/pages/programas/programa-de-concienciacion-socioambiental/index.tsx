// Components
import Layout from "@/components/Layout";
// Next
import Image from "next/image";
// Styles
import styles from './Index.module.css';
// Animations
import { motion } from "framer-motion";
import Breadcrumb from "@/components/Breadcrumb";

export default function ProgramExample() {
    return (
        <Layout title={"Programa de concienciacion socioambiental"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Programa de</div>
                        <div><span className={"font-bold"}> Concienciación Socioambiental</span></div>
                    </motion.h1>
                    <motion.span
                        animate={{ top: '30px' }}
                        transition={{ repeat: Infinity, duration: .5, ease: 'easeInOut', repeatType: "reverse" }}
                        className={"relative flex justify-center text-3xl md:text-4xl"}
                    >
                        <i className="fa-regular fa-angles-down"></i>
                    </motion.span>
                </div>
                <div className={"relative -top-8 flex flex-col gap-4 max-w-7xl w-full px-5 sm:px-10 lg:px-20 mx-auto"}>
                    <Breadcrumb
                        routes={[
                            { name: 'Desarrollo social', url: '/desarrollo-social' },
                            { name: 'Concienciacion socioambiental', url: '/programas/programa-de-concienciacion-socioambiental' },
                        ]}
                    />
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            El programa de concienciación socioambiental consiste en planes formativos continuos donde buscamos
                            no solo transmitir conocimientos a las personas para comprender el entorno social y ambiental que les
                            rodea, sino lograr una profunda sensibilización que les invite a llevar a cabo prácticas más sostenibles y
                            respetuosas con el medioambiente. Asimismo, fomentamos la adopción de prácticas positivas en las
                            interacciones humanas, promoviendo la colaboración y el respeto entre individuos, contribuyendo así a la
                            construcción de comunidades más armoniosas y conscientes de su impacto en el entorno y en el propio
                            bienestar.
                        </p>
                        <p>
                            Estos programas van dirigidos especialmente a todos los colaboradores que están dentro de Cap Cana, y a
                            personas de nuestras comunidades más cercanas. Sin embargo, no nos limitamos y estamos siempre
                            abiertos a llevar nuestro mensaje a nuevas comunidades y audiencias.
                        </p>
                        <p>Dentro de los programas formativos con los que contamos se encuentran:</p>
                        <ul className=" list-disc text-[#7D8034] pl-5">
                            <li>
                                <span className="font-bold">Fauna terrestre y Flora.</span>
                                <p className={"text-black"}>
                                    Ayuda a comprender la importancia de la conservación de la vida
                                    silvestre, la preservación de hábitats naturales y la protección de especies en peligro de extinción.
                                    Además, fomenta la apreciación de la belleza y la complejidad de la naturaleza, lo que puede
                                    inspirar a las personas a tomar medidas para su protección.
                                </p>
                            </li>
                            <li>
                                <span className="font-bold">Ecosistemas marinos.</span>
                                <p className={"text-black"}>
                                    Un programa que enseña sobre los ecosistemas marinos y educa sobre la
                                    importancia de la conservación de los océanos y la lucha contra la contaminación marina.
                                </p>
                            </li>
                            <li>
                                <span className="font-bold">Sostenibilidad.</span>
                                <p className={"text-black"}>
                                    Enseña cómo reducir el desperdicio, conservar recursos, y minimizar la huella
                                    ecológica. Esto es esencial para enfrentar desafíos como el cambio climático, la escasez de agua y
                                    la degradación del suelo.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}