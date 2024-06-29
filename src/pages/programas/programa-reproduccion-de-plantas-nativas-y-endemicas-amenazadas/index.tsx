// Components
import Layout from "@/components/Layout";
import { TextSlider } from "@/components/Sliders";
import Button from "@/components/Button/Index";
// Next
import Image from "next/image";
// Styles
import styles from './Index.module.css';
// Animations
import { motion } from "framer-motion";
import BecomeMember from "@/components/Banners/BecomeMember";
import HowCanHelp from "@/components/Banners/HowCanHelp";
import Breadcrumb from "@/components/Breadcrumb";

export default function ProgramExample() {
    return (
        <Layout title={"Programa reproduccion de plantas nativas y endemicas amenazadas"}>
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
                        <div><span className={"font-bold"}>plantas nativas y endémicas</span> amenazadas</div>
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
                            { name: 'Reproduccion de plantas nativas y endemicas-amenazadas', url: '/programas/programa-reproduccion-de-plantas-nativas-y-endemicas-amenazadas' },
                        ]} 
                    />
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Recuperando la flora única de Cap Cana, el este y República Dominicana</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>El este de la República Dominicana, incluyendo Cap Cana, es el hogar de una rica diversidad de plantas nativas y endémicas, muchas de las cuales son verdaderas joyas botánicas y se encuentran en
                            peligro de extinción. Nuestro programa se dedica a la identificación, reproducción y recuperación de
                            estas especies, garantizando multiplicar el número de individuos y asegurando que continúen
                            floreciendo en su hábitat natural.</p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Un refugio para las plantas amenazadas</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>Una vez son identificadas y seleccionadas, nuestro equipo de expertos botánicos trabaja para cuidar y
                            reproducir estas plantas amenazadas. Cada ejemplar es tratado con el mayor cuidado y cariño,
                            garantizando su supervivencia hasta alcanzar su estado máximo.</p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/reproduccion-de-plantas-nativas-y-endemicas-amenazadas/1.webp",
                            classes: { backgroundPosition: '0 85%' }
                        },
                        {
                            src: "/programas/reproduccion-de-plantas-nativas-y-endemicas-amenazadas/2.webp",
                            classes: { backgroundPosition: '0 85%' }
                        },
                        {
                            src: "/programas/reproduccion-de-plantas-nativas-y-endemicas-amenazadas/3.webp",
                            classes: { backgroundPosition: '0 85%' }
                        },
                        {
                            src: "/programas/reproduccion-de-plantas-nativas-y-endemicas-amenazadas/4.webp",
                            classes: { backgroundPosition: '0 85%' }
                        }
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Rehabilitando ecosistemas</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>La reproducción y reintroducción de estas plantas en sus hábitats naturales no solo beneficia a las
                            especies en sí, sino que también contribuye a la rehabilitación de ecosistemas completos y la
                            conservación de especies animales amenazadas que dependen de estas plantas como su alimento y
                            refugio. La salud de nuestros bosques, humedales y paisajes depende de la diversidad botánica, y
                            estamos comprometidos en protegerla.</p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Promoviendo el uso de plantas nativas en el paisajismo de Cap Cana</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>En lugar de utilizar plantas exóticas para embellecer las áreas verdes de la Ciudad Destino Cap Cana,
                            promovemos el uso de plantas nativas ornamentales en estas zonas. El uso de estas especies no solo
                            reduce los costos de mantenimiento y ahorra agua de riego, debido a que estas ya están adaptadas a vivir y prosperar en las condiciones ambientales del sitio, sino que también provee de hábitat y
                            alimento a diversas especies de animales nativos, tales como aves e insectos, aumentando así la
                            biodiversidad.</p>
                    </div>
                </div>
                <HowCanHelp />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Educación y conciencia</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>El Programa de Reproducción de Plantas Nativas y Endémicas Amenazadas no se termina cuando
                            introducimos las especies a su hábitat. También nos dedicamos a educar a la comunidad sobre la
                            importancia de la conservación botánica y cómo pueden ayudar. Cada planta que se cultiva es una
                            oportunidad para aprender y crear conciencia.</p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>Al unirte a nosotros en el Programa de Reproducción de Plantas Nativas y Endémicas Amenazadas,
                            estás contribuyendo a la protección de la diversidad botánica única de Cap Cana, el este y República
                            Dominicana. Descubre la belleza y la importancia de nuestras plantas.</p>
                    </div>
                </div>
                {/* <BecomeMember /> */}
            </div>
        </Layout>
    )
}