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
        <Layout title={"Programa proteccion de especies de fauna amenazadas"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Programa Protección de</div>
                        <div><span className={"font-bold"}>Especies de Fauna Amenazadas</span></div>
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
                            { name: 'Proteccion de especies de fauna amenazadas', url: '/programas/programa-proteccion-de-especies-de-fauna-amenazadas' },
                        ]}
                    />
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Conservando la fauna autóctona de Cap Cana"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Cap Cana es el hogar de numerosas especies de animales nativos y endémicos de la isla Española,
                            muchas de las cuales se encuentran amenazadas de extinción. Entre ellas podemos mencionar la
                            iguana rinoceronte, el solenodonte, la jutía, la rana de Boca de Yuma y el gavilán de la Española.
                            Nuestro programa se dedica a la conservación y manejo de estas especies y sus hábitats, reduciendo
                            las amenazas que las afectan y asegurando que continúen prosperando tanto en su ambiente natural
                            como en las zonas urbanizadas de la Ciudad Destino Cap Cana.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Coexistiendo con los animales"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Tomamos medidas de manejo para que los habitantes humanos de Cap Cana puedan coexistir con los
                            habitantes animales sin afectarlos: Señalizamos las zonas donde las iguanas rinoceronte cruzan la
                            calle para que los conductores reduzcan la velocidad, protegemos las palmas donde los gavilanes
                            anidan para que los jardineros no las poden y creamos una política de poda que evita la eliminación
                            de flores y frutos para que los insectos y aves encuentren qué comer. Estas son algunas de las medidas
                            que forman parte de una lista en constante crecimiento.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/proteccion-de-especies-de-fauna-amenazadas/1.webp",
                            classes: { backgroundPosition: '0 70%' }
                        },
                        {
                            src: "/programas/proteccion-de-especies-de-fauna-amenazadas/2.webp",
                            classes: { backgroundPosition: '0 35%' }
                        },
                        {
                            src: "/programas/proteccion-de-especies-de-fauna-amenazadas/3.webp",
                        },
                        {
                            src: "/programas/proteccion-de-especies-de-fauna-amenazadas/4.webp",
                        },
                        {
                            src: "/programas/proteccion-de-especies-de-fauna-amenazadas/5.webp",
                        },
                        {
                            src: "/programas/proteccion-de-especies-de-fauna-amenazadas/6.webp",
                        },
                        {
                            src: "/programas/proteccion-de-especies-de-fauna-amenazadas/7.webp",
                        }
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Protegiendo hábitats"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                        Identificamos lugares de alta importancia para la conservación de la fauna nativa y los protegemos.
                        Ha sido el caso de la  <Link className="link" href={'#'}>Reserva Ecológica Falda del Farallón</Link> y la <Link className="link" href={'#'}>Laguna Las Garzas</Link>, ambos sitios apadrinados por la Fundación.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Rehabilitando ecosistemas"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            A través de otro de nuestros programas, el <Link className="link" href={'#'}>Programa Reproducción de Plantas Nativas y Endémicas Amenazadas</Link>, reintroducimos plantas en los hábitats naturales de las especies de animales nativos y endémicos, rehabilitando así los bosques que conforman su hogar. Además, a
                            través de este programa también recuperamos las poblaciones de aquellas especies de plantas que
                            aportan alimento a los animales; como por ejemplo el copey, árbol del cual se alimenta la jutía.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Educación y conciencia"} />
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            El Programa de Protección de Especies de Fauna Amenazadas no incluye sólo conservación. También
                            nos dedicamos a concientizar a la comunidad sobre los animales que habitan en Cap Cana, su
                            importancia y cómo pueden protegerlos.
                        </p>
                    </div>
                </div>
                <HowCanHelp image={"/programas/proteccion-de-especies-de-fauna-amenazadas/banner.webp"} />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Al unirte a nosotros en el Programa Protección Especies de Fauna Amenazadas, estás contribuyendo a
                            la protección de la diversidad de fauna única de Cap Cana, el este y República Dominicana. Descubre
                            la belleza y la importancia de nuestros animales.

                        </p>
                    </div>
                </div>
                {/* <BecomeMember /> */}

                {/* TODO: HACER GALERIA DE IMAGENES */}
            </div>
        </Layout>
    )
}