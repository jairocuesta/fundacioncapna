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
        <Layout title={"Programa ni una gota mas reconstruccion de techos"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>{`Programa "Ni una gota más",`}</div>
                        <div><span className={"font-bold"}> Reconstrucción de Techos</span></div>
                    </motion.h1>
                    <motion.span
                        animate={{ top: '30px' }}
                        transition={{ repeat: Infinity, duration: .5, ease: 'easeInOut', repeatType: "reverse" }}
                        className={"relative flex justify-center text-3xl md:text-4xl"}
                    >
                        <i className="fa-regular fa-angles-down"></i>
                    </motion.span>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl w-full px-5 sm:px-10 lg:px-20 mx-auto"}>
                    <Breadcrumb
                        routes={[
                            { name: 'Desarrollo social', url: '/desarrollo-social' },
                            { name: 'Ni una gota mas reconstruccion de techos', url: '/programas/programa-ni-una-gota-mas-reconstruccion-de-techos' },
                        ]}
                    />
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}></span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Tras el paso del huracán Fiona en el 2022, la Fundación puso manos a la obra con la construcción y/o
                            restauración de más de 200 techos para las familias afectadas de este fenómeno en comunidades como
                            Suero, Juanillo, Verón, Higüey y Macao. Esta labor consistió principalmente en la sustitución de todo el
                            material del techo de viviendas cobijadas con el material zinc.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}></span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Este programa ha quedado constituido desde entonces como un mecanismo de resiliencia dentro de la
                            Estrategia de Gestión de Riesgo, que se activa para dar respuesta a familias en épocas de lluvias y
                            fenómenos naturales de importancia.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}