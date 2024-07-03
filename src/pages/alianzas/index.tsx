// Components
import Layout from "@/components/Layout";
import { TextSlider } from "@/components/Sliders";
// Styles
import styles from './index.module.css'
// Animations
import { motion } from 'framer-motion'

export default function Alliances() {
    return (
        <Layout title={"Alianzas"}>
            <div className={"flex flex-col text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }} 
                        className={"relative flex items-center gap-3 text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] text-shadow"}
                    >
                        <span>Alianzas</span>
                        <span className={"font-bold"}>corporativas</span>
                    </motion.h1>
                    <motion.span
                        animate={{ top: '30px' }}
                        transition={{ repeat: Infinity, duration: .5, ease: 'easeInOut', repeatType: "reverse" }}
                        className={"relative flex justify-center text-3xl md:text-4xl"}
                    >
                        <i className="fa-regular fa-angles-down"></i>
                    </motion.span>
                </div>
                <div className={"flex flex-col"}>
                    <div className={"py-20 px-5 sm:px-16"}>
                        <motion.p
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .3, duration: .5 }}  
                            className={"relative text-center max-w-5xl mx-auto"}
                        >
                            Creemos en el poder de la colaboración para  lograr un impacto más significativo en la
                            conservación ambiental. A través de alianzas estratégicas con organizaciones, instituciones y empresas
                            comprometidas con la preservación del medio ambiente, hemos forjado un camino  hacia un futuro más
                            sostenible.
                        </motion.p>
                    </div>
                    {/* <TextSlider 
                        title={"Frase para esta imagen que irá aquí"}
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                        images={[
                            {
                                src: "/sostenibilidad/estrategia/2.jpg"
                            },
                            {
                                src: "/alianzas/1.jpeg",
                            }
                        ]} 
                    /> */}
                </div>
            </div>
        </Layout>
    )
}