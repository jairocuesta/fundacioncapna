import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from './Index.module.css'

export default function ConservacionAmbiental() {
    return (
        <Layout title={"Conservación ambiental"}>
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
                            <div>Conservación Ambiental</div>
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
                    <p>En Cap Cana, la conservación ambiental es más que una prioridad; es un compromiso inquebrantable con la preservación de uno de los paraísos naturales más impresionantes del Caribe. Nos enfocamos en equilibrar el desarrollo sostenible con la protección de la biodiversidad y los ecosistemas marinos y terrestres.</p>
                    <motion.div 
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .4, duration: .5 }}
                        className={"relative overflow-hidden w-full"} 
                        style={{ aspectRatio: '16/7' }}
                    >
                        <Image loading={'eager'} src={"/programas/conservacion-terrestre/portada.webp"} className={"w-full object-cover"} fill alt={"Conservación terrestre"} />
                        <div className={"absolute w-full h-full grid place-content-center"}>
                            <span className={"text-shadow text-white futura-light-regular uppercase text-lg sm:text-xl md:text-2xl select-none text-center px-4"}>Conservación terrestre</span>
                        </div>
                    </motion.div>
                    <p>Desde las alturas del Farallón de Cap Cana hasta la línea costera, nuestros programas de conservación terrestre se dedican a conocer y proteger la diversa flora y fauna terrestre que habita en las tierras de la Ciudad Destino Cap Cana.</p>
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
                    <div
                        className={"relative overflow-hidden w-full"}
                        style={{ aspectRatio: '16/7' }}
                    >
                        <Image loading={'eager'} src={"/programas/conservacion-marina/portada.webp"} className={"w-full object-cover"} fill alt={"Conservación marina"} />
                        <div className={"absolute w-full h-full grid place-content-center"}>
                            <span className={"text-shadow text-white futura-light-regular uppercase text-lg sm:text-xl md:text-2xl select-none text-center px-4"}>Conservación marina</span>
                        </div>
                    </div>
                    <p>Desde el borde costero hasta altamar, nuestros programas de conservación marina se dedican a conocer y  proteger la rica biodiversidad marina que habita debajo del mar frente la costa de la Ciudad Destino Cap Cana, en las aguas del Santuario Marino Arrecifes del Sureste (SAMAR).</p>
                    <div className={"flex flex-col gap-5"}>
                        <h3 className={"futura-light-regular text-2xl"}>Vida marina</h3>
                        <p>Las aguas de la costa de Cap Cana cuentan con una variedad de ecosistemas marinos que incluye fondos arenosos, praderas de hierbas marinas y arrecifes de coral, los cuales albergan una rica biodiversidad y aportan bienes y servicios importantes para los seres humanos.</p>
                        <ImageGrid images={[
                            { src: '', href: 'acuerdo-de-co-gestion-del-santuario-marino-arrecifes-del-sureste', text: 'Acuerdo de co-gestión del Santuario Marino Arrecifes del Sureste (SAMAR)' },
                            { src: '/programas/rehabilitacion-de-arrecifes-de-coral/portada.webp', href: 'programa-rehabilitacion-de-arrecifes-de-coral', text: 'Programa rehabilitación de arrecifes de coral' },
                            { src: '/programas/monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral/portada.webp', href: 'programa-de-monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral', text: 'Programa de monitoreo de salud arrecifal y de enfermedades de coral' },
                            { src: '/programas/monitoreo-de-anidamiento-de-tortugas-marinas/portada.webp', href: 'programa-de-monitoreo-de-anidamiento-de-tortugas-marinas', text: 'Programa de monitoreo de anidamiento de tortugas marinas' },
                            { src: '/programas/registro-de-avistamientos-de-manaties/portada.webp', href: 'programa-de-registro-de-avistamientos-de-manaties', text: 'Programa de registro de avistamientos de manatíes' },
                        ]} />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

type ImageGridProps = {
    images: {
        src: string,
        text: string,
        href: string,
    }[]
}
function ImageGrid({ images }: ImageGridProps) {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 pt-4"}>
            {images ? images.map((img, i) => (
                <Link key={i} href={`/programas/${img.href}`} className={"relative overflow-hidden w-full image-scale"} style={{ aspectRatio: '4/3' }}>
                    {img.src ? (
                        <div className={"grid place-content-end program-image transition-all h-full"} style={{ position: 'relative', backgroundImage: `url(${img.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                    ) : (
                        <div className={"absolute w-full h-full bg-neutral-200"}></div>
                    )}
                    <div className={"absolute top-0 w-full h-full grid place-content-center"}>
                        <span className={"text-shadow text-white futura-light-regular text-base sm:text-lg md:text-xl select-none uppercase text-center px-4"}>{img.text}</span>
                    </div>
                </Link>
            )) : null}
        </div>
    )
}