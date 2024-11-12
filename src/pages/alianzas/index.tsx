// Components
import Layout from "@/components/Layout";
import { TextSlider } from "@/components/Sliders";
// Styles
import styles from './index.module.css'
// Animations
import { motion } from 'framer-motion'
import HomePartners from "@/components/Home/Partners";

export default function Alliances() {
    return (
        <Layout title={"Alianzas"}>
            <div className={"flex flex-col"}>
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
                <div className={"flex flex-col gap-10 py-20 px-5 sm:px-16 max-w-7xl mx-auto"}>
                    <div className={""}>
                        <motion.p
                            initial={{ bottom: '-30px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .3, duration: .5 }}  
                            className={"relative"}
                        >
                            La Fundación Cap Cana ha logrado posicionarse como un referente en la protección ambiental y el desarrollo social a través de diversas alianzas estratégicas con organizaciones nacionales e internacionales. Estas colaboraciones permiten el fortalecimiento de sus programas de conservación y sostenibilidad, así como el desarrollo de proyectos comunitarios.
                            <br/><br/>
                            Entre las alianzas más destacadas se encuentran:
                        </motion.p>
                    </div>
                    <div className={'flex flex-col gap-10'}>
                        <div className={'flex flex-col gap-2'}>
                            <h1 className={'text-main text-lg'}>Miembros Fundadores y Activos</h1>
                            <p>Incluyen importantes empresas como Cap Cana, S.A., Inversiones Madux, S.R.L., y la Asociación de Propietarios de Cap Cana (APROCAP), que apoyan la misión de la Fundación con su compromiso y recursos.</p>
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <h1 className={'text-main text-lg'}>Membresías y Colaboraciones Interinstitucionales</h1>
                            <p>La Fundación es miembro de importantes organizaciones como el Consejo Económico y Social Higüey, la Red Arrecifal Dominicana y ECORED. Además, mantiene colaboraciones con entidades como el Ministerio de Medio Ambiente y Recursos Naturales, y la Fundación Grupo Puntacana, para la restauración de arrecifes y la conservación marina.</p>
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <h1 className={'text-main text-lg'}>Proyectos y Programas Conjuntos</h1>
                            <p>A través de alianzas con instituciones académicas como la Universidad de Navarra y la Universidad de Indiana, y organizaciones de conservación como The Nature Conservancy, se desarrollan programas de monitoreo y restauración de arrecifes de coral, la protección de especies en peligro y la revalorización del patrimonio natural.</p>
                        </div>
                        <p>Estas alianzas refuerzan el impacto positivo de la Fundación Cap Cana en su misión de proteger los ecosistemas de la región y promover el desarrollo sostenible, consolidando el destino como un referente en respeto por la biodiversidad.</p>
                    </div>
                    <HomePartners />
                </div>
            </div>
        </Layout>
    )
}