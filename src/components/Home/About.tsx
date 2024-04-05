// Next
import Link from 'next/link';
// Components
import Button from '../Button/Index';
// Animations
import { motion } from 'framer-motion';
// Styles
import styles from './Home.module.css';
import CounterAnimation from '../Counter/Index';

export default function HomeAbout() {
    return (
        <div className={"relative overflow-x-clip"}>
            <div className={"py-20 pb-28"}>
                <motion.div 
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .1, duration: .5 }}
                    className={"relative grid grid-cols-1 md:grid-cols-3 gap-7 max-w-fit md:max-w-3xl mx-auto pb-10"}
                >
                    <div className={"grid place-content-center gap-2 text-center bg-white text-[#afa96e] rounded-2xl h-40 px-10 md:px-0"}>
                        <i className="fa-light fa-squirrel text-3xl"></i>
                        <span className={"flex items-center justify-center text-2xl font-bold"}>
                            +<CounterAnimation from={0} to={34} />K
                        </span>
                        <span className={"text-sm"}>Especies vistas</span>
                    </div>
                    <div className={"grid place-content-center gap-2 text-center bg-white text-[#afa96e] rounded-2xl h-40 px-10 md:px-0"}>
                        <i className="fa-light fa-bottle-water text-3xl"></i>
                        <span className={"flex items-center justify-center text-2xl font-bold"}>
                            +<CounterAnimation from={0} to={34} />K
                        </span>
                        <span className={"text-sm"}>Botellas recolectadas</span>
                    </div>
                    <div className={"grid place-content-center gap-2 text-center bg-white text-[#afa96e] rounded-2xl h-40 px-10 md:px-0"}>
                        <i className="fa-light fa-tree text-3xl"></i>
                        <span className={"flex items-center justify-center text-2xl font-bold"}>
                            +<CounterAnimation from={0} to={34} />K
                        </span>
                        <span className={"text-sm"}>Arboles plantados</span>
                    </div>
                </motion.div>
                <div className={"flex flex-col items-center gap-10 text-center w-full lg:w-3/4 2xl:w-1/2 mx-auto text-neutral-200 pt-10"}>
                    <motion.div 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .2, duration: .5 }}
                        className={"relative"}
                    >
                        <i className="fa-light fa-leaf text-[2.7rem] text-[#7d7d7d]"></i>
                    </motion.div>
                    <div className={"flex flex-col gap-20"}>
                        <motion.p
                            initial={{ bottom: '-50px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .3, duration: .5 }}
                            className={"relative text-[#7d7d7d] leading-9"}
                        >
                            Somos una Organización Sin Fines de Lucro creada en el año 2016, que surge como el
                            brazo ejecutor de todas las acciones de sostenibilidad de la Ciudad Destino Cap Cana,  con
                            el propósito de
                            promover la conservación de los diversos ecosistemas y recursos naturales,
                            así como  el desarrollo de las
                            comunidades de la zona.
                        </motion.p>
                        <motion.div
                            initial={{ bottom: '-50px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .4, duration: .5 }}
                            className={"relative"}
                        >
                            <Button
                                href={"#"}
                                type={"main"}
                                text={"Conoce más"}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}