import { motion } from "framer-motion";
import styles from './Index.module.css'
import Layout from "@/components/Layout";
import ImageGrid from "@/components/Programs/ImageGrid";
import Inaturalist from "@/components/Banners/Inaturalist";

export default function ProgramsPage() {
    return (
        <Layout title={'Programas'}>
            <main>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <div className={"flex flex-col gap-5"}>
                        <motion.h1
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .3, duration: .5 }}
                            className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                        >
                            <div>Programas</div>
                        </motion.h1>
                    </div>
                    <motion.span
                        animate={{ top: '30px' }}
                        transition={{ repeat: Infinity, duration: .5, ease: 'easeInOut', repeatType: "reverse" }}
                        className={"relative flex justify-center text-3xl md:text-4xl"}
                    >
                        <i className="fa-regular fa-angles-down"></i>
                    </motion.span>
                </div>
                <div className={"flex flex-col gap-14 max-w-[95rem] mx-auto px-5 sm:px-10 lg:px-20 py-20"}>
                    <div className={"flex flex-col gap-5"}>
                        <h3 className={"futura-light-regular text-2xl"}>Flora</h3>
                        <p>En los bosques de Cap Cana podemos encontrar unas 300 especies de plantas nativas y endémicas, algunas de estas especies son raras y se encuentran en peligro crítico de extinción.</p>
                        <ImageGrid images={[
                            { src: '/programas/reproduccion-de-plantas-nativas-y-endemicas-amenazadas/portada.webp', href: 'programa-reproduccion-de-plantas-nativas-y-endemicas-amenazadas', text: 'Programa reproducción de plantas nativas y endémicas amenazadas' },
                            { src: '/programas/conservacion-de-orquideas-nativas/portada.webp', href: 'programa-conservacion-de-orquideas-nativas', text: 'Programa conservación de orquídeas nativas' },
                        ]} />
                    </div>
                    <div className={"flex flex-col gap-5"}>
                        <h3 className={"futura-light-regular text-2xl"}>Fauna terrestre</h3>
                        <p>Cap Cana es el hogar de numerosas especies de animales nativos y endémicos de la isla La Española, muchas de las cuales se encuentran amenazadas de extinción.</p>
                        <ImageGrid images={[
                            { src: '/programas/proteccion-de-especies-de-fauna-amenazadas/portada.webp', href: 'programa-proteccion-de-especies-de-fauna-amenazadas', text: 'Programa protección de especies de fauna amenazadas' },
                            { src: '/programas/monitoreo-de-fauna-silvestre/portada.webp', href: 'programa-monitoreo-de-fauna-silvestre', text: 'Programa monitoreo de fauna silvestre' },
                            { src: '/programas/atencion-primaria-fauna-silvestre/portada.webp', href: 'programa-atencion-primaria-fauna-silvestre', text: 'Programa atención primaria a fauna silvestre' },
                            { src: '/programas/rescate-de-colmenas/portada.webp', href: 'programa-rescate-de-colmenas', text: 'Programa rescate de colmenas' },
                        ]} />
                    </div>
                    <div className={"flex flex-col gap-5"}>
                        <h3 className={"futura-light-regular text-2xl"}>Vida marina</h3>
                        <p>Las aguas de la costa de Cap Cana cuentan con una variedad de ecosistemas marinos que incluye fondos arenosos, praderas de hierbas marinas y arrecifes de coral, los cuales albergan una rica biodiversidad y aportan bienes y servicios importantes para los seres humanos.</p>
                        <ImageGrid images={[
                            { src: '/programas/acuerdo-de-co-gestion-del-santuario-marino-arrecifes-del-sureste/portada.webp', href: 'acuerdo-de-co-gestion-del-santuario-marino-arrecifes-del-sureste', text: 'Acuerdo de co-gestión del Santuario Marino Arrecifes del Sureste (SAMAR)' },
                            { src: '/programas/rehabilitacion-de-arrecifes-de-coral/portada.webp', href: 'programa-rehabilitacion-de-arrecifes-de-coral', text: 'Programa rehabilitación de arrecifes de coral' },
                            { src: '/programas/monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral/portada.webp', href: 'programa-de-monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral', text: 'Programa de monitoreo de salud arrecifal y de enfermedades de coral' },
                            { src: '/programas/monitoreo-de-anidamiento-de-tortugas-marinas/portada.webp', href: 'programa-de-monitoreo-de-anidamiento-de-tortugas-marinas', text: 'Programa de monitoreo de anidamiento de tortugas marinas' },
                            { src: '/programas/registro-de-avistamientos-de-manaties/portada.webp', href: 'programa-de-registro-de-avistamientos-de-manaties', text: 'Programa de registro de avistamientos de manatíes' },
                        ]} />
                    </div>
                    <div className={"flex flex-col gap-5"}>
                        <h3 className={"futura-light-regular text-2xl"}>Desarrollo social</h3>
                        <p>El área de Desarrollo Social se vincula estrechamente con nuestro compromiso hacia las comunidades cercanas a nuestra zona, buscando promover su calidad de vida a través de propuestas de resiliencia, acompañamiento continuo a sus desafíos y educación constante en la gestión sostenible del medioambiente</p>
                        <ImageGrid images={[
                            { src: '/programas/ni-una-gota-mas-reconstruccion-de-techos/1.png', href: 'programa-ni-una-gota-mas-reconstruccion-de-techos', text: 'Programa "Ni una gota más", reconstrucción de techos' },
                            { src: '/programas/ni-una-gota-mas-reconstruccion-de-techos/portada.webp', href: 'programa-de-concienciacion-socioambiental', text: 'Programa de concienciación socioambiental' },
                            { src: '/programas/apoyo-comunitario/portada.webp', href: 'programa-de-apoyo-comunitario', text: 'Programa de Apoyo Comunitario' },
                        ]} />
                    </div>
                    <div className={"flex flex-col gap-5"}>
                        <h3 className={"futura-light-regular text-2xl"}>Sostenibilidad</h3>
                        <p>La Fundación Cap Cana como entidad creada para la protección de los recursos naturales y el desarrollo social de la Ciudad Destino, lidera y funciona como brazo ejecutor para impulsar y aplicar todas aquellas iniciativas técnicas, operativas y de gestión que se requieren para lograr el desarrollo sostenible en Cap Cana.</p>
                        <ImageGrid images={[
                            { src: '/home/programs/sostenibilidad.webp', href: 'sostenibilidad/estrategia', text: 'Programa estrategia de sostenibilidad' },
                        ]} />
                    </div>
                </div>
                <Inaturalist />
            </main>
        </Layout>
    )
};
