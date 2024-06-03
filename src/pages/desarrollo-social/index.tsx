import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from './Index.module.css'

export default function DesarrolloSocial() {
    return (
        <Layout title={"Desarrollo Social"}>
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
                            <div>Desarrollo Social</div>
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
                <div className={"flex flex-col gap-14 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 py-20"}>
                    <p>El área de Desarrollo Social se vincula estrechamente con nuestro compromiso hacia las comunidades cercanas a nuestra zona, buscando promover su calidad de vida a través de propuestas de resiliencia, acompañamiento continuo a sus desafíos y educación constante en la gestión sostenible del medioambiente</p>
                    <ImageGrid images={[
                        { src: '', href: 'programa-ni-una-gota-mas-reconstruccion-de-techos', text: 'Programa "Ni una gota más", reconstrucción de techos' },
                        { src: '/programas/ni-una-gota-mas-reconstruccion-de-techos/portada.webp', href: 'programa-de-concienciacion-socioambiental', text: 'Programa de concienciación socioambiental' },
                        { src: '/programas/apoyo-comunitario/banner.webp', href: 'programa-de-apoyo-comunitario', text: 'Programa de Apoyo Comunitario' },
                    ]} />
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
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-5"}>
            {images ? images.map((img, i) => (
                <Link key={i} href={`/programas/${img.href}`} className={"relative overflow-hidden w-full image-scale"} style={{ aspectRatio: '4/3' }}>
                    {img.src ? (
                        <Image loading={'eager'} src={img.src} className={"w-full object-cover program-image transition-transform"} fill alt={img.text} />
                    ) : (
                        <div className={"absolute w-full h-full bg-neutral-200"}></div>
                    )}
                    <div className={"absolute w-full h-full grid place-content-center"}>
                        <span className={"text-shadow text-white futura-light-regular text-base sm:text-lg md:text-xl select-none uppercase text-center px-4"}>{img.text}</span>
                    </div>
                </Link>
            )) : null}
        </div>
    )
}