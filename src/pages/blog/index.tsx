import Layout from "@/components/Layout";
import styles from './index.module.css'
import BannerSlider from "@/components/BannerSlider/Index";
import Image from "next/image";

export default function Alliances() {
    return (
        <Layout title={"Aliansas"}>
            <div className={"flex flex-col text-center sm:text-left"}>
                <div className={`flex items-end justify-start ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <div className={"flex flex-col gap-4 px-5 sm:px-10 lg:px-28 py-20 w-full"}>
                        <h1 className={"flex items-center gap-3 text-center lg:text-left text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] lg:w-1/2"}>
                            Título de algún blog o artículo que se desee destacar
                        </h1>
                        <div className={"flex items-center justify-center lg:justify-start gap-2"}>
                            <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                            <div className={"h-1 w-12 bg-white rounded-full"}></div>
                            <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                            <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col items-center gap-16 py-20 max-w-6xl mx-auto"}>
                    <div className={"flex flex-col items-center gap-5"}>
                        <div className={"flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}>
                            <span className={"relative -bottom-[2px]"}>Nuestros</span>
                            <span className={"font-bold text-[#AFA96E]"}>eventos</span>
                        </div>
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"h-[2px] w-8 bg-[#7D8034] rounded-full"}></div>
                            <div className={"h-[2px] w-8 bg-[#7D8034] rounded-full"}></div>
                            <div className={"h-[2px] w-8 bg-[#7D8034] rounded-full"}></div>
                        </div>
                    </div>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10 px-5 sm:px-10 text-left"}>
                        <div className={"flex flex-col gap-3"}>
                            <div className={`grid place-content-center ${styles.blogImageContainer} overflow-hidden rounded-lg`}>
                                <Image className={`${styles.blogImage} w-full h-full`} src={"/blog/blog-1.jpeg"} fill alt={"Blog image 1"} />
                            </div>
                            <span className={"text-[#7D8034] font-bold"}>Bird Watching:</span>
                            <p className={"text-sm sm:text-base"}>
                                Te invitamos a sumergirte en el fascinante mundo de las
                                aves en Cap Cana. Ya seas un observador de aves experimentado o un
                                principiante entusiasta, esta actividad es para todos. Descubre la magia de
                                Birdwatching en un entorno.
                            </p>
                        </div>
                        <div className={"flex flex-col gap-3"}>
                            <div className={`grid place-content-center ${styles.blogImageContainer} overflow-hidden rounded-lg`}>
                                <Image className={`${styles.blogImage} w-full h-full`} src={"/blog/blog-2.jpeg"} fill alt={"Blog image 1"} />
                            </div>
                            <span className={"text-[#7D8034] font-bold"}>Organic Market:</span>
                            <p className={"text-sm sm:text-base"}>
                                Creemos en vivir en armonía con nuestro entorno. Cada producto y artesanía que encontrarás en el mercado sigue los principios de
                                sostenibilidad y comercio justo. Nuestro Organic Market es un escaparate de la
                                creatividad y el talento de los artesanos locales, con tu visita podrás apoyar a la
                                comunidad, además de saborear alimentos orgánicos y llevar contigo un pedacito
                                de nuestro paraíso.
                            </p>
                        </div>
                    </div>
                    <button className={"py-2 px-4 sm:px-8 text-white bg-[#AFA96E] rounded-full font-medium w-fit mx-5"}>
                        Contáctanos para enterarte de la próxima fecha
                    </button>
                </div>
                <div className={"flex flex-col"}>
                    <div className={`flex items-center ${styles.newsImage} h-[35rem] text-white`}>
                        <div className={"flex flex-col items-center gap-12 max-w-4xl mx-auto px-5"}>
                            <div className={"flex flex-col items-center gap-5"}>
                                <div className={"flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}>
                                    <span className={"relative -bottom-[2px]"}>Nuestras</span>
                                    <span className={"font-bold"}>noticias</span>
                                </div>
                                <div className={"flex items-center justify-center gap-2"}>
                                    <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                                    <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                                    <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                                </div>
                            </div>
                            <p className={"text-center"}>
                                Nos enorgullece compartir nuestras experiencias y los éxitos de nuestra comunidad de
                                voluntarios, miembros y aliados. Juntos, estamos creando un impacto real en la reservación de los
                                ecosistemas de Cap Cana y más allá.
                            </p>
                            <button className={"py-2 px-4 sm:px-8 bg-white text-[#7D8034] rounded-full font-semibold w-fit"}>
                                Ver noticias
                            </button>
                        </div>
                    </div>
                    <div className={`flex items-center ${styles.newsletterImage} h-[35rem] text-white`}>
                        <div className={"flex flex-col items-center gap-12 max-w-4xl mx-auto px-5"}>
                            <div className={"flex flex-col items-center gap-5"}>
                                <div className={"flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}>
                                    <span className={"relative -bottom-[2px]"}>Nuestro</span>
                                    <span className={"font-bold"}>newsletter</span>
                                </div>
                                <div className={"flex items-center justify-center gap-2"}>
                                    <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                                    <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                                    <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                                </div>
                            </div>
                            <p className={"text-center"}>
                                Recibe las últimas noticias de conservación, eventos emocionantes y consejos para un estilo de
                                vida más sostenible directamente en tu bandeja de entrada. ¡No te pierdas ni un solo momento de nuestra
                                misión! Suscríbete ahora.
                            </p>
                            <button className={"py-2 px-4 sm:px-8 bg-white text-[#7D8034] rounded-full font-semibold w-fit"}>
                                Inscríbete ahora
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}