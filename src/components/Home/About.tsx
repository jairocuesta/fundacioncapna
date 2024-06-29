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
            <div className={"py-28"}>
                <motion.div 
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .1, duration: .5 }}
                    className={"relative grid grid-cols-1 md:grid-cols-3 gap-7 max-w-fit md:max-w-3xl mx-auto pb-10"}
                >
                    <div className={"grid place-content-center gap-6 text-center bg-white text-[#afa96e] rounded-2xl h-40 px-10 md:px-0"}>
                        <i className="fa-light fa-crow text-4xl"></i>
                        <span className={"flex items-center justify-center text-4xl font-bold"}>
                            <CounterAnimation from={0} to={34} />
                        </span>
                        <span className={"text-lg futura-light-regular"}>Especies vistas</span>
                    </div>
                    <div className={"grid place-content-center gap-6 text-center bg-white text-[#afa96e] rounded-2xl h-40 px-10 md:px-0"}>
                        <i className="fa-light fa-bottle-water text-4xl"></i>
                        <span className={"flex items-center justify-center text-4xl font-bold"}>
                            <CounterAnimation from={0} to={34} />
                        </span>
                        <span className={"text-lg futura-light-regular"}>Botellas recolectadas</span>
                    </div>
                    <div className={"grid place-content-center gap-6 text-center bg-white text-[#afa96e] rounded-2xl h-40 px-10 md:px-0"}>
                        <i className="fa-sharp fa-light fa-tree-deciduous text-4xl"></i>
                        <span className={"flex items-center justify-center text-4xl font-bold"}>
                            <CounterAnimation from={0} to={34} />
                        </span>
                        <span className={"text-lg futura-light-regular"}>Arboles plantados</span>
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
                        <i className="fa-light fa-leaf text-[2.7rem] text-[#afa96e]"></i>
                    </motion.div>
                    <div className={"flex flex-col gap-16"}>
                        <motion.p
                            initial={{ bottom: '-50px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .3, duration: .5 }}
                            className={"relative text-[#7d7d7d] leading-9 px-5"}
                        >
                            Construyendo una ciudad destino sostenible protegiendo nuestros recursos naturales 
                            a través de programas de conservación ambiental y desarrollo comunitario.
                        </motion.p>
                        <motion.div
                            initial={{ bottom: '-50px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .4, duration: .5 }}
                            className={"relative"}
                        >
                            <Button
                                href={"/quienes-somos"}
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