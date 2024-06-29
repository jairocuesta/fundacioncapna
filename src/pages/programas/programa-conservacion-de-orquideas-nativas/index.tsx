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

export default function ProgramExample() {
    return (
        <Layout title={"Programa conservación de orquideas nativas"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Programa reproducción de</div>
                        <div><span className={"font-bold"}>orquídeas nativas</span></div>
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
                            { name: 'Conservación ambiental', url: '/conservacion-ambiental' },
                            { name: 'Conservacion de orquideas nativas', url: '/programas/programa-conservacion-de-orquideas-nativas' },
                        ]}
                    />
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Conocer para cuidar</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Las orquídeas son una familia de plantas compuestas por miles de especies adaptadas a casi todo tipo
                            de climas y hábitats, esto hace que sus flores sean extremadamente diversas, y también muy valoradas
                            por su valor estético y comercial. Por medio del Programa de Conservación de Orquídeas Nativas, la
                            Fundación Cap Cana estudia todos los aspectos relacionados a la reproducción, cultivo y cuidado de
                            las orquídeas nativas y endémicas del este dominicano para su conservación. Dado que estas especies
                            requieren condiciones específicas y mucho tiempo para completar su ciclo de vida, las poblaciones
                            naturales se encuentran cada vez más fragmentadas, y por ende, casi todas las orquídeas nativas del
                            este del país se encuentran incluidas en la Lista Roja de Especies Amenazadas de la República
                            Dominicana.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Conservando las orquídeas de Cap Cana</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            En Cap Cana se han identificado 15 especies de orquídeas nativas del este dominicano, siendo uno de
                            nuestros principales objetos de estudio para la conservación por su valor ecológico y estado de
                            vulnerabilidad. La reproducción de estas plantas puede llevarse a cabo de manera asexual, sacando
                            esquejes o clones, o de manera sexual por medio de la polinización asistida, siendo esta última la
                            manera más adecuada para garantizar la diversidad genética y la capacidad de adaptación a las
                            condiciones naturales.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/conservacion-de-orquideas-nativas/1.webp"
                        },
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Cultivando las orquídeas nativas in vitro</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Para reproducir las orquídeas de manera sexual, se da un seguimiento a la floración de las especies
                            identificadas en estado natural con el fin de seleccionar el momento adecuado y los mejores
                            ejemplares a reproducir. Una vez definidos los ejemplares reproductores, se lleva a cabo un proceso
                            de polinización cruzada de forma manual para asegurarnos que haya producción de frutos con
                            semillas fértiles, ya que el proceso de polinización natural no siempre se efectúa de manera eficaz.
                            Estas semillas se colectan una vez el fruto se encuentra maduro y son germinadas de manera asistida
                            en el Laboratorio Botánico de la Fundación Cap Cana, dándoles las condiciones de crecimiento
                            adecuadas hasta alcanzar un estado de madurez que les permita valerse por sí mismas en la
                            naturaleza.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Reintroduciendo las orquídeas a su hábitat natural</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            La principal finalidad del proceso de reintroducción es aumentar las poblaciones de orquídeas en su
                            hábitat natural para que cumplan con sus funciones propias en el ecosistema. Una vez los ejemplares
                            reproducidos en laboratorio alcanzan un tamaño y vigor suficientes, se procede a realizar el proceso
                            de reintroducción en zonas protegidas dentro y fuera de Cap Cana para garantizar la continuidad de su
                            ciclo de vida. La reserva ecológica de Cap Cana, <Link className="link" href={'#'}>Falda del Farallón</Link>, es uno de estosespacios destinados a la conservación, donde puedes disfrutar la belleza de las orquídeas silvestres apadrinadas por la Fundación Cap Cana y demás proyectos de investigación y aplicación ambiental.
                        </p>
                    </div>
                </div>
                <HowCanHelp />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Al unirte a nosotros en el Programa de Conservación de Orquídeas Nativas, estás contribuyendo a la
                            protección de la diversidad única de orquídeas de Cap Cana, el este y República Dominicana.
                            Descubre la belleza y la importancia de nuestras orquídeas nativas.
                            
                        </p>
                    </div>
                </div>
                {/* <BecomeMember /> */}

                {/* TODO: HACER GALERIA DE IMAGENES */}
            </div>
        </Layout>
    )
}