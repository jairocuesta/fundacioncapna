// Next
import Link from 'next/link';
// Components
import Button from '../Button/Index';
// Animations
import { motion } from 'framer-motion';
// Styles
import styles from './Home.module.css';

export default function HomeAbout() {
    return (
        <div className={"relative overflow-x-clip"}>
            <div className={`absolute -top-32 ${styles.aboutContainer} w-full h-32`}></div>
            <div className={"bg-[#afa96e] px-10 pb-10"}>
                <motion.div 
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    transition={{ delay: .1 }}
                    className={"relative grid grid-cols-1 md:grid-cols-3 gap-7 max-w-fit md:max-w-3xl mx-auto"}
                >
                    <div className={"grid place-content-center gap-2 text-center bg-white text-[#afa96e] rounded-2xl h-40 px-10 md:px-0"}>
                        <i className="fa-light fa-squirrel text-3xl"></i>
                        <span className={"text-2xl font-bold"}>+34K</span>
                        <span className={"text-sm"}>Especies vistas</span>
                    </div>
                    <div className={"grid place-content-center gap-2 text-center bg-white text-[#afa96e] rounded-2xl h-40 px-10 md:px-0"}>
                        <i className="fa-light fa-bottle-water text-3xl"></i>
                        <span className={"text-2xl font-bold"}>+34K</span>
                        <span className={"text-sm"}>Botellas recolectadas</span>
                    </div>
                    <div className={"grid place-content-center gap-2 text-center bg-white text-[#afa96e] rounded-2xl h-40 px-10 md:px-0"}>
                        <i className="fa-light fa-tree text-3xl"></i>
                        <span className={"text-2xl font-bold"}>+34K</span>
                        <span className={"text-sm"}>Arboles plantados</span>
                    </div>
                </motion.div>
                <div className={"flex flex-col items-center gap-10 text-center py-20 w-full lg:w-3/4 2xl:w-1/2 mx-auto text-neutral-200"}>
                    <motion.div 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        transition={{ delay: .2 }}
                        className={"relative"}
                    >
                        <i className="fa-light fa-leaf text-[2.7rem]"></i>
                    </motion.div>
                    <motion.p 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        transition={{ delay: .3 }}
                        className={"relative"}
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
                        transition={{ delay: .4 }}
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
    )
}