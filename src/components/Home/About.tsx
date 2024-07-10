// Next
import Link from 'next/link';
// Components
import Button from '../Button/Index';
// Animations
import { motion } from 'framer-motion';
// Styles
import styles from './Home.module.css';
import CounterAnimation from '../Counter/Index';
import Image from 'next/image';

export default function HomeAbout() {
    return (
        <div className={"relative overflow-x-clip"}>
            <div className={"py-28"}>
                <motion.div 
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .1, duration: .5 }}
                    className={"relative grid grid-cols-1 md:grid-cols-3 align-baseline gap-7 max-w-fit md:max-w-3xl mx-auto pb-10"}
                >
                    <div className={"flex flex-col gap-6 text-center bg-white text-[#afa96e] rounded-2xl px-10 md:px-0"}>
                        <i className="fa-light fa-crow text-4xl"></i>
                        <span className={"flex items-center justify-center text-4xl font-bold"}>
                            <CounterAnimation from={0} to={16368} />
                        </span>
                        <span className={"text-lg futura-light-regular"}>libras de PET recuperado</span>
                    </div>
                    <div className={"flex flex-col gap-6 text-center bg-white text-[#afa96e] rounded-2xl px-10 md:px-0"}>
                        <i className="fa-light fa-bottle-water text-4xl"></i>
                        <span className={"flex items-center justify-center text-4xl font-bold"}>
                            <CounterAnimation from={0} to={11800} />
                        </span>
                        <span className={"text-lg futura-light-regular"}>plantas en vivero</span>
                    </div>
                    <div className={"flex flex-col gap-6 text-center bg-white text-[#afa96e] rounded-2xl px-10 md:px-0"}>
                        <i className="fa-sharp fa-light fa-tree-deciduous text-4xl"></i>
                        <span className={"flex items-center justify-center text-4xl font-bold"}>
                            <CounterAnimation from={0} to={600} />
                        </span>
                        <span className={"text-lg futura-light-regular"}>fragmentos de coral en vivero de corales</span>
                    </div>
                </motion.div>
                <div className={"flex flex-col items-center gap-10 text-center w-full lg:w-3/4 2xl:w-1/2 mx-auto text-neutral-200 pt-10"}>
                    <motion.div 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .2, duration: .5 }}
                        className={"relative w-60"}
                        style={{ aspectRatio: '16/4.3' }}
                    >
                        <Image src={"/home/about-icons.webp"} className={"object-cover"} fill alt={"Logos"} />
                        {/* <i className="fa-light fa-leaf text-[2.7rem] text-[#afa96e]"></i> */}
                    </motion.div>
                    <div className={"flex flex-col gap-16"}>
                        <motion.p
                            initial={{ bottom: '-50px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .3, duration: .5 }}
                            className={"relative text-[#7d7d7d] leading-9 px-5"}
                        >
                            Somos una Organización Sin Fines de Lucro creada en el año 2016, que surge como el brazo ejecutor de todas 
                            las acciones de sostenibilidad de la Ciudad Destino Cap Cana, con el propósito de promover la conservación 
                            de los diversos ecosistemas y recursos naturales, así como el desarrollo de las comunidades de la zona.
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