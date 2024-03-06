// Next
import Link from "next/link";
// Components
import Layout from "@/components/Layout";
// Styles
import styles from './index.module.css';
// Animations
import { motion } from 'framer-motion'

export default function Investigation() {
    return (
        <Layout title={"Investigación"}>
            <div className={"flex flex-col text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1 
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        transition={{ delay: .3 }} 
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}
                    >Investigación</motion.h1>
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
                            transition={{ delay: .3 }}  
                            className={"relative text-center max-w-5xl mx-auto"}
                        >
                            Nuestro equipo trabaja en proyectos de investigación destinados a comprender y preservar los
                            ecosistemas terrestres y marinos de Cap Cana. Cada estudio, cada descubrimiento y cada informe son un
                            paso más hacia un futuro sostenible. ¡Te invitamos a explorar nuestras investigaciones y a unirte a
                            nosotros en esta apasionante travesía hacia un mundo más verde y sostenible!
                        </motion.p>
                    </div>
                    <div className={`grid place-content-center ${styles.secondImage} h-[6rem]`}>
                        <motion.span
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            transition={{ delay: .3 }}   
                            className={"relative text-white font-semibold text-2xl"}
                        >Documentos y soportes de cada investigación</motion.span>
                    </div>
                    <div className={"flex flex-col gap-16 py-16 max-w-6xl mx-auto px-5 sm:px-10"}>
                        <motion.div
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            transition={{ delay: .3 }}   
                            className={"relative flex items-start gap-8"}
                        >
                            <div className={"relative"}>
                                <div className={"w-11 h-11 bg-[#7d80342a] rounded-full"}></div>
                                <div className={"absolute top-3 left-3"}>
                                    <FlowerSVG />
                                </div>
                            </div>
                            <p>
                                Cróquer et al. (2022). Stony Coral Tissue Loss Disease and Other Diseases Affect Adults and
                                Recruits of Major Reef Builders at Different Spatial Scales in the Dominican Republic. Gulf and
                                Caribbean Research 33 (1): GCFI1-GCFI13. DOI: <a className={"link"} href={"https://doi.org/10.18785/gcr.3301.03"} target={"_blank"}>https://doi.org/10.18785/gcr.3301.03</a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

function FlowerSVG() {
    return (
        <svg width="50" height="50" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 22.5C36 19.83 36.7918 17.2199 38.2752 14.9998C39.7586 12.7797 41.867 11.0494 44.3338 10.0276C46.8006 9.00585 49.515 8.7385 52.1337 9.2594C54.7525 9.78031 57.1579 11.0661 59.0459 12.9541C60.934 14.8421 62.2197 17.2475 62.7406 19.8663C63.2615 22.485 62.9942 25.1994 61.9724 27.6662C60.9506 30.133 59.2203 32.2414 57.0002 33.7248C54.7801 35.2082 52.1701 36 49.5 36M36 22.5C36 19.83 35.2082 17.2199 33.7248 14.9998C32.2414 12.7797 30.133 11.0494 27.6662 10.0276C25.1994 9.00585 22.485 8.7385 19.8663 9.2594C17.2475 9.78031 14.8421 11.0661 12.9541 12.9541C11.0661 14.8421 9.78031 17.2475 9.2594 19.8663C8.7385 22.485 9.00585 25.1994 10.0276 27.6662C11.0494 30.133 12.7797 32.2414 14.9998 33.7248C17.2199 35.2082 19.83 36 22.5 36M36 22.5V27M49.5 36C52.1701 36 54.7801 36.7918 57.0002 38.2752C59.2203 39.7586 60.9506 41.867 61.9724 44.3338C62.9942 46.8006 63.2615 49.515 62.7406 52.1337C62.2197 54.7525 60.934 57.1579 59.0459 59.0459C57.1579 60.934 54.7525 62.2197 52.1337 62.7406C49.515 63.2615 46.8006 62.9942 44.3338 61.9724C41.867 60.9506 39.7586 59.2203 38.2752 57.0002C36.7918 54.7801 36 52.1701 36 49.5M49.5 36H45M22.5 36C19.83 36 17.2199 36.7918 14.9998 38.2752C12.7797 39.7586 11.0494 41.867 10.0276 44.3338C9.00585 46.8006 8.7385 49.515 9.2594 52.1337C9.78031 54.7525 11.0661 57.1579 12.9541 59.0459C14.8421 60.934 17.2475 62.2197 19.8663 62.7406C22.485 63.2615 25.1994 62.9942 27.6662 61.9724C30.133 60.9506 32.2414 59.2203 33.7248 57.0002C35.2082 54.7801 36 52.1701 36 49.5M22.5 36H27M36 49.5V45" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36 45C40.9706 45 45 40.9706 45 36C45 31.0294 40.9706 27 36 27C31.0294 27 27 31.0294 27 36C27 40.9706 31.0294 45 36 45Z" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 48L28.5 43.5" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.5 28.5L48 24" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 24L28.5 28.5" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.5 43.5L48 48" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}