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

export default function ProgramExample() {
    return (
        <Layout title={"Programa atención primaria fauna silvestre"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1 
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }} 
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Programa Atención Primaria</div> 
                        <div><span className={"font-bold"}>Fauna Silvestre</span></div>
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
                            { name: 'Atencion primaria fauna silvestre', url: '/programas/programa-atencion-primaria-fauna-silvestre' },
                        ]}
                    />
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Rescatando los animales silvestres de Cap Cana</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            A menudo aparecen animales silvestres heridos, enfermos, desplazados o juveniles que han quedado
                            huérfanos. Nuestro programa se dedica a rescatar, rehabilitar y liberar la vida silvestre nativa devuelta
                            a la naturaleza.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Brindando atención primaria</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Recibimos animales traídos o reportados a la Fundación y le brindamos atención primaria en
                            situaciones de emergencia que comprometan la vida del animal.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/atencion-primaria-fauna-silvestre/1.webp"
                        },
                        {
                            src: "/programas/atencion-primaria-fauna-silvestre/2.webp",
                            classes: { backgroundPosition: '0 20%' }
                        },
                        {
                            src: "/programas/atencion-primaria-fauna-silvestre/3.webp",
                            classes: { backgroundPosition: '0 30%' }
                        },
                        {
                            src: "/programas/atencion-primaria-fauna-silvestre/4.webp",
                            classes: { backgroundPosition: '0 40%' }
                        }
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Reubicando ejemplares en situación de riesgo</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            En ocasiones nos reportan nidos o ejemplares en situación de riesgo que necesitan ser reubicados, ya
                            sea para su propia protección y/o la protección de los seres humanos, por lo que nos encargamos de
                            trasladar los animales a un hábitat seguro. En todos los casos, respondemos según requerimientos de
                            manejo de especies por parte del Ministerio de Medio Ambiente.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Reporta a través de la línea directa de rescate de vida silvestre</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Reporta animales silvestres heridos, enfermos, desplazados, que hayan quedado huérfanos o que se
                            encuentren en situación de riesgo, llamando al <a className="link" href="tel:+18096691392">{'+1 (809) 669-1392'}</a>, alternativamente al <a className="link" href="tel:+18094697241">{'+1 (809)469-7241'}</a>. También puedes escribir al correo <a className="link" href="mailto:info@fundacioncapcana.org">info@fundacioncapcana.org</a>.
                        </p>
                    </div>
                </div>
                <HowCanHelp />
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

                {/* TODO: HACER GALERIA DE IMAGENES */}
            </div>
        </Layout>
    )
}