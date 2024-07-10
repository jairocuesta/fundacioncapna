// Next
import Image from "next/image";
import Link from "next/link";
// Components
import Layout from "@/components/Layout";
import { TextSlider } from "@/components/Sliders";
import Button from "@/components/Button/Index";
// Styles
import styles from './Index.module.css';
// Animations
import { motion } from "framer-motion";
import BecomeMember from "@/components/Banners/BecomeMember";
import HowCanHelp from "@/components/Banners/HowCanHelp";
import Breadcrumb from "@/components/Breadcrumb";
import Subtitle from "@/components/Subtitle";

export default function ProgramExample() {
    return (
        <Layout title={"Acuerdo de co-gestión del Santuario Marino Arrecifes del Sureste (SAMAR)"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1 
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }} 
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Acuerdo de co-gestión del Santuario Marino</div> 
                        <div><span className={"font-bold"}>Arrecifes del Sureste (SAMAR)</span></div>
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
                            { name: 'Conservación ambiental', url: '/conservacion-ambiental' },
                            { name: 'Acuerdo de co-gestion del santuario marino arrecifes del sureste', url: '/programas/acuerdo-de-co-gestion-del-santuario-marino-arrecifes-del-sureste' },
                        ]}
                    />
                </div>
                <div className={"flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 flex-1 md:w-1/2"}>
                        <Subtitle text={"La segunda área protegida más grande del país"} />
                        <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                            <p>
                                ¿Sabías que el área marina del sureste de la República Dominicana está protegida? Se trata de la segunda área protegida más grande del país,
                                con una extensión de 7,862.59 km2, abarcando aproximadamente 120 km de costa desde la desembocadura del río Higuamo (en San Pedro de Macorís)
                                hasta Cabo Engaño (en Punta Cana). Esta fue declarada por decreto presidencial en el 2009 como el “Santuario Marino Arrecifes del Sureste”
                                (SAMAR, para abreviar), mediante el decreto 571-09.
                            </p>
                        </div>
                    </div>
                    <div className={"relative h-[200px] w-full md:w-1/2"}>
                        <Image src={"/programas/acuerdo-de-co-gestion-del-santuario-marino-arrecifes-del-sureste/samar-logo.png"} fill className={"object-contain"} alt={"SAMAR Logo"} />
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Una alianza público-privada para la gestión del SAMAR"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            En el 2018, un grupo de 15 organizaciones se unieron con el Ministerio de Medio Ambiente y Recursos Naturales (MIMARENA) para firmar un acuerdo
                            de co-manejo del SAMAR con el fin de administrar conjuntamente esta área protegida. Debido al gran tamaño del santuario, estos co-manejantes 
                            decidieron distribuirse en tres cuerpos de gestión, cada uno a cargo de una zona distinta: la Unidad Zona Sur, la Unidad Zona Centro y la Unidad 
                            Zona Este. La Fundación Cap Cana lidera la gestión de la Unidad Zona Centro y, en conjunto con los líderes de las demás zonas y todos las 
                            organizaciones participantes, trabaja para garantizar la buena salud y función ecológica de los ecosistemas marinos dentro del santuario.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/acuerdo-de-co-gestion-del-santuario-marino-arrecifes-del-sureste/1.webp"
                        },
                        {
                            src: "/programas/acuerdo-de-co-gestion-del-santuario-marino-arrecifes-del-sureste/4.webp",
                        },
                        {
                            src: "/programas/acuerdo-de-co-gestion-del-santuario-marino-arrecifes-del-sureste/3.webp",
                        },
                        {
                            src: "/programas/acuerdo-de-co-gestion-del-santuario-marino-arrecifes-del-sureste/2.webp",
                        },
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Manejando nuestros recursos marinos"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Actualmente se está elaborando el Plan de Manejo del SAMAR, el cual consiste en un documento técnico y normativo que contiene el conjunto de 
                            decisiones sobre el área protegida en las que, con fundamento estrictamente basado en el conocimiento científico y en la experiencia de las 
                            aplicaciones técnicas, establece prohibiciones y autorizaciones específicas y norma las actividades que son permitidas en el área protegida.
                        </p>
                    </div>
                </div>
                <HowCanHelp image={'/programas/acuerdo-de-co-gestion-del-santuario-marino-arrecifes-del-sureste/banner.webp'} />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Al unirte a nosotros en el Programa de Atención Primaria a Fauna Silvestre, estás contribuyendo a la
                            protección de la diversidad de fauna única de Cap Cana, el este y República Dominicana. Descubre la
                            belleza y la importancia de nuestros animales.
                        </p>
                    </div>
                </div>

                {/* <BecomeMember /> */}

            </div>
        </Layout>
    )
}