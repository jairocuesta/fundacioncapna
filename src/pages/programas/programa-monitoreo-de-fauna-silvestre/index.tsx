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
        <Layout title={"Programa monitoreo de fauna silvestre"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Programa Monitoreo de</div>
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
                <div className={"relative -top-8 flex flex-col gap-4 max-w-7xl w-full px-5 sm:px-10 lg:px-20 mx-auto"}>
                    <Breadcrumb
                        routes={[
                            { name: 'Conservación ambiental', url: '/conservacion-ambiental' },
                            { name: 'Monitoreo de fauna silvestre', url: '/programas/programa-monitoreo-de-fauna-silvestre' },
                        ]}
                    />
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Monitoreando la fauna silvestre de Cap Cana"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Para poder tomar medidas adecuadas para el manejo y la conservación de las especies, es necesario
                            contar con información acerca de las mismas. Con el propósito de generar información útil para el
                            manejo, nuestro programa se dedica al monitoreo de la fauna silvestre dentro de Cap Cana, que nos
                            permite identificar las especies de animales que habitan dentro de la Ciudad Destino, conocer su distribución geográfica, su comportamiento, su dieta, sus interacciones con otras especies, entre otras
                            variables a las cuales damos seguimiento a lo largo del tiempo.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Fototrampeando a los animales"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Colocamos 11 cámaras trampa en la <Link className="link" href={'#'}>Reserva Ecológica Falda del Farallón</Link> para estudiar a los animales en su hábitat natural sin alterar su comportamiento. Estas cámaras tienen un diseño que se mimetiza con el entorno del bosque, haciéndolas difíciles de percibir para los animales. A través de un sensor de movimiento infrarrojo, la cámara detecta la presencia de un animal y automáticamente toma fotos y/o vídeos.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/monitoreo-de-fauna-silvestre/1.mp4",
                            type: "video",
                            // title: "Lorem Ipsum is simply dummy text of the printing and typesetting"
                        },
                        {
                            src: "/programas/monitoreo-de-fauna-silvestre/1.webp",
                        },
                        {
                            src: "/programas/monitoreo-de-fauna-silvestre/2.mp4",
                            type: "video"
                        },
                        {
                            src: "/programas/monitoreo-de-fauna-silvestre/2.webp",
                        },
                        {
                            src: "/programas/monitoreo-de-fauna-silvestre/3.mp4",
                            type: "video"
                        },
                        {
                            src: "/programas/monitoreo-de-fauna-silvestre/3.webp",
                        },
                        {
                            src: "/programas/monitoreo-de-fauna-silvestre/4.mp4",
                            type: "video"
                        },
                        {
                            src: "/programas/monitoreo-de-fauna-silvestre/5.mp4",
                            type: "video"
                        },
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Detectando amenazas y oportunidades de conservación"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            A través del uso de las cámaras trampa, hemos podido identificar amenazas para los animales, tales
                            como la presencia de especies exóticas invasoras, entre ellas los gatos y los hurones. Por otro lado,
                            también hemos podido identificar oportunidades para la conservación, tales como la reproducción del
                            jobo de puerco como alimento para las iguanas rinoceronte, a partir de observaciones de las cámaras
                            trampa de las iguanas alimentándose de los frutos de esta planta nativa.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Aplicando medidas de manejo para conservar"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            A partir de la información conseguida a través del monitoreo, aplicamos medidas de manejo para
                            reducir las amenazas a estas especies y contribuir con su supervivencia.
                        </p>
                    </div>
                </div>
                <HowCanHelp />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Al unirte a nosotros en el Programa de Monitoreo de Fauna Silvestre, estás contribuyendo al estudio
                            de la diversidad de fauna única de Cap Cana, el este y República Dominicana. Descubre la belleza y
                            la importancia de nuestros animales.
                        </p>
                    </div>
                </div>
                {/* <BecomeMember /> */}

                {/* TODO: HACER GALERIA DE IMAGENES */}
            </div>
        </Layout>
    )
}