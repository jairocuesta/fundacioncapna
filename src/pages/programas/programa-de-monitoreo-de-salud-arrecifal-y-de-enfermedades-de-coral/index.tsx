// Components
import Layout from "@/components/Layout";
import { TextSlider } from "@/components/Sliders";
import Button from "@/components/Button/Index";
// Next
import Image from "next/image";
import Link from "next/link";
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
        <Layout title={"Programa de monitoreo de salud arrecifal y de enfermedades de coral"}>
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
                        <div><span className={"font-bold"}>monitoreo de salud arrecifal y de enfermedades de coral</span></div>
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
                            { name: 'Monitoreo de salud arrecifal y de enfermedades de coral', url: '/programas/programa-de-monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral' },
                        ]}
                    />
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Monitoreando la salud de los arrecifes de Cap Cana y del SAMAR"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Debido a la importancia de los arrecifes coralinos, los rápidos cambios y el deterioro que están
                            experimentando hoy en día, es fundamental darle seguimiento al estado de salud de estos ecosistemas
                            para documentar si están degradándose, estables o recuperándose, así como para comprender las
                            causas y los efectos de su estado a escala local, regional y global. Como parte del Plan Operativo
                            Anual del <Link className="link" href={'#'}>Santuario Marino Arrecifes del Sureste {'(SAMAR)'}</Link>,
                            dos veces al año semonitorea la salud de los arrecifes de coral de esta área protegida. Nuestro programa de monitoreo se enfoca en la Zona Centro del SAMAR, pero en realidad se trata de un esfuerzo conjunto que se está
                            realizando paralelamente por los demás co-manejantes en las otras dos zonas del santuario también,
                            utilizando un mismo protocolo unificado para la colecta de datos. En estos monitoreos, se levanta un
                            conjunto de variables, tales como la biomasa de peces, la cobertura bentónica, la densidad de reclutas
                            de coral, de erizos y otros invertebrados. La información científica levantada se utiliza para apoyar la
                            toma de decisiones para el manejo y rehabilitación de los arrecifes del SAMAR.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral/1.webp",
                            classes: { backgroundPosition: '0 65%' }
                        },
                        {
                            src: "/programas/monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral/2.webp",
                            classes: { backgroundPosition: '0 45%' }
                        },
                        {
                            src: "/programas/monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral/3.webp",
                            classes: { backgroundPosition: '0 60%' }
                        },
                        {
                            src: "/programas/monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral/4.webp",
                        }
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Un esfuerzo conjunto a nivel nacional para monitorear las enfermedades de coral"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Además de monitorear la salud arrecifal, también monitoreamos la prevalencia de enfermedades y
                            blanqueamiento en corales pétreos. El incremento de la temperatura en los océanos ha ocasionado que
                            los fenómenos de blanqueamiento de corales sean cada vez más frecuentes y graves, lo que, a su vez,
                            ha aumentado la susceptibilidad de los corales pétreos a infecciones oportunistas y, por ende, ha
                            incrementado la prevalencia de enfermedades emergentes y la mortalidad en estas especies.
                            Monitorear esta prevalencia es prioritario para construir una base sólida de información científica
                            sobre el estatus de enfermedades y eventos de blanqueamiento en los arrecifes de coral de la
                            República Dominicana, que permita contribuir a la implementación de acciones efectivas de manejo
                            del ecosistema arrecifal. Este monitoreo se realiza tres veces al año a nivel nacional en conjunto con
                            las demás organizaciones pertenecientes a la Comisión de Enfermedades de la <Link className="link" href={'#'}>Red Arrecifal Dominicana</Link> y forma parte del <Link className="link" href={'#'}>Plan para el Estudio de la Epizootiología de Corales</Link>.
                        </p>
                    </div>
                </div>
                <HowCanHelp type={'marino'} />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Al unirte a nosotros en el Programa de Monitoreo de Salud Arrecifal y de Enfermedades de Coral,
                            estás contribuyendo a generar información científica acerca de los arrecifes coralinos de Cap Cana y
                            del SAMAR. Descubre la complejidad y la importancia de nuestros ecosistemas arrecifales.
                        </p>
                    </div>
                </div>
                {/* <BecomeMember /> */}

                {/* TODO: HACER GALERIA DE IMAGENES */}
            </div>
        </Layout>
    )
}